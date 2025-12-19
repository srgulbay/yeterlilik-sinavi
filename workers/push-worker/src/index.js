import webpush from 'web-push';

function jsonResponse(data, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set('Content-Type', 'application/json; charset=utf-8');
  return new Response(JSON.stringify(data), { ...init, headers });
}

function parseAllowedOrigins(env) {
  const raw = String(env.ALLOWED_ORIGINS || '').trim();
  if (!raw) return [];
  return raw.split(',').map((s) => s.trim()).filter(Boolean);
}

function corsHeaders(request, env) {
  const origin = request.headers.get('Origin') || '';
  const allowed = parseAllowedOrigins(env);

  const allowAll = allowed.includes('*');
  const allowOrigin = allowAll
    ? (origin || '*')
    : (origin && allowed.includes(origin) ? origin : '');

  const headers = new Headers();
  if (allowOrigin) headers.set('Access-Control-Allow-Origin', allowOrigin);
  headers.set('Vary', 'Origin');
  headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  headers.set('Access-Control-Max-Age', '86400');
  return { headers, allowed: !!allowOrigin || allowAll };
}

function base64UrlDecode(input) {
  const s = String(input || '').replace(/-/g, '+').replace(/_/g, '/');
  const pad = '='.repeat((4 - (s.length % 4)) % 4);
  const raw = atob(s + pad);
  const bytes = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
  return bytes;
}

function decodeJwtPayload(token) {
  const parts = String(token || '').split('.');
  if (parts.length < 2) return null;
  try {
    const json = new TextDecoder().decode(base64UrlDecode(parts[1]));
    return JSON.parse(json);
  } catch (_) {
    return null;
  }
}

function getBearerToken(request, body) {
  const auth = request.headers.get('Authorization') || '';
  const m = /^Bearer\s+(.+)$/.exec(auth);
  if (m && m[1]) return m[1].trim();
  const fromBody = body && typeof body.idToken === 'string' ? body.idToken.trim() : '';
  return fromBody;
}

function normalizeRecipients(input) {
  const arr = Array.isArray(input) ? input : [];
  const out = [];
  const seen = new Set();
  for (const x of arr) {
    const uid = String(x || '').trim();
    if (!uid) continue;
    if (seen.has(uid)) continue;
    seen.add(uid);
    out.push(uid);
  }
  return out;
}

function extractFirestoreString(fields, key) {
  const v = fields && fields[key];
  if (!v) return '';
  if (typeof v.stringValue === 'string') return v.stringValue;
  return '';
}

async function firestoreGetDoc(env, idToken, path) {
  const projectId = String(env.FIREBASE_PROJECT_ID || '').trim();
  if (!projectId) throw new Error('FIREBASE_PROJECT_ID_REQUIRED');
  const url = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/databases/(default)/documents/${path}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
  return res;
}

async function firestoreListCollection(env, idToken, path, pageSize = 100) {
  const projectId = String(env.FIREBASE_PROJECT_ID || '').trim();
  if (!projectId) throw new Error('FIREBASE_PROJECT_ID_REQUIRED');
  const url = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/databases/(default)/documents/${path}?pageSize=${pageSize}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
  const json = await res.json().catch(() => ({}));
  return { res, json };
}

async function requireAdmin(env, idToken) {
  const claims = decodeJwtPayload(idToken) || {};
  const uid = String(claims.user_id || claims.sub || '').trim();
  if (!uid) return { ok: false, uid: '', reason: 'AUTH_REQUIRED' };

  const res = await firestoreGetDoc(env, idToken, `admins/${encodeURIComponent(uid)}`);
  if (res.status === 200) return { ok: true, uid };
  if (res.status === 404) return { ok: false, uid, reason: 'ADMIN_REQUIRED' };
  return { ok: false, uid, reason: `AUTH_FAILED_${res.status}` };
}

function initWebPush(env) {
  const subject = String(env.VAPID_SUBJECT || '').trim();
  const publicKey = String(env.VAPID_PUBLIC_KEY || '').trim();
  const privateKey = String(env.VAPID_PRIVATE_KEY || '').trim();
  if (!subject || !publicKey || !privateKey) {
    throw new Error('VAPID_CONFIG_REQUIRED');
  }
  webpush.setVapidDetails(subject, publicKey, privateKey);
}

