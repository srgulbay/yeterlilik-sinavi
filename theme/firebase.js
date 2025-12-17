(function () {
  'use strict';

  const FIVE_MAX = 5;

  function isConfigured() {
    return typeof window !== 'undefined' && !!window.FIREBASE_CONFIG;
  }

  function isFirebaseLoaded() {
    return typeof window !== 'undefined' && !!window.firebase;
  }

  function safeDispatch(name, detail) {
    try {
      document.dispatchEvent(new CustomEvent(name, { detail }));
    } catch (_) {
      // ignore
    }
  }

  function normalizeTopicId(topicId) {
    const n = Number(topicId);
    if (!Number.isFinite(n)) return String(topicId);
    return String(n);
  }

  function clampReadLevel(level) {
    const n = Number(level);
    if (!Number.isFinite(n)) return 0;
    return Math.max(0, Math.min(FIVE_MAX, Math.trunc(n)));
  }

  const api = {
    enabled: false,
    init: () => false,
    getUser: () => null,
    onAuth: () => () => {},
    signIn: async () => {
      throw new Error('Firebase not configured');
    },
    signInWithEmailPassword: async () => {
      throw new Error('Firebase not configured');
    },
    signUpWithEmailPassword: async () => {
      throw new Error('Firebase not configured');
    },
    startPhoneSignIn: async () => {
      throw new Error('Firebase not configured');
    },
    confirmPhoneCode: async () => {
      throw new Error('Firebase not configured');
    },
    signOut: async () => {
      throw new Error('Firebase not configured');
    },
    loadTopicStates: async () => new Map(),
    setTopicState: async () => {
      throw new Error('Firebase not configured');
    },
    loadFavorites: async () => new Set(),
    setFavorite: async () => {
      throw new Error('Firebase not configured');
    },
    _clampReadLevel: clampReadLevel,
  };

  // Expose early so callers can check `enabled`.
  window.appFirebase = api;

  function init() {
    if (!isFirebaseLoaded() || !isConfigured()) {
      api.enabled = false;
      return false;
    }

    if (!window.firebase.apps || window.firebase.apps.length === 0) {
      window.firebase.initializeApp(window.FIREBASE_CONFIG);
    }

    const auth = window.firebase.auth();
    const db = window.firebase.firestore();

    let phoneConfirmationResult = null;
    let recaptchaVerifier = null;
    let recaptchaContainerId = null;

    api.enabled = true;

    // Make auth/session consistent across pages.
    try {
      if (auth && auth.setPersistence && window.firebase?.auth?.Auth?.Persistence?.LOCAL) {
        auth.setPersistence(window.firebase.auth.Auth.Persistence.LOCAL).catch(() => {});
      }
    } catch (_) {
      // ignore
    }

    // Enable IndexedDB persistence so writes survive navigation/reload (best-effort).
    try {
      if (db && typeof db.enablePersistence === 'function') {
        // synchronizeTabs helps when multiple tabs are open.
        db.enablePersistence({ synchronizeTabs: true }).catch(() => {
          // Fallback for older SDKs that don't support options.
          try {
            db.enablePersistence().catch(() => {});
          } catch (_) {
            // ignore
          }
        });
      }
    } catch (_) {
      // ignore
    }

    api.getUser = () => auth.currentUser;

    api.onAuth = (callback) => {
      return auth.onAuthStateChanged((user) => {
        safeDispatch('auth:changed', { user: user ? { uid: user.uid, email: user.email || null } : null });
        if (typeof callback === 'function') callback(user);
      });
    };

    api.signIn = async () => {
      const provider = new window.firebase.auth.GoogleAuthProvider();
      // Prefer popup; for mobile this may fall back to redirect.
      try {
        await auth.signInWithPopup(provider);
      } catch (err) {
        // If popup blocked or unsupported, redirect.
        if (String(err && err.code || '').includes('popup') || String(err && err.message || '').toLowerCase().includes('popup')) {
          await auth.signInWithRedirect(provider);
          return;
        }
        throw err;
      }
    };

    api.signInWithEmailPassword = async (email, password) => {
      const e = String(email || '').trim();
      const p = String(password || '');
      if (!e || !p) throw new Error('EMAIL_PASSWORD_REQUIRED');
      await auth.signInWithEmailAndPassword(e, p);
    };

    api.signUpWithEmailPassword = async (email, password) => {
      const e = String(email || '').trim();
      const p = String(password || '');
      if (!e || !p) throw new Error('EMAIL_PASSWORD_REQUIRED');
      await auth.createUserWithEmailAndPassword(e, p);
    };

    api.startPhoneSignIn = async (phoneNumber, containerId) => {
      const pn = String(phoneNumber || '').trim();
      const cid = String(containerId || '').trim();
      if (!pn) throw new Error('PHONE_REQUIRED');
      if (!cid) throw new Error('RECAPTCHA_CONTAINER_REQUIRED');

      // If container changed (re-render / navigation), recreate verifier.
      if (!recaptchaVerifier || recaptchaContainerId !== cid) {
        recaptchaVerifier = new window.firebase.auth.RecaptchaVerifier(cid, { size: 'invisible' }, auth);
        recaptchaContainerId = cid;
        try {
          await recaptchaVerifier.render();
        } catch (_) {
          // ignore; render may throw if already rendered
        }
      }

      phoneConfirmationResult = await auth.signInWithPhoneNumber(pn, recaptchaVerifier);
      return true;
    };

    api.confirmPhoneCode = async (code) => {
      const c = String(code || '').trim();
      if (!phoneConfirmationResult) throw new Error('PHONE_START_REQUIRED');
      if (!c) throw new Error('PHONE_CODE_REQUIRED');

      try {
        await phoneConfirmationResult.confirm(c);
      } finally {
        phoneConfirmationResult = null;
      }
      return true;
    };

    api.signOut = async () => {
      await auth.signOut();
    };

    api.loadTopicStates = async () => {
      const user = auth.currentUser;
      if (!user) return new Map();

      const snap = await db.collection('users').doc(user.uid).collection('topics').get();
      const map = new Map();
      snap.forEach((doc) => {
        const data = doc.data() || {};
        map.set(doc.id, {
          favorite: !!data.favorite,
          readLevel: clampReadLevel(data.readLevel),
        });
      });
      return map;
    };

    api.setTopicState = async (topicId, nextState) => {
      const user = auth.currentUser;
      if (!user) throw new Error('AUTH_REQUIRED');

      const id = normalizeTopicId(topicId);
      const patch = {};

      if (Object.prototype.hasOwnProperty.call(nextState, 'favorite')) {
        patch.favorite = !!nextState.favorite;
      }
      if (Object.prototype.hasOwnProperty.call(nextState, 'readLevel')) {
        patch.readLevel = clampReadLevel(nextState.readLevel);
      }

      patch.updatedAt = window.firebase.firestore.FieldValue.serverTimestamp();

      await db.collection('users').doc(user.uid).collection('topics').doc(id).set(patch, { merge: true });

      safeDispatch('topics:state-updated', { topicId: id, patch });
    };

    function normalizeType(type) {
      const t = String(type || '').trim().toLowerCase();
      if (!t) return 'unknown';
      return t;
    }

    function buildFavoriteDocId(type, itemId) {
      const t = normalizeType(type);
      const id = normalizeTopicId(itemId);
      return `${t}_${id}`;
    }

    api.loadFavorites = async (type) => {
      const user = auth.currentUser;
      if (!user) return new Set();

      const t = normalizeType(type);
      const snap = await db.collection('users').doc(user.uid).collection('favorites')
        .where('type', '==', t)
        .where('favorite', '==', true)
        .get();

      const set = new Set();
      snap.forEach((doc) => {
        const data = doc.data() || {};
        if (data && data.itemId != null) {
          set.add(String(data.itemId));
        }
      });
      return set;
    };

    api.setFavorite = async (type, itemId, favorite) => {
      const user = auth.currentUser;
      if (!user) throw new Error('AUTH_REQUIRED');

      const t = normalizeType(type);
      const id = normalizeTopicId(itemId);
      const docId = buildFavoriteDocId(t, id);

      const patch = {
        type: t,
        itemId: id,
        favorite: !!favorite,
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
      };

      await db.collection('users').doc(user.uid).collection('favorites').doc(docId).set(patch, { merge: true });
      safeDispatch('favorites:updated', { type: t, itemId: id, favorite: !!favorite });
    };

    return true;
  }

  api.init = init;
})();
