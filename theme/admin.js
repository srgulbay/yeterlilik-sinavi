(function () {
  'use strict';

  const MAX_RESULTS = 10;
  const BATCH_WRITE_LIMIT = 450;
  const PUSH_BATCH_LIMIT = 50;

  let currentUser = null;
  let isAdmin = false;

  let adminDocUnsub = null;
  let adminsUnsub = null;
  let notifsUnsub = null;
  let commentsUnsub = null;

  let selectedRecipients = []; // { uid, email }
  let searchTimer = null;

  function showToast(message) {
    if (typeof window.showToast === 'function') {
      window.showToast(message);
      return;
    }

    const existing = document.querySelector('.share-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'share-toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${escapeHtml(String(message || ''))}`;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function isFirebaseReady() {
    return !!(window.firebase && typeof window.firebase.firestore === 'function');
  }

  function getDb() {
    if (!isFirebaseReady()) return null;
    return window.firebase.firestore();
  }

  function normalizeEmailLower(value) {
    const s = String(value || '').trim().toLowerCase();
    return s.slice(0, 180);
  }

  function normalizeUrl(value) {
    const s = String(value || '').trim();
    if (!s) return '';
    try {
      // GitHub Pages project sites live under a sub-path (/{repo}/...).
      // Treat "/page.html" inputs as "currentDir/page.html" to stay in-scope.
      if (s.startsWith('/')) {
        const dir = String(window.location.pathname || '/').replace(/[^/]+$/, '');
        if (dir && s.startsWith(dir)) {
          return new URL(s, window.location.origin).toString();
        }
        const candidate = `${dir}${s.slice(1)}`;
        return new URL(candidate, window.location.origin).toString();
      }
      return new URL(s, window.location.href).toString();
    } catch (_) {
      return s;
    }
  }

  function getPushWorkerUrl() {
    const raw = typeof window.CF_PUSH_WORKER_URL === 'string'
      ? window.CF_PUSH_WORKER_URL.trim()
      : '';
    if (!raw) return '';
    try {
      return new URL(raw, window.location.origin).toString().replace(/\/+$/, '');
    } catch (_) {
      return raw.replace(/\/+$/, '');
    }
  }

  async function getFirebaseIdToken() {
    try {
      if (!window.firebase || typeof window.firebase.auth !== 'function') return '';
      const user = window.firebase.auth().currentUser;
      if (!user || typeof user.getIdToken !== 'function') return '';
      return await user.getIdToken();
    } catch (_) {
      return '';
    }
  }

  function formatTime(millis) {
    const t = Number(millis) || 0;
    if (!t) return '';
    try {
      const d = new Date(t);
      return d.toLocaleString('tr-TR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
    } catch (_) {
      return '';
    }
  }

  function parseTimestampMillis(ts) {
    try {
      if (!ts) return 0;
      if (typeof ts.toMillis === 'function') return ts.toMillis();
      if (ts instanceof Date) return ts.getTime();
      const n = Number(ts);
      return Number.isFinite(n) ? n : 0;
    } catch (_) {
      return 0;
    }
  }

  function stopAdminWatches() {
    [adminDocUnsub, adminsUnsub, notifsUnsub].forEach((fn) => {
      try {
        if (typeof fn === 'function') fn();
      } catch (_) {
        // ignore
      }
    });
    adminDocUnsub = null;
    adminsUnsub = null;
    notifsUnsub = null;
  }

  function setGateState({ showGate, gateTitle, gateDesc, readyBadge }) {
    const gate = document.querySelector('[data-admin-gate]');
    const content = document.querySelector('[data-admin-content]');
    const badge = document.querySelector('[data-admin-status-badge]');

    if (badge) {
      badge.textContent = readyBadge || '';
      badge.classList.toggle('badge-success', readyBadge === 'Hazır');
      badge.classList.toggle('badge-neutral', readyBadge !== 'Hazır');
    }

    if (content) content.hidden = !!showGate;
    if (!gate) return;
    gate.hidden = !showGate;

    if (!showGate) return;

    const title = gate.querySelector('.empty-state__title');
    const desc = gate.querySelector('.empty-state__description');
    if (title) title.textContent = gateTitle || 'Admin erişimi gerekli';
    if (desc) desc.textContent = gateDesc || 'Devam etmek için giriş yapın ve admin yetkinizin olduğundan emin olun.';
  }

  function renderSelectedChips() {
    const el = document.querySelector('[data-admin-selected-chips]');
    if (!el) return;

    const items = Array.isArray(selectedRecipients) ? selectedRecipients : [];
    if (items.length === 0) {
      el.innerHTML = '<span class="badge badge-neutral">Henüz kullanıcı seçilmedi</span>';
      return;
    }

    el.innerHTML = items.map((r) => {
      const label = r.email ? `${r.email} (${r.uid})` : r.uid;
      return `
        <span class="admin-chip" title="${escapeHtml(label)}">
          <span class="admin-chip__label">${escapeHtml(label)}</span>
          <button class="admin-chip__remove" type="button" data-admin-remove-recipient="${escapeHtml(r.uid)}" aria-label="Kaldır">
            <i class="fas fa-xmark" aria-hidden="true"></i>
          </button>
        </span>
      `;
    }).join('');
  }

  function setBroadcastMode(enabled) {
    const picker = document.querySelector('[data-admin-target-picker]');
    if (picker) picker.hidden = !!enabled;
  }

  function closeResults() {
    const results = document.querySelector('[data-admin-user-results]');
    if (!results) return;
    results.hidden = true;
    results.innerHTML = '';
  }

  function renderResults(list) {
    const results = document.querySelector('[data-admin-user-results]');
    if (!results) return;
    const items = Array.isArray(list) ? list : [];
    if (items.length === 0) {
      results.hidden = true;
      results.innerHTML = '';
      return;
    }

    results.hidden = false;
    results.innerHTML = items.map((u) => {
      const title = u.email || u.uid;
      const sub = u.email ? u.uid : 'E-posta yok';
      return `
        <div class="admin-result">
          <div class="admin-result__meta">
            <div class="admin-result__title">${escapeHtml(title)}</div>
            <div class="admin-result__sub">${escapeHtml(sub)}</div>
          </div>
          <button class="btn btn-secondary btn-sm" type="button" data-admin-add-recipient="${escapeHtml(u.uid)}">
            Ekle
          </button>
        </div>
      `;
    }).join('');
  }

  function addRecipient(rec) {
    const uid = rec && rec.uid ? String(rec.uid).trim() : '';
    if (!uid) return;
    if (selectedRecipients.some((x) => x.uid === uid)) return;
    selectedRecipients = [...selectedRecipients, { uid, email: rec.email ? String(rec.email) : '' }];
    renderSelectedChips();
  }

  function removeRecipient(uid) {
    const id = String(uid || '').trim();
    if (!id) return;
    selectedRecipients = selectedRecipients.filter((x) => x.uid !== id);
    renderSelectedChips();
  }

  async function searchUsers(query) {
    const q = String(query || '').trim();
    if (!q) return [];
    const db = getDb();
    if (!db) return [];

    const results = new Map();

    const emailPrefix = normalizeEmailLower(q);
    try {
      const snap = await db.collection('userProfiles')
        .orderBy('emailLower')
        .startAt(emailPrefix)
        .endAt(`${emailPrefix}\uf8ff`)
        .limit(MAX_RESULTS)
        .get();

      snap.forEach((doc) => {
        const data = doc.data() || {};
        const uid = String(doc.id || '').trim();
        if (!uid) return;
        results.set(uid, { uid, email: data.email || '' });
      });
    } catch (_) {
      // ignore
    }

    // Also support direct UID lookup (helps when email not available).
    if (q.length >= 12) {
      try {
        const doc = await db.collection('userProfiles').doc(q).get();
        if (doc && doc.exists) {
          const data = doc.data() || {};
          results.set(String(doc.id), { uid: String(doc.id), email: data.email || '' });
        }
      } catch (_) {
        // ignore
      }
    }

    return Array.from(results.values()).slice(0, MAX_RESULTS);
  }

  async function resolveUidFromInput(raw) {
    const input = String(raw || '').trim();
    if (!input) return '';
    const db = getDb();
    if (!db) return '';

    if (input.includes('@')) {
      const emailLower = normalizeEmailLower(input);
      try {
        const snap = await db.collection('userProfiles')
          .where('emailLower', '==', emailLower)
          .limit(1)
          .get();
        const doc = snap.docs && snap.docs[0];
        if (doc && doc.id) return String(doc.id);
      } catch (_) {
        // ignore
      }
      return '';
    }

    return input;
  }

  function chunkArray(items, size) {
    const out = [];
    for (let i = 0; i < items.length; i += size) {
      out.push(items.slice(i, i + size));
    }
    return out;
  }

  function makeNotificationId() {
    try {
      if (typeof crypto?.randomUUID === 'function') return crypto.randomUUID();
    } catch (_) {
      // ignore
    }
    return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  }

  async function sendPushViaWorker({ recipients, title, body, url, nid }) {
    const workerUrl = getPushWorkerUrl();
    if (!workerUrl) return { skipped: true, reason: 'WORKER_URL_NOT_CONFIGURED' };
    const idToken = await getFirebaseIdToken();
    if (!idToken) return { skipped: true, reason: 'ID_TOKEN_NOT_AVAILABLE' };

    const list = Array.isArray(recipients) ? recipients.map((x) => String(x || '').trim()).filter(Boolean) : [];
    if (list.length === 0) return { skipped: true, reason: 'NO_RECIPIENTS' };

    const pushId = String(nid || makeNotificationId()).trim().slice(0, 160);
    const batches = chunkArray(Array.from(new Set(list)), PUSH_BATCH_LIMIT);

    let sent = 0;
    let failed = 0;
    const perBatch = [];

    for (let i = 0; i < batches.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      const res = await fetch(`${workerUrl}/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          nid: pushId,
          title,
          body,
          url,
          recipients: batches[i],
        }),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        const err = String(json?.error || `HTTP_${res.status}`);
        perBatch.push({ ok: false, error: err, recipients: batches[i].length });
        failed += batches[i].length;
        continue;
      }

      const totals = json?.totals || {};
      sent += Number(totals.sent) || 0;
      failed += Number(totals.failed) || 0;
      perBatch.push({ ok: true, recipients: batches[i].length, totals: json?.totals || {} });
    }

    return { skipped: false, sent, failed, batches: perBatch.length, perBatch };
  }

  async function sendNotification({ title, body, url, broadcast }) {
    const db = getDb();
    if (!db) throw new Error('FIRESTORE_UNAVAILABLE');
    if (!currentUser?.uid) throw new Error('AUTH_REQUIRED');
    if (!isAdmin) throw new Error('ADMIN_REQUIRED');

    const t = String(title || '').trim().slice(0, 120);
    const b = String(body || '').trim().slice(0, 800);
    const u = normalizeUrl(url).slice(0, 500);
    if (!t) throw new Error('TITLE_REQUIRED');

    const hintEl = document.querySelector('[data-admin-send-hint]');
    const setHint = (msg) => {
      if (hintEl) hintEl.textContent = msg || '';
    };

    const nid = makeNotificationId();
    const notifDeepLink = normalizeUrl(`notification.html?nid=${encodeURIComponent(nid)}`).slice(0, 500);

    let recipients = [];

    if (broadcast) {
      setHint('Kullanıcılar alınıyor…');
      const snap = await db.collection('userProfiles').get();
      recipients = (snap.docs || []).map((d) => String(d.id)).filter(Boolean);
    } else {
      recipients = selectedRecipients.map((r) => String(r.uid)).filter(Boolean);
    }

    recipients = Array.from(new Set(recipients));
    if (recipients.length === 0) throw new Error('RECIPIENT_REQUIRED');

    const batches = chunkArray(recipients, BATCH_WRITE_LIMIT);
    const now = window.firebase.firestore.FieldValue.serverTimestamp();

    for (let i = 0; i < batches.length; i++) {
      const chunk = batches[i];
      setHint(`Gönderiliyor… (${i + 1}/${batches.length})`);

      const batch = db.batch();
      chunk.forEach((uid) => {
        const ref = db.collection('users').doc(uid).collection('inbox').doc(nid);
        batch.set(ref, {
          title: t,
          body: b || '',
          url: u || '',
          createdAt: now,
          createdBy: String(currentUser.uid),
        });
      });
      await batch.commit();
    }

    // Log for the admin panel.
    try {
      await db.collection('adminNotifications').add({
        title: t,
        body: b || '',
        url: u || '',
        recipientsCount: recipients.length,
        broadcast: !!broadcast,
        recipientsSample: recipients.slice(0, 20),
        createdAt: now,
        createdBy: String(currentUser.uid),
      });
    } catch (_) {
      // ignore
    }

    // Optional: Cloudflare Worker Web Push (free tier) – best effort.
    try {
      if (!broadcast) {
        setHint(`Gönderildi (${recipients.length}) · Push hazırlanıyor…`);
        const pushRes = await sendPushViaWorker({
          recipients,
          title: t,
          body: b || '',
          url: notifDeepLink || u || '/',
          nid,
        });
        if (pushRes?.skipped) {
          setHint(`Gönderildi (${recipients.length}) · Push: kapalı (${pushRes.reason})`);
        } else {
          setHint(`Gönderildi (${recipients.length}) · Push: ${pushRes.sent} başarılı / ${pushRes.failed} hata`);
        }
      } else {
        setHint(`Gönderildi (${recipients.length}) · Push: broadcast kapalı`);
      }
    } catch (_) {
      setHint(`Gönderildi (${recipients.length}) · Push başarısız`);
    }
    showToast('Bildirim gönderildi');
  }

  function wireAdminUI() {
    const root = document.body;
    if (!root || root.dataset.adminWired === '1') return;
    root.dataset.adminWired = '1';

    renderSelectedChips();

    const broadcastToggle = document.querySelector('[data-admin-broadcast]');
    broadcastToggle?.addEventListener('change', () => {
      const enabled = !!broadcastToggle.checked;
      setBroadcastMode(enabled);
    });

    const searchInput = document.querySelector('[data-admin-user-search]');
    searchInput?.addEventListener('input', () => {
      const q = searchInput.value;
      if (searchTimer) window.clearTimeout(searchTimer);
      searchTimer = window.setTimeout(async () => {
        const list = await searchUsers(q);
        renderResults(list);
      }, 200);
    });

    document.addEventListener('click', (e) => {
      const addFromComment = e.target.closest('[data-admin-add-from-comment]');
      if (addFromComment) {
        e.preventDefault();
        const uid = String(addFromComment.getAttribute('data-admin-add-from-comment') || '').trim();
        if (!uid) return;
        addRecipient({ uid, email: '' });
        showToast('Kullanıcı hedefe eklendi');
        return;
      }

      const addBtn = e.target.closest('[data-admin-add-recipient]');
      if (addBtn) {
        e.preventDefault();
        const uid = String(addBtn.getAttribute('data-admin-add-recipient') || '').trim();
        if (!uid) return;
        const email = (() => {
          const titleEl = addBtn.closest('.admin-result')?.querySelector('.admin-result__title');
          const subEl = addBtn.closest('.admin-result')?.querySelector('.admin-result__sub');
          const text = titleEl?.textContent || '';
          return text.includes('@') ? text : '';
        })();
        addRecipient({ uid, email });
        closeResults();
        return;
      }

      const removeBtn = e.target.closest('[data-admin-remove-recipient]');
      if (removeBtn) {
        e.preventDefault();
        const uid = String(removeBtn.getAttribute('data-admin-remove-recipient') || '');
        removeRecipient(uid);
        return;
      }

    const results = document.querySelector('[data-admin-user-results]');
    const searchBox = document.querySelector('[data-admin-user-search]');
    const inside = results?.contains(e.target) || searchBox?.contains(e.target);
    if (!inside) closeResults();
  });

    const notifForm = document.querySelector('[data-admin-notif-form]');
    notifForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!isAdmin) {
        showToast('Admin yetkisi gerekli');
        return;
      }

      const btn = notifForm.querySelector('[data-admin-send]');
      const broadcast = !!document.querySelector('[data-admin-broadcast]')?.checked;
      const title = document.getElementById('adminNotifTitle')?.value || '';
      const body = document.getElementById('adminNotifBody')?.value || '';
      const url = document.getElementById('adminNotifUrl')?.value || '';

      if (broadcast) {
        const ok = window.confirm('Bu işlem tüm kullanıcılara bildirim gönderecek. Emin misiniz?');
        if (!ok) return;
      }

      try {
        if (btn) btn.disabled = true;
        await sendNotification({ title, body, url, broadcast });
      } catch (err) {
        showToast(err?.message || 'Gönderim başarısız');
      } finally {
        if (btn) btn.disabled = false;
      }
    });

    const clearBtn = document.querySelector('[data-admin-clear]');
    clearBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      const title = document.getElementById('adminNotifTitle');
      const body = document.getElementById('adminNotifBody');
      const url = document.getElementById('adminNotifUrl');
      if (title) title.value = '';
      if (body) body.value = '';
      if (url) url.value = '';
      selectedRecipients = [];
      renderSelectedChips();
      const hint = document.querySelector('[data-admin-send-hint]');
      if (hint) hint.textContent = '';
      const broadcastToggle = document.querySelector('[data-admin-broadcast]');
      if (broadcastToggle) {
        broadcastToggle.checked = false;
        setBroadcastMode(false);
      }
      closeResults();
    });

    const adminsForm = document.querySelector('[data-admins-form]');
    adminsForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!isAdmin) {
        showToast('Admin yetkisi gerekli');
        return;
      }
      const inputEl = document.querySelector('[data-admin-add-input]');
      const value = inputEl?.value || '';
      const uid = await resolveUidFromInput(value);
      if (!uid) {
        showToast('Kullanıcı bulunamadı');
        return;
      }

      try {
        const db = getDb();
        if (!db) throw new Error('FIRESTORE_UNAVAILABLE');
        const now = window.firebase.firestore.FieldValue.serverTimestamp();
        await db.collection('admins').doc(uid).set({
          createdAt: now,
          createdBy: String(currentUser.uid),
          updatedAt: now,
        }, { merge: true });
        if (inputEl) inputEl.value = '';
        showToast('Admin eklendi');
      } catch (err) {
        showToast(err?.message || 'Admin eklenemedi');
      }
    });

    const adminsList = document.querySelector('[data-admins-list]');
    adminsList?.addEventListener('click', async (e) => {
      const removeBtn = e.target.closest('[data-admin-remove-admin]');
      if (!removeBtn) return;
      e.preventDefault();
      const uid = String(removeBtn.getAttribute('data-admin-remove-admin') || '').trim();
      if (!uid) return;

      const ok = window.confirm('Bu admin yetkisini kaldırmak istiyor musunuz?');
      if (!ok) return;

      try {
        const db = getDb();
        if (!db) throw new Error('FIRESTORE_UNAVAILABLE');
        await db.collection('admins').doc(uid).delete();
        showToast('Admin kaldırıldı');
      } catch (err) {
        showToast(err?.message || 'İşlem başarısız');
      }
    });
  }

  async function refreshUserCount() {
    const usersEl = document.querySelector('[data-stat-users]');
    const db = getDb();
    if (!db || !usersEl) return;
    usersEl.textContent = '—';
    try {
      const snap = await db.collection('userProfiles').get();
      usersEl.textContent = String(snap.size || 0);
    } catch (_) {
      usersEl.textContent = '—';
    }
  }

  function watchAdminsList() {
    const db = getDb();
    if (!db) return;

    const adminsEl = document.querySelector('[data-admins-list]');
    const statAdmins = document.querySelector('[data-stat-admins]');

    try {
      adminsUnsub = db.collection('admins').onSnapshot((snap) => {
        const ids = [];
        snap.forEach((doc) => ids.push(String(doc.id)));
        ids.sort((a, b) => a.localeCompare(b));

        if (statAdmins) statAdmins.textContent = String(ids.length);

        if (!adminsEl) return;
        if (ids.length === 0) {
          adminsEl.innerHTML = '<div class="badge badge-neutral">Admin bulunamadı</div>';
          return;
        }
        adminsEl.innerHTML = ids.map((uid) => {
          const mine = currentUser?.uid && uid === String(currentUser.uid);
          return `
            <div class="admin-item">
              <div class="admin-item__left">
                <div class="admin-item__title">${escapeHtml(uid)} ${mine ? '<span class="badge badge-info pill">Siz</span>' : ''}</div>
                <div class="admin-item__sub">admins/${escapeHtml(uid)}</div>
              </div>
              <div class="admin-item__right">
                <button class="btn btn-secondary btn-sm" type="button" data-admin-remove-admin="${escapeHtml(uid)}">
                  <i class="fas fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          `;
        }).join('');
      }, () => {});
    } catch (_) {
      adminsUnsub = null;
    }
  }

  function watchRecentNotifications() {
    const db = getDb();
    if (!db) return;

    const listEl = document.querySelector('[data-admin-notifs-list]');
    const statEl = document.querySelector('[data-stat-last-notif]');
    if (listEl) listEl.innerHTML = '<div class="badge badge-neutral">Yükleniyor…</div>';

    try {
      notifsUnsub = db.collection('adminNotifications')
        .orderBy('createdAt', 'desc')
        .limit(10)
        .onSnapshot((snap) => {
          const items = [];
          snap.forEach((doc) => {
            const data = doc.data() || {};
            items.push({
              id: doc.id,
              title: String(data.title || '').slice(0, 120),
              recipientsCount: Number(data.recipientsCount) || 0,
              createdAt: parseTimestampMillis(data.createdAt),
              createdBy: String(data.createdBy || ''),
              broadcast: !!data.broadcast,
            });
          });

          if (statEl) {
            const last = items[0];
            statEl.textContent = last ? formatTime(last.createdAt) : '—';
          }

          if (!listEl) return;
          if (items.length === 0) {
            listEl.innerHTML = '<div class="badge badge-neutral">Kayıt yok</div>';
            return;
          }

          listEl.innerHTML = items.map((it) => {
            const meta = `${it.recipientsCount} kullanıcı · ${formatTime(it.createdAt)}`;
            return `
              <div class="admin-item">
                <div class="admin-item__left">
                  <div class="admin-item__title">${escapeHtml(it.title)}</div>
                  <div class="admin-item__sub">${escapeHtml(meta)}</div>
                </div>
                <div class="admin-item__right">
                  ${it.broadcast ? '<span class="badge badge-warning pill">Herkese</span>' : '<span class="badge badge-neutral pill">Seçili</span>'}
                </div>
              </div>
            `;
          }).join('');
        }, () => {});
    } catch (_) {
      notifsUnsub = null;
      if (listEl) listEl.innerHTML = '<div class="badge badge-neutral">Yüklenemedi</div>';
    }
  }

  function watchNotificationComments() {
    const db = getDb();
    if (!db) return;

    const listEl = document.querySelector('[data-admin-comments-list]');
    if (listEl) listEl.innerHTML = '<div class="badge badge-neutral">Yükleniyor…</div>';

    try {
      commentsUnsub = db.collectionGroup('inbox')
        .orderBy('commentUpdatedAt', 'desc')
        .limit(30)
        .onSnapshot((snap) => {
          const items = [];
          snap.forEach((doc) => {
            const data = doc.data() || {};
            const comment = String(data.userComment || '').trim();
            if (!comment) return;
            const uid = doc.ref?.parent?.parent?.id ? String(doc.ref.parent.parent.id) : '';
            items.push({
              uid,
              nid: String(doc.id),
              title: String(data.title || '').slice(0, 120),
              comment: comment.slice(0, 1200),
              commentUpdatedAt: parseTimestampMillis(data.commentUpdatedAt),
            });
          });

          if (!listEl) return;
          if (items.length === 0) {
            listEl.innerHTML = '<div class="badge badge-neutral">Henüz yorum yok</div>';
            return;
          }

          listEl.innerHTML = items.map((it) => {
            const when = it.commentUpdatedAt ? formatTime(it.commentUpdatedAt) : '';
            const preview = it.comment.length > 140 ? `${it.comment.slice(0, 140)}…` : it.comment;
            const meta = [
              it.uid || '—',
              it.title || 'Bildirim',
              when,
            ].filter(Boolean).join(' · ');

            const href = `notification.html?nid=${encodeURIComponent(it.nid)}&uid=${encodeURIComponent(it.uid || '')}`;

            return `
              <div class="admin-item">
                <div class="admin-item__left">
                  <div class="admin-item__title">Yorum: ${escapeHtml(preview)}</div>
                  <div class="admin-item__sub">${escapeHtml(meta)}</div>
                </div>
                <div class="admin-item__right">
                  <a class="btn btn-secondary btn-sm" href="${escapeHtml(href)}" title="Görüntüle" aria-label="Görüntüle">
                    <i class="fas fa-eye" aria-hidden="true"></i>
                  </a>
                  <button class="btn btn-secondary btn-sm" type="button" data-admin-add-from-comment="${escapeHtml(it.uid)}" title="Hedefe ekle" aria-label="Hedefe ekle">
                    <i class="fas fa-user-plus" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            `;
          }).join('');
        }, () => {
          if (listEl) listEl.innerHTML = '<div class="badge badge-neutral">Yüklenemedi</div>';
        });
    } catch (_) {
      commentsUnsub = null;
      if (listEl) listEl.innerHTML = '<div class="badge badge-neutral">Yüklenemedi</div>';
    }
  }

  function startAdminPanel() {
    wireAdminUI();
    if (!adminsUnsub) watchAdminsList();
    if (!notifsUnsub) watchRecentNotifications();
    if (!commentsUnsub) watchNotificationComments();
    refreshUserCount().catch(() => {});
  }

  function stopAdminPanel() {
    [adminsUnsub, notifsUnsub, commentsUnsub].forEach((fn) => {
      try {
        if (typeof fn === 'function') fn();
      } catch (_) {
        // ignore
      }
    });
    adminsUnsub = null;
    notifsUnsub = null;
    commentsUnsub = null;
  }

  function attachAdminGate(uid) {
    const db = getDb();
    if (!db || !uid) return;

    if (adminDocUnsub) {
      try {
        adminDocUnsub();
      } catch (_) {
        // ignore
      }
      adminDocUnsub = null;
    }

    setGateState({ showGate: true, gateTitle: 'Kontrol ediliyor…', gateDesc: 'Admin yetkiniz doğrulanıyor.', readyBadge: 'Kontrol' });

    adminDocUnsub = db.collection('admins').doc(String(uid)).onSnapshot((snap) => {
      isAdmin = !!snap?.exists;

      if (!currentUser) {
        setGateState({ showGate: true, gateTitle: 'Giriş gerekli', gateDesc: 'Devam etmek için giriş yapın.', readyBadge: 'Kapalı' });
        stopAdminPanel();
        return;
      }

      if (!isAdmin) {
        setGateState({ showGate: true, gateTitle: 'Yetkiniz yok', gateDesc: 'Bu sayfaya erişmek için admin yetkisi gerekiyor.', readyBadge: 'Kapalı' });
        stopAdminPanel();
        return;
      }

      setGateState({ showGate: false, readyBadge: 'Hazır' });
      startAdminPanel();
    }, () => {
      isAdmin = false;
      setGateState({ showGate: true, gateTitle: 'Bağlantı sorunu', gateDesc: 'Admin doğrulaması yapılamadı.', readyBadge: 'Kapalı' });
      stopAdminPanel();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    try {
      window.appFirebase?.init?.();
    } catch (_) {
      // ignore
    }

    if (!window.appFirebase || typeof window.appFirebase.onAuth !== 'function') {
      setGateState({ showGate: true, gateTitle: 'Firebase yok', gateDesc: 'Bu sayfa Firebase gerektirir.', readyBadge: 'Kapalı' });
      return;
    }

    window.appFirebase.onAuth((user) => {
      currentUser = user && user.uid ? { uid: String(user.uid), email: user.email || '' } : null;

      stopAdminPanel();

      if (!currentUser) {
        isAdmin = false;
        closeResults();
        setBroadcastMode(false);
        setGateState({ showGate: true, gateTitle: 'Giriş gerekli', gateDesc: 'Admin paneli için giriş yapın.', readyBadge: 'Kapalı' });
        return;
      }

      attachAdminGate(currentUser.uid);
    });

    // Initial state (best-effort)
    try {
      const u = window.appFirebase.getUser?.();
      if (u && u.uid) {
        currentUser = { uid: String(u.uid), email: u.email || '' };
        attachAdminGate(currentUser.uid);
      }
    } catch (_) {
      // ignore
    }
  });
})();
