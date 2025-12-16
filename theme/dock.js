/**
 * ============================================
 * DOCK JS - Standart Desktop Dock
 * ============================================
 * Versiyon: 3.0.0
 * Tarih: 16 Aralık 2025
 * 
 * Tüm sayfalarda ortak kullanılan dock işlevselliği.
 * Navigasyon, filtre menüsü, tema değiştirme.
 */

'use strict';

class Dock {
    constructor() {
        // DOM Elements
        this.dock = document.querySelector('.session-dock');
        this.filterMenu = document.getElementById('dockFilterMenu');
        this.filterMenuList = document.getElementById('filterMenuList');
        
        // State
        this.currentPage = this.detectCurrentPage();
        this.activeFilter = 'all';
        this.filters = this.getFiltersForPage();
        
        // Init
        this.init();
    }
    
    /**
     * Initialize
     */
    init() {
        // Filter menu can work independently of dock element
        if (this.filterMenu) {
            this.bindFilterMenuEvents();
            this.renderFilterMenu();
        }
        
        // Dock-specific initialization
        if (!this.dock) return;
        
        this.bindEvents();
        this.highlightActiveNav();
        
        console.log('Dock: Initialized for page:', this.currentPage);
    }
    
    /**
     * Bind filter menu events (works even without dock)
     */
    bindFilterMenuEvents() {
        // Close button
        const closeBtn = this.filterMenu?.querySelector('.dock-filter-menu__close');
        closeBtn?.addEventListener('click', () => this.closeFilterMenu());
        
        // Click outside to close
        document.addEventListener('click', (e) => {
            if (this.filterMenu && !this.filterMenu.hidden) {
                const isInMenu = this.filterMenu.contains(e.target);
                const isTrigger = e.target.closest('[data-filter-menu-trigger], [data-action="filters"]');
                if (!isInMenu && !isTrigger) {
                    this.closeFilterMenu();
                }
            }
        });
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.filterMenu && !this.filterMenu.hidden) {
                this.closeFilterMenu();
            }
        });
    }
    
    /**
     * Detect current page from URL
     */
    detectCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        
        if (filename.includes('details')) return 'details';
        if (filename.includes('topics')) return 'topics';
        if (filename.includes('study')) return 'study';
        return 'index';
    }
    
    /**
     * Get filters configuration for current page
     */
    getFiltersForPage() {
        const baseFilters = [
            { id: 'all', label: 'Tümü', icon: 'fa-th-large' },
            { id: 'bakteriyoloji', label: 'Bakteriyoloji', icon: 'fa-bacterium' },
            { id: 'viroloji', label: 'Viroloji', icon: 'fa-virus' },
            { id: 'mikoloji', label: 'Mikoloji', icon: 'fa-seedling' },
            { id: 'parazitoloji', label: 'Parazitoloji', icon: 'fa-bug' },
            { id: 'immunoloji', label: 'İmmunoloji', icon: 'fa-shield-virus' }
        ];
        
        // Page-specific extra filters
        const pageFilters = {
            index: [
                ...baseFilters,
                { id: 'laboratuvar', label: 'Laboratuvar', icon: 'fa-flask' },
                { id: 'sterilizasyon', label: 'Sterilizasyon', icon: 'fa-fire-flame-curved' },
                { id: 'pre-analitik', label: 'Pre-Analitik', icon: 'fa-vial' },
                { id: 'mikrobiyota', label: 'Mikrobiyota', icon: 'fa-dna' },
                { id: 'yeterlilik-2025', label: 'Yeterlilik 2025', icon: 'fa-graduation-cap' }
            ],
            details: [
                ...baseFilters,
                { id: 'laboratuvar', label: 'Laboratuvar', icon: 'fa-flask' }
            ],
            topics: baseFilters,
            study: [
                ...baseFilters,
                { id: 'laboratuvar', label: 'Laboratuvar', icon: 'fa-flask' }
            ]
        };
        
        return pageFilters[this.currentPage] || baseFilters;
    }
    
    /**
     * Bind event listeners
     */
    bindEvents() {
        // Filter menu trigger (desktop dock button)
        const filterTrigger = this.dock.querySelector('[data-filter-menu-trigger]');
        filterTrigger?.addEventListener('click', () => this.toggleFilterMenu());
        
        // Study mode buttons
        if (this.currentPage === 'study') {
            const modeBtns = this.dock.querySelectorAll('[data-mode-trigger]');
            modeBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    modeBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    const mode = btn.dataset.modeTrigger;
                    if (typeof window.setStudyMode === 'function') {
                        window.setStudyMode(mode);
                    }
                });
            });
        }
    }
    
    /**
     * Highlight active navigation item
     */
    highlightActiveNav() {
        const navBtns = this.dock.querySelectorAll('.dock-nav-btn');
        navBtns.forEach(btn => {
            const page = btn.dataset.page;
            btn.classList.toggle('active', page === this.currentPage);
        });
    }
    
    /**
     * Render filter menu items
     */
    renderFilterMenu() {
        if (!this.filterMenuList) return;
        
        // Get content counts
        const counts = this.getFilterCounts();
        
        let html = '';
        this.filters.forEach(filter => {
            const count = counts[filter.id] || 0;
            const isActive = filter.id === this.activeFilter;
            
            html += `
                <button class="dock-filter-menu__item ${isActive ? 'active' : ''}" 
                        data-filter="${filter.id}">
                    <i class="fas ${filter.icon}"></i>
                    <span>${filter.label}</span>
                    <span class="dock-filter-menu__item-count">${count}</span>
                </button>
            `;
        });
        
        this.filterMenuList.innerHTML = html;
        
        // Bind filter clicks
        this.filterMenuList.querySelectorAll('.dock-filter-menu__item').forEach(item => {
            item.addEventListener('click', () => {
                const filterId = item.dataset.filter;
                this.applyFilter(filterId);
            });
        });
    }
    
    /**
     * Get content counts for filters
     */
    getFilterCounts() {
        const counts = { all: 0 };
        
        // Get data based on current page
        let data = [];
        
        if (this.currentPage === 'index' && typeof enrichedContent !== 'undefined') {
            data = enrichedContent;
        } else if (this.currentPage === 'details' && typeof detailsData !== 'undefined') {
            data = detailsData;
        } else if (this.currentPage === 'topics' && typeof topicsData !== 'undefined') {
            data = topicsData;
        } else if (this.currentPage === 'study' && typeof enrichedContent !== 'undefined') {
            data = enrichedContent;
        }
        
        counts.all = data.length;
        
        // Count by category
        data.forEach(item => {
            const category = (item.category || '').toLowerCase()
                .replace(/ı/g, 'i')
                .replace(/ö/g, 'o')
                .replace(/ü/g, 'u')
                .replace(/ş/g, 's')
                .replace(/ç/g, 'c')
                .replace(/ğ/g, 'g')
                .replace(/\s+/g, '-');
            
            // Map various category names to filter IDs
            const categoryMap = {
                'bakteriyoloji': 'bakteriyoloji',
                'klinik-bakteriyoloji': 'bakteriyoloji',
                'genel-mikrobiyoloji': 'bakteriyoloji',
                'viroloji': 'viroloji',
                'mikoloji': 'mikoloji',
                'parazitoloji': 'parazitoloji',
                'immunoloji': 'immunoloji',
                'laboratuvar': 'laboratuvar',
                'sterilizasyon': 'sterilizasyon',
                'pre-analitik': 'pre-analitik',
                'mikrobiyota': 'mikrobiyota',
                'yeterlilik-sinavi-2025': 'yeterlilik-2025'
            };
            
            const filterId = categoryMap[category] || category;
            counts[filterId] = (counts[filterId] || 0) + 1;
        });
        
        return counts;
    }
    
    /**
     * Toggle filter menu
     */
    toggleFilterMenu() {
        if (!this.filterMenu) return;
        
        const isOpen = this.filterMenu.classList.contains('active') || !this.filterMenu.hidden;
        
        if (isOpen) {
            this.closeFilterMenu();
        } else {
            this.openFilterMenu();
        }
    }
    
    /**
     * Open filter menu
     */
    openFilterMenu() {
        if (!this.filterMenu) return;
        
        this.filterMenu.hidden = false;
        this.filterMenu.classList.add('active');
        
        // Trigger reflow for animation
        this.filterMenu.offsetHeight;
        
        // Update counts
        this.renderFilterMenu();
    }
    
    /**
     * Close filter menu
     */
    closeFilterMenu() {
        if (!this.filterMenu) return;
        this.filterMenu.classList.remove('active');
        this.filterMenu.hidden = true;
    }
    
    /**
     * Apply filter
     */
    applyFilter(filterId) {
        this.activeFilter = filterId;
        
        // Update active state in menu
        this.filterMenuList?.querySelectorAll('.dock-filter-menu__item').forEach(item => {
            item.classList.toggle('active', item.dataset.filter === filterId);
        });
        
        // Close menu
        this.closeFilterMenu();
        
        // Apply filter based on page
        this.applyPageFilter(filterId);
    }
    
    /**
     * Apply filter for current page
     */
    applyPageFilter(filterId) {
        const isAll = filterId === 'all';
        
        switch (this.currentPage) {
            case 'index':
                // Reference page - use existing filterCategory function
                if (typeof window.filterCategory === 'function') {
                    // Map filter ID to actual category names used in enrichedContent
                    const categoryMap = {
                        'bakteriyoloji': 'Klinik Bakteriyoloji',
                        'viroloji': 'Viroloji',
                        'mikoloji': 'Mikoloji',
                        'parazitoloji': 'Parazitoloji',
                        'immunoloji': 'İmmunoloji',
                        'laboratuvar': 'Laboratuvar',
                        'sterilizasyon': 'Sterilizasyon',
                        'pre-analitik': 'Pre-Analitik',
                        'mikrobiyota': 'Mikrobiyota',
                        'yeterlilik-2025': 'Yeterlilik sınavı 2025',
                        'genel-mikrobiyoloji': 'Genel Mikrobiyoloji'
                    };
                    
                    const category = isAll ? 'all' : (categoryMap[filterId] || filterId);
                    window.filterCategory(category);
                    console.log('Index: Filtered by', category);
                }
                break;
                
            case 'details':
                // Details page - data uses lowercase categories
                if (typeof window.filterDetailCards === 'function') {
                    window.filterDetailCards(filterId);
                } else {
                    this.filterCards('.detail-card', filterId);
                }
                break;
                
            case 'topics':
                // Topics page - data uses lowercase categories
                if (typeof window.filterTopics === 'function') {
                    window.filterTopics(filterId);
                } else {
                    this.filterCards('.topic-preview', filterId);
                }
                break;
                
            case 'study':
                // Study page - use same filter as index
                if (typeof window.filterCategory === 'function') {
                    const categoryMap = {
                        'bakteriyoloji': 'Klinik Bakteriyoloji',
                        'viroloji': 'Viroloji',
                        'mikoloji': 'Mikoloji',
                        'parazitoloji': 'Parazitoloji',
                        'immunoloji': 'İmmunoloji',
                        'laboratuvar': 'Laboratuvar'
                    };
                    const category = isAll ? 'all' : (categoryMap[filterId] || filterId);
                    window.filterCategory(category);
                    console.log('Study: Filtered by', category);
                }
                break;
        }
    }
    
    /**
     * Generic card filtering
     */
    filterCards(cardSelector, filterId) {
        const cards = document.querySelectorAll(cardSelector);
        const isAll = filterId === 'all';
        
        cards.forEach(card => {
            const category = (card.dataset.category || '').toLowerCase()
                .replace(/ı/g, 'i')
                .replace(/ö/g, 'o')
                .replace(/ü/g, 'u')
                .replace(/ş/g, 's')
                .replace(/ç/g, 'c')
                .replace(/ğ/g, 'g')
                .replace(/\s+/g, '-');
            
            const matches = isAll || category.includes(filterId);
            card.style.display = matches ? '' : 'none';
        });
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.dock = new Dock();
});
