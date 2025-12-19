(function () {
  'use strict';

  const FIVE_MAX = 5;
  let redirectResultChecked = false;
  let persistenceConfigured = false;
  let persistenceReady = Promise.resolve();

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

  function safeJsonParse(text, fallback) {
    try {
      return JSON.parse(String(text));
    } catch (_) {
      return fallback;
    }
  }

  function canUseStorage() {
    try {
      return typeof window !== 'undefined' && !!window.localStorage;
    } catch (_) {
      return false;
    }
  }

  function storageGet(key, fallback) {
    if (!canUseStorage()) return fallback;
    try {
      const raw = window.localStorage.getItem(key);
      if (!raw) return fallback;
      return safeJsonParse(raw, fallback);
    } catch (_) {
      return fallback;
    }
  }

  function storageSet(key, value) {
    if (!canUseStorage()) return false;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (_) {
      return false;
    }
  }

  function storageKeyTopics(uid) {
    return `appFirebase:v1:topics:${uid}`;
  }

  function storageKeyPrefs(uid) {
    return `appFirebase:v1:prefs:${uid}`;
  }

  function storageKeyFavorites(uid, type) {
    return `appFirebase:v1:favorites:${uid}:${String(type || '').trim().toLowerCase() || 'unknown'}`;
  }

  function storageKeyHighlights(uid, topicId) {
    return `appFirebase:v1:highlights:${uid}:${normalizeTopicId(topicId)}`;
  }

  function storageKeySrs(uid) {
    return `appFirebase:v1:srs:${uid}`;
  }

  function storageKeySrsMigrated(uid) {
    return `appFirebase:v1:srs:migrated:${uid}`;
  }

  const HIGHLIGHT_CONTEXT_MAX = 36;
  const HIGHLIGHT_QUOTE_MAX = 1600;

  function clampInt(value, min, max) {
    const n = Number(value);
    if (!Number.isFinite(n)) return min;
    return Math.max(min, Math.min(max, Math.trunc(n)));
  }

  const SRS_COUNT_MAX = 1000000;
  const SRS_NEXT_SHOW_MAX = 1000000;
  const SRS_DIFFICULTY_MIN = 1;
  const SRS_DIFFICULTY_MAX = 5;

  function clampSrsDifficulty(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return SRS_DIFFICULTY_MIN;
    const rounded = Math.round(n * 10) / 10;
    return Math.max(SRS_DIFFICULTY_MIN, Math.min(SRS_DIFFICULTY_MAX, rounded));
  }

  function normalizeSrsStatus(input, fallback) {
    const raw = String(input || '').trim().toLowerCase();
    if (raw === 'new' || raw === 'learning' || raw === 'mastered') return raw;
    if (fallback) return fallback;
    return 'new';
  }

  function normalizeSrsState(cardId, data) {
    const id = String(cardId || '').trim();
    const obj = data && typeof data === 'object' ? data : {};
    if (!id) return null;

    const showCount = clampInt(obj.showCount, 0, SRS_COUNT_MAX);
    const correctCount = clampInt(obj.correctCount, 0, SRS_COUNT_MAX);
    const totalReviews = clampInt(obj.totalReviews, 0, SRS_COUNT_MAX);
    const nextShowIn = clampInt(obj.nextShowIn, 0, SRS_NEXT_SHOW_MAX);
    const difficultyLevel = clampSrsDifficulty(obj.difficultyLevel == null ? 1 : obj.difficultyLevel);
    const status = normalizeSrsStatus(obj.status, totalReviews > 0 ? 'learning' : 'new');

    let updatedAt = 0;
    try {
      if (obj.updatedAt && typeof obj.updatedAt.toMillis === 'function') {
        updatedAt = obj.updatedAt.toMillis();
      } else if (obj.updatedAt instanceof Date) {
        updatedAt = obj.updatedAt.getTime();
      } else {
        updatedAt = clampInt(obj.updatedAt, 0, Number.MAX_SAFE_INTEGER);
      }
    } catch (_) {
      updatedAt = 0;
    }

    return {
      showCount,
      correctCount,
      totalReviews,
      nextShowIn,
      difficultyLevel,
      status,
      updatedAt,
      v: 1,
    };
  }

  function loadCachedSrs(uid) {
    const raw = storageGet(storageKeySrs(uid), null);
    if (!raw || typeof raw !== 'object' || !raw.items || typeof raw.items !== 'object') return new Map();

    const map = new Map();
    Object.keys(raw.items).forEach((cardId) => {
      const rec = normalizeSrsState(cardId, raw.items[cardId]);
      if (!rec) return;
      map.set(String(cardId), rec);
    });
    return map;
  }

  function saveCachedSrs(uid, map) {
    const items = {};
    try {
      map.forEach((value, key) => {
        const rec = normalizeSrsState(key, value);
        if (!rec) return;
        if (rec.totalReviews <= 0 && rec.showCount <= 0 && rec.correctCount <= 0) return;
        items[String(key)] = {
          showCount: rec.showCount,
          correctCount: rec.correctCount,
          totalReviews: rec.totalReviews,
          nextShowIn: rec.nextShowIn,
          difficultyLevel: rec.difficultyLevel,
          status: rec.status,
          updatedAt: rec.updatedAt,
          v: 1,
        };
      });
    } catch (_) {
      // ignore
    }
    storageSet(storageKeySrs(uid), { items, updatedAt: Date.now() });
  }

  function loadLegacySrsStatesFromLocalStorage() {
    if (!canUseStorage()) return new Map();
    const map = new Map();
    try {
      const prefix = 'srs_card_';
      const len = window.localStorage.length;
      for (let i = 0; i < len; i++) {
        const key = window.localStorage.key(i);
        if (!key || !key.startsWith(prefix)) continue;
        const cardId = normalizeTopicId(key.slice(prefix.length));
        if (!cardId) continue;
        const raw = window.localStorage.getItem(key);
        if (!raw) continue;
        const parsed = safeJsonParse(raw, null);
        const rec = normalizeSrsState(cardId, parsed);
        if (!rec) continue;
        if (rec.totalReviews <= 0 && rec.showCount <= 0 && rec.correctCount <= 0) continue;
        map.set(cardId, rec);
      }
    } catch (_) {
      // ignore
    }
    return map;
  }

  function legacySrsKey(cardId) {
    return `srs_card_${normalizeTopicId(cardId)}`;
  }

  function loadLegacySrsState(cardId) {
    const id = normalizeTopicId(cardId);
    if (!id) return null;
    const raw = storageGet(legacySrsKey(id), null);
    return normalizeSrsState(id, raw);
  }

  function saveLegacySrsState(cardId, srsState) {
    const id = normalizeTopicId(cardId);
    if (!id) return false;
    const rec = normalizeSrsState(id, srsState);
    if (!rec) return false;
    return storageSet(legacySrsKey(id), {
      showCount: rec.showCount,
      correctCount: rec.correctCount,
      totalReviews: rec.totalReviews,
      nextShowIn: rec.nextShowIn,
      difficultyLevel: rec.difficultyLevel,
      status: rec.status,
      updatedAt: Date.now(),
      v: 1,
    });
  }

  function clearLegacySrsStates() {
    if (!canUseStorage()) return 0;
    let removed = 0;
    try {
      const prefix = 'srs_card_';
      const keys = [];
      const len = window.localStorage.length;
      for (let i = 0; i < len; i++) {
        const key = window.localStorage.key(i);
        if (key && key.startsWith(prefix)) keys.push(key);
      }
      keys.forEach((key) => {
        try {
          window.localStorage.removeItem(key);
          removed++;
        } catch (_) {
          // ignore
        }
      });
    } catch (_) {
      // ignore
    }
    return removed;
  }

  function normalizeHexColor(input) {
    const raw = String(input || '').trim();
    if (!raw) return '';
    const hex = raw.startsWith('#') ? raw : `#${raw}`;
    const m = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.exec(hex);
    if (!m) return '';
    const value = m[1];
    if (value.length === 6) return `#${value.toLowerCase()}`;
    const expanded = value.split('').map((c) => c + c).join('');
    return `#${expanded.toLowerCase()}`;
  }

  function normalizeHighlightRecord(docId, data) {
    const id = String(docId || '').trim();
    const obj = data && typeof data === 'object' ? data : {};
    const topicId = obj.topicId == null ? '' : normalizeTopicId(obj.topicId);
    if (!id || !topicId) return null;

    const start = clampInt(obj.start, 0, Number.MAX_SAFE_INTEGER);
    const end = clampInt(obj.end, start + 1, Number.MAX_SAFE_INTEGER);
    const quote = String(obj.quote || '').slice(0, HIGHLIGHT_QUOTE_MAX);
    const prefix = String(obj.prefix || '').slice(0, HIGHLIGHT_CONTEXT_MAX);
    const suffix = String(obj.suffix || '').slice(0, HIGHLIGHT_CONTEXT_MAX);
    const color = normalizeHexColor(obj.color) || '#facc15';

    let updatedAt = 0;
    try {
      if (obj.updatedAt && typeof obj.updatedAt.toMillis === 'function') {
        updatedAt = obj.updatedAt.toMillis();
      } else if (obj.updatedAt instanceof Date) {
        updatedAt = obj.updatedAt.getTime();
      }
    } catch (_) {
      updatedAt = 0;
    }

    return {
      id,
      topicId,
      start,
      end,
      quote,
      prefix,
      suffix,
      color,
      updatedAt,
      v: 1,
    };
  }

  function loadCachedHighlights(uid, topicId) {
    const raw = storageGet(storageKeyHighlights(uid, topicId), null);
    if (!raw || typeof raw !== 'object' || !Array.isArray(raw.items)) return [];
    return raw.items.map((item) => normalizeHighlightRecord(item?.id, item)).filter(Boolean);
  }

  function saveCachedHighlights(uid, topicId, items) {
    const safe = Array.isArray(items) ? items.map((item) => normalizeHighlightRecord(item?.id, item)).filter(Boolean) : [];
    storageSet(storageKeyHighlights(uid, topicId), { items: safe, updatedAt: Date.now() });
  }

  function loadCachedTopics(uid) {
    const raw = storageGet(storageKeyTopics(uid), null);
    if (!raw || typeof raw !== 'object' || !raw.items || typeof raw.items !== 'object') return new Map();

    const map = new Map();
    Object.keys(raw.items).forEach((topicId) => {
      const item = raw.items[topicId] || {};
      map.set(String(topicId), {
        favorite: !!item.favorite,
        readLevel: clampReadLevel(item.readLevel),
      });
    });
    return map;
  }

  function saveCachedTopics(uid, map) {
    const items = {};
    try {
      map.forEach((value, key) => {
        items[String(key)] = {
          favorite: !!value.favorite,
          readLevel: clampReadLevel(value.readLevel),
        };
      });
    } catch (_) {
      // ignore
    }
    storageSet(storageKeyTopics(uid), { items, updatedAt: Date.now() });
  }

  function loadCachedFavorites(uid, type) {
    const raw = storageGet(storageKeyFavorites(uid, type), null);
    if (!raw || typeof raw !== 'object' || !Array.isArray(raw.items)) return new Set();
    return new Set(raw.items.map((x) => String(x)));
  }

  function saveCachedFavorites(uid, type, set) {
    const items = [];
    try {
      set.forEach((id) => items.push(String(id)));
    } catch (_) {
      // ignore
    }
    storageSet(storageKeyFavorites(uid, type), { items, updatedAt: Date.now() });
  }

  function sanitizeUiPrefsPatch(input) {
    const patch = {};
    const data = input && typeof input === 'object' ? input : {};

    if (Object.prototype.hasOwnProperty.call(data, 'theme')) {
      const t = String(data.theme || '').trim().toLowerCase();
      if (t === 'dark' || t === 'light') {
        patch.theme = t;
      }
    }

    if (Object.prototype.hasOwnProperty.call(data, 'topicsListLayout')) {
      const v = String(data.topicsListLayout || '').trim().toLowerCase();
      if (v === 'cards' || v === 'compact') {
        patch.topicsListLayout = v;
      }
    }

    if (Object.prototype.hasOwnProperty.call(data, 'topicsSortMode')) {
      const raw = String(data.topicsSortMode || '').trim();
      const v = raw === 'topic' ? 'category' : raw;
      if (v === 'added' || v === 'category' || v === 'priority' || v === 'needsReview' || v === 'mostReviewed') {
        patch.topicsSortMode = v;
      }
    }

    return patch;
  }

  function loadCachedPrefs(uid) {
    const raw = storageGet(storageKeyPrefs(uid), null);
    if (!raw || typeof raw !== 'object' || !raw.prefs || typeof raw.prefs !== 'object') return {};
    return sanitizeUiPrefsPatch(raw.prefs);
  }

  function saveCachedPrefs(uid, prefs) {
    const clean = sanitizeUiPrefsPatch(prefs);
    storageSet(storageKeyPrefs(uid), { prefs: clean, updatedAt: Date.now() });
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
    watchTopicStates: () => () => {},
    loadFavorites: async () => new Set(),
    setFavorite: async () => {
      throw new Error('Firebase not configured');
    },
    watchFavorites: () => () => {},
    loadUserPrefs: async () => ({}),
    setUserPrefs: async () => {
      throw new Error('Firebase not configured');
    },
    watchUserPrefs: () => () => {},
    loadSrsStates: async () => new Map(),
    watchSrsStates: () => () => {},
    getSrsState: (cardId) => loadLegacySrsState(cardId),
    getSrsTotalReviews: (cardId) => {
      const rec = loadLegacySrsState(cardId);
      const v = Number(rec && rec.totalReviews);
      return Number.isFinite(v) ? Math.max(0, Math.trunc(v)) : 0;
    },
    setSrsState: async (cardId, nextState) => {
      if (!saveLegacySrsState(cardId, nextState)) throw new Error('LOCAL_STORAGE_FAILED');
      safeDispatch('srs:state-updated', { cardId: normalizeTopicId(cardId), patch: nextState });
      return true;
    },
    clearSrsStates: async () => {
      clearLegacySrsStates();
      safeDispatch('srs:cleared', { scope: 'local' });
      return true;
    },
    loadHighlights: async () => [],
    saveHighlight: async () => {
      throw new Error('Firebase not configured');
    },
    deleteHighlight: async () => {
      throw new Error('Firebase not configured');
    },
    clearHighlights: async () => {
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

    let srsUid = null;
    let srsStateById = new Map(); // cardId(string) -> normalized SRS state

    let phoneConfirmationResult = null;
    let recaptchaVerifier = null;
    let recaptchaContainerId = null;

    api.enabled = true;

    // Make auth/session consistent across pages.
    if (!persistenceConfigured) {
      persistenceConfigured = true;
      try {
        if (auth && typeof auth.setPersistence === 'function' && window.firebase?.auth?.Auth?.Persistence?.LOCAL) {
          persistenceReady = auth.setPersistence(window.firebase.auth.Auth.Persistence.LOCAL).catch(() => {});
        }
      } catch (_) {
        // ignore
      }
    }

    // Mobile redirect sign-in needs getRedirectResult() to finalize in some browsers.
    try {
      if (!redirectResultChecked && auth && typeof auth.getRedirectResult === 'function') {
        redirectResultChecked = true;
        Promise.resolve(persistenceReady).finally(() => {
          auth.getRedirectResult().catch(() => {});
        });
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

    function getSrsCache() {
      const user = auth.currentUser;
      if (!user) {
        srsUid = null;
        srsStateById = new Map();
        return { user: null, map: srsStateById };
      }

      if (srsUid !== user.uid) {
        srsUid = user.uid;
        srsStateById = loadCachedSrs(user.uid);
      }

      return { user, map: srsStateById };
    }

    api.onAuth = (callback) => {
      return auth.onAuthStateChanged((user) => {
        if (!user) {
          srsUid = null;
          srsStateById = new Map();
        }
        safeDispatch('auth:changed', { user: user ? { uid: user.uid, email: user.email || null } : null });
        if (typeof callback === 'function') callback(user);
      });
    };

    api.signIn = async () => {
      await persistenceReady;
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
      await persistenceReady;
      const e = String(email || '').trim();
      const p = String(password || '');
      if (!e || !p) throw new Error('EMAIL_PASSWORD_REQUIRED');
      await auth.signInWithEmailAndPassword(e, p);
    };

    api.signUpWithEmailPassword = async (email, password) => {
      await persistenceReady;
      const e = String(email || '').trim();
      const p = String(password || '');
      if (!e || !p) throw new Error('EMAIL_PASSWORD_REQUIRED');
      await auth.createUserWithEmailAndPassword(e, p);
    };

    api.startPhoneSignIn = async (phoneNumber, containerId) => {
      await persistenceReady;
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
      await persistenceReady;
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
      await persistenceReady;
      await auth.signOut();
    };

    api.loadTopicStates = async () => {
      const user = auth.currentUser;
      if (!user) return new Map();

      // Start with cached values to survive page navigation.
      const cached = loadCachedTopics(user.uid);

      try {
        const ref = db.collection('users').doc(user.uid).collection('topics');
        let snap;
        try {
          snap = await ref.get({ source: 'server' });
        } catch (_) {
          snap = await ref.get();
        }
        const map = new Map();
        snap.forEach((doc) => {
          const data = doc.data() || {};
          map.set(doc.id, {
            favorite: !!data.favorite,
            readLevel: clampReadLevel(data.readLevel),
          });
        });
        saveCachedTopics(user.uid, map);
        return map;
      } catch (_) {
        return cached;
      }
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

      // Update cache immediately so UI survives navigation.
      try {
        const current = loadCachedTopics(user.uid);
        const prev = current.get(id) || { favorite: false, readLevel: 0 };
        const merged = {
          favorite: Object.prototype.hasOwnProperty.call(patch, 'favorite') ? !!patch.favorite : !!prev.favorite,
          readLevel: Object.prototype.hasOwnProperty.call(patch, 'readLevel') ? clampReadLevel(patch.readLevel) : clampReadLevel(prev.readLevel),
        };
        current.set(id, merged);
        saveCachedTopics(user.uid, current);
      } catch (_) {
        // ignore
      }

      await db.collection('users').doc(user.uid).collection('topics').doc(id).set(patch, { merge: true });

      safeDispatch('topics:state-updated', { topicId: id, patch });
    };

    api.watchTopicStates = (onUpdate) => {
      const user = auth.currentUser;
      if (!user) throw new Error('AUTH_REQUIRED');
      if (typeof onUpdate !== 'function') return () => {};

      const uid = user.uid;
      const ref = db.collection('users').doc(uid).collection('topics');

      return ref.onSnapshot({ includeMetadataChanges: true }, (snap) => {
        const map = new Map();
        snap.forEach((doc) => {
          const data = doc.data() || {};
          map.set(doc.id, {
            favorite: !!data.favorite,
            readLevel: clampReadLevel(data.readLevel),
          });
        });
        saveCachedTopics(uid, map);

        try {
          onUpdate(map, {
            uid,
            fromCache: !!snap.metadata?.fromCache,
            hasPendingWrites: !!snap.metadata?.hasPendingWrites,
          });
        } catch (_) {
          // ignore
        }

        safeDispatch('topics:states-synced', {
          uid,
          count: map.size,
          fromCache: !!snap.metadata?.fromCache,
          hasPendingWrites: !!snap.metadata?.hasPendingWrites,
        });
      }, () => {});
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
      const cached = loadCachedFavorites(user.uid, t);

      try {
        // Avoid composite-index requirement by filtering on the client.
        // (Some Firebase projects don't have an index for type+favorite.)
        const ref = db.collection('users').doc(user.uid).collection('favorites')
          .where('type', '==', t);
        let snap;
        try {
          snap = await ref.get({ source: 'server' });
        } catch (_) {
          snap = await ref.get();
        }

        const set = new Set();
        snap.forEach((doc) => {
          const data = doc.data() || {};
          if (data && data.favorite === true && data.itemId != null) {
            set.add(String(data.itemId));
          }
        });
        saveCachedFavorites(user.uid, t, set);
        return set;
      } catch (_) {
        return cached;
      }
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

      // Update cache immediately.
      try {
        const current = loadCachedFavorites(user.uid, t);
        if (!!favorite) current.add(id);
        else current.delete(id);
        saveCachedFavorites(user.uid, t, current);
      } catch (_) {
        // ignore
      }

      await db.collection('users').doc(user.uid).collection('favorites').doc(docId).set(patch, { merge: true });
      safeDispatch('favorites:updated', { type: t, itemId: id, favorite: !!favorite });
    };

    api.watchFavorites = (type, onUpdate) => {
      const user = auth.currentUser;
      if (!user) throw new Error('AUTH_REQUIRED');
      if (typeof onUpdate !== 'function') return () => {};

      const uid = user.uid;
      const t = normalizeType(type);
      const ref = db.collection('users').doc(uid).collection('favorites')
        .where('type', '==', t);

      return ref.onSnapshot({ includeMetadataChanges: true }, (snap) => {
        const set = new Set();
        snap.forEach((doc) => {
          const data = doc.data() || {};
          if (data && data.favorite === true && data.itemId != null) {
            set.add(String(data.itemId));
          }
        });
        saveCachedFavorites(uid, t, set);

        try {
          onUpdate(set, {
            uid,
            type: t,
            fromCache: !!snap.metadata?.fromCache,
            hasPendingWrites: !!snap.metadata?.hasPendingWrites,
          });
        } catch (_) {
          // ignore
        }

        safeDispatch('favorites:synced', {
          uid,
          type: t,
          count: set.size,
          fromCache: !!snap.metadata?.fromCache,
          hasPendingWrites: !!snap.metadata?.hasPendingWrites,
        });
      }, () => {});
    };

    api.loadUserPrefs = async () => {
      const user = auth.currentUser;
      if (!user) return {};

      const cached = loadCachedPrefs(user.uid);
      try {
        const ref = db.collection('users').doc(user.uid).collection('prefs').doc('ui');
        let snap;
        try {
          snap = await ref.get({ source: 'server' });
        } catch (_) {
          snap = await ref.get();
        }
        const data = snap && snap.exists ? (snap.data() || {}) : {};
        const prefs = sanitizeUiPrefsPatch(data);
        saveCachedPrefs(user.uid, prefs);
        return prefs;
      } catch (_) {
        return cached;
      }
    };

    api.setUserPrefs = async (nextPrefs) => {
      const user = auth.currentUser;
      if (!user) throw new Error('AUTH_REQUIRED');

      const cleanPatch = sanitizeUiPrefsPatch(nextPrefs);
      // Nothing to write.
      if (!cleanPatch || Object.keys(cleanPatch).length === 0) return false;

      const patch = {
        ...cleanPatch,
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
      };

      // Update cache immediately.
      try {
        const current = loadCachedPrefs(user.uid);
        saveCachedPrefs(user.uid, { ...current, ...cleanPatch });
      } catch (_) {
        // ignore
      }

      await db.collection('users').doc(user.uid).collection('prefs').doc('ui').set(patch, { merge: true });
      safeDispatch('prefs:updated', { patch: cleanPatch });
      return true;
    };

    api.watchUserPrefs = (onUpdate) => {
      const user = auth.currentUser;
      if (!user) throw new Error('AUTH_REQUIRED');
      if (typeof onUpdate !== 'function') return () => {};

      const uid = user.uid;
      const ref = db.collection('users').doc(uid).collection('prefs').doc('ui');

      return ref.onSnapshot({ includeMetadataChanges: true }, (snap) => {
        const data = snap && snap.exists ? (snap.data() || {}) : {};
        const prefs = sanitizeUiPrefsPatch(data);
        saveCachedPrefs(uid, prefs);

        try {
          onUpdate(prefs, {
            uid,
            fromCache: !!snap.metadata?.fromCache,
            hasPendingWrites: !!snap.metadata?.hasPendingWrites,
          });
        } catch (_) {
          // ignore
        }

        safeDispatch('prefs:synced', {
          uid,
          fromCache: !!snap.metadata?.fromCache,
          hasPendingWrites: !!snap.metadata?.hasPendingWrites,
        });
      }, () => {});
    };

    async function maybeMigrateLegacySrs(user, map) {
      if (!user) return map;

      const migrated = storageGet(storageKeySrsMigrated(user.uid), null);
      if (migrated) return map;

      const legacyMap = loadLegacySrsStatesFromLocalStorage();
      if (!legacyMap || legacyMap.size === 0) {
        storageSet(storageKeySrsMigrated(user.uid), { migratedAt: Date.now(), count: 0 });
        return map;
      }

      const toWrite = [];
      legacyMap.forEach((rec, id) => {
        const prev = map.get(id);
        if (!prev) {
          toWrite.push({ id, rec });
          return;
        }
        const a = Number(rec.totalReviews);
        const b = Number(prev.totalReviews);
        if (Number.isFinite(a) && Number.isFinite(b) && a > b) {
          toWrite.push({ id, rec });
          return;
        }
        const sa = Number(rec.showCount);
        const sb = Number(prev.showCount);
        if (Number.isFinite(sa) && Number.isFinite(sb) && sa > sb) {
          toWrite.push({ id, rec });
        }
      });

      if (toWrite.length === 0) {
        storageSet(storageKeySrsMigrated(user.uid), { migratedAt: Date.now(), count: 0 });
        return map;
      }

      try {
        const batch = db.batch();
        toWrite.forEach(({ id, rec }) => {
          const ref = db.collection('users').doc(user.uid).collection('srs').doc(id);
          batch.set(ref, {
            showCount: clampInt(rec.showCount, 0, SRS_COUNT_MAX),
            correctCount: clampInt(rec.correctCount, 0, SRS_COUNT_MAX),
            totalReviews: clampInt(rec.totalReviews, 0, SRS_COUNT_MAX),
            nextShowIn: clampInt(rec.nextShowIn, 0, SRS_NEXT_SHOW_MAX),
            difficultyLevel: clampSrsDifficulty(rec.difficultyLevel),
            status: normalizeSrsStatus(rec.status, 'learning'),
            v: 1,
            updatedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
          }, { merge: true });
        });
        await batch.commit();

        toWrite.forEach(({ id, rec }) => {
          map.set(id, { ...rec, updatedAt: Date.now(), v: 1 });
        });
        saveCachedSrs(user.uid, map);
        storageSet(storageKeySrsMigrated(user.uid), { migratedAt: Date.now(), count: toWrite.length });
        safeDispatch('srs:migrated', { count: toWrite.length });
        return map;
      } catch (_) {
        // Don't mark as migrated if we couldn't write.
        return map;
      }
    }

    api.loadSrsStates = async () => {
      const user = auth.currentUser;
      if (!user) return new Map();

      const cached = loadCachedSrs(user.uid);
      try {
        const ref = db.collection('users').doc(user.uid).collection('srs');
        let snap;
        try {
          snap = await ref.get({ source: 'server' });
        } catch (_) {
          snap = await ref.get();
        }
        const map = new Map();
        snap.forEach((doc) => {
          const rec = normalizeSrsState(doc.id, doc.data() || {});
          if (rec) map.set(doc.id, rec);
        });

        const merged = await maybeMigrateLegacySrs(user, map);
        saveCachedSrs(user.uid, merged);
        srsUid = user.uid;
        srsStateById = merged;
        safeDispatch('srs:loaded', { count: merged.size });
        return merged;
      } catch (_) {
        srsUid = user.uid;
        srsStateById = cached;
        return cached;
      }
    };

    api.watchSrsStates = (onUpdate) => {
      const user = auth.currentUser;
      if (!user) throw new Error('AUTH_REQUIRED');
      if (typeof onUpdate !== 'function') return () => {};

      const uid = user.uid;
      const ref = db.collection('users').doc(uid).collection('srs');

      return ref.onSnapshot({ includeMetadataChanges: true }, (snap) => {
        const map = new Map();
        snap.forEach((doc) => {
          const rec = normalizeSrsState(doc.id, doc.data() || {});
          if (rec) map.set(doc.id, rec);
        });

        saveCachedSrs(uid, map);
        srsUid = uid;
        srsStateById = map;

        try {
          onUpdate(map, {
            uid,
            fromCache: !!snap.metadata?.fromCache,
            hasPendingWrites: !!snap.metadata?.hasPendingWrites,
          });
        } catch (_) {
          // ignore
        }

        safeDispatch('srs:loaded', {
          count: map.size,
          uid,
          fromCache: !!snap.metadata?.fromCache,
          hasPendingWrites: !!snap.metadata?.hasPendingWrites,
        });
      }, () => {});
    };

    api.getSrsState = (cardId) => {
      const id = normalizeTopicId(cardId);
      const cache = getSrsCache();
      if (!cache.user) return loadLegacySrsState(id);
      const existing = cache.map.get(id);
      return existing ? { ...existing } : null;
    };

    api.getSrsTotalReviews = (cardId) => {
      const rec = api.getSrsState(cardId);
      const v = Number(rec && rec.totalReviews);
      return Number.isFinite(v) ? Math.max(0, Math.trunc(v)) : 0;
    };

    api.setSrsState = async (cardId, nextState) => {
      const user = auth.currentUser;
      const id = normalizeTopicId(cardId);
      if (!id) return false;

      if (!user) {
        if (!saveLegacySrsState(id, nextState)) throw new Error('LOCAL_STORAGE_FAILED');
        safeDispatch('srs:state-updated', { cardId: id, patch: nextState });
        return true;
      }

      const cache = getSrsCache();
      const prev = cache.map.get(id) || {};
      const merged = normalizeSrsState(id, { ...prev, ...(nextState || {}), updatedAt: Date.now() }) || null;
      if (!merged) return false;

      cache.map.set(id, merged);
      saveCachedSrs(user.uid, cache.map);

      const patch = {
        showCount: merged.showCount,
        correctCount: merged.correctCount,
        totalReviews: merged.totalReviews,
        nextShowIn: merged.nextShowIn,
        difficultyLevel: merged.difficultyLevel,
        status: merged.status,
        v: 1,
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
      };

      await db.collection('users').doc(user.uid).collection('srs').doc(id).set(patch, { merge: true });
      safeDispatch('srs:state-updated', { cardId: id, patch });
      return true;
    };

    api.clearSrsStates = async () => {
      const user = auth.currentUser;

      if (!user) {
        clearLegacySrsStates();
        safeDispatch('srs:cleared', { scope: 'local' });
        return true;
      }

      // Cache: clear immediately.
      try {
        saveCachedSrs(user.uid, new Map());
        srsUid = user.uid;
        srsStateById = new Map();
      } catch (_) {
        // ignore
      }

      const snap = await db.collection('users').doc(user.uid).collection('srs').get();
      const batch = db.batch();
      snap.forEach((doc) => batch.delete(doc.ref));
      await batch.commit();
      safeDispatch('srs:cleared', { scope: 'user' });
      return true;
    };

    api.loadHighlights = async (topicId) => {
      const user = auth.currentUser;
      if (!user) return [];

      const id = normalizeTopicId(topicId);
      const cached = loadCachedHighlights(user.uid, id);

      try {
        const ref = db.collection('users').doc(user.uid).collection('highlights')
          .where('topicId', '==', id);
        let snap;
        try {
          snap = await ref.get({ source: 'server' });
        } catch (_) {
          snap = await ref.get();
        }

        const items = [];
        snap.forEach((doc) => {
          const rec = normalizeHighlightRecord(doc.id, doc.data() || {});
          if (rec) items.push(rec);
        });

        // Keep newest for duplicate ids.
        const map = new Map();
        items.forEach((r) => {
          const prev = map.get(r.id);
          if (!prev || r.updatedAt >= prev.updatedAt) map.set(r.id, r);
        });
        const list = Array.from(map.values()).sort((a, b) => (a.start - b.start) || a.id.localeCompare(b.id));
        saveCachedHighlights(user.uid, id, list);
        return list;
      } catch (_) {
        return cached;
      }
    };

    api.saveHighlight = async (highlight) => {
      const user = auth.currentUser;
      if (!user) throw new Error('AUTH_REQUIRED');

      const h = highlight && typeof highlight === 'object' ? highlight : {};
      const docId = String(h.id || '').trim();
      if (!docId) throw new Error('HIGHLIGHT_ID_REQUIRED');

      if (h.topicId == null) throw new Error('TOPIC_ID_REQUIRED');
      const topicId = normalizeTopicId(h.topicId);
      const start = clampInt(h.start, 0, Number.MAX_SAFE_INTEGER);
      const end = clampInt(h.end, start + 1, Number.MAX_SAFE_INTEGER);
      const quote = String(h.quote || '').slice(0, HIGHLIGHT_QUOTE_MAX);
      const prefix = String(h.prefix || '').slice(0, HIGHLIGHT_CONTEXT_MAX);
      const suffix = String(h.suffix || '').slice(0, HIGHLIGHT_CONTEXT_MAX);
      const color = normalizeHexColor(h.color) || '#facc15';

      const patch = {
        topicId,
        start,
        end,
        quote,
        prefix,
        suffix,
        color,
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
      };

      // Update cache immediately.
      try {
        const current = loadCachedHighlights(user.uid, topicId);
        const next = current.filter((x) => x.id !== docId);
        next.push({ id: docId, topicId, start, end, quote, prefix, suffix, color, updatedAt: Date.now(), v: 1 });
        next.sort((a, b) => (a.start - b.start) || a.id.localeCompare(b.id));
        saveCachedHighlights(user.uid, topicId, next);
      } catch (_) {
        // ignore
      }

      await db.collection('users').doc(user.uid).collection('highlights').doc(docId).set(patch, { merge: true });
      safeDispatch('highlights:updated', { topicId, highlightId: docId, patch: { start, end, color } });
      return true;
    };

    api.deleteHighlight = async (highlightId, topicId) => {
      const user = auth.currentUser;
      if (!user) throw new Error('AUTH_REQUIRED');

      const docId = String(highlightId || '').trim();
      if (!docId) return false;

      // Update cache best-effort when topicId is provided.
      if (topicId != null) {
        try {
          const tid = normalizeTopicId(topicId);
          const current = loadCachedHighlights(user.uid, tid);
          saveCachedHighlights(user.uid, tid, current.filter((x) => x.id !== docId));
        } catch (_) {
          // ignore
        }
      }

      await db.collection('users').doc(user.uid).collection('highlights').doc(docId).delete();
      safeDispatch('highlights:deleted', { topicId: topicId != null ? normalizeTopicId(topicId) : null, highlightId: docId });
      return true;
    };

    api.clearHighlights = async (topicId) => {
      const user = auth.currentUser;
      if (!user) throw new Error('AUTH_REQUIRED');
      const tid = normalizeTopicId(topicId);
      if (!tid) return false;

      // Cache: clear immediately.
      try {
        saveCachedHighlights(user.uid, tid, []);
      } catch (_) {
        // ignore
      }

      // Batch delete for this topic.
      const snap = await db.collection('users').doc(user.uid).collection('highlights')
        .where('topicId', '==', tid)
        .get();

      const batch = db.batch();
      snap.forEach((doc) => batch.delete(doc.ref));
      await batch.commit();
      safeDispatch('highlights:cleared', { topicId: tid });
      return true;
    };

    return true;
  }

  api.init = init;
})();
