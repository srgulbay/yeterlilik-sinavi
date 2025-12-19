(function () {
  'use strict';

  const LINK_SELECTOR = '[data-admin-link]';

  let adminUnsubscribe = null;
  let currentUid = null;

  function setLinksVisible(visible) {
    const show = !!visible;
    document.querySelectorAll(LINK_SELECTOR).forEach((el) => {
      el.hidden = !show;
    });

    try {
      document.dispatchEvent(new CustomEvent('admin:changed', { detail: { isAdmin: show, uid: currentUid } }));
    } catch (_) {
      // ignore
    }
  }

  function stopWatch() {
    if (!adminUnsubscribe) return;
    try {
      adminUnsubscribe();
    } catch (_) {
      // ignore
    }
    adminUnsubscribe = null;
  }

  function startWatch(uid) {
    stopWatch();
    if (!uid) return;
    if (!window.firebase || typeof window.firebase.firestore !== 'function') return;

    const db = window.firebase.firestore();
    currentUid = String(uid);

    try {
      adminUnsubscribe = db.collection('admins').doc(currentUid).onSnapshot((snap) => {
        setLinksVisible(!!snap && !!snap.exists);
      }, () => setLinksVisible(false));
    } catch (_) {
      setLinksVisible(false);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const links = Array.from(document.querySelectorAll(LINK_SELECTOR));
    if (links.length === 0) return;

    // Default: hidden until proven admin.
    setLinksVisible(false);

    try {
      window.appFirebase?.init?.();
    } catch (_) {
      // ignore
    }

    const onAuth = window.appFirebase && typeof window.appFirebase.onAuth === 'function'
      ? window.appFirebase.onAuth
      : null;

    if (onAuth) {
      onAuth((user) => {
        stopWatch();
        currentUid = user?.uid ? String(user.uid) : null;
        if (!currentUid) {
          setLinksVisible(false);
          return;
        }
        startWatch(currentUid);
      });
    } else {
      const uid = window.appFirebase?.getUser?.()?.uid ? String(window.appFirebase.getUser().uid) : null;
      currentUid = uid;
      if (uid) startWatch(uid);
    }
  });
})();

