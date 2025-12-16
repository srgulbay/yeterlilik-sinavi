/**
 * ============================================
 * MOBILE DOCK JS - Glassmorphism Pill Dock
 * ============================================
 * Versiyon: 3.0.0 (Glassmorphism Edition)
 * Tarih: 16 Aralık 2025
 * 
 * Mobil dock için JavaScript kontrolü.
 * - Panel açma/kapama
 * - Swipe gestureları
 * - Keyboard navigasyonu
 * - Tema toggle
 * - Sayfa navigasyonu
 * - Arama/Filtre entegrasyonu
 */

'use strict';

/**
 * MobileDock Class
 * Pill şeklinde mobil dock yönetimi
 */
class MobileDock {
    constructor() {
        // DOM Elements
        this.dock = document.getElementById('mobileDock');
        this.pill = this.dock?.querySelector('.dock__pill');
        this.themeToggle = this.dock?.querySelector('[data-action="theme"]');
        
        // Init
        this.init();
    }
    
    /**
     * Initialize dock
     */
    init() {
        if (!this.dock) {
            console.warn('MobileDock: #mobileDock element not found');
            return;
        }
        
        // Bind event listeners
        this.bindEvents();
        
        // Set initial active page
        this.updateActivePage();
        
        // Update theme icon
        this.updateThemeIcon();
        
        // Observe theme changes
        this.observeThemeChanges();
        
        console.log('MobileDock: Initialized');
    }
    
    /**
     * Bind all event listeners
     */
    bindEvents() {
        // Page navigation buttons in pill
        this.dock.querySelectorAll('[data-page]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const page = btn.getAttribute('data-page');
                this.navigateTo(page);
            });
        });
        
        // Search action
        this.dock.querySelectorAll('[data-action="search"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.triggerSearch();
            });
        });
        
        // Filter action
        this.dock.querySelectorAll('[data-action="filters"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.triggerFilters();
            });
        });
        
        // Theme toggle action
        this.dock.querySelectorAll('[data-action="theme"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
        });
    }
    
    /**
     * Update active page indicator
     */
    updateActivePage() {
        const currentPage = this.getCurrentPage();
        
        // Update pill buttons
        this.dock.querySelectorAll('[data-page]').forEach(btn => {
            const page = btn.getAttribute('data-page');
            const isActive = page === currentPage || 
                           (page === 'index' && currentPage === '');
            
            if (isActive) {
                btn.setAttribute('aria-current', 'page');
                btn.classList.add('active');
            } else {
                btn.removeAttribute('aria-current');
                btn.classList.remove('active');
            }
        });
    }
    
    /**
     * Get current page name
     */
    getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || '';
        return filename.replace('.html', '');
    }
    
    /**
     * Navigate to page
     */
    navigateTo(page) {
        const currentPage = this.getCurrentPage();
        
        if (page === currentPage || (page === 'index' && currentPage === '')) {
            return; // Already on this page
        }
        
        const url = page === 'index' ? 'index.html' : `${page}.html`;
        window.location.href = url;
    }
    
    /**
     * Trigger search overlay
     */
    triggerSearch() {
        // Hide dock first
        this.hide();
        
        // Open global search with retry mechanism
        const openSearch = (retries = 3) => {
            if (window.globalSearch && typeof window.globalSearch.open === 'function') {
                window.globalSearch.open();
            } else if (retries > 0) {
                // Retry after a short delay (globalSearch may not be initialized yet)
                setTimeout(() => openSearch(retries - 1), 150);
            }
        };
        
        // Small delay to let dock animation finish
        setTimeout(() => openSearch(), 100);
    }
    
    /**
     * Trigger filter panel - Opens filter dropdown for current page
     */
    triggerFilters() {
        // Use global dock's filter menu if available
        if (window.dock && typeof window.dock.toggleFilterMenu === 'function') {
            window.dock.toggleFilterMenu();
            return;
        }
        
        // Direct access to filter menu element
        const filterMenu = document.getElementById('dockFilterMenu');
        if (filterMenu) {
            const isOpen = filterMenu.classList.contains('active');
            
            if (isOpen) {
                filterMenu.classList.remove('active');
                filterMenu.hidden = true;
            } else {
                filterMenu.hidden = false;
                filterMenu.classList.add('active');
                
                // Render filter items if dock exists
                if (window.dock && typeof window.dock.renderFilterMenu === 'function') {
                    window.dock.renderFilterMenu();
                }
            }
        }
    }
    
    /**
     * Toggle theme (dark/light)
     */
    toggleTheme() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update theme
        html.setAttribute('data-theme', newTheme);
        
        // Save preference
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        this.updateThemeIcon();
        
        // Dispatch event
        this.dispatchEvent('dock:theme-changed', { theme: newTheme });
        
        // Also dispatch global theme change event
        document.dispatchEvent(new CustomEvent('themeChanged', { 
            detail: { theme: newTheme } 
        }));
    }
    
    /**
     * Update theme toggle icon
     */
    updateThemeIcon() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        
        this.dock.querySelectorAll('[data-action="theme"] i').forEach(icon => {
            // Remove existing classes
            icon.classList.remove('fa-sun', 'fa-moon');
            
            // Add appropriate icon
            if (currentTheme === 'dark') {
                icon.classList.add('fa-sun');
            } else {
                icon.classList.add('fa-moon');
            }
        });
        
        // Update text if present
        this.dock.querySelectorAll('[data-action="theme"] .dock__action-text').forEach(text => {
            text.textContent = currentTheme === 'dark' ? 'Açık Mod' : 'Koyu Mod';
        });
    }
    
    /**
     * Observe theme changes from external sources
     */
    observeThemeChanges() {
        // Watch for attribute changes on html element
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    this.updateThemeIcon();
                }
            });
        });
        
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    }
    
    /**
     * Dispatch custom event
     */
    dispatchEvent(name, detail = {}) {
        const event = new CustomEvent(name, { 
            detail,
            bubbles: true 
        });
        document.dispatchEvent(event);
    }
    
    /**
     * Destroy instance
     */
    destroy() {
        console.log('MobileDock: Destroyed');
    }
}

/**
 * Auto-initialize on DOM ready
 */
let mobileDockInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    mobileDockInstance = new MobileDock();
});

/**
 * Export for external use
 */
if (typeof window !== 'undefined') {
    window.MobileDock = MobileDock;
    window.getMobileDock = () => mobileDockInstance;
}
