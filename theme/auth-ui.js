(function () {
  'use strict';

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

  function setButtonState(button, user) {
    if (!button) return;
    const icon = button.querySelector('i');

    if (!window.appFirebase || !window.appFirebase.enabled) {
      button.setAttribute('aria-label', 'Firebase yapılandırılmamış');
      button.title = 'Firebase yapılandırılmamış';
      if (icon) icon.className = 'fas fa-user-slash';
      return;
    }

    if (user) {
      button.setAttribute('aria-label', 'Çıkış Yap');
      button.title = 'Çıkış Yap';
      if (icon) icon.className = 'fas fa-right-from-bracket';
    } else {
      button.setAttribute('aria-label', 'Giriş Yap');
      button.title = 'Giriş Yap';
      if (icon) icon.className = 'fas fa-right-to-bracket';
    }
  }

  async function handleAuthClick() {
    if (!window.appFirebase || !window.appFirebase.enabled) {
      showToast('Firebase yapılandırılmamış');
      return;
    }

    const user = window.appFirebase.getUser();
    try {
      if (user) {
        await window.appFirebase.signOut();
        showToast('Çıkış yapıldı');
      } else {
        await window.appFirebase.signIn();
        showToast('Giriş yapıldı');
      }
    } catch (err) {
      const msg = (err && err.message) ? err.message : 'İşlem başarısız';
      showToast(msg);
    }
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
        handleAuthClick();
      });
      setButtonState(btn, window.appFirebase?.getUser?.() || null);
    });

    // Subscribe to auth changes.
    if (window.appFirebase && typeof window.appFirebase.onAuth === 'function') {
      window.appFirebase.onAuth((user) => {
        buttons.forEach((btn) => setButtonState(btn, user));
      });
    }

    document.addEventListener('auth:changed', (e) => {
      const user = e.detail?.user ? { uid: e.detail.user.uid } : null;
      buttons.forEach((btn) => setButtonState(btn, user));
    });
  });
})();
