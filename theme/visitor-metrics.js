/**
 * ============================================
 * VISITOR METRICS - Ziyaretçi İstatistikleri
 * ============================================
 * Versiyon: 1.2.0
 * Tarih: 19 Aralık 2025
 * 
 * Online kullanıcı, üye, misafir ve toplam ziyaret
 * sayılarını takip eden ve gösteren modül.
 * 
 * - Aynı tarayıcı/cihaz = tek kullanıcı (device fingerprint)
 * - Ziyaret sayımı: Siteye ilk girişte 1 kez sayılır
 * - Sayfa geçişlerinde tekrar sayılmaz (session bazlı)
 * 
 * Firebase ile gerçek zamanlı senkronizasyon destekler.
 * Firebase yoksa localStorage ile çalışır.
 */

(function () {
  'use strict';

  // ==========================================
  // CONFIGURATION
  // ==========================================
  
  const CONFIG = {
    // LocalStorage keys
    STORAGE_KEY_DEVICE_ID: 'app:visitor:deviceId',
    STORAGE_KEY_VISITS: 'app:visitor:totalVisits',
    STORAGE_KEY_ONLINE: 'app:visitor:online',
    
    // Session key - used to track if this browser session already counted
    SESSION_STORAGE_KEY: 'app:visitor:currentSession',
    
    // Timing
    HEARTBEAT_INTERVAL: 30000,      // 30 saniye - online check
    SESSION_TIMEOUT: 90000,         // 90 saniye - session timeout (longer for single device)
    UPDATE_INTERVAL: 5000,          // 5 saniye - UI update
    
    // Animation
    COUNT_ANIMATION_DURATION: 500,  // ms
  };

  // ==========================================
  // STATE
  // ==========================================
  
  let state = {
    deviceId: null,        // Unique device identifier (persistent)
    sessionId: null,       // Current browser session (temporary)
    isAuthenticated: false,
    userId: null,
    lastHeartbeat: 0,
    intervals: [],
    unsubscribers: [],
    visitAlreadyCounted: false,
    firebasePresenceActive: false,
    firebaseSessionDoc: null,
  };

  // ==========================================
  // UTILITY FUNCTIONS
  // ==========================================
  
  /**
   * Generate a unique device fingerprint based on browser characteristics.
   * This creates a consistent ID for the same browser/device.
   */
  function generateDeviceId() {
    const components = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      screen.colorDepth,
      new Date().getTimezoneOffset(),
      navigator.hardwareConcurrency || 'unknown',
      navigator.platform || 'unknown',
    ];
    
    // Simple hash function
    const str = components.join('|');
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    
    return 'device_' + Math.abs(hash).toString(36) + '_' + navigator.userAgent.length.toString(36);
  }

  /**
   * Get or create a persistent device ID.
   * Same device/browser always gets the same ID.
   */
  function getDeviceId() {
    let deviceId = storageGet(CONFIG.STORAGE_KEY_DEVICE_ID, null);
    
    if (!deviceId) {
      deviceId = generateDeviceId();
      storageSet(CONFIG.STORAGE_KEY_DEVICE_ID, deviceId);
    }
    
    return deviceId;
  }

  function generateSessionId() {
    return `session_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
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

  function canUseSessionStorage() {
    try {
      return typeof window !== 'undefined' && !!window.sessionStorage;
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

  function sessionStorageGet(key) {
    if (!canUseSessionStorage()) return null;
    try {
      return window.sessionStorage.getItem(key);
    } catch (_) {
      return null;
    }
  }

  function sessionStorageSet(key, value) {
    if (!canUseSessionStorage()) return false;
    try {
      window.sessionStorage.setItem(key, value);
      return true;
    } catch (_) {
      return false;
    }
  }

  function isFirebaseAvailable() {
    return typeof window !== 'undefined' && 
           !!window.firebase && 
           !!window.FIREBASE_CONFIG;
  }

  function formatNumber(num) {
    const n = Number(num) || 0;
    if (n >= 1000000) {
      return (n / 1000000).toFixed(1) + 'M';
    }
    if (n >= 1000) {
      return (n / 1000).toFixed(1) + 'K';
    }
    return String(n);
  }

  // ==========================================
  // ANIMATED COUNTER
  // ==========================================
  
  function animateValue(element, start, end, duration) {
    if (!element) return;
    
    const startNum = Number(start) || 0;
    const endNum = Number(end) || 0;
    
    if (startNum === endNum) {
      element.textContent = formatNumber(endNum);
      return;
    }

    const startTime = performance.now();
    const diff = endNum - startNum;

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startNum + diff * easeProgress);
      
      element.textContent = formatNumber(current);
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // ==========================================
  // SESSION & VISIT TRACKING
  // ==========================================

  /**
   * Check if this is a new browser session (site visit).
   * Uses sessionStorage which clears when browser/tab closes.
   */
  function isNewSiteVisit() {
    const existingSession = sessionStorageGet(CONFIG.SESSION_STORAGE_KEY);
    return !existingSession;
  }

  /**
   * Mark that this browser session has been counted.
   */
  function markSessionAsCounted() {
    sessionStorageSet(CONFIG.SESSION_STORAGE_KEY, state.deviceId);
    state.visitAlreadyCounted = true;
  }

  // ==========================================
  // LOCAL STORAGE BASED METRICS (Fallback)
  // ==========================================
  
  /**
   * Get online sessions, filtered by device ID (not session ID).
   * This ensures same device/browser = single user.
   */
  function getLocalOnlineSessions() {
    const sessions = storageGet(CONFIG.STORAGE_KEY_ONLINE, {});
    const now = Date.now();
    const active = {};
    
    // Filter out expired sessions, keyed by deviceId
    for (const [deviceId, data] of Object.entries(sessions)) {
      if (now - data.lastSeen < CONFIG.SESSION_TIMEOUT) {
        active[deviceId] = data;
      }
    }
    
    return active;
  }

  /**
   * Update local session using deviceId as key.
   * Same device always updates the same entry (no duplicates).
   */
  function updateLocalSession() {
    if (!state.deviceId) {
      state.deviceId = getDeviceId();
    }

    const sessions = getLocalOnlineSessions();
    
    // Use deviceId as key - same device = same entry
    sessions[state.deviceId] = {
      lastSeen: Date.now(),
      isAuthenticated: state.isAuthenticated,
      userId: state.userId,
      deviceId: state.deviceId,
    };
    
    storageSet(CONFIG.STORAGE_KEY_ONLINE, sessions);
    state.lastHeartbeat = Date.now();
    
    return sessions;
  }

  function removeLocalSession() {
    if (!state.deviceId) return;
    
    const sessions = storageGet(CONFIG.STORAGE_KEY_ONLINE, {});
    delete sessions[state.deviceId];
    storageSet(CONFIG.STORAGE_KEY_ONLINE, sessions);
  }

  /**
   * Increment total visits only once per browser session.
   * This ensures page navigation within the site doesn't count as new visits.
   */
  function incrementTotalVisitsOnce() {
    // Check if this browser session already counted a visit
    if (!isNewSiteVisit()) {
      return storageGet(CONFIG.STORAGE_KEY_VISITS, 0);
    }
    
    const currentVisits = storageGet(CONFIG.STORAGE_KEY_VISITS, 0);
    const newTotal = currentVisits + 1;
    storageSet(CONFIG.STORAGE_KEY_VISITS, newTotal);
    
    // Mark this session as counted
    markSessionAsCounted();
    
    return newTotal;
  }

  function calculateLocalMetrics() {
    const sessions = getLocalOnlineSessions();
    const sessionList = Object.values(sessions);
    
    // Each entry is a unique device
    const online = sessionList.length;
    const members = sessionList.filter(s => s.isAuthenticated).length;
    const guests = online - members;
    const total = storageGet(CONFIG.STORAGE_KEY_VISITS, 0);
    
    return { online, members, guests, total };
  }

  // ==========================================
  // FIREBASE BASED METRICS (If available)
  // ==========================================
  
  async function initFirebasePresence() {
    if (!isFirebaseAvailable()) return false;
    
    try {
      const db = window.firebase.firestore();
      const presenceRef = db.collection('presence');
      const metricsRef = db.collection('metrics').doc('visitors');
      
      // Use deviceId as document ID - same device = same document
      const sessionDoc = presenceRef.doc(state.deviceId);
      state.firebaseSessionDoc = sessionDoc;
      state.firebasePresenceActive = true;
      
      await sessionDoc.set({
        deviceId: state.deviceId,
        lastSeen: window.firebase.firestore.FieldValue.serverTimestamp(),
        isAuthenticated: state.isAuthenticated,
        userId: state.userId || null,
        userAgent: navigator.userAgent.slice(0, 100),
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });

      // Increment total visits only once per browser session
      if (isNewSiteVisit()) {
        await metricsRef.set({
          totalVisits: window.firebase.firestore.FieldValue.increment(1),
        }, { merge: true });
        markSessionAsCounted();
      }

      // Set up heartbeat
      const heartbeatInterval = setInterval(async () => {
        try {
          await sessionDoc.update({
            lastSeen: window.firebase.firestore.FieldValue.serverTimestamp(),
            isAuthenticated: state.isAuthenticated,
            userId: state.userId || null,
          });
        } catch (e) {
          console.warn('[Metrics] Heartbeat failed:', e.message);
        }
      }, CONFIG.HEARTBEAT_INTERVAL);
      
      state.intervals.push(heartbeatInterval);

      // Listen to presence changes
      const cutoffTime = new Date(Date.now() - CONFIG.SESSION_TIMEOUT);
      const unsubPresence = presenceRef
        .where('lastSeen', '>', cutoffTime)
        .onSnapshot((snapshot) => {
          const sessions = snapshot.docs.map(doc => doc.data());
          const online = sessions.length;
          const members = sessions.filter(s => s.isAuthenticated).length;
          const guests = online - members;
          
          updateUI({ online, members, guests });
        }, (error) => {
          console.warn('[Metrics] Presence listener error:', error.message);
        });
      
      state.unsubscribers.push(unsubPresence);

      // Listen to total visits
      const unsubMetrics = metricsRef.onSnapshot((doc) => {
        if (doc.exists) {
          const data = doc.data();
          updateUI({ total: data.totalVisits || 0 });
        }
      }, (error) => {
        console.warn('[Metrics] Metrics listener error:', error.message);
      });
      
      state.unsubscribers.push(unsubMetrics);

      // Clean up on page unload
      window.addEventListener('beforeunload', async () => {
        try {
          await sessionDoc.delete();
        } catch (_) {
          // Ignore errors on unload
        }
      });

      return true;
    } catch (error) {
      console.warn('[Metrics] Firebase presence init failed:', error.message);
      state.firebasePresenceActive = false;
      state.firebaseSessionDoc = null;
      return false;
    }
  }

  // ==========================================
  // UI UPDATE
  // ==========================================
  
  const prevValues = {
    online: 0,
    members: 0,
    guests: 0,
    total: 0,
  };

  function updateUI(metrics) {
    const elements = {
      online: document.getElementById('onlineCount'),
      members: document.getElementById('memberCount'),
      guests: document.getElementById('guestCount'),
      total: document.getElementById('totalVisits'),
    };

    for (const [key, element] of Object.entries(elements)) {
      if (element && metrics[key] !== undefined) {
        const newValue = Number(metrics[key]) || 0;
        if (newValue !== prevValues[key]) {
          animateValue(element, prevValues[key], newValue, CONFIG.COUNT_ANIMATION_DURATION);
          prevValues[key] = newValue;
        }
      }
    }
  }

  // ==========================================
  // INITIALIZATION
  // ==========================================
  
  async function init() {
    // Ensure main Firebase wrapper is initialized first (so auth state is available).
    try {
      if (window.appFirebase && typeof window.appFirebase.init === 'function') {
        window.appFirebase.init();
      }
    } catch (_) {
      // ignore
    }

    // Get persistent device ID (same for this browser/device)
    state.deviceId = getDeviceId();
    
    // Generate temporary session ID for this browser session
    state.sessionId = sessionStorageGet(CONFIG.SESSION_STORAGE_KEY) || generateSessionId();
    
    const applyAuthState = (user) => {
      const uid = user && user.uid ? String(user.uid) : null;
      state.isAuthenticated = !!uid;
      state.userId = uid;

      updateLocalSession();

      // Local fallback: update UI immediately.
      if (!state.firebasePresenceActive) {
        updateUI(calculateLocalMetrics());
      }

      // Firebase presence mode: update session doc immediately (best-effort).
      if (state.firebaseSessionDoc) {
        try {
          state.firebaseSessionDoc.set({
            isAuthenticated: state.isAuthenticated,
            userId: state.userId || null,
            updatedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
          }, { merge: true });
        } catch (_) {
          // ignore
        }
      }
    };

    // Initial authentication state
    try {
      applyAuthState(window.appFirebase?.getUser?.() || null);
    } catch (_) {
      applyAuthState(null);
    }

    // Listen for auth changes (app wrapper + event fallback).
    if (window.appFirebase && typeof window.appFirebase.onAuth === 'function') {
      window.appFirebase.onAuth((user) => applyAuthState(user || null));
    }
    document.addEventListener('auth:changed', (e) => applyAuthState(e.detail?.user || null));
    document.addEventListener('appFirebase:authChanged', (e) => applyAuthState(e.detail?.user || null));

    // Try Firebase first, fallback to local
    const firebaseInitialized = await initFirebasePresence();
    
    if (!firebaseInitialized) {
      state.firebasePresenceActive = false;
      state.firebaseSessionDoc = null;
      // Use local storage based tracking
      console.log('[Metrics] Using local storage fallback');
      
      // Initialize session (deviceId based - no duplicates)
      updateLocalSession();
      
      // Count visit only once per browser session
      incrementTotalVisitsOnce();
      
      // Initial UI update
      updateUI(calculateLocalMetrics());
      
      // Periodic update
      const updateInterval = setInterval(() => {
        updateLocalSession();
        updateUI(calculateLocalMetrics());
      }, CONFIG.UPDATE_INTERVAL);
      
      state.intervals.push(updateInterval);
    }

    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
      removeLocalSession();
      state.intervals.forEach(id => clearInterval(id));
      state.unsubscribers.forEach(unsub => {
        if (typeof unsub === 'function') unsub();
      });
    });

    // Handle visibility change - pause/resume heartbeat
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        updateLocalSession();
      }
    });

    console.log('[Metrics] Visitor metrics initialized (deviceId:', state.deviceId, ')');
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
