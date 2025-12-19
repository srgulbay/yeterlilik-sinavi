(function () {
  'use strict';

  if (typeof window === 'undefined') return;
  if (!('serviceWorker' in navigator)) return;

  const isSecure = window.location.protocol === 'https:' || window.location.hostname === 'localhost';
  if (!isSecure) return;

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch(() => {});
  });
})();

