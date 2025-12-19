// Firebase web config for this site.
// This file is safe to commit (it is not a secret), but it identifies your project.

(function () {
  const config = {
    apiKey: "AIzaSyBQx26Z026eg4Z3C7o4pHx4mAJBQYK-AV4",
    authDomain: "yeterlilik-6e308.firebaseapp.com",
    projectId: "yeterlilik-6e308",
    storageBucket: "yeterlilik-6e308.firebasestorage.app",
    messagingSenderId: "574743480974",
    appId: "1:574743480974:web:c37fffa4b804e0185797df",
    measurementId: "G-SSHLXEZZZ9"
  };

  // Expose to both window and service worker global.
  try {
    if (typeof self !== 'undefined') self.FIREBASE_CONFIG = config;
  } catch (_) {
    // ignore
  }
  try {
    if (typeof window !== 'undefined') window.FIREBASE_CONFIG = config;
  } catch (_) {
    // ignore
  }

  // Optional: Web Push certificates key (VAPID key) for Firebase Cloud Messaging.
  // Fill this in Firebase Console -> Project settings -> Cloud Messaging -> Web Push certificates.
  try {
    if (typeof self !== 'undefined' && typeof self.FIREBASE_MESSAGING_VAPID_KEY !== 'string') {
      self.FIREBASE_MESSAGING_VAPID_KEY = '';
    }
  } catch (_) {
    // ignore
  }
  try {
    if (typeof window !== 'undefined' && typeof window.FIREBASE_MESSAGING_VAPID_KEY !== 'string') {
      window.FIREBASE_MESSAGING_VAPID_KEY = '';
    }
  } catch (_) {
    // ignore
  }
})();
