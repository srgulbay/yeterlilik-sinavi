/**
 * ============================================
 * DOCK JS - Standart Desktop Dock
 * ============================================
 * Versiyon: 3.1.0
 * Tarih: 16 Aralık 2025
 * 
 * Tüm sayfalarda ortak kullanılan dock işlevselliği.
 * Navigasyon, segment control, tema değiştirme.
 */

'use strict';

class Dock {
    constructor() {
        // DOM Elements
        this.dock = document.querySelector('.session-dock');
        this.mobileDock = document.querySelector('.mobile-dock');
        
        // State
        this.currentPage = this.detectCurrentPage();
        this.activeSegment = 'all';
        
        // Init
        this.init();
    }
    
    /**
     * Initialize
     */
    init() {
        // Get segments (veri yüklendikten sonra)
        this.segments = this.getSegmentsForPage();
        console.log('Dock: Segments loaded:', this.segments.length, 'segments');
        
        // Render segment controls
        this.renderSegmentControls();
        
        // Dock-specific initialization
        if (this.dock) {
            this.bindEvents();
            this.highlightActiveNav();
        }
        
        console.log('Dock: Initialized for page:', this.currentPage);
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
     * Get data source for current page
     */
    getDataSource() {
        let data = [];
        switch (this.currentPage) {
            case 'index':
                data = window.contentData || [];
                break;
            case 'details':
                data = window.detailsData || [];
                break;
            case 'topics':
                data = window.topicsData || [];
                break;
            case 'study':
                data = window.contentData || [];
                break;
            default:
                data = [];
        }
        console.log('Dock: getDataSource for', this.currentPage, '- found', data.length, 'items');
        return data;
    }
    
    /**
     * Normalize category name for matching
     * Handles both "Klinik Bakteriyoloji" and "bakteriyoloji" formats
     */
    normalizeCategory(category) {
        if (!category) return '';
        const lower = category.toLowerCase().trim();
        
        // Map variations to standard segment IDs
        const mappings = {
            'bakteriyoloji': 'Klinik Bakteriyoloji',
            'klinik bakteriyoloji': 'Klinik Bakteriyoloji',
            'viroloji': 'Viroloji',
            'mikoloji': 'Mikoloji',
            'parazitoloji': 'Parazitoloji',
            'genel': 'Genel Mikrobiyoloji',
            'genel mikrobiyoloji': 'Genel Mikrobiyoloji',
            'sterilizasyon': 'Sterilizasyon',
            'pre-analitik': 'Pre-Analitik',
            'preanalitik': 'Pre-Analitik',
            'enfeksiyon': 'Enfeksiyon Hastalıkları',
            'enfeksiyon hastalıkları': 'Enfeksiyon Hastalıkları',
            'laboratuvar': 'laboratuvar',
            'immunoloji': 'immunoloji',
            'yeterlilik sınavı 2025': 'Yeterlilik sınavı 2025',
            'hastane enfeksiyonları': 'Hastane Enfeksiyonları',
            'mikrobiyota': 'Mikrobiyota'
        };
        
        return mappings[lower] || category;
    }
    
    /**
     * Count items per category from data source
     */
    getCategoryCounts() {
        const data = this.getDataSource();
        const counts = { all: data.length };
        
        if (!data || data.length === 0) {
            console.warn('Dock: No data available for counting');
            return counts;
        }
        
        data.forEach(item => {
            const rawCat = item.category || item.topic || 'Diğer';
            const cat = this.normalizeCategory(rawCat);
            counts[cat] = (counts[cat] || 0) + 1;
        });
        
        console.log('Dock: Category counts:', counts);
        return counts;
    }
    
    /**
     * Get SRS mode counts from srsManager
     */
    getSRSCounts() {
        const manager = window.srsManager;
        if (!manager) return { all: 0, due: 0, new: 0, difficult: 0, mastered: 0 };
        
        const cards = manager.cards || [];
        const counts = {
            all: cards.length,
            due: 0,
            new: 0,
            difficult: 0,
            mastered: 0
        };
        
        cards.forEach(card => {
            const state = card.srsState || {};
            if (state.mastered) {
                counts.mastered++;
            } else if (state.repetitions === 0) {
                counts.new++;
            } else if (state.easeFactor < 2.0) {
                counts.difficult++;
            }
            
            // Due check
            if (state.nextReview) {
                const now = Date.now();
                if (state.nextReview <= now) {
                    counts.due++;
                }
            }
        });
        
        return counts;
    }
    
    /**
     * Get segments configuration for current page
     * Only returns segments that have content
     */
    getSegmentsForPage() {
        // Tüm olası kategori tanımları (verideki tüm kategorileri kapsar)
        const allCategorySegments = [
            { id: 'all', label: 'Tümü', icon: 'fa-th-large' },
            { id: 'favorites', label: 'Favoriler', icon: 'fa-star' },
            // Ana kategoriler
            { id: 'Klinik Bakteriyoloji', label: 'Bakteriyoloji', icon: 'fa-microscope' },
            { id: 'Viroloji', label: 'Viroloji', icon: 'fa-virus' },
            { id: 'Mikoloji', label: 'Mikoloji', icon: 'fa-seedling' },
            { id: 'Parazitoloji', label: 'Parazitoloji', icon: 'fa-bug' },
            { id: 'Enfeksiyon Hastalıkları', label: 'Enfeksiyon', icon: 'fa-heartbeat' },
            { id: 'Pre-Analitik', label: 'Pre-Analitik', icon: 'fa-vial' },
            { id: 'Sterilizasyon', label: 'Sterilizasyon', icon: 'fa-fire-flame-curved' },
            { id: 'Genel Mikrobiyoloji', label: 'Genel', icon: 'fa-bacterium' },
            // Ek kategoriler (veride bulunan)
            { id: 'Yeterlilik sınavı 2025', label: '2025', icon: 'fa-calendar' },
            { id: 'Hastane Enfeksiyonları', label: 'Hastane', icon: 'fa-hospital' },
            { id: 'Mikrobiyota', label: 'Mikrobiyota', icon: 'fa-bacteria' },
            { id: 'laboratuvar', label: 'Laboratuvar', icon: 'fa-flask' },
            { id: 'immunoloji', label: 'İmmünoloji', icon: 'fa-shield-virus' }
        ];
        
        // SRS modları (study sayfası için)
        const allStudySegments = [
            { id: 'all', label: 'Tümü', icon: 'fa-shuffle' },
            { id: 'due', label: 'Tekrar', icon: 'fa-clock-rotate-left' },
            { id: 'new', label: 'Yeni', icon: 'fa-sparkles' },
            { id: 'difficult', label: 'Zor', icon: 'fa-fire' },
            { id: 'mastered', label: 'Ustalaşılan', icon: 'fa-check-double' }
        ];
        
        if (this.currentPage === 'study') {
            // Study sayfası - SRS modlarını göster (hepsi her zaman görünsün)
            return allStudySegments;
        } else {
            // Diğer sayfalar - Sadece içerik olan kategorileri göster
            const counts = this.getCategoryCounts();
            return allCategorySegments.filter(seg => {
                // "Tümü" her zaman göster
                if (seg.id === 'all' || seg.id === 'favorites') return true;
                // Diğerleri için içerik kontrolü
                return counts[seg.id] > 0;
            });
        }
    }
    
    /**
     * Render segment controls in both docks
     */
    renderSegmentControls() {
        console.log('Dock: renderSegmentControls called');
        console.log('Dock: segments to render:', this.segments);
        
        // Desktop dock segment
        const desktopContainer = this.dock?.querySelector('.dock-segment-container');
        console.log('Dock: Desktop container found:', !!desktopContainer);
        if (desktopContainer) {
            const html = this.createSegmentHTML('dockSegment');
            console.log('Dock: Generated HTML length:', html.length);
            desktopContainer.innerHTML = html;
            this.initSegmentControl('dockSegment');
            this.checkScrollable(desktopContainer);
        }
        
        // Mobile dock segment
        const mobileContainer = this.mobileDock?.querySelector('.mobile-dock__segment');
        console.log('Dock: Mobile container found:', !!mobileContainer);
        if (mobileContainer) {
            mobileContainer.innerHTML = this.createSegmentHTML('mobileSegment', true);
            this.initSegmentControl('mobileSegment');
            this.checkScrollable(mobileContainer);
        }
    }
    
    /**
     * Check if container needs scrolling and add/remove scrollable class
     */
    checkScrollable(container) {
        if (!container) return;
        
        const checkOverflow = () => {
            const isScrollable = container.scrollWidth > container.clientWidth + 2;
            container.classList.toggle('scrollable', isScrollable);
        };
        
        // Initial check
        requestAnimationFrame(checkOverflow);
        
        // Resize observer for responsive changes
        const resizeObserver = new ResizeObserver(checkOverflow);
        resizeObserver.observe(container);
    }
    
    /**
     * Create segment control HTML
     */
    createSegmentHTML(id, isMobile = false) {
        const mobileClass = isMobile ? 'dock-segment--mobile' : '';
        
        let buttonsHTML = this.segments.map((seg, index) => `
            <button class="dock-segment__item ${index === 0 ? 'active' : ''}" 
                    data-segment="${seg.id}" 
                    role="tab" 
                    aria-selected="${index === 0}"
                    title="${seg.label}">
                <i class="fas ${seg.icon}"></i>
            </button>
        `).join('');
        
        return `
            <nav class="dock-segment ${mobileClass}" id="${id}" role="tablist" aria-label="Filtreler">
                <div class="dock-segment__indicator"></div>
                ${buttonsHTML}
            </nav>
        `;
    }
    
    /**
     * Initialize a segment control
     */
    initSegmentControl(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn('Dock: Container not found:', containerId);
            return;
        }
        
        const items = container.querySelectorAll('.dock-segment__item');
        const indicator = container.querySelector('.dock-segment__indicator');
        
        console.log('Dock: Initializing segment control:', containerId, 'with', items.length, 'items');
        
        // Position indicator on first active
        const activeItem = container.querySelector('.dock-segment__item.active');
        if (activeItem && indicator) {
            this.positionIndicator(indicator, activeItem, container);
        }
        
        // Click handlers
        items.forEach(item => {
            item.addEventListener('click', () => {
                const segmentId = item.dataset.segment;
                console.log('Dock: Segment clicked:', segmentId);
                this.selectSegment(segmentId);
            });
        });
        
        // Resize observer
        const resizeObserver = new ResizeObserver(() => {
            const current = container.querySelector('.dock-segment__item.active');
            if (current && indicator) {
                this.positionIndicator(indicator, current, container);
            }
        });
        resizeObserver.observe(container);
    }
    
