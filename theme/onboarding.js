(function () {
  'use strict';

  if (typeof window === 'undefined') return;

  const STORAGE_KEYS = {
    installDismissed: 'onboarding:installPromptDismissed',
    installLastShownAt: 'onboarding:installPromptLastShownAt',
    iosA2hsWizardShown: 'onboarding:iosA2hsWizardShown',
  };

  const INSTALL_SNOOZE_MS = 1000 * 60 * 60 * 24 * 14; // 14 gün

  function safeStorageGet(key) {
    try {
      return window.localStorage?.getItem(key);
    } catch (_) {
      return null;
    }
  }

  function safeStorageSet(key, value) {
    try {
      window.localStorage?.setItem(key, value);
    } catch (_) {
      // ignore
    }
  }

  function isStandaloneMode() {
    try {
      if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) return true;
      return window.navigator?.standalone === true;
    } catch (_) {
      return false;
    }
  }

  function isIPhoneSafari() {
    const ua = String(window.navigator?.userAgent || '');
    const isIPhone = /iPhone/i.test(ua);
    const isSafari = /Safari/i.test(ua) && !/(CriOS|FxiOS|EdgiOS|OPiOS|SamsungBrowser)/i.test(ua);
    return isIPhone && isSafari;
  }

  function escapeHtml(text) {
    return String(text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // -----------------------------
  // Install prompt (Android/Chrome etc.)
  // -----------------------------
  let deferredPrompt = null;
  let installToastEl = null;

  function removeInstallToast() {
    if (!installToastEl) return;
    try {
      installToastEl.classList.remove('show');
      const el = installToastEl;
      installToastEl = null;
      window.setTimeout(() => el.remove(), 220);
    } catch (_) {
      try {
        installToastEl?.remove?.();
      } catch (_) {
        // ignore
      }
      installToastEl = null;
    }
  }

  function shouldShowInstallToast() {
    if (isStandaloneMode()) return false;
    if (!deferredPrompt) return false;
    if (safeStorageGet(STORAGE_KEYS.installDismissed) === '1') return false;

    const lastShownAt = (() => {
      const raw = safeStorageGet(STORAGE_KEYS.installLastShownAt);
      const n = raw ? Number(raw) : 0;
      return Number.isFinite(n) ? n : 0;
    })();

    if (lastShownAt && Date.now() - lastShownAt < INSTALL_SNOOZE_MS) return false;
    return true;
  }

  async function handleInstallClick() {
    const prompt = deferredPrompt;
    removeInstallToast();

    if (!prompt || typeof prompt.prompt !== 'function') return;
    try {
      await prompt.prompt();
      const res = await prompt.userChoice;
      if (res && res.outcome === 'accepted') {
        safeStorageSet(STORAGE_KEYS.installDismissed, '1');
      }
    } catch (_) {
      // ignore
    } finally {
      deferredPrompt = null;
    }
  }

  function showInstallToast() {
    if (installToastEl) return;

    const existing = document.querySelector('.install-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'install-toast install-toast--confirm';
    toast.setAttribute('role', 'dialog');
    toast.setAttribute('aria-label', 'Uygulamayı yükle');
    toast.innerHTML = `
      <div class="share-toast__text">
        <i class="fas fa-download" aria-hidden="true"></i>
        <div>
          <div style="font-weight:800; letter-spacing:-0.02em;">AlgoSPOT’u yükle</div>
          <div style="font-weight:600; opacity:0.9;">Daha hızlı açılış • çevrimdışı</div>
        </div>
      </div>
      <div class="share-toast__actions">
        <button class="btn btn-primary btn-sm" type="button" data-install-yes>Yükle</button>
        <button class="btn btn-ghost btn-sm" type="button" data-install-later>Sonra</button>
        <button class="btn btn-ghost btn-sm" type="button" data-install-never>Bir daha gösterme</button>
      </div>
    `;
    document.body.appendChild(toast);
    installToastEl = toast;

    const laterBtn = toast.querySelector('[data-install-later]');
    const neverBtn = toast.querySelector('[data-install-never]');
    const yesBtn = toast.querySelector('[data-install-yes]');

    const closeAndSnooze = () => {
      safeStorageSet(STORAGE_KEYS.installLastShownAt, String(Date.now()));
      removeInstallToast();
    };

    laterBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      closeAndSnooze();
    });

    neverBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      safeStorageSet(STORAGE_KEYS.installDismissed, '1');
      closeAndSnooze();
    });

    yesBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      safeStorageSet(STORAGE_KEYS.installLastShownAt, String(Date.now()));
      handleInstallClick();
    });

    window.setTimeout(() => toast.classList.add('show'), 10);
  }

  function maybeShowInstallToast() {
    if (!shouldShowInstallToast()) return;
    showInstallToast();
    safeStorageSet(STORAGE_KEYS.installLastShownAt, String(Date.now()));
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    try {
      event.preventDefault();
    } catch (_) {
      // ignore
    }
    deferredPrompt = event;
    maybeShowInstallToast();
  });

  window.addEventListener('appinstalled', () => {
    safeStorageSet(STORAGE_KEYS.installDismissed, '1');
    removeInstallToast();
    deferredPrompt = null;
  });

  // -----------------------------
  // iPhone A2HS wizard (one-time)
  // -----------------------------
  let modalEl = null;

  function closeModal() {
    const el = modalEl;
    modalEl = null;
    if (!el) return;
    try {
      document.body.classList.remove('modal-open');
    } catch (_) {
      // ignore
    }
    try {
      el.classList.remove('is-open');
      window.setTimeout(() => el.remove(), 180);
    } catch (_) {
      try {
        el.remove();
      } catch (_) {
        // ignore
      }
    }
  }

  function openModal(opts) {
    if (!opts || typeof opts !== 'object') return;
    if (modalEl) closeModal();

    const eyebrow = opts.eyebrow ? escapeHtml(opts.eyebrow) : '';
    const title = escapeHtml(opts.title || '');
    const bodyHtml = String(opts.bodyHtml || '');
    const primaryText = escapeHtml(opts.primaryText || 'Tamam');
    const secondaryText = opts.secondaryText ? escapeHtml(opts.secondaryText) : '';

    const wrapper = document.createElement('div');
    wrapper.className = 'app-modal is-open';
    wrapper.setAttribute('role', 'dialog');
    wrapper.setAttribute('aria-modal', 'true');
    wrapper.innerHTML = `
      <div class="app-modal__backdrop" data-modal-close></div>
      <div class="app-modal__panel" role="document">
        <div class="app-modal__header">
          <div class="app-modal__heading">
            ${eyebrow ? `<div class="app-modal__eyebrow">${eyebrow}</div>` : ''}
            <div class="app-modal__title">${title}</div>
          </div>
          <button class="app-modal__close" type="button" aria-label="Kapat" data-modal-close>
            <i class="fas fa-xmark" aria-hidden="true"></i>
          </button>
        </div>
        <div class="app-modal__body">${bodyHtml}</div>
        <div class="app-modal__actions">
          ${secondaryText ? `<button class="btn btn-ghost" type="button" data-modal-secondary>${secondaryText}</button>` : ''}
          <button class="btn btn-primary" type="button" data-modal-primary>${primaryText}</button>
        </div>
      </div>
    `;

    document.body.appendChild(wrapper);
    modalEl = wrapper;

    try {
      document.body.classList.add('modal-open');
    } catch (_) {
      // ignore
    }

    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      e.preventDefault();
      window.removeEventListener('keydown', onKeyDown);
      closeModal();
    };
    window.addEventListener('keydown', onKeyDown);

    const cleanup = () => {
      window.removeEventListener('keydown', onKeyDown);
    };

    wrapper.addEventListener('click', (e) => {
      const closeHit = e.target.closest('[data-modal-close]');
      if (closeHit) {
        e.preventDefault();
        cleanup();
        closeModal();
        return;
      }

      const secondaryHit = e.target.closest('[data-modal-secondary]');
      if (secondaryHit) {
        e.preventDefault();
        try {
          opts.onSecondary?.();
        } catch (_) {
          // ignore
        }
        cleanup();
        closeModal();
        return;
      }

      const primaryHit = e.target.closest('[data-modal-primary]');
      if (primaryHit) {
        e.preventDefault();
        try {
          opts.onPrimary?.();
        } catch (_) {
          // ignore
        }
        cleanup();
        closeModal();
      }
    });

    window.setTimeout(() => {
      const primary = wrapper.querySelector('[data-modal-primary]');
      primary?.focus?.();
    }, 30);
  }

  function showIPhoneWizard() {
    openModal({
      eyebrow: 'iPhone',
      title: 'Ana Ekrana Ekle',
      primaryText: 'Anladım',
      bodyHtml: `
        <p class="app-modal__desc">AlgoSPOT’u uygulama gibi kullanmak için Ana Ekrana ekleyebilirsin.</p>
        <ol class="app-modal__steps">
          <li>Safari’de <strong>Paylaş</strong> butonuna dokun.</li>
          <li><strong>Ana Ekrana Ekle</strong> seçeneğini seç.</li>
          <li><strong>Ekle</strong> diyerek bitir.</li>
        </ol>
        <p class="app-modal__hint">Bu rehberi sadece bir kez gösteriyoruz.</p>
      `,
    });
  }

  function maybeShowIPhoneWizard() {
    if (isStandaloneMode()) return;
    if (!isIPhoneSafari()) return;
    if (safeStorageGet(STORAGE_KEYS.iosA2hsWizardShown) === '1') return;

    safeStorageSet(STORAGE_KEYS.iosA2hsWizardShown, '1');
    showIPhoneWizard();
  }

  const boot = () => {
    try {
      maybeShowIPhoneWizard();
    } catch (_) {
      // ignore
    }
  };

  if (document.readyState === 'complete') {
    window.setTimeout(boot, 600);
  } else {
    window.addEventListener('load', () => window.setTimeout(boot, 600), { once: true });
  }
})();
