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

    let suppressRemoteThemeWrite = false;

    function isAuthReady() {
        return !!(window.appFirebase && window.appFirebase.enabled && window.appFirebase.getUser && window.appFirebase.getUser());
    }

    async function hydrateThemeFromUserPrefs() {
        if (!isAuthReady()) return;
        if (!window.appFirebase || typeof window.appFirebase.loadUserPrefs !== 'function') return;

        try {
            const prefs = await window.appFirebase.loadUserPrefs();
            const remoteTheme = prefs && typeof prefs === 'object' ? prefs.theme : null;
            if (remoteTheme === 'dark' || remoteTheme === 'light') {
                suppressRemoteThemeWrite = true;
                setTheme(remoteTheme, { persist: true });
                suppressRemoteThemeWrite = false;
                return;
            }

            // Seed remote if not set yet.
            if (typeof window.appFirebase.setUserPrefs === 'function') {
                const currentTheme = getTheme();
                await window.appFirebase.setUserPrefs({ theme: currentTheme });
            }
        } catch (error) {
            // ignore
        } finally {
            suppressRemoteThemeWrite = false;
        }
    }

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

        if (persist && !suppressRemoteThemeWrite && isAuthReady() && window.appFirebase && typeof window.appFirebase.setUserPrefs === 'function') {
            window.appFirebase.setUserPrefs({ theme }).catch(() => {});
        }

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
        if (window.appFirebase && typeof window.appFirebase.init === 'function') {
            window.appFirebase.init();
        }

        if (window.appFirebase && typeof window.appFirebase.onAuth === 'function') {
            window.appFirebase.onAuth((user) => {
                if (user) hydrateThemeFromUserPrefs();
            });
        }

        if (isAuthReady()) {
            hydrateThemeFromUserPrefs();
        }

        initThemeToggles();
        initMobileDockListeners();
        initPageTransitions(); // Apple-style page transitions

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

    // ============================================
    // PAGE TRANSITIONS - Apple Style
    // ============================================
    function initPageTransitions() {
        // Check for View Transitions API support
        const supportsViewTransitions = 'startViewTransition' in document;
        
        // Respect reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        // Internal navigation links
        const internalLinks = document.querySelectorAll('a[href$=".html"]:not([target="_blank"])');
        
        internalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Skip if same page or external
                if (!href || href.startsWith('http') || href.startsWith('//')) return;
                
                // Skip if modifier key pressed
                if (e.metaKey || e.ctrlKey || e.shiftKey) return;
                
                // Skip if same page
                const currentPage = window.location.pathname.split('/').pop();
                if (href === currentPage) return;
                
                e.preventDefault();
                
                if (prefersReducedMotion) {
                    // Skip animation for reduced motion
                    window.location.href = href;
                } else if (supportsViewTransitions) {
                    // Use View Transitions API
                    document.startViewTransition(async () => {
                        window.location.href = href;
                    });
                } else {
                    // Fallback animation
                    navigateWithFallback(href);
                }
            });
        });
        
        // Also handle dock navigation buttons
        const dockNavBtns = document.querySelectorAll('.dock-nav-btn, .dock__pill-btn[data-page]');
        dockNavBtns.forEach(btn => {
            // If it's already an anchor, don't add extra handler
            if (btn.tagName === 'A' && btn.hasAttribute('href')) return;
            
            const page = btn.getAttribute('data-page');
            if (!page) return;
            
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const href = `${page}.html`;
                
                // Skip if same page
                const currentPage = window.location.pathname.split('/').pop();
                if (href === currentPage) return;
                
                if (prefersReducedMotion) {
                    window.location.href = href;
                } else if (supportsViewTransitions) {
                    document.startViewTransition(async () => {
                        window.location.href = href;
                    });
                } else {
                    navigateWithFallback(href);
                }
            });
        });
        
        // Add page entrance animation class
        document.body.classList.add('page-loaded');
    }
    
    function navigateWithFallback(href) {
        const mainContent = document.querySelector('.main-content');
        const dock = document.querySelector('.session-dock, .mobile-dock');
        const pageHeader = document.querySelector('.page-header');
        
        // Add exit animation
        if (mainContent) {
            mainContent.classList.add('page-transition-exit');
        }
        if (dock) {
            dock.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
            dock.style.opacity = '0';
            dock.style.transform = 'translateY(20px)';
        }
        if (pageHeader) {
            pageHeader.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
            pageHeader.style.opacity = '0';
            pageHeader.style.transform = 'translateY(-20px)';
        }
        
        // Navigate after animation
        setTimeout(() => {
            window.location.href = href;
        }, 250);
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
    window.navigateWithTransition = navigateWithFallback;
})();

