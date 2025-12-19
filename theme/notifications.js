(function () {
  'use strict';

  const PANEL_ATTR = 'data-notif-panel';
  const PANEL_OPEN_CLASS = 'is-open';
  const MAX_ITEMS = 20;

  let inboxUnsubscribe = null;
  let inboxItems = [];
  let inboxInitial = true;
  let inboxUnreadCount = 0;
  let currentUid = null;

  let pushToken = null;
  let pushBusy = false;

  function showToast(message) {
    if (typeof window.showToast === 'function') {
      window.showToast(message);
      return;
    }

    const existing = document.querySelector('.share-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'share-toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${String(message || '')}`;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function ensureId(el, prefix) {
    if (!el) return '';
    if (el.id) return el.id;
    const id = `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
    el.id = id;
    return id;
  }

  function setBadgeCount(count) {
    const n = Math.max(0, Number(count) || 0);
    document.querySelectorAll('[data-notif-badge]').forEach((el) => {
      el.hidden = n <= 0;
      el.textContent = n > 99 ? '99+' : String(n);
    });
  }

  function isAuthReady() {
    return !!(window.appFirebase && window.appFirebase.enabled && window.appFirebase.getUser && window.appFirebase.getUser());
  }

  function getWebPushPublicKey() {
    const key = typeof window.CF_WEBPUSH_PUBLIC_KEY === 'string'
      ? window.CF_WEBPUSH_PUBLIC_KEY.trim()
      : '';
    return key;
  }

  function getPushWorkerUrl() {
    const raw = typeof window.CF_PUSH_WORKER_URL === 'string'
      ? window.CF_PUSH_WORKER_URL.trim()
      : '';
    if (!raw) return '';
    try {
      return new URL(raw, window.location.origin).toString().replace(/\/+$/, '');
    } catch (_) {
      return raw.replace(/\/+$/, '');
    }
  }

  function isSecureContextForWebPush() {
    const host = window.location.hostname;
    return window.location.protocol === 'https:'
      || host === 'localhost'
      || host === '127.0.0.1'
      || host === '::1';
  }

  function isWebPushSupported() {
    return typeof window !== 'undefined'
      && 'Notification' in window
      && 'serviceWorker' in navigator
      && 'PushManager' in window
      && isSecureContextForWebPush();
  }

  function isWebPushConfigured() {
    return isWebPushSupported()
      && !!getWebPushPublicKey()
      && !!getPushWorkerUrl();
  }

  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  function bytesToBase64Url(bytes) {
    let binary = '';
    bytes.forEach((b) => { binary += String.fromCharCode(b); });
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
  }

  async function hashEndpointToId(endpoint) {
    const ep = String(endpoint || '');
    if (!ep) return '';
    try {
      const data = new TextEncoder().encode(ep);
      const buf = await crypto.subtle.digest('SHA-256', data);
      return bytesToBase64Url(new Uint8Array(buf));
    } catch (_) {
      // Fallback: base64url endpoint (truncated)
      try {
        const b64 = bytesToBase64Url(new TextEncoder().encode(ep));
        return b64.slice(0, 120);
      } catch (_) {
        return '';
      }
    }
  }

  function subscriptionToFields(subscription) {
    if (!subscription) return null;
    const json = typeof subscription.toJSON === 'function' ? subscription.toJSON() : null;
    const endpoint = String(json?.endpoint || subscription.endpoint || '');
    const p256dh = String(json?.keys?.p256dh || '');
    const auth = String(json?.keys?.auth || '');
    if (!endpoint || !p256dh || !auth) return null;
    return { endpoint, p256dh, auth };
  }

  async function getServiceWorkerRegistration() {
    try {
      const existing = await navigator.serviceWorker.getRegistration();
      if (existing) return existing;
    } catch (_) {
      // ignore
    }
    try {
      return await navigator.serviceWorker.register('service-worker.js');
    } catch (_) {
      return null;
    }
  }

  function safeDispatch(name, detail) {
    try {
      document.dispatchEvent(new CustomEvent(name, { detail }));
    } catch (_) {
      // ignore
    }
  }

  function stopInboxWatch() {
    if (!inboxUnsubscribe) return;
    try {
      inboxUnsubscribe();
    } catch (_) {
      // ignore
    }
    inboxUnsubscribe = null;
  }

  function parseTimestampMillis(ts) {
    try {
      if (!ts) return 0;
      if (typeof ts.toMillis === 'function') return ts.toMillis();
      if (ts instanceof Date) return ts.getTime();
      const n = Number(ts);
      return Number.isFinite(n) ? n : 0;
    } catch (_) {
      return 0;
    }
  }

  function formatTime(millis) {
    const t = Number(millis) || 0;
    if (!t) return '';
    try {
      const d = new Date(t);
      return d.toLocaleString('tr-TR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
    } catch (_) {
      return '';
    }
  }

  function normalizeUrl(raw) {
    const s = String(raw || '').trim();
    if (!s) return '';
    try {
      // GitHub Pages project sites live under a sub-path (/{repo}/...).
      // Treat "/page.html" inputs as "currentDir/page.html" to stay in-scope.
      if (s.startsWith('/')) {
        const dir = String(window.location.pathname || '/').replace(/[^/]+$/, '');
        if (dir && s.startsWith(dir)) {
          return new URL(s, window.location.origin).toString();
        }
        const candidate = `${dir}${s.slice(1)}`;
        return new URL(candidate, window.location.origin).toString();
      }
      return new URL(s, window.location.href).toString();
    } catch (_) {
      return s;
    }
  }

  function computeUnread(items) {
    return items.filter((x) => !x.readAt).length;
  }

  function startInboxWatch(uid) {
    stopInboxWatch();
    inboxItems = [];
    inboxUnreadCount = 0;
    inboxInitial = true;
    setBadgeCount(0);

    if (!uid) return;
    if (!window.firebase || typeof window.firebase.firestore !== 'function') return;

    const db = window.firebase.firestore();
    const ref = db.collection('users').doc(String(uid)).collection('inbox')
      .orderBy('createdAt', 'desc')
      .limit(MAX_ITEMS);

    try {
      inboxUnsubscribe = ref.onSnapshot({ includeMetadataChanges: true }, (snap) => {
        const next = [];
        snap.forEach((doc) => {
          const data = doc.data() || {};
          next.push({
            id: doc.id,
            title: String(data.title || '').slice(0, 120),
            body: String(data.body || '').slice(0, 360),
            url: normalizeUrl(data.url || ''),
            createdAt: parseTimestampMillis(data.createdAt),
            readAt: parseTimestampMillis(data.readAt),
          });
        });

        // Sort defensively (createdAt may be missing).
        next.sort((a, b) => (b.createdAt - a.createdAt) || a.id.localeCompare(b.id));
        inboxItems = next;

        const unread = computeUnread(next);
        inboxUnreadCount = unread;
        setBadgeCount(unread);

        // Toast + (free) foreground notification only for new unread additions after initial load.
        if (!inboxInitial) {
          const changes = snap.docChanges ? snap.docChanges() : [];
          const addedUnread = changes.some((c) => c.type === 'added' && !(c.doc?.data?.()?.readAt));
          if (addedUnread) {
            showToast('Yeni bildirim');
            // If the app is open, we can still show a system notification for free (no backend),
            // as long as the user already granted permission.
            try {
              if (Notification?.permission === 'granted') {
                const first = changes.find((c) => c.type === 'added' && !(c.doc?.data?.()?.readAt));
                const data = first?.doc?.data?.() || {};
                const title = String(data.title || 'AlgoSPOT').slice(0, 120);
                const body = String(data.body || '').slice(0, 180);
                const url = normalizeUrl(data.url || '');
                getServiceWorkerRegistration().then((reg) => {
                  if (!reg) return;
                  reg.showNotification(title, {
                    body,
                    icon: './icons/icon-192.png',
                    badge: './icons/icon-192.png',
                    data: { url: url || './' },
                  }).catch(() => {});
                }).catch(() => {});
              }
            } catch (_) {
              // ignore
            }
          }
        }
        inboxInitial = false;

        safeDispatch('notifications:updated', { count: next.length, unread });
      }, () => {
        // ignore
      });
    } catch (_) {
      inboxUnsubscribe = null;
    }
  }

  function isPanelOpen(panel) {
    return !!panel && !panel.hidden && panel.getAttribute('aria-hidden') === 'false';
  }

  function getTriggerForPanel(panel) {
    if (!panel) return null;
    const triggerId = panel.dataset.triggerId;
    if (triggerId) return document.getElementById(triggerId);
    const panelId = panel.id;
    if (!panelId) return null;
    return document.querySelector(`[data-notif-trigger][aria-controls="${panelId}"]`);
  }

  function setExpanded(panel, expanded) {
    const trigger = getTriggerForPanel(panel);
    if (!trigger) return;
    trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  function positionPanel(panel, triggerButton) {
    if (!panel || !triggerButton) return;
    const container = panel.parentElement;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const triggerRect = triggerButton.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
    const viewportMargin = 10;

    let right = Math.max(0, containerRect.right - triggerRect.right);
    const top = Math.max(0, triggerRect.bottom - containerRect.top + 12);

    panel.style.top = `${top}px`;
    panel.style.right = `${right}px`;
    panel.style.left = 'auto';

    const rect1 = panel.getBoundingClientRect();
    if (rect1.left < viewportMargin) {
      right = Math.max(0, right - (viewportMargin - rect1.left));
      panel.style.right = `${right}px`;
    } else if (rect1.right > viewportWidth - viewportMargin) {
      right = right + (rect1.right - (viewportWidth - viewportMargin));
      panel.style.right = `${right}px`;
    }

    const rect2 = panel.getBoundingClientRect();
    const notch = triggerRect.left + triggerRect.width / 2 - rect2.left;
    const notchSafe = Math.max(24, Math.min(notch, rect2.width - 24));
    panel.style.setProperty('--notif-notch-x', `${notchSafe}px`);
    panel.style.setProperty('--notif-origin-x', `${notchSafe}px`);
  }

  function openPanel(panel, triggerButton) {
    if (!panel) return;
    panel.dataset.closeId = '';
    panel.hidden = false;
    panel.setAttribute('aria-hidden', 'false');
    setExpanded(panel, true);
    if (triggerButton) positionPanel(panel, triggerButton);

    panel.classList.remove(PANEL_OPEN_CLASS);
    requestAnimationFrame(() => {
      if (panel.getAttribute('aria-hidden') !== 'false') return;
      panel.classList.add(PANEL_OPEN_CLASS);
    });
  }

  function closePanel(panel) {
    if (!panel) return;
    panel.setAttribute('aria-hidden', 'true');
    setExpanded(panel, false);
    panel.classList.remove(PANEL_OPEN_CLASS);

    const closeId = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    panel.dataset.closeId = closeId;

    const finalize = () => {
      if (panel.dataset.closeId !== closeId) return;
      panel.hidden = true;
      panel.style.removeProperty('top');
      panel.style.removeProperty('right');
      panel.style.removeProperty('left');
      panel.style.removeProperty('--notif-notch-x');
      panel.style.removeProperty('--notif-origin-x');
    };

    const surface = panel.querySelector('.notif-panel__surface');
    const onEnd = (e) => {
      if (panel.dataset.closeId !== closeId) {
        surface?.removeEventListener('transitionend', onEnd);
        return;
      }
      if (e && e.propertyName !== 'clip-path') return;
      surface?.removeEventListener('transitionend', onEnd);
      finalize();
    };

    surface?.addEventListener('transitionend', onEnd);
    window.setTimeout(() => {
      surface?.removeEventListener('transitionend', onEnd);
      finalize();
    }, 340);
  }

  function buildPanel(container, triggerButton) {
    const existing = container.querySelector(`[${PANEL_ATTR}]`);
    if (existing) {
      if (triggerButton) {
        const triggerId = ensureId(triggerButton, 'notif-trigger');
        existing.dataset.triggerId = triggerId;
        if (!existing.id) existing.id = `${triggerId}-panel`;
        triggerButton.setAttribute('aria-controls', existing.id);
        triggerButton.setAttribute('aria-haspopup', 'dialog');
        triggerButton.setAttribute('aria-expanded', isPanelOpen(existing) ? 'true' : 'false');
      }
      return existing;
    }

    const triggerId = triggerButton ? ensureId(triggerButton, 'notif-trigger') : '';

    const panel = document.createElement('div');
    panel.className = 'notif-panel';
    panel.setAttribute(PANEL_ATTR, '');
    panel.setAttribute('aria-hidden', 'true');
    panel.hidden = true;

    if (triggerId) {
      panel.id = `${triggerId}-panel`;
      panel.dataset.triggerId = triggerId;
      triggerButton.setAttribute('aria-controls', panel.id);
      triggerButton.setAttribute('aria-haspopup', 'dialog');
      triggerButton.setAttribute('aria-expanded', 'false');
    }

    panel.innerHTML = `
      <div class="notif-panel__surface">
        <div class="notif-panel__head">
          <div class="notif-panel__title">Bildirimler</div>
          <button type="button" class="notif-panel__close" data-notif-close aria-label="Kapat" title="Kapat">
            <i class="fas fa-xmark" aria-hidden="true"></i>
          </button>
        </div>

        <div class="notif-panel__empty" data-notif-error hidden>Bildirimler için Firebase gerekli.</div>
        <div class="notif-panel__empty" data-notif-signed-out hidden>Bildirim almak için giriş yap.</div>

        <div data-notif-content hidden>
          <div class="notif-panel__section">
            <div class="notif-panel__section-title">Sistem bildirimleri</div>
            <div class="notif-panel__push-row">
              <div class="notif-panel__push-meta">
                <div class="notif-panel__push-status" data-notif-push-status>Kapalı</div>
                <div class="notif-panel__push-hint" data-notif-push-hint>PWA bildirimi için izin ver.</div>
              </div>
              <button type="button" class="btn btn-sm btn-primary" data-notif-enable>Aç</button>
              <button type="button" class="btn btn-sm btn-secondary" data-notif-disable hidden>Kapat</button>
            </div>
          </div>

          <div class="notif-panel__section">
            <div class="notif-panel__section-title">Gelen kutusu</div>
            <div class="notif-panel__list" data-notif-list></div>
            <div class="notif-panel__empty" data-notif-empty hidden>Henüz bildirim yok.</div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(panel);
    return panel;
  }

  function renderPanel(panel) {
    if (!panel) return;

    const content = panel.querySelector('[data-notif-content]');
    const listEl = panel.querySelector('[data-notif-list]');
    const emptyEl = panel.querySelector('[data-notif-empty]');
    const errorEl = panel.querySelector('[data-notif-error]');
    const signedOutEl = panel.querySelector('[data-notif-signed-out]');

    if (!window.appFirebase || !window.appFirebase.enabled) {
      if (content) content.hidden = true;
      if (signedOutEl) signedOutEl.hidden = true;
      if (errorEl) errorEl.hidden = false;
      return;
    }

    if (!isAuthReady()) {
      if (content) content.hidden = true;
      if (errorEl) errorEl.hidden = true;
      if (signedOutEl) signedOutEl.hidden = false;
      return;
    }

    if (errorEl) errorEl.hidden = true;
    if (signedOutEl) signedOutEl.hidden = true;
    if (content) content.hidden = false;

    if (listEl) {
      const items = Array.isArray(inboxItems) ? inboxItems : [];
      const html = items.map((n) => {
        const unread = !n.readAt;
        const title = escapeHtml(n.title || 'Bildirim');
        const body = escapeHtml(n.body || '');
        const time = escapeHtml(formatTime(n.createdAt));
        return `
          <button type="button" class="notif-item ${unread ? 'is-unread' : ''}" data-notif-open data-notif-id="${escapeHtml(n.id)}">
            <div class="notif-item__top">
              <div class="notif-item__title">
                ${unread ? '<span class="notif-item__dot" aria-hidden="true"></span>' : ''}
                <span>${title}</span>
              </div>
              <div class="notif-item__time">${time}</div>
            </div>
            ${body ? `<div class="notif-item__body">${body}</div>` : ''}
          </button>
        `;
      }).join('');

      listEl.innerHTML = html;
      if (emptyEl) emptyEl.hidden = items.length > 0;
    }

    refreshPushUI(panel).catch(() => {});
  }

  async function markNotificationRead(uid, notificationId) {
    if (!uid || !notificationId) return false;
    if (!window.firebase || typeof window.firebase.firestore !== 'function') return false;
    try {
      const db = window.firebase.firestore();
      await db.collection('users').doc(String(uid)).collection('inbox').doc(String(notificationId)).set({
        readAt: window.firebase.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
      return true;
    } catch (_) {
      return false;
    }
  }

  async function ensurePushSubscriptionSaved(uid, subscription) {
    if (!uid || !subscription) return false;
    if (!window.firebase || typeof window.firebase.firestore !== 'function') return false;
    const fields = subscriptionToFields(subscription);
    if (!fields) return false;
    try {
      const db = window.firebase.firestore();
      const id = await hashEndpointToId(fields.endpoint);
      if (!id) return false;
      await db.collection('users').doc(String(uid)).collection('pushTokens').doc(String(id)).set({
        endpoint: fields.endpoint,
        p256dh: fields.p256dh,
        auth: fields.auth,
        userAgent: String(navigator.userAgent || '').slice(0, 180),
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
        v: 2,
      }, { merge: true });
      pushToken = id;
      return true;
    } catch (_) {
      return false;
    }
  }

  async function deletePushSubscription(uid, subscription) {
    if (!uid || !subscription) return false;
    if (!window.firebase || typeof window.firebase.firestore !== 'function') return false;
    const fields = subscriptionToFields(subscription);
    if (!fields) return false;
    try {
      const db = window.firebase.firestore();
      const id = await hashEndpointToId(fields.endpoint);
      if (!id) return false;
      await db.collection('users').doc(String(uid)).collection('pushTokens').doc(String(id)).delete();
      if (pushToken === id) pushToken = null;
      return true;
    } catch (_) {
      return false;
    }
  }

  function setPushBusy(panel, busy) {
    pushBusy = !!busy;
    panel?.querySelectorAll('[data-notif-enable], [data-notif-disable]').forEach((btn) => {
      btn.disabled = pushBusy;
    });
  }

  async function refreshPushUI(panel) {
    if (!panel) return;
    const statusEl = panel.querySelector('[data-notif-push-status]');
    const hintEl = panel.querySelector('[data-notif-push-hint]');
    const btnEnable = panel.querySelector('[data-notif-enable]');
    const btnDisable = panel.querySelector('[data-notif-disable]');

    const setState = ({ status, hint, enabled, canEnable }) => {
      if (statusEl) statusEl.textContent = status || '';
      if (hintEl) hintEl.textContent = hint || '';
      if (btnEnable) btnEnable.hidden = !canEnable || !!enabled;
      if (btnDisable) btnDisable.hidden = !canEnable || !enabled;
    };

    if (!isAuthReady()) {
      setState({ status: 'Kapalı', hint: 'Giriş yapınca açılabilir.', enabled: false, canEnable: false });
      return;
    }

    if (!isWebPushSupported()) {
      setState({ status: 'Kapalı', hint: 'Tarayıcı/PWA push bildirimini desteklemiyor.', enabled: false, canEnable: false });
      return;
    }

    if (!getWebPushPublicKey()) {
      setState({ status: 'Kapalı', hint: 'Web Push public key (VAPID) yapılandırılmamış.', enabled: false, canEnable: false });
      return;
    }

    if (!getPushWorkerUrl()) {
      setState({ status: 'Kapalı', hint: 'Push worker URL yapılandırılmamış.', enabled: false, canEnable: false });
      return;
    }

    const permission = Notification.permission;
    if (permission !== 'granted') {
      setState({ status: 'Kapalı', hint: 'Bildirim izni verilmedi.', enabled: false, canEnable: true });
      return;
    }

    // Permission granted: confirm subscription.
    try {
      const reg = await getServiceWorkerRegistration();
      if (!reg || !reg.pushManager) {
        setState({ status: 'Kapalı', hint: 'Service Worker hazır değil.', enabled: false, canEnable: true });
        return;
      }

      const sub = await reg.pushManager.getSubscription();
      if (sub) {
        await ensurePushSubscriptionSaved(currentUid, sub);
        setState({ status: 'Açık', hint: 'Bu cihaz bildirim alabilir.', enabled: true, canEnable: true });
        return;
      }

      pushToken = null;
      setState({ status: 'Kapalı', hint: 'Bu cihaz için abonelik yok.', enabled: false, canEnable: true });
    } catch (_) {
      setState({ status: 'Kapalı', hint: 'Abonelik kontrol edilemedi.', enabled: false, canEnable: true });
    }
  }

  async function enablePush(panel) {
    if (!isAuthReady()) {
      showToast('Bildirim almak için giriş yapın');
      return;
    }
    if (!isWebPushConfigured()) {
      showToast('Push bildirimi bu ortamda kullanılamıyor');
      return;
    }
    if (pushBusy) return;

    try {
      setPushBusy(panel, true);
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        showToast('Bildirim izni verilmedi');
        return;
      }

      const reg = await getServiceWorkerRegistration();
      if (!reg || !reg.pushManager) {
        showToast('Service Worker hazır değil');
        return;
      }

      const existing = await reg.pushManager.getSubscription();
      const sub = existing || await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(getWebPushPublicKey()),
      });

      await ensurePushSubscriptionSaved(currentUid, sub);
      await refreshPushUI(panel);
      showToast('Bildirimler açıldı');
    } finally {
      setPushBusy(panel, false);
    }
  }

  async function disablePush(panel) {
    if (!isAuthReady()) return;
    if (!isWebPushConfigured()) return;
    if (pushBusy) return;

    try {
      setPushBusy(panel, true);
      const reg = await getServiceWorkerRegistration();
      if (!reg || !reg.pushManager) {
        showToast('Service Worker hazır değil');
        return;
      }

      const sub = await reg.pushManager.getSubscription();
      if (!sub) {
        showToast('Bildirimler zaten kapalı');
        return;
      }

      await sub.unsubscribe();
      await deletePushSubscription(currentUid, sub);
      pushToken = null;
      showToast('Bildirimler kapatıldı');
    } catch (_) {
      showToast('Kapatılamadı');
    } finally {
      setPushBusy(panel, false);
      await refreshPushUI(panel);
    }
  }

  function wirePanel(panel) {
    if (!panel || panel.dataset.wired === '1') return;
    panel.dataset.wired = '1';

    panel.querySelector('[data-notif-close]')?.addEventListener('click', (e) => {
      e.preventDefault();
      closePanel(panel);
    });

    panel.addEventListener('click', async (e) => {
      const openBtn = e.target.closest('[data-notif-open]');
      if (openBtn) {
        e.preventDefault();
        const id = String(openBtn.getAttribute('data-notif-id') || '');
        const rec = inboxItems.find((x) => x.id === id) || null;
        await markNotificationRead(currentUid, id);
        if (rec?.url) {
          window.location.href = rec.url;
          return;
        }
        closePanel(panel);
      }
    });

    panel.querySelector('[data-notif-enable]')?.addEventListener('click', async (e) => {
      e.preventDefault();
      await enablePush(panel);
    });

    panel.querySelector('[data-notif-disable]')?.addEventListener('click', async (e) => {
      e.preventDefault();
      await disablePush(panel);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (window.appFirebase && typeof window.appFirebase.init === 'function') {
      window.appFirebase.init();
    }

    const triggers = Array.from(document.querySelectorAll('[data-notif-trigger]'));
    if (triggers.length === 0) return;

    triggers.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const actionsContainer = btn.closest('.page-header__actions') || btn.parentElement || document.body;
        const panel = buildPanel(actionsContainer, btn);
        wirePanel(panel);
        if (isPanelOpen(panel)) closePanel(panel);
        else {
          renderPanel(panel);
          openPanel(panel, btn);
        }
      });
    });

    // Keep badge in sync on auth.
    if (window.appFirebase && typeof window.appFirebase.onAuth === 'function') {
      window.appFirebase.onAuth((user) => {
        currentUid = user?.uid ? String(user.uid) : null;
        stopInboxWatch();
        setBadgeCount(0);
        if (currentUid) startInboxWatch(currentUid);
      });
    }

    // Initial state
    if (isAuthReady()) {
      currentUid = String(window.appFirebase.getUser().uid);
      startInboxWatch(currentUid);
    }

    window.addEventListener('resize', () => {
      const panels = Array.from(document.querySelectorAll(`[${PANEL_ATTR}]`));
      panels.forEach((panel) => {
        if (!isPanelOpen(panel)) return;
        const trigger = getTriggerForPanel(panel);
        if (!trigger) return;
        positionPanel(panel, trigger);
      });
    });

    // Close panel on outside click / Esc.
    document.addEventListener('click', (e) => {
      const panels = Array.from(document.querySelectorAll(`[${PANEL_ATTR}]`));
      panels.forEach((panel) => {
        if (!isPanelOpen(panel)) return;
        const inside = panel.contains(e.target);
        const trigger = e.target.closest('[data-notif-trigger]');
        if (!inside && !trigger) closePanel(panel);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      const panels = Array.from(document.querySelectorAll(`[${PANEL_ATTR}]`));
      panels.forEach((panel) => {
        if (isPanelOpen(panel)) closePanel(panel);
      });
    });
  });
})();