async function sendToUser(env, adminToken, uid, payload) {
  const list = await firestoreListCollection(env, adminToken, `users/${encodeURIComponent(uid)}/pushTokens`, 100);
  if (!list.res.ok) {
    return { uid, ok: false, sent: 0, failed: 0, error: `FIRESTORE_${list.res.status}` };
  }

  const docs = Array.isArray(list.json?.documents) ? list.json.documents : [];
  const subs = docs.map((doc) => {
    const fields = doc?.fields || {};
    const endpoint = extractFirestoreString(fields, 'endpoint');
    const p256dh = extractFirestoreString(fields, 'p256dh');
    const auth = extractFirestoreString(fields, 'auth');
    if (!endpoint || !p256dh || !auth) return null;
    return { endpoint, keys: { p256dh, auth } };
  }).filter(Boolean);

  if (subs.length === 0) {
    return { uid, ok: true, sent: 0, failed: 0 };
  }

  const body = JSON.stringify({
    source: 'algospot',
    title: payload.title,
    body: payload.body,
    url: payload.url,
  });

  const results = await Promise.allSettled(subs.map((sub) => webpush.sendNotification(sub, body, {
    TTL: 60 * 60,
    headers: {
      Urgency: 'high',
    },
  })));

  let sent = 0;
  let failed = 0;
  results.forEach((r) => {
    if (r.status === 'fulfilled') sent += 1;
    else failed += 1;
  });

  return { uid, ok: failed === 0, sent, failed };
}

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors.headers });
    }
    if (!cors.allowed) {
      return jsonResponse({ ok: false, error: 'CORS_NOT_ALLOWED' }, { status: 403, headers: cors.headers });
    }

    const url = new URL(request.url);
    if (url.pathname !== '/send') {
      return jsonResponse({ ok: false, error: 'NOT_FOUND' }, { status: 404, headers: cors.headers });
    }
    if (request.method !== 'POST') {
      return jsonResponse({ ok: false, error: 'METHOD_NOT_ALLOWED' }, { status: 405, headers: cors.headers });
    }

    let body;
    try {
      body = await request.json();
    } catch (_) {
      return jsonResponse({ ok: false, error: 'BAD_JSON' }, { status: 400, headers: cors.headers });
    }

    const idToken = getBearerToken(request, body);
    if (!idToken) {
      return jsonResponse({ ok: false, error: 'AUTH_REQUIRED' }, { status: 401, headers: cors.headers });
    }

    const adminCheck = await requireAdmin(env, idToken);
    if (!adminCheck.ok) {
      return jsonResponse({ ok: false, error: adminCheck.reason }, { status: 403, headers: cors.headers });
    }

    const recipients = normalizeRecipients(body.recipients);
    if (recipients.length === 0) {
      return jsonResponse({ ok: false, error: 'RECIPIENT_REQUIRED' }, { status: 400, headers: cors.headers });
    }
    if (recipients.length > 50) {
      return jsonResponse({ ok: false, error: 'RECIPIENT_LIMIT_50' }, { status: 400, headers: cors.headers });
    }

    const title = String(body.title || '').trim().slice(0, 120);
    const message = String(body.body || '').trim().slice(0, 800);
    const targetUrl = String(body.url || '').trim().slice(0, 500);
    if (!title) {
      return jsonResponse({ ok: false, error: 'TITLE_REQUIRED' }, { status: 400, headers: cors.headers });
    }

    try {
      initWebPush(env);
    } catch (err) {
      return jsonResponse({ ok: false, error: err?.message || 'VAPID_CONFIG_REQUIRED' }, { status: 500, headers: cors.headers });
    }

    const payload = { title, body: message, url: targetUrl || '/' };
    const perUser = [];

    for (const uid of recipients) {
      // Sequential to stay within free-tier CPU constraints.
      // (Still fast enough for small recipient lists.)
      // eslint-disable-next-line no-await-in-loop
      const res = await sendToUser(env, idToken, uid, payload);
      perUser.push(res);
    }

    const totals = perUser.reduce((acc, r) => {
      acc.sent += r.sent || 0;
      acc.failed += r.failed || 0;
      return acc;
    }, { sent: 0, failed: 0 });

    return jsonResponse({
      ok: true,
      recipients: recipients.length,
      totals,
      perUser,
    }, { status: 200, headers: cors.headers });
  },
};