    /**
     * Position the sliding indicator
     */
    positionIndicator(indicator, targetItem, container) {
        const containerRect = container.getBoundingClientRect();
        const itemRect = targetItem.getBoundingClientRect();
        const scrollLeft = container.scrollLeft || 0;
        const padding = 3;
        
        const left = itemRect.left - containerRect.left + scrollLeft;
        indicator.style.transform = `translateX(${left - padding}px)`;
        indicator.style.width = `${itemRect.width}px`;
    }
    
    /**
     * Select a segment and sync all controls
     */
    selectSegment(segmentId) {
        this.activeSegment = segmentId;
        
        // Sync both segment controls
        ['dockSegment', 'mobileSegment'].forEach(containerId => {
            const container = document.getElementById(containerId);
            if (!container) return;
            
            const items = container.querySelectorAll('.dock-segment__item');
            const indicator = container.querySelector('.dock-segment__indicator');
            
            items.forEach(item => {
                const isActive = item.dataset.segment === segmentId;
                item.classList.toggle('active', isActive);
                item.setAttribute('aria-selected', isActive);
                
                if (isActive && indicator) {
                    this.positionIndicator(indicator, item, container);
                    // Scroll active item into view smoothly
                    this.scrollItemIntoView(item, container);
                }
            });
        });
        
        // Apply filter/action based on page
        this.applySegmentAction(segmentId);
    }
    
