/**
 * ============================================
 * VISITOR METRICS - Ziyaretçi İstatistikleri
 * ============================================
 * Versiyon: 1.1.0
 * Tarih: 19 Aralık 2025
 * 
 * Online kullanıcı, üye, misafir ve toplam ziyaret
 * sayılarını takip eden ve gösteren modül.
 * 
 * Ziyaret sayımı: Siteye ilk girişte 1 kez sayılır,
 * sayfa geçişlerinde tekrar sayılmaz (session bazlı).
 * 
 * Firebase Realtime Database veya Firestore ile
 * gerçek zamanlı senkronizasyon destekler.
 * Firebase yoksa localStorage ile çalışır.
 */

(function () {
  'use strict';

  // ==========================================
  // CONFIGURATION
  // ==========================================
  
  const CONFIG = {
    // LocalStorage keys
    STORAGE_KEY_SESSION: 'app:visitor:sessionId',
    STORAGE_KEY_VISITS: 'app:visitor:totalVisits',
    STORAGE_KEY_ONLINE: 'app:visitor:online',
    STORAGE_KEY_VISIT_COUNTED: 'app:visitor:visitCounted',
    
    // Session key - used to track if this browser session already counted
    SESSION_STORAGE_KEY: 'app:visitor:currentSession',
    
    // Timing
    HEARTBEAT_INTERVAL: 30000,      // 30 saniye - online check
    SESSION_TIMEOUT: 60000,         // 60 saniye - session timeout
    UPDATE_INTERVAL: 5000,          // 5 saniye - UI update
    
    // Animation
    COUNT_ANIMATION_DURATION: 500,  // ms
  };

  // ==========================================
  // STATE
  // ==========================================
  
  let state = {
    sessionId: null,
    isAuthenticated: false,
    userId: null,
    lastHeartbeat: 0,
    intervals: [],
    unsubscribers: [],
    visitAlreadyCounted: false,
  };

  // ==========================================
  // UTILITY FUNCTIONS
  // ==========================================
  
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
    sessionStorageSet(CONFIG.SESSION_STORAGE_KEY, state.sessionId);
    state.visitAlreadyCounted = true;
  }

  // ==========================================
  // LOCAL STORAGE BASED METRICS (Fallback)
  // ==========================================
  
  function getLocalOnlineSessions() {
    const sessions = storageGet(CONFIG.STORAGE_KEY_ONLINE, {});
    const now = Date.now();
    const active = {};
    
    // Filter out expired sessions
    for (const [id, data] of Object.entries(sessions)) {
      if (now - data.lastSeen < CONFIG.SESSION_TIMEOUT) {
        active[id] = data;
      }
    }
    
    return active;
  }

  function updateLocalSession() {
    if (!state.sessionId) {
      state.sessionId = generateSessionId();
    }

    const sessions = getLocalOnlineSessions();
    
    sessions[state.sessionId] = {
      lastSeen: Date.now(),
      isAuthenticated: state.isAuthenticated,
      userId: state.userId,
    };
    
    storageSet(CONFIG.STORAGE_KEY_ONLINE, sessions);
    state.lastHeartbeat = Date.now();
    
    return sessions;
  }

  function removeLocalSession() {
    if (!state.sessionId) return;
    
    const sessions = storageGet(CONFIG.STORAGE_KEY_ONLINE, {});
    delete sessions[state.sessionId];
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
      
      // Create/update session document
      const sessionDoc = presenceRef.doc(state.sessionId);
      
      await sessionDoc.set({
        lastSeen: window.firebase.firestore.FieldValue.serverTimestamp(),
        isAuthenticated: state.isAuthenticated,
        userId: state.userId || null,
        userAgent: navigator.userAgent.slice(0, 100),
        createdAt: window.firebase.firestore.FieldValue.serverTimestamp(),
      });

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
    // Generate session ID (consistent across page navigations)
    const existingSessionId = sessionStorageGet(CONFIG.SESSION_STORAGE_KEY);
    state.sessionId = existingSessionId || generateSessionId();
    
    // Check authentication state
    if (window.appFirebase && window.appFirebase.user) {
      state.isAuthenticated = true;
      state.userId = window.appFirebase.user.uid;
    }

    // Listen for auth changes
    document.addEventListener('appFirebase:authChanged', (e) => {
      const user = e.detail && e.detail.user;
      state.isAuthenticated = !!user;
      state.userId = user ? user.uid : null;
      
      // Update session
      updateLocalSession();
    });

    // Try Firebase first, fallback to local
    const firebaseInitialized = await initFirebasePresence();
    
    if (!firebaseInitialized) {
      // Use local storage based tracking
      console.log('[Metrics] Using local storage fallback');
      
      // Initialize session
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

    console.log('[Metrics] Visitor metrics initialized');
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
