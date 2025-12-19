/* eslint-disable no-restricted-globals */

const CACHE_VERSION = '2025-12-19';
const CORE_CACHE = `app-yeterlilik-core-${CACHE_VERSION}`;
const RUNTIME_CACHE = `app-yeterlilik-runtime-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  './',
  './index.html',
  './details.html',
  './topics.html',
  './study.html',
  './offline.html',
  './manifest.webmanifest',
  './theme/pwa.js',
  './theme/init-theme.js',
  './theme/ui.js',
  './theme/design-tokens.css',
  './theme/base.css',
  './theme/layout.css',
  './theme/components.css',
  './theme/animations.css',
  './theme/utilities.css',
  './theme/style.css',
  './theme/details.css',
  './theme/topics.css',
  './theme/study.css',
  './theme/mobile-dock.css',
  './theme/global-search.css',
  './theme/app.js',
  './theme/details.js',
  './theme/topics.js',
  './theme/srs.js',
  './theme/firebase-config.js',
  './theme/firebase.js',
  './theme/auth-ui.js',
  './theme/dock.js',
  './theme/mobile-dock.js',
  './theme/dock-fab.js',
  './theme/global-search.js',
  './theme/highlighter.js',
  './theme/visitor-metrics.js',
  './data/enriched_content.js',
  './data/details-content.js',
  './data/topics-content.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-192-maskable.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png',
];

function isSameOrigin(requestUrl) {
  try {
    const url = new URL(requestUrl);
    return url.origin === self.location.origin;
  } catch (_) {
    return false;
  }
}

async function cachePutSafe(cacheName, request, response) {
  try {
    const cache = await caches.open(cacheName);
    await cache.put(request, response);
  } catch (_) {
    // ignore
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CORE_CACHE);
    await cache.addAll(PRECACHE_URLS);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => {
      if (!key.startsWith('app-yeterlilik-')) return Promise.resolve(false);
      if (key === CORE_CACHE || key === RUNTIME_CACHE) return Promise.resolve(false);
      return caches.delete(key);
    }));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (!req || req.method !== 'GET') return;
  if (!isSameOrigin(req.url)) return;
  const url = new URL(req.url);

  // HTML navigations: network-first, fallback to cached shell/offline.
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(new Request(req.url, { cache: 'no-cache' }));
        cachePutSafe(RUNTIME_CACHE, req, fresh.clone());
        return fresh;
      } catch (_) {
        const cached = await caches.match(req, { ignoreSearch: true });
        if (cached) return cached;
        const offline = await caches.match('./offline.html', { ignoreSearch: true });
        return offline || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
      }
    })());
    return;
  }

  // JS/CSS: prefer fresh on first reload after deploy.
  const isCriticalAsset = req.destination === 'script'
    || req.destination === 'style'
    || url.pathname.endsWith('.js')
    || url.pathname.endsWith('.css');

  if (isCriticalAsset) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(new Request(req.url, { cache: 'no-cache' }));
        if (fresh && fresh.ok) {
          cachePutSafe(RUNTIME_CACHE, req, fresh.clone());
        }
        return fresh;
      } catch (_) {
        const cached = await caches.match(req, { ignoreSearch: true });
        return cached || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
      }
    })());
    return;
  }

  // Other static assets: stale-while-revalidate.
  event.respondWith((async () => {
    const cached = await caches.match(req, { ignoreSearch: true });

    const revalidate = (async () => {
      try {
        const fresh = await fetch(new Request(req.url, { cache: 'no-cache' }));
        if (fresh && fresh.ok) {
          cachePutSafe(RUNTIME_CACHE, req, fresh.clone());
        }
      } catch (_) {
        // ignore
      }
    })();

    if (cached) {
      // Kick off update in the background.
      event.waitUntil(revalidate);
      return cached;
    }

    try {
      const fresh = await fetch(new Request(req.url, { cache: 'no-cache' }));
      if (fresh && fresh.ok) {
        cachePutSafe(RUNTIME_CACHE, req, fresh.clone());
      }
      return fresh;
    } catch (_) {
      return new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
    }
  })());
});