    /**
     * Scroll the selected item into view with smooth animation
     */
    scrollItemIntoView(item, container) {
        // Get the scrollable parent (segment container or mobile segment)
        const scrollParent = container.closest('.dock-segment-container') || 
                             container.closest('.mobile-dock__segment');
        
        if (!scrollParent) return;
        
        const itemRect = item.getBoundingClientRect();
        const parentRect = scrollParent.getBoundingClientRect();
        
        // Check if item is fully visible
        const isFullyVisible = itemRect.left >= parentRect.left + 12 && 
                                itemRect.right <= parentRect.right - 12;
        
        if (!isFullyVisible) {
            // Calculate scroll position to center the item
            const itemCenter = item.offsetLeft + item.offsetWidth / 2;
            const parentCenter = scrollParent.clientWidth / 2;
            const scrollTo = itemCenter - parentCenter;
            
            scrollParent.scrollTo({
                left: Math.max(0, scrollTo),
                behavior: 'smooth'
            });
        }
    }
    
    /**
     * Apply segment action based on current page
     */
    applySegmentAction(segmentId) {
        console.log('Dock: applySegmentAction called with:', segmentId, 'on page:', this.currentPage);
        
        if (this.currentPage === 'study') {
            // Study page - SRS modes
            if (typeof window.setStudyMode === 'function') {
                window.setStudyMode(segmentId);
            }
            console.log('Dock: Study mode:', segmentId);
        } else if (this.currentPage === 'details') {
            // Details page - Category filter
            if (typeof window.filterDetailCards === 'function') {
                window.filterDetailCards(segmentId);
            } else {
                console.warn('Dock: filterDetailCards not found');
            }
            console.log('Dock: Details filter:', segmentId);
        } else if (this.currentPage === 'topics') {
            // Topics page - Category filter
            if (typeof window.filterTopics === 'function') {
                window.filterTopics(segmentId);
            } else {
                console.warn('Dock: filterTopics not found');
            }
            console.log('Dock: Topics filter:', segmentId);
        } else {
            // Index page - Category filter
            console.log('Dock: Calling filterCategory with:', segmentId);
            console.log('Dock: filterCategory exists:', typeof window.filterCategory === 'function');
            if (typeof window.filterCategory === 'function') {
                window.filterCategory(segmentId);
            } else {
                console.warn('Dock: filterCategory not found on window');
            }
        }
    }
    
    /**
     * Bind event listeners
     */
    bindEvents() {
        // Navigation buttons are already links, no extra binding needed
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
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.dock = new Dock();
});
