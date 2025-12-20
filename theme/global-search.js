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
        this.indexReady = false;
        this.textExtractor = null;
        
        // Data sources
        this.dataSources = [];
        
        // Config
        this.config = {
            debounceMs: 150,
            maxResults: 20,
            minQueryLength: 2,
            highlightTag: 'mark',
            snippetLength: 140,
            requireAllTokens: true
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
                        placeholder="Soru, kart veya konu ara..."
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
        const hasWindow = typeof window !== 'undefined';
        const referenceData = hasWindow && Array.isArray(window.enrichedContent)
            ? window.enrichedContent
            : (hasWindow && Array.isArray(window.contentData) ? window.contentData : null);

        // Reference cards (from enriched_content.js / contentData)
        if (referenceData) {
            this.dataSources.push({
                type: 'reference',
                icon: 'fa-book-medical',
                iconClass: 'global-search__item-icon--reference',
                label: 'Soru Kartları',
                page: 'index.html',
                data: referenceData.map(item => this.prepareSearchItem({
                    id: item.id,
                    title: item.question || item.title || item.topic || '',
                    content: this.extractReferenceContent(item),
                    category: item.category || '',
                    tags: item.tags || []
                }))
            });
        }
        
        // Detail cards (from details-content.js)
        if (hasWindow && Array.isArray(window.detailsData)) {
            this.dataSources.push({
                type: 'cards',
                icon: 'fa-layer-group',
                iconClass: 'global-search__item-icon--cards',
                label: 'Hafıza Kartları',
                page: 'details.html',
                data: window.detailsData.map(item => this.prepareSearchItem({
                    id: item.id,
                    title: item.title || '',
                    content: this.extractDetailContent(item),
                    category: item.category || '',
                    tags: item.tags || []
                }))
            });
        }
        
        // Topic summaries (from topics-content.js)
        if (hasWindow && Array.isArray(window.topicsData)) {
            this.dataSources.push({
                type: 'topics',
                icon: 'fa-book-open',
                iconClass: 'global-search__item-icon--topics',
                label: 'Konu Özetleri',
                page: 'topics.html',
                data: window.topicsData.map(item => this.prepareSearchItem({
                    id: item.id,
                    title: item.title || '',
                    content: this.extractTopicContent(item),
                    category: item.category || '',
                    tags: item.tags || []
                }))
            });
        }

        this.indexReady = true;
        console.log('GlobalSearch: Loaded', this.dataSources.length, 'data sources');
    }
    
    /**
     * Extract plain text from HTML
     */
    extractText(html) {
        if (!html) return '';
        if (!this.textExtractor) {
            this.textExtractor = document.createElement('div');
        }
        const temp = this.textExtractor;
        temp.innerHTML = String(html);
        const text = temp.textContent || temp.innerText || '';
        return text.replace(/\s+/g, ' ').trim();
    }

    collectText(value, parts) {
        if (value == null) return;
        if (typeof value === 'string' || typeof value === 'number') {
            const text = this.extractText(String(value));
            if (text) parts.push(text);
            return;
        }
        if (Array.isArray(value)) {
            value.forEach((item) => this.collectText(item, parts));
            return;
        }
        if (typeof value === 'object') {
            if (value.text) this.collectText(value.text, parts);
            if (value.hint) this.collectText(value.hint, parts);
            Object.keys(value).forEach((key) => {
                if (key === 'text' || key === 'hint' || key === 'icon') return;
                this.collectText(value[key], parts);
            });
        }
    }

    normalizeForSearch(text) {
        const raw = String(text || '');
        if (!raw) return '';
        const lower = raw.toLocaleLowerCase('tr');
        const map = {
            ç: 'c',
            ğ: 'g',
            ı: 'i',
            ö: 'o',
            ş: 's',
            ü: 'u',
            â: 'a',
            î: 'i',
            û: 'u',
            ê: 'e',
            ô: 'o'
        };
        const folded = lower.replace(/[çğıöşüâîûêô]/g, (ch) => map[ch] || ch);
        return folded.replace(/\s+/g, ' ').trim();
    }

    tokenizeQuery(query) {
        const normalized = this.normalizeForSearch(query);
        if (!normalized) return [];
        const rawTokens = normalized.split(/[^a-z0-9]+/g).filter(Boolean);
        const tokens = rawTokens.filter((token) => token.length >= this.config.minQueryLength);
        const unique = Array.from(new Set(tokens));
        unique.sort((a, b) => b.length - a.length);
        return unique;
    }

    prepareSearchItem(item) {
        const title = String(item.title || '');
        const content = String(item.content || '');
        const category = String(item.category || '');
        const tags = Array.isArray(item.tags) ? item.tags.map(t => String(t || '')).filter(Boolean) : [];
        const tagsText = tags.join(' ');

        const search = {
            title: this.normalizeForSearch(title),
            content: this.normalizeForSearch(content),
            category: this.normalizeForSearch(category),
            tags: this.normalizeForSearch(tagsText)
        };
        search.all = `${search.title} ${search.category} ${search.tags} ${search.content}`.trim();

        return {
            ...item,
            title,
            content,
            category,
            tags,
            search
        };
    }

    extractReferenceContent(item) {
        if (!item || typeof item !== 'object') return '';
        const parts = [];
        if (item.topic) parts.push(this.extractText(item.topic));
        if (item.correctAnswer) parts.push(this.extractText(item.correctAnswer));
        if (item.answer) parts.push(this.extractText(item.answer));
        if (item.expert_explanation) parts.push(this.extractText(item.expert_explanation));
        if (item.details) this.collectText(item.details, parts);
        if (item.summary) parts.push(this.extractText(item.summary));
        return parts.join(' ').trim();
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
        if (item.extraInfo) parts.push(this.extractText(item.extraInfo));
        if (item.table) parts.push(this.extractText(item.table));
        if (item.mnemonic && item.mnemonic.text) {
            parts.push(item.mnemonic.text);
            if (item.mnemonic.hint) parts.push(item.mnemonic.hint);
        }
        return parts.join(' ').trim();
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
        return parts.join(' ').trim();
    }
    
    /**
     * Handle input change
     */
    handleInput() {
        clearTimeout(this.debounceTimer);
        
        const query = this.input.value.trim();

        if (this.tokenizeQuery(query).length === 0) {
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
        const tokens = this.tokenizeQuery(query);
        const normalizedQuery = this.normalizeForSearch(query);
        const requireAll = this.config.requireAllTokens && tokens.length > 1;

        this.dataSources.forEach(source => {
            source.data.forEach(item => {
                const score = this.calculateScore(item, tokens, normalizedQuery, requireAll);
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
        
        this.renderResults(query, tokens, normalizedQuery);
    }
    
    /**
     * Calculate relevance score
     */
    calculateScore(item, tokens, normalizedQuery, requireAll) {
        if (!item || !item.search) return 0;
        if (!tokens || tokens.length === 0) return 0;

        const title = item.search.title || '';
        const content = item.search.content || '';
        const category = item.search.category || '';
        const tags = item.search.tags || '';

        let score = 0;
        let matchedTokens = 0;

        tokens.forEach(token => {
            let tokenScore = 0;
            if (title.includes(token)) {
                tokenScore += 12;
                if (title.startsWith(token)) tokenScore += 4;
            }
            if (category.includes(token)) {
                tokenScore += 6;
            }
            if (tags.includes(token)) {
                tokenScore += 5;
            }
            if (content.includes(token)) {
                tokenScore += 2;
                const extra = this.countOccurrences(content, token, 3) - 1;
                if (extra > 0) tokenScore += Math.min(extra, 2);
            }
            if (tokenScore > 0) matchedTokens += 1;
            score += tokenScore;
        });

        if (requireAll && matchedTokens < tokens.length) return 0;

        if (normalizedQuery && item.search.all && item.search.all.includes(normalizedQuery)) {
            score += 5;
        }

        if (matchedTokens === tokens.length && tokens.length > 1) {
            score += 3;
        }

        return score;
    }

    countOccurrences(haystack, needle, limit = 3) {
        if (!haystack || !needle) return 0;
        let count = 0;
        let idx = haystack.indexOf(needle);
        while (idx !== -1) {
            count += 1;
            if (count >= limit) break;
            idx = haystack.indexOf(needle, idx + needle.length);
        }
        return count;
    }
    
    /**
     * Render search results
     */
    renderResults(query, tokens, normalizedQuery) {
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
        
        const highlightTokens = this.tokenizeQuery(query);

        Object.entries(groups).forEach(([type, group]) => {
            html += `
                <div class="global-search__group" data-group="${type}">
                    <div class="global-search__group-title">
                        <i class="fas ${group.icon}"></i>
                        ${group.label}
                    </div>
            `;
            
            group.items.forEach(item => {
                const highlightedTitle = this.highlight(item.title, query, highlightTokens);
                const snippet = this.getSnippet(item, tokens, normalizedQuery);
                const highlightedPreview = this.highlight(snippet, query, highlightTokens);
                
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

    getSnippet(item, tokens, normalizedQuery) {
        if (!item) return '';
        const sources = [
            { text: item.content || '', folded: item.search?.content || '' },
            { text: item.title || '', folded: item.search?.title || '' },
            { text: (item.tags || []).join(' '), folded: item.search?.tags || '' },
            { text: item.category || '', folded: item.search?.category || '' }
        ];

        for (const source of sources) {
            const snippet = this.extractSnippet(source.text, source.folded, tokens, normalizedQuery);
            if (snippet) return snippet;
        }

        return this.truncate(item.content || item.title || '', this.config.snippetLength);
    }

    extractSnippet(text, folded, tokens, normalizedQuery) {
        if (!text || !folded) return '';
        const maxLen = this.config.snippetLength;
        let idx = -1;
        let matchLength = 0;

        if (normalizedQuery && folded.includes(normalizedQuery)) {
            idx = folded.indexOf(normalizedQuery);
            matchLength = normalizedQuery.length;
        } else if (tokens && tokens.length) {
            tokens.forEach((token) => {
                const pos = folded.indexOf(token);
                if (pos !== -1 && (idx === -1 || pos < idx)) {
                    idx = pos;
                    matchLength = token.length;
                }
            });
        }

        if (idx < 0) return '';

        const context = Math.max(40, Math.floor(maxLen / 2));
        let start = Math.max(0, idx - context);
        let end = Math.min(text.length, idx + matchLength + context);

        start = this.snapSnippetBoundary(text, start, -1);
        end = this.snapSnippetBoundary(text, end, 1);

        const prefix = start > 0 ? '...' : '';
        const suffix = end < text.length ? '...' : '';
        return `${prefix}${text.slice(start, end).trim()}${suffix}`;
    }

    snapSnippetBoundary(text, index, direction) {
        if (!text) return index;
        if (direction < 0) {
            const prev = text.lastIndexOf(' ', Math.max(0, index));
            if (prev >= 0 && index - prev < 30) return prev + 1;
            return index;
        }
        const next = text.indexOf(' ', index);
        if (next !== -1 && next - index < 30) return next;
        return index;
    }
    
    /**
     * Highlight matching text
     */
    highlight(text, query, tokens) {
        if (!text || !query) return text || '';
        const words = Array.isArray(tokens) && tokens.length ? tokens : this.tokenizeQuery(query);
        if (words.length === 0) return text || '';
        let result = text;
        
        words.forEach(word => {
            const regex = this.buildLooseRegex(word);
            result = result.replace(regex, (match) => `<${this.config.highlightTag}>${match}</${this.config.highlightTag}>`);
        });
        
        return result;
    }

    buildLooseRegex(token) {
        const chars = Array.from(token);
        const pattern = chars.map((ch) => {
            switch (ch) {
                case 'c': return '[cç]';
                case 'g': return '[gğ]';
                case 'i': return '[iıİI]';
                case 'o': return '[oö]';
                case 's': return '[sş]';
                case 'u': return '[uü]';
                case 'a': return '[aâ]';
                case 'e': return '[eê]';
                default: return this.escapeRegex(ch);
            }
        }).join('');
        return new RegExp(pattern, 'gi');
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
