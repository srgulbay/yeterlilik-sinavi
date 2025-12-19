const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp();

function normalizeString(value, max) {
  const s = String(value == null ? '' : value).trim();
  if (!s) return '';
  if (!max) return s;
  return s.slice(0, max);
}

function normalizeUrl(url) {
  const s = normalizeString(url, 500);
  if (!s) return '';
  return s;
}

function buildNotificationPayload(doc, context) {
  const title = normalizeString(doc.title, 120) || 'AlgoSPOT';
  const body = normalizeString(doc.body, 800);
  const url = normalizeUrl(doc.url) || '/';
  const id = context?.params?.notificationId ? String(context.params.notificationId) : '';

  return {
    title,
    body,
    url,
    id,
  };
}

async function loadUserTokens(uid) {
  const snap = await admin.firestore().collection('users').doc(uid).collection('pushTokens').get();
  const tokens = [];
  snap.forEach((doc) => {
    const data = doc.data() || {};
    const token = normalizeString(data.token || doc.id, 2048);
    if (token) tokens.push(token);
  });
  return Array.from(new Set(tokens));
}

async function deleteInvalidTokens(uid, tokens) {
  if (!tokens || tokens.length === 0) return 0;
  const db = admin.firestore();
  const batch = db.batch();
  tokens.forEach((t) => {
    const ref = db.collection('users').doc(uid).collection('pushTokens').doc(String(t));
    batch.delete(ref);
  });
  await batch.commit();
  return tokens.length;
}

exports.onInboxNotificationCreated = functions.firestore
  .document('users/{uid}/inbox/{notificationId}')
  .onCreate(async (snap, context) => {
    const uid = context?.params?.uid ? String(context.params.uid) : '';
    if (!uid) return null;

    const doc = snap.data() || {};
    const payload = buildNotificationPayload(doc, context);

    const tokens = await loadUserTokens(uid);
    if (tokens.length === 0) return null;

    const message = {
      tokens,
      notification: {
        title: payload.title,
        body: payload.body,
      },
      data: {
        title: payload.title,
        body: payload.body,
        url: payload.url,
        notificationId: payload.id,
      },
      webpush: {
        fcmOptions: {
          link: payload.url,
        },
        notification: {
          title: payload.title,
          body: payload.body,
          icon: '/icons/icon-192.png',
          badge: '/icons/icon-192.png',
          data: {
            url: payload.url,
          },
        },
      },
    };

    const res = await admin.messaging().sendMulticast(message);

    const invalid = [];
    res.responses.forEach((r, idx) => {
      if (r && r.success) return;
      const code = r?.error?.code || '';
      if (code === 'messaging/registration-token-not-registered'
        || code === 'messaging/invalid-registration-token') {
        invalid.push(tokens[idx]);
      }
    });

    if (invalid.length > 0) {
      await deleteInvalidTokens(uid, invalid);
    }

    return null;
  });

