(function () {
  'use strict';

  let unsub = null;
  let currentUid = null;
  let viewingUid = null;
  let currentNotificationId = null;
  let currentDoc = null;

  function showToast(message) {
    if (typeof window.showToast === 'function') {
      window.showToast(message);
      return;
    }

    const existing = document.querySelector('.share-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'share-toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${String(message || '')}`;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  function getDb() {
    try {
      if (!window.firebase || typeof window.firebase.firestore !== 'function') return null;
      return window.firebase.firestore();
    } catch (_) {
      return null;
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

  function formatTime(millis) {
    const t = Number(millis) || 0;
    if (!t) return '';
    try {
      const d = new Date(t);
      return d.toLocaleString('tr-TR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (_) {
      return '';
    }
  }

  function normalizeUrl(raw) {
    const s = String(raw || '').trim();
    if (!s) return '';
    try {
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

  function setHidden(selector, hidden) {
    const el = document.querySelector(selector);
    if (el) el.hidden = !!hidden;
  }

  function showState(name) {
    setHidden('[data-notification-loading]', name !== 'loading');
    setHidden('[data-notification-signed-out]', name !== 'signedOut');
    setHidden('[data-notification-invalid]', name !== 'invalid');
    setHidden('[data-notification-not-found]', name !== 'notFound');
    setHidden('[data-notification-view]', name !== 'view');
  }

  function getNotificationIdFromLocation() {
    try {
      const params = new URLSearchParams(window.location.search || '');
      const nid = String(params.get('nid') || params.get('id') || '').trim();
      return nid;
    } catch (_) {
      return '';
    }
  }

  function getViewingUidFromLocation() {
    try {
      const params = new URLSearchParams(window.location.search || '');
      const uid = String(params.get('uid') || params.get('u') || '').trim();
      return uid;
    } catch (_) {
      return '';
    }
  }

  function stopWatch() {
    if (!unsub) return;
    try {
      unsub();
    } catch (_) {
      // ignore
    }
    unsub = null;
  }

  async function setReadState(uid, nid, read) {
    if (!uid || !nid) return false;
    const db = getDb();
    if (!db) return false;
    try {
      const FieldValue = window.firebase.firestore.FieldValue;
      await db.collection('users').doc(String(uid)).collection('inbox').doc(String(nid)).set({
        readAt: read ? FieldValue.serverTimestamp() : FieldValue.delete(),
      }, { merge: true });
      return true;
    } catch (_) {
      return false;
    }
  }

  async function deleteNotification(uid, nid) {
    if (!uid || !nid) return false;
    const db = getDb();
    if (!db) return false;
    try {
      await db.collection('users').doc(String(uid)).collection('inbox').doc(String(nid)).delete();
      return true;
    } catch (_) {
      return false;
    }
  }

  async function saveComment(uid, nid, rawComment) {
    if (!uid || !nid) return { ok: false, error: 'AUTH_REQUIRED' };
    const db = getDb();
    if (!db) return { ok: false, error: 'FIRESTORE_UNAVAILABLE' };

    const comment = String(rawComment || '').trim();

    try {
      const FieldValue = window.firebase.firestore.FieldValue;
      if (!comment) {
        await db.collection('users').doc(String(uid)).collection('inbox').doc(String(nid)).set({
          userComment: FieldValue.delete(),
          hasUserComment: FieldValue.delete(),
          commentUpdatedAt: FieldValue.delete(),
        }, { merge: true });
        return { ok: true, cleared: true };
      }

      await db.collection('users').doc(String(uid)).collection('inbox').doc(String(nid)).set({
        userComment: comment.slice(0, 1200),
        hasUserComment: true,
        commentUpdatedAt: FieldValue.serverTimestamp(),
      }, { merge: true });

      return { ok: true, cleared: false };
    } catch (_) {
      return { ok: false, error: 'SAVE_FAILED' };
    }
  }

  function render(doc) {
    currentDoc = doc;
    const data = doc?.data ? (doc.data() || {}) : {};
    const isOwnerView = !!currentUid && !!viewingUid && currentUid === viewingUid;

    const title = String(data.title || 'AlgoSPOT').slice(0, 120);
    const body = String(data.body || '').slice(0, 800);
    const url = normalizeUrl(data.url || '');

    const createdAt = parseTimestampMillis(data.createdAt);
    const readAt = parseTimestampMillis(data.readAt);
    const unread = !readAt;

    const titleEl = document.querySelector('[data-notification-title]');
    const bodyEl = document.querySelector('[data-notification-body]');
    const timeEl = document.querySelector('[data-notification-time]');
    const badgeEl = document.querySelector('[data-notification-badge]');
    const linkEl = document.querySelector('[data-notification-open-link]');
    const toggleBtn = document.querySelector('[data-notification-toggle-read]');
    const deleteBtn = document.querySelector('[data-notification-delete]');
    const commentEl = document.querySelector('[data-notification-comment]');
    const hintEl = document.querySelector('[data-notification-comment-hint]');
    const commentBtn = document.querySelector('[data-notification-comment-save]');
    const commentTitle = document.querySelector('[data-notification-comment-title]');
    const commentSubtitle = document.querySelector('[data-notification-comment-subtitle]');

    if (titleEl) titleEl.textContent = title;
    if (bodyEl) bodyEl.textContent = body || '—';
    if (timeEl) timeEl.textContent = createdAt ? formatTime(createdAt) : '';

    if (badgeEl) badgeEl.hidden = !unread;

    if (linkEl) {
      linkEl.hidden = !url;
      if (url) linkEl.setAttribute('href', url);
    }

    if (toggleBtn) {
      toggleBtn.innerHTML = unread
        ? '<i class="fas fa-check"></i> Okundu'
        : '<i class="fas fa-rotate-left"></i> Okunmadı';
      toggleBtn.disabled = !isOwnerView;
    }

    if (deleteBtn) deleteBtn.hidden = !isOwnerView;

    if (commentTitle) commentTitle.textContent = isOwnerView ? 'Yorumunuz' : 'Kullanıcı yorumu';
    if (commentSubtitle) {
      commentSubtitle.textContent = isOwnerView
        ? 'İsterseniz bu bildirim için not bırakın. Adminler görebilir.'
        : 'Bu not kullanıcı tarafından eklenmiştir.';
    }

    const comment = String(data.userComment || '');
    if (commentEl && document.activeElement !== commentEl) {
      commentEl.value = comment;
    }
    if (commentEl) commentEl.disabled = !isOwnerView;
    if (commentBtn) commentBtn.disabled = !isOwnerView;

    if (hintEl) {
      const updatedAt = parseTimestampMillis(data.commentUpdatedAt);
      hintEl.textContent = updatedAt ? `Son kayıt: ${formatTime(updatedAt)}` : '';
    }
  }

  function wireActions() {
    const toggleBtn = document.querySelector('[data-notification-toggle-read]');
    const deleteBtn = document.querySelector('[data-notification-delete]');
    const commentBtn = document.querySelector('[data-notification-comment-save]');
    const commentEl = document.querySelector('[data-notification-comment]');

    toggleBtn?.addEventListener('click', async (e) => {
      e.preventDefault();
      if (!currentUid || !viewingUid || currentUid !== viewingUid) return;
      if (!currentNotificationId || !currentDoc) return;
      const data = currentDoc.data() || {};
      const unread = !parseTimestampMillis(data.readAt);
      const ok = await setReadState(viewingUid, currentNotificationId, unread);
      if (!ok) showToast('Güncellenemedi');
    });

    deleteBtn?.addEventListener('click', async (e) => {
      e.preventDefault();
      if (!currentUid || !viewingUid || currentUid !== viewingUid) return;
      if (!currentNotificationId) return;
      const yes = window.confirm('Bu bildirimi silmek istiyor musunuz?');
      if (!yes) return;
      const ok = await deleteNotification(viewingUid, currentNotificationId);
      if (!ok) {
        showToast('Silinemedi');
        return;
      }
      showToast('Silindi');
      showState('notFound');
    });

    commentBtn?.addEventListener('click', async (e) => {
      e.preventDefault();
      if (!currentUid || !viewingUid || currentUid !== viewingUid) return;
      if (!currentNotificationId) return;
      commentBtn.disabled = true;
      try {
        const res = await saveComment(viewingUid, currentNotificationId, commentEl?.value || '');
        if (!res.ok) {
          showToast('Kaydedilemedi');
          return;
        }
        showToast(res.cleared ? 'Yorum temizlendi' : 'Yorum kaydedildi');
      } finally {
        commentBtn.disabled = false;
      }
    });
  }

  function startWatch(uid, nid) {
    stopWatch();
    viewingUid = uid;
    currentNotificationId = nid;

    const db = getDb();
    if (!db) {
      showState('notFound');
      return;
    }

    const ref = db.collection('users').doc(String(uid)).collection('inbox').doc(String(nid));
    unsub = ref.onSnapshot({ includeMetadataChanges: true }, (snap) => {
      if (!snap.exists) {
        showState('notFound');
        return;
      }

      showState('view');
      render(snap);

      // Auto-mark as read (best effort).
      try {
        const data = snap.data() || {};
        if (currentUid && viewingUid && currentUid === viewingUid && !data.readAt) {
          setReadState(uid, nid, true).catch(() => {});
        }
      } catch (_) {
        // ignore
      }
    }, () => {
      showState('notFound');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    try {
      if (window.appFirebase && typeof window.appFirebase.init === 'function') {
        window.appFirebase.init();
      }
    } catch (_) {
      // ignore
    }

    wireActions();

    const nid = getNotificationIdFromLocation();
    if (!nid) {
      showState('invalid');
      return;
    }

    showState('loading');

    const onUser = (user) => {
      const uid = user?.uid ? String(user.uid) : '';
      if (!uid) {
        stopWatch();
        showState('signedOut');
        return;
      }
      currentUid = uid;
      const requestedUid = getViewingUidFromLocation();
      const targetUid = requestedUid && requestedUid !== uid ? requestedUid : uid;
      startWatch(targetUid, nid);
    };

    if (window.appFirebase && typeof window.appFirebase.onAuth === 'function') {
      window.appFirebase.onAuth(onUser);
    } else {
      onUser(window.appFirebase?.getUser?.() || null);
    }
  });
})();
