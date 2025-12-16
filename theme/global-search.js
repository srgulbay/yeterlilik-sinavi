/**
 * ============================================
 * GLOBAL SEARCH JS - Spotlight Arama
 * ============================================
 * Versiyon: 3.0.0
 * Tarih: 16 Aralık 2025
 * 
 * macOS Spotlight benzeri global arama sistemi.
 * Tüm içerikler (referans kartları, hafıza kartları, konu özetleri) 
 * tek bir yerden aranabilir.
 */

'use strict';

class GlobalSearch {
    constructor() {
        // DOM
        this.overlay = null;
        this.input = null;
        this.results = null;
        this.resultCount = null;
        
        // State
        this.isOpen = false;
        this.activeIndex = -1;
        this.searchResults = [];
        this.debounceTimer = null;
        
        // Data sources
        this.dataSources = [];
        
        // Config
        this.config = {
            debounceMs: 150,
            maxResults: 20,
            minQueryLength: 2,
            highlightTag: 'mark'
        };
        
        // Init
        this.init();
    }
    
    /**
     * Initialize
     */
    init() {
        this.createOverlay();
        this.bindEvents();
        this.loadDataSources();
        
        console.log('GlobalSearch: Initialized');
    }
    
    /**
     * Create search overlay DOM
     */
    createOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'global-search';
        overlay.id = 'globalSearch';
        overlay.innerHTML = `
            <div class="global-search__backdrop"></div>
            <div class="global-search__container">
                <div class="global-search__input-wrapper">
                    <i class="fas fa-magnifying-glass"></i>
                    <input 
                        type="search" 
                        class="global-search__input" 
                        placeholder="Referans, kart veya konu ara..."
                        autocomplete="off"
                        spellcheck="false"
                    >
                    <button class="global-search__close" type="button" aria-label="Kapat">
                        <i class="fas fa-xmark"></i>
                    </button>
                </div>
                <div class="global-search__results">
                    <div class="global-search__hint">
                        <p>Aramaya başlamak için yazın...</p>
                    </div>
                </div>
                <div class="global-search__footer">
                    <div class="global-search__shortcuts">
                        <span class="global-search__shortcut"><kbd>↑</kbd><kbd>↓</kbd> gezin</span>
                        <span class="global-search__shortcut"><kbd>↵</kbd> seç</span>
                        <span class="global-search__shortcut"><kbd>esc</kbd> kapat</span>
                    </div>
                    <span class="global-search__result-count"></span>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Cache refs
        this.overlay = overlay;
        this.input = overlay.querySelector('.global-search__input');
        this.results = overlay.querySelector('.global-search__results');
        this.resultCount = overlay.querySelector('.global-search__result-count');
    }
    
    /**
     * Bind event listeners
     */
    bindEvents() {
        // Backdrop click
        this.overlay.querySelector('.global-search__backdrop').addEventListener('click', () => this.close());
        
        // Close button
        this.overlay.querySelector('.global-search__close').addEventListener('click', () => this.close());
        
        // Input
        this.input.addEventListener('input', () => this.handleInput());
        this.input.addEventListener('keydown', (e) => this.handleKeydown(e));
        
        // Global keyboard shortcut (Cmd/Ctrl + K)
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                this.toggle();
            }
            
            // Also open with "/" key if not in input
            if (e.key === '/' && !this.isOpen) {
                const target = e.target;
                const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
                if (!isInput) {
                    e.preventDefault();
                    this.open();
                }
            }
        });
        
        // Search trigger buttons
        document.addEventListener('click', (e) => {
            const trigger = e.target.closest('[data-search-trigger], .page-header__search-btn');
            if (trigger) {
                e.preventDefault();
                this.open();
            }
        });
    }
    
    /**
     * Load data sources
     */
    loadDataSources() {
        // Reference cards (from enriched_content.js)
        if (typeof enrichedContent !== 'undefined' && Array.isArray(enrichedContent)) {
            this.dataSources.push({
                type: 'reference',
                icon: 'fa-book-medical',
                iconClass: 'global-search__item-icon--reference',
                label: 'Referans Kartları',
                page: 'index.html',
                data: enrichedContent.map(item => ({
                    id: item.id,
                    title: item.question || item.title || '',
                    content: this.extractText(item.answer || item.expert_explanation || ''),
                    category: item.category || '',
                    tags: item.tags || []
                }))
            });
        }
        
        // Detail cards (from details-content.js)
        if (typeof detailsData !== 'undefined' && Array.isArray(detailsData)) {
            this.dataSources.push({
                type: 'cards',
                icon: 'fa-layer-group',
                iconClass: 'global-search__item-icon--cards',
                label: 'Hafıza Kartları',
                page: 'details.html',
                data: detailsData.map(item => ({
                    id: item.id,
                    title: item.title || '',
                    content: this.extractDetailContent(item),
                    category: item.category || '',
                    tags: item.tags || []
                }))
            });
        }
        
        // Topic summaries (from topics-content.js)
        if (typeof topicsData !== 'undefined' && Array.isArray(topicsData)) {
            this.dataSources.push({
                type: 'topics',
                icon: 'fa-book-open',
                iconClass: 'global-search__item-icon--topics',
                label: 'Konu Özetleri',
                page: 'topics.html',
                data: topicsData.map(item => ({
                    id: item.id,
                    title: item.title || '',
                    content: this.extractTopicContent(item),
                    category: item.category || '',
                    tags: item.tags || []
                }))
            });
        }
        
        console.log('GlobalSearch: Loaded', this.dataSources.length, 'data sources');
    }
    
    /**
     * Extract plain text from HTML
     */
    extractText(html) {
        if (!html) return '';
        const temp = document.createElement('div');
        temp.innerHTML = html;
        return temp.textContent || temp.innerText || '';
    }
    
    /**
     * Extract content from detail card
     */
    extractDetailContent(item) {
        const parts = [];
        if (item.coreInfo) parts.push(this.extractText(item.coreInfo));
        if (item.spotPoints && Array.isArray(item.spotPoints)) {
            item.spotPoints.forEach(point => {
                parts.push(this.extractText(point));
            });
        }
        if (item.alert) parts.push(this.extractText(item.alert));
        if (item.mnemonic && item.mnemonic.text) {
            parts.push(item.mnemonic.text);
            if (item.mnemonic.hint) parts.push(item.mnemonic.hint);
        }
        return parts.join(' ').substring(0, 500);
    }
    
    /**
     * Extract content from topic
     */
    extractTopicContent(item) {
        const parts = [];
        if (item.subtitle) parts.push(item.subtitle);
        if (item.summary) parts.push(item.summary);
        if (item.sections && Array.isArray(item.sections)) {
            item.sections.forEach(section => {
                if (section.title) parts.push(section.title);
                if (section.content) parts.push(this.extractText(section.content));
            });
        }
        return parts.join(' ').substring(0, 800);
    }
    
    /**
     * Handle input change
     */
    handleInput() {
        clearTimeout(this.debounceTimer);
        
        const query = this.input.value.trim();
        
        if (query.length < this.config.minQueryLength) {
            this.showHint();
            return;
        }
        
        this.debounceTimer = setTimeout(() => {
            this.search(query);
        }, this.config.debounceMs);
    }
    
    /**
     * Handle keyboard navigation
     */
    handleKeydown(e) {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.navigate(1);
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.navigate(-1);
                break;
            case 'Enter':
                e.preventDefault();
                this.selectActive();
                break;
            case 'Escape':
                e.preventDefault();
                this.close();
                break;
        }
    }
    
    /**
     * Perform search
     */
    search(query) {
        const results = [];
        const queryLower = query.toLowerCase();
        const queryWords = queryLower.split(/\s+/).filter(w => w.length > 1);
        
        this.dataSources.forEach(source => {
            source.data.forEach(item => {
                const score = this.calculateScore(item, queryWords);
                if (score > 0) {
                    results.push({
                        ...item,
                        score,
                        sourceType: source.type,
                        sourceIcon: source.icon,
                        sourceIconClass: source.iconClass,
                        sourceLabel: source.label,
                        sourcePage: source.page
                    });
                }
            });
        });
        
        // Sort by score (descending)
        results.sort((a, b) => b.score - a.score);
        
        // Limit results
        this.searchResults = results.slice(0, this.config.maxResults);
        this.activeIndex = -1;
        
        this.renderResults(query);
    }
    
    /**
     * Calculate relevance score
     */
    calculateScore(item, queryWords) {
        let score = 0;
        const titleLower = (item.title || '').toLowerCase();
        const contentLower = (item.content || '').toLowerCase();
        const categoryLower = (item.category || '').toLowerCase();
        const tagsLower = (item.tags || []).map(t => t.toLowerCase()).join(' ');
        
        queryWords.forEach(word => {
            // Title matches (highest weight)
            if (titleLower.includes(word)) {
                score += 10;
                // Exact word match bonus
                if (titleLower.split(/\s+/).includes(word)) {
                    score += 5;
                }
                // Starts with bonus
                if (titleLower.startsWith(word)) {
                    score += 3;
                }
            }
            
            // Category match
            if (categoryLower.includes(word)) {
                score += 5;
            }
            
            // Tags match
            if (tagsLower.includes(word)) {
                score += 4;
            }
            
            // Content match
            if (contentLower.includes(word)) {
                score += 2;
                // Multiple occurrences
                const matches = (contentLower.match(new RegExp(word, 'g')) || []).length;
                score += Math.min(matches, 3);
            }
        });
        
        return score;
    }
    
    /**
     * Render search results
     */
    renderResults(query) {
        if (this.searchResults.length === 0) {
            this.showEmpty(query);
            return;
        }
        
        // Group results by source type
        const groups = {};
        this.searchResults.forEach((result, index) => {
            if (!groups[result.sourceType]) {
                groups[result.sourceType] = {
                    label: result.sourceLabel,
                    icon: result.sourceIcon,
                    items: []
                };
            }
            groups[result.sourceType].items.push({ ...result, globalIndex: index });
        });
        
        let html = '';
        
        Object.entries(groups).forEach(([type, group]) => {
            html += `
                <div class="global-search__group" data-group="${type}">
                    <div class="global-search__group-title">
                        <i class="fas ${group.icon}"></i>
                        ${group.label}
                    </div>
            `;
            
            group.items.forEach(item => {
                const highlightedTitle = this.highlight(item.title, query);
                const highlightedPreview = this.highlight(
                    this.truncate(item.content, 120), 
                    query
                );
                
                html += `
                    <a href="${item.sourcePage}#${item.id}" 
                       class="global-search__item" 
                       data-index="${item.globalIndex}"
                       data-type="${item.sourceType}"
                       data-id="${item.id}">
                        <div class="global-search__item-icon ${item.sourceIconClass}">
                            <i class="fas ${item.sourceIcon}"></i>
                        </div>
                        <div class="global-search__item-content">
                            <div class="global-search__item-title">${highlightedTitle}</div>
                            <div class="global-search__item-preview">${highlightedPreview}</div>
                            <div class="global-search__item-meta">
                                ${item.category ? `<span class="global-search__item-badge">${item.category}</span>` : ''}
                            </div>
                        </div>
                        <div class="global-search__item-arrow">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </a>
                `;
            });
            
            html += '</div>';
        });
        
        this.results.innerHTML = html;
        this.resultCount.textContent = `${this.searchResults.length} sonuç`;
        
        // Bind click events
        this.results.querySelectorAll('.global-search__item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const index = parseInt(item.dataset.index);
                this.selectResult(index);
            });
        });
    }
    
    /**
     * Highlight matching text
     */
    highlight(text, query) {
        if (!text || !query) return text || '';
        
        const words = query.toLowerCase().split(/\s+/).filter(w => w.length > 1);
        let result = text;
        
        words.forEach(word => {
            const regex = new RegExp(`(${this.escapeRegex(word)})`, 'gi');
            result = result.replace(regex, `<${this.config.highlightTag}>$1</${this.config.highlightTag}>`);
        });
        
        return result;
    }
    
    /**
     * Escape regex special characters
     */
    escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    /**
     * Truncate text
     */
    truncate(text, maxLength) {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    }
    
    /**
     * Show hint message
     */
    showHint() {
        this.results.innerHTML = `
            <div class="global-search__hint">
                <p>Aramaya başlamak için yazın...</p>
            </div>
        `;
        this.resultCount.textContent = '';
        this.searchResults = [];
        this.activeIndex = -1;
    }
    
    /**
     * Show empty state
     */
    showEmpty(query) {
        this.results.innerHTML = `
            <div class="global-search__empty">
                <i class="fas fa-search"></i>
                <p>"<strong>${this.escapeHtml(query)}</strong>" için sonuç bulunamadı</p>
            </div>
        `;
        this.resultCount.textContent = '0 sonuç';
    }
    
    /**
     * Escape HTML
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    /**
     * Navigate results with keyboard
     */
    navigate(direction) {
        if (this.searchResults.length === 0) return;
        
        // Remove active from current
        const items = this.results.querySelectorAll('.global-search__item');
        items.forEach(item => item.classList.remove('active'));
        
        // Calculate new index
        this.activeIndex += direction;
        
        if (this.activeIndex < 0) {
            this.activeIndex = this.searchResults.length - 1;
        } else if (this.activeIndex >= this.searchResults.length) {
            this.activeIndex = 0;
        }
        
        // Add active to new
        const activeItem = items[this.activeIndex];
        if (activeItem) {
            activeItem.classList.add('active');
            activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }
    
    /**
     * Select active result
     */
    selectActive() {
        if (this.activeIndex >= 0 && this.activeIndex < this.searchResults.length) {
            this.selectResult(this.activeIndex);
        }
    }
    
    /**
     * Select a result by index
     */
    selectResult(index) {
        const result = this.searchResults[index];
        if (!result) return;
        
        // Navigate to the page with hash
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const targetPage = result.sourcePage;
        
        // Store the target ID for highlight after navigation
        sessionStorage.setItem('globalSearchTarget', JSON.stringify({
            id: result.id,
            type: result.sourceType
        }));
        
        if (currentPage === targetPage) {
            // Same page - just scroll and highlight
            this.close();
            this.scrollToResult(result.id, result.sourceType);
        } else {
            // Different page - navigate
            window.location.href = `${targetPage}#${result.id}`;
        }
    }
    
    /**
     * Scroll to and highlight result
     */
    scrollToResult(id, type) {
        setTimeout(() => {
            let element = null;
            
            // Find element based on type
            if (type === 'reference') {
                element = document.querySelector(`[data-card-id="${id}"], [data-question-id="${id}"]`);
            } else if (type === 'cards') {
                element = document.querySelector(`[data-detail-id="${id}"], #detail-${id}`);
            } else if (type === 'topics') {
                element = document.querySelector(`[data-topic-id="${id}"], #topic-${id}`);
            }
            
            // Fallback to ID
            if (!element) {
                element = document.getElementById(id);
            }
            
            if (element) {
                // Scroll into view
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Add highlight animation
                element.classList.add('search-highlight');
                setTimeout(() => {
                    element.classList.remove('search-highlight');
                }, 2000);
            }
        }, 100);
    }
    
    /**
     * Open search overlay
     */
    open() {
        this.isOpen = true;
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus input with longer delay for mobile
        // Mobile keyboards need extra time to appear
        const focusDelay = 'ontouchstart' in window ? 300 : 100;
        setTimeout(() => {
            this.input.focus();
            this.input.select();
        }, focusDelay);
    }
    
    /**
     * Close search overlay
     */
    close() {
        this.isOpen = false;
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear input
        this.input.value = '';
        this.showHint();
    }
    
    /**
     * Toggle search overlay
     */
    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure data scripts are loaded
    setTimeout(() => {
        window.globalSearch = new GlobalSearch();
        
        // Check if we came from search navigation
        const target = sessionStorage.getItem('globalSearchTarget');
        if (target) {
            sessionStorage.removeItem('globalSearchTarget');
            try {
                const { id, type } = JSON.parse(target);
                window.globalSearch.scrollToResult(id, type);
            } catch (e) {
                console.warn('GlobalSearch: Could not parse target', e);
            }
        }
    }, 100);
});
