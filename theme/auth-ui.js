(function () {
  'use strict';

  const PANEL_ATTR = 'data-auth-panel';

  function showToast(message) {
    const existing = document.querySelector('.share-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'share-toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  function getUserLabel(user) {
    const email = user && user.email ? String(user.email) : '';
    if (email) return email;
    return 'Hesap';
  }

  function getUserInitials(user) {
    const email = user && user.email ? String(user.email) : '';
    const base = email ? email.split('@')[0] : 'U';
    const cleaned = base.replace(/[^a-zA-Z0-9ğüşöçıİĞÜŞÖÇ]/g, '').trim();
    const s = cleaned || 'U';
    const a = s.slice(0, 2).toUpperCase();
    return a.length === 1 ? `${a}U` : a;
  }

  function setButtonState(button, user) {
    if (!button) return;
    const icon = button.querySelector('i');

    if (!window.appFirebase || !window.appFirebase.enabled) {
      button.setAttribute('aria-label', 'Firebase yapılandırılmamış');
      button.title = 'Firebase yapılandırılmamış';
      button.classList.remove('auth-user-btn');
      // Always replace content to avoid leaving stale signed-in label/avatar.
      button.innerHTML = '<i class="fas fa-user-slash"></i>';
      return;
    }

    if (user) {
      const label = getUserLabel(user);
      const initials = getUserInitials(user);
      button.classList.add('auth-user-btn');
      button.setAttribute('aria-label', 'Hesap menüsü');
      button.title = label;
      button.innerHTML = `
        <span class="auth-user-btn__avatar" aria-hidden="true">${escapeHtml(initials)}</span>
        <span class="auth-user-btn__text">${escapeHtml(label)}</span>
        <i class="fas fa-chevron-down auth-user-btn__chevron" aria-hidden="true"></i>
      `;
    } else {
      button.setAttribute('aria-label', 'Giriş Yap');
      button.title = 'Giriş Yap';
      button.classList.remove('auth-user-btn');
      // Always replace content to avoid leaving stale signed-in label/avatar.
      button.innerHTML = '<i class="fas fa-right-to-bracket"></i>';
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function buildPanel(container) {
    const existing = container.querySelector(`[${PANEL_ATTR}]`);
    if (existing) return existing;

    const recaptchaId = `auth-recaptcha-${Math.random().toString(36).slice(2)}`;

    const panel = document.createElement('div');
    panel.className = 'auth-panel';
    panel.setAttribute(PANEL_ATTR, '');
    panel.setAttribute('aria-hidden', 'true');
    panel.hidden = true;

    panel.innerHTML = `
      <div class="auth-panel__signed-in" data-auth-signed-in hidden>
        <div class="auth-panel__user">
          <div class="avatar avatar-sm auth-panel__avatar" data-auth-avatar aria-hidden="true">U</div>
          <div class="auth-panel__user-meta">
            <div class="auth-panel__user-title">Hesap</div>
            <div class="auth-panel__user-email" data-auth-email></div>
          </div>
        </div>
        <div class="auth-panel__actions auth-panel__actions--single">
          <button type="button" class="btn btn-secondary btn-full" data-auth-logout>
            <i class="fas fa-right-from-bracket"></i>
            Çıkış Yap
          </button>
        </div>
      </div>

      <div class="auth-panel__signed-out" data-auth-signed-out>
        <div class="auth-panel__tabs" role="tablist" aria-label="Giriş seçenekleri">
          <button type="button" class="auth-panel__tab is-active" role="tab" aria-selected="true" data-auth-tab="google">Google</button>
          <button type="button" class="auth-panel__tab" role="tab" aria-selected="false" data-auth-tab="email">E-posta</button>
          <button type="button" class="auth-panel__tab" role="tab" aria-selected="false" data-auth-tab="phone">Telefon</button>
        </div>
        <div class="auth-panel__body">
          <div class="auth-panel__view" data-auth-view="google">
            <button type="button" class="btn btn-primary btn-full" data-auth-google>
              <i class="fa-brands fa-google"></i>
              Google ile devam et
            </button>
          </div>

          <div class="auth-panel__view" data-auth-view="email" hidden>
            <div class="auth-panel__form">
              <div class="auth-panel__field">
                <label class="auth-panel__label" for="authEmail">E-posta</label>
                <input class="input" id="authEmail" type="email" autocomplete="email" placeholder="ornek@mail.com" />
              </div>
              <div class="auth-panel__field">
                <label class="auth-panel__label" for="authPassword">Şifre</label>
                <input class="input" id="authPassword" type="password" autocomplete="current-password" placeholder="••••••••" />
              </div>
              <div class="auth-panel__actions">
                <button type="button" class="btn btn-primary" data-auth-email-signin>Giriş</button>
                <button type="button" class="btn btn-secondary" data-auth-email-signup>Kayıt Ol</button>
              </div>
            </div>
          </div>

          <div class="auth-panel__view" data-auth-view="phone" hidden>
            <div class="auth-panel__form">
              <div class="auth-panel__field">
                <label class="auth-panel__label" for="authPhone">Telefon</label>
                <input class="input" id="authPhone" type="tel" autocomplete="tel" placeholder="+90..." />
                <p class="auth-panel__hint">Format: +90XXXXXXXXXX</p>
              </div>
              <div class="auth-panel__actions auth-panel__actions--single">
                <button type="button" class="btn btn-primary btn-full" data-auth-phone-send>Kod Gönder</button>
              </div>

              <div class="auth-panel__divider"></div>

              <div class="auth-panel__field">
                <label class="auth-panel__label" for="authPhoneCode">SMS Kod</label>
                <input class="input" id="authPhoneCode" inputmode="numeric" autocomplete="one-time-code" placeholder="123456" />
              </div>
              <div class="auth-panel__actions auth-panel__actions--single">
                <button type="button" class="btn btn-primary btn-full" data-auth-phone-verify>Doğrula</button>
              </div>
              <div class="auth-panel__recaptcha" id="${escapeHtml(recaptchaId)}"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    panel.dataset.recaptchaId = recaptchaId;
    container.appendChild(panel);
    return panel;
  }

  function refreshPanelAuthState(panel) {
    if (!panel) return;
    const user = window.appFirebase?.getUser?.() || null;
    const signedIn = panel.querySelector('[data-auth-signed-in]');
    const signedOut = panel.querySelector('[data-auth-signed-out]');
    if (signedIn) signedIn.hidden = !user;
    if (signedOut) signedOut.hidden = !!user;

    if (user) {
      const emailEl = panel.querySelector('[data-auth-email]');
      const avatarEl = panel.querySelector('[data-auth-avatar]');
      if (emailEl) emailEl.textContent = getUserLabel(user);
      if (avatarEl) avatarEl.textContent = getUserInitials(user);
    } else {
      // Ensure default tab when opening signed-out panel.
      setActiveTab(panel, 'google');
    }
  }

  function isPanelOpen(panel) {
    return !!panel && !panel.hidden && panel.getAttribute('aria-hidden') === 'false';
  }

  function openPanel(panel) {
    if (!panel) return;
    panel.hidden = false;
    panel.setAttribute('aria-hidden', 'false');
  }

  function closePanel(panel) {
    if (!panel) return;
    panel.hidden = true;
    panel.setAttribute('aria-hidden', 'true');
  }

  function setActiveTab(panel, tabName) {
    const name = String(tabName || 'google');
    const scope = panel.querySelector('[data-auth-signed-out]') || panel;
    const tabs = Array.from(scope.querySelectorAll('.auth-panel__tab'));
    const views = Array.from(scope.querySelectorAll('.auth-panel__view'));

    tabs.forEach((t) => {
      const active = t.dataset.authTab === name;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    views.forEach((v) => {
      v.hidden = v.dataset.authView !== name;
    });
  }

  function setBusy(panel, busy) {
    if (!panel) return;
    panel.classList.toggle('is-busy', !!busy);
    const buttons = Array.from(panel.querySelectorAll('button'));
    buttons.forEach((b) => {
      b.disabled = !!busy;
    });
  }

  async function handleAuthClick(button) {
    if (!window.appFirebase || !window.appFirebase.enabled) {
      showToast('Firebase yapılandırılmamış');
      return;
    }

    const user = window.appFirebase.getUser();
    try {
      const actionsContainer = button.closest('.page-header__actions') || button.parentElement || document.body;
      const panel = buildPanel(actionsContainer);
      refreshPanelAuthState(panel);

      if (isPanelOpen(panel)) {
        closePanel(panel);
      } else {
        openPanel(panel);
      }
    } catch (err) {
      const msg = (err && err.message) ? err.message : 'İşlem başarısız';
      showToast(msg);
    }
  }

  function wirePanel(panel) {
    if (!panel || panel.dataset.wired === '1') return;
    panel.dataset.wired = '1';

    panel.addEventListener('click', (e) => {
      const tabBtn = e.target.closest('.auth-panel__tab');
      if (tabBtn) {
        e.preventDefault();
        setActiveTab(panel, tabBtn.dataset.authTab);
        return;
      }
    });

    const btnGoogle = panel.querySelector('[data-auth-google]');
    const btnEmailSignIn = panel.querySelector('[data-auth-email-signin]');
    const btnEmailSignUp = panel.querySelector('[data-auth-email-signup]');
    const btnPhoneSend = panel.querySelector('[data-auth-phone-send]');
    const btnPhoneVerify = panel.querySelector('[data-auth-phone-verify]');
    const btnLogout = panel.querySelector('[data-auth-logout]');

    btnGoogle?.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        setBusy(panel, true);
        await window.appFirebase.signIn();
        closePanel(panel);
        showToast('Giriş yapıldı');
      } catch (err) {
        showToast(err?.message || 'Giriş başarısız');
      } finally {
        setBusy(panel, false);
      }
    });

    function getEmailInputs() {
      const email = panel.querySelector('#authEmail')?.value || '';
      const password = panel.querySelector('#authPassword')?.value || '';
      return { email, password };
    }

    btnEmailSignIn?.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        setBusy(panel, true);
        const { email, password } = getEmailInputs();
        await window.appFirebase.signInWithEmailPassword(email, password);
        closePanel(panel);
        showToast('Giriş yapıldı');
      } catch (err) {
        showToast(err?.message || 'Giriş başarısız');
      } finally {
        setBusy(panel, false);
      }
    });

    btnEmailSignUp?.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        setBusy(panel, true);
        const { email, password } = getEmailInputs();
        await window.appFirebase.signUpWithEmailPassword(email, password);
        closePanel(panel);
        showToast('Kayıt olundu');
      } catch (err) {
        showToast(err?.message || 'Kayıt başarısız');
      } finally {
        setBusy(panel, false);
      }
    });

    btnPhoneSend?.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        setBusy(panel, true);
        const phoneNumber = panel.querySelector('#authPhone')?.value || '';
        const recaptchaId = panel.dataset.recaptchaId;
        await window.appFirebase.startPhoneSignIn(phoneNumber, recaptchaId);
        showToast('Kod gönderildi');
      } catch (err) {
        showToast(err?.message || 'Kod gönderilemedi');
      } finally {
        setBusy(panel, false);
      }
    });

    btnPhoneVerify?.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        setBusy(panel, true);
        const code = panel.querySelector('#authPhoneCode')?.value || '';
        await window.appFirebase.confirmPhoneCode(code);
        closePanel(panel);
        showToast('Giriş yapıldı');
      } catch (err) {
        showToast(err?.message || 'Doğrulama başarısız');
      } finally {
        setBusy(panel, false);
      }
    });

    btnLogout?.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        setBusy(panel, true);
        await window.appFirebase.signOut();
        closePanel(panel);
        showToast('Çıkış yapıldı');
      } catch (err) {
        showToast(err?.message || 'Çıkış başarısız');
      } finally {
        setBusy(panel, false);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Initialize Firebase if possible.
    if (window.appFirebase && typeof window.appFirebase.init === 'function') {
      window.appFirebase.init();
    }

    const buttons = Array.from(document.querySelectorAll('[data-auth-trigger]'));
    buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        handleAuthClick(btn);

        // Ensure panel exists and is wired when opening for the first time.
        const actionsContainer = btn.closest('.page-header__actions') || btn.parentElement;
        if (actionsContainer) {
          const panel = actionsContainer.querySelector(`[${PANEL_ATTR}]`) || buildPanel(actionsContainer);
          wirePanel(panel);
          refreshPanelAuthState(panel);
        }
      });
      setButtonState(btn, window.appFirebase?.getUser?.() || null);
    });

    // Close panel on outside click / Esc.
    document.addEventListener('click', (e) => {
      const panels = Array.from(document.querySelectorAll(`[${PANEL_ATTR}]`));
      panels.forEach((panel) => {
        if (!isPanelOpen(panel)) return;
        const inside = panel.contains(e.target);
        const trigger = e.target.closest('[data-auth-trigger]');
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

    // Subscribe to auth changes.
    if (window.appFirebase && typeof window.appFirebase.onAuth === 'function') {
      window.appFirebase.onAuth((user) => {
        buttons.forEach((btn) => setButtonState(btn, user));

        // Update any existing panels.
        const panels = Array.from(document.querySelectorAll(`[${PANEL_ATTR}]`));
        panels.forEach((panel) => refreshPanelAuthState(panel));

        // When user logs in, close any open panel.
        if (user) {
          panels.forEach((panel) => closePanel(panel));
        }
      });
    }

    document.addEventListener('auth:changed', (e) => {
      const user = e.detail?.user ? { uid: e.detail.user.uid, email: e.detail.user.email || null } : null;
      buttons.forEach((btn) => setButtonState(btn, user));

      const panels = Array.from(document.querySelectorAll(`[${PANEL_ATTR}]`));
      panels.forEach((panel) => refreshPanelAuthState(panel));

      if (user) {
        panels.forEach((panel) => closePanel(panel));
      }
    });
  });
})();
