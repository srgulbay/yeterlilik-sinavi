(function () {
  'use strict';

  if (typeof window === 'undefined') return;
  if (!('serviceWorker' in navigator)) return;

  const host = window.location.hostname;
  const isSecure = window.location.protocol === 'https:' || host === 'localhost' || host === '127.0.0.1' || host === '::1';
  if (!isSecure) return;

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch(() => {});
  });
})();
