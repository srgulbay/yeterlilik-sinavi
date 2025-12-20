/* eslint-disable no-restricted-globals */

self.addEventListener('push', (event) => {
  const data = (() => {
    try {
      if (!event?.data) return null;
      return event.data.json();
    } catch (_) {
      try {
        const text = event?.data?.text?.();
        if (!text) return null;
        return JSON.parse(text);
      } catch (_) {
        return null;
      }
    }
  })();

  // Avoid double-notifications with other push providers (e.g., FCM).
  // We only handle our own Web Push payloads.
  if (!data || data.source !== 'algospot') return;

  const title = String(data.title || 'AlgoSPOT').slice(0, 120);
  const body = String(data.body || 'Yeni bildirim').slice(0, 360);
  const url = data.url || './';
  const nid = typeof data.nid === 'string' ? data.nid.trim().slice(0, 160) : '';
  if (!title && !body) return;

  event.waitUntil((async () => {
    try {
      // Best-effort de-duplication: if a push message is delivered multiple times,
      // only show it once per `nid` (even if the user dismissed a prior notification).
      if (nid) {
        try {
          const cache = await caches.open('algospot-notif-dedup-v1');
          const req = new Request(`https://algospot-dedup.invalid/${encodeURIComponent(nid)}`);
          const seen = await cache.match(req);
          if (seen) return;
          await cache.put(req, new Response('1'));

          const keys = await cache.keys();
          const MAX_KEYS = 200;
          const excess = keys.length - MAX_KEYS;
          if (excess > 0) {
            await Promise.all(keys.slice(0, excess).map((k) => cache.delete(k)));
          }
        } catch (_) {
          // ignore
        }
      }

      const options = {
        body,
        icon: './icons/icon-192.png',
        badge: './icons/icon-192.png',
        data: { url },
      };
      if (nid) options.tag = `algospot:${nid}`;
      await self.registration.showNotification(title, options);
    } catch (_) {
      // ignore
    }
  })());
});

self.addEventListener('notificationclick', (event) => {
  try {
    event.notification?.close?.();
  } catch (_) {
    // ignore
  }

  const target = (() => {
    const raw = event?.notification?.data?.url;
    if (!raw) return './';
    try {
      const base = self.registration?.scope || self.location.href;
      return new URL(String(raw), base).toString();
    } catch (_) {
      return './';
    }
  })();

  event.waitUntil((async () => {
    try {
      const list = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      const firstWindow = list.find((c) => c && typeof c.focus === 'function') || null;

      // If a tab is already on the target URL, just focus it.
      for (const client of list) {
        if (!client || !client.url) continue;
        if (client.url === target && typeof client.focus === 'function') {
          return client.focus();
        }
      }

      // Otherwise, reuse an existing tab if possible (better UX than opening new tabs).
      if (firstWindow) {
        try {
          await firstWindow.focus();
        } catch (_) {
          // ignore
        }
        if (typeof firstWindow.navigate === 'function') {
          try {
            return await firstWindow.navigate(target);
          } catch (_) {
            // ignore
          }
        }
      }

      if (self.clients.openWindow) return self.clients.openWindow(target);
    } catch (_) {
      // ignore
    }
    return undefined;
  })());
});

const CACHE_VERSION = '2025-12-20-3';
const CORE_CACHE = `app-yeterlilik-core-${CACHE_VERSION}`;
const RUNTIME_CACHE = `app-yeterlilik-runtime-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  './',
  './index.html',
  './details.html',
  './topics.html',
  './study.html',
  './admin.html',
  './notification.html',
  './offline.html',
  './manifest.webmanifest',
  './theme/pwa.js',
  './theme/onboarding.js',
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
  './theme/admin.css',
  './theme/notification.css',
  './theme/mobile-dock.css',
  './theme/global-search.css',
  './theme/app.js',
  './theme/details.js',
  './theme/topics.js',
  './theme/srs.js',
  './theme/firebase-config.js',
  './theme/push-config.js',
  './theme/firebase.js',
  './theme/auth-ui.js',
  './theme/admin-gate.js',
  './theme/notifications.js',
  './theme/admin.js',
  './theme/notification-page.js',
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
