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

    api.enabled = true;

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
