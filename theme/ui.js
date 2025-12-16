/**
 * UI.js - Merkezi UI Yönetim Modülü
 * Design System v3.0.0 entegrasyonu
 * 
 * Özellikleri:
 * - Tema yönetimi (light/dark)
 * - MobileDock entegrasyonu
 * - Filter panel yönetimi
 * - Event delegation
 * 
 * Not: Arama işlevi global-search.js tarafından yönetilmektedir.
 */

(function () {
    'use strict';

    // ============================================
    // CONSTANTS
    // ============================================
    const THEME_KEY = 'theme';
    const VALID_THEMES = new Set(['light', 'dark']);

    // ============================================
    // THEME MANAGEMENT
    // ============================================
    function safeGetStoredTheme() {
        try {
            const value = localStorage.getItem(THEME_KEY);
            return VALID_THEMES.has(value) ? value : null;
        } catch (error) {
            return null;
        }
    }

    function safeSetStoredTheme(theme) {
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (error) {
            // ignore
        }
    }

    function getTheme() {
        const fromAttr = document.documentElement.getAttribute('data-theme');
        if (VALID_THEMES.has(fromAttr)) return fromAttr;

        const fromStorage = safeGetStoredTheme();
        if (fromStorage) return fromStorage;

        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    }

    function updateThemeUI(theme) {
        const iconClass = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        const textValue = theme === 'dark' ? 'Açık Mod' : 'Koyu Mod';
        const pressed = String(theme === 'dark');

        document.querySelectorAll('[data-theme-icon]').forEach((icon) => {
            icon.className = iconClass;
        });

        document.querySelectorAll('[data-theme-text]').forEach((label) => {
            label.textContent = textValue;
        });

        document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
            button.setAttribute('aria-pressed', pressed);
        });

        // MobileDock tema ikonunu güncelle (eğer varsa)
        const dockThemeBtn = document.querySelector('.dock__pill-btn[data-dock-action="theme"]');
        if (dockThemeBtn) {
            const dockIcon = dockThemeBtn.querySelector('i');
            if (dockIcon) {
                dockIcon.className = iconClass;
            }
        }

        // Panel'deki tema butonunu güncelle
        const panelThemeBtn = document.querySelector('.dock__quick-action[data-action="theme"]');
        if (panelThemeBtn) {
            const panelIcon = panelThemeBtn.querySelector('i');
            const panelText = panelThemeBtn.querySelector('span');
            if (panelIcon) panelIcon.className = iconClass;
            if (panelText) panelText.textContent = textValue;
        }
    }

    function setTheme(nextTheme, { persist = true } = {}) {
        const theme = nextTheme === 'dark' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        if (persist) safeSetStoredTheme(theme);
        updateThemeUI(theme);

        try {
            document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
        } catch (error) {
            // ignore
        }
    }

    function toggleTheme() {
        const current = getTheme();
        setTheme(current === 'dark' ? 'light' : 'dark', { persist: true });
    }

    function initThemeToggles() {
        updateThemeUI(getTheme());

        document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                toggleTheme();
            });
        });
    }

    // ============================================
    // FILTER PANEL MANAGEMENT
    // ============================================
    let filterPanel = null;
    let isFilterOpen = false;

    function openFilters() {
        // Mevcut filter panel varsa aç
        filterPanel = document.querySelector('.filter-panel, #filterPanel, [data-filter-panel]');

        if (filterPanel) {
            filterPanel.classList.add('is-open', 'active');
            isFilterOpen = true;

            // MobileDock'u kapat
            if (window.mobileDock && typeof window.mobileDock.hide === 'function') {
                window.mobileDock.hide();
            }

            document.dispatchEvent(new CustomEvent('filters:open'));
        }
    }

    function closeFilters() {
        if (filterPanel) {
            filterPanel.classList.remove('is-open', 'active');
            isFilterOpen = false;
            document.dispatchEvent(new CustomEvent('filters:close'));
        }
    }

    function toggleFilters() {
        if (isFilterOpen) {
            closeFilters();
        } else {
            openFilters();
        }
    }

    // ============================================
    // MOBILE DOCK EVENT LISTENERS
    // ============================================
    function initMobileDockListeners() {
        // dock:search eventi - GlobalSearch kullanır
        document.addEventListener('dock:search', () => {
            if (window.globalSearch && typeof window.globalSearch.open === 'function') {
                window.globalSearch.open();
            }
        });

        // dock:filters eventi
        document.addEventListener('dock:filters', () => {
            toggleFilters();
        });

        // dock:theme eventi
        document.addEventListener('dock:theme', () => {
            toggleTheme();
        });

        // dock:navigate eventi
        document.addEventListener('dock:navigate', (e) => {
            const { page, url } = e.detail || {};
            if (url) {
                window.location.href = url;
            }
        });

        // Tema değişikliği dinle ve dock'u güncelle
        document.addEventListener('themechange', (e) => {
            const theme = e.detail?.theme;
            if (theme && window.mobileDock) {
                // MobileDock'un tema durumunu güncelle
                updateThemeUI(theme);
            }
        });
    }

    // ============================================
    // INITIALIZATION
    // ============================================
    function init() {
        initThemeToggles();
        initMobileDockListeners();

        // Genel keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Cmd/Ctrl + K = Search (GlobalSearch kullanır)
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                if (window.globalSearch && typeof window.globalSearch.open === 'function') {
                    window.globalSearch.open();
                }
            }
            // Escape = Close modals
            if (e.key === 'Escape') {
                if (isFilterOpen) closeFilters();
            }
        });
    }

    document.addEventListener('DOMContentLoaded', init);

    // ============================================
    // PUBLIC API
    // ============================================
    window.getTheme = getTheme;
    window.setTheme = setTheme;
    window.toggleTheme = toggleTheme;
    window.openFilters = openFilters;
    window.closeFilters = closeFilters;
    window.toggleFilters = toggleFilters;
})();

