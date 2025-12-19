/**
 * Details Module - Hafıza Kartları JavaScript
 * Spot bilgi kartlarını render eden ve filtreleme işlemleri yapan modül
 */

// Global değişkenler
let currentTopic = 'all';
let searchQuery = '';
let highlightedCardId = null;
let detailFavorites = new Set(); // cardId(string)
let detailFavoritesUnsubscribe = null;

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    initDetailsModule();
    handleShareLink();
    initScrollReveal();
});

function initDetailsModule() {
    renderDetailCards(detailsData);
    initTopicFilters();
    initSearch();
    initExpandables();
    initDockChips();
    initShareButtons();
    initDetailFavorites();
}

function isAuthReady() {
    return !!(window.appFirebase && window.appFirebase.enabled && window.appFirebase.getUser && window.appFirebase.getUser());
}

function stopDetailFavoritesWatch() {
    if (!detailFavoritesUnsubscribe) return;
    try {
        detailFavoritesUnsubscribe();
    } catch (_) {
        // ignore
    }
    detailFavoritesUnsubscribe = null;
}

async function initDetailFavorites() {
    if (window.appFirebase && typeof window.appFirebase.init === 'function') {
        window.appFirebase.init();
    }

    if (window.appFirebase && typeof window.appFirebase.onAuth === 'function') {
        window.appFirebase.onAuth(async (user) => {
            stopDetailFavoritesWatch();
            if (user) {
                if (window.appFirebase && typeof window.appFirebase.watchFavorites === 'function') {
                    try {
                        detailFavoritesUnsubscribe = window.appFirebase.watchFavorites('detail', (set) => {
                            if (set && typeof set.has === 'function') detailFavorites = set;
                            refreshDetailFavoriteButtons();

                            if (window.dock?.activeSegment === 'favorites' || currentTopic === 'favorites') {
                                currentTopic = 'favorites';
                                renderDetailCards(detailsData);
                            }
                        });
                        return;
                    } catch (_) {
                        detailFavoritesUnsubscribe = null;
                    }
                }
                await reloadDetailFavorites();
            } else {
                detailFavorites = new Set();
                refreshDetailFavoriteButtons();
            }
        });
    }

    if (isAuthReady()) {
        if (window.appFirebase && typeof window.appFirebase.watchFavorites === 'function') {
            try {
                detailFavoritesUnsubscribe = window.appFirebase.watchFavorites('detail', (set) => {
                    if (set && typeof set.has === 'function') detailFavorites = set;
                    refreshDetailFavoriteButtons();

                    if (window.dock?.activeSegment === 'favorites' || currentTopic === 'favorites') {
                        currentTopic = 'favorites';
                        renderDetailCards(detailsData);
                    }
                });
            } catch (_) {
                detailFavoritesUnsubscribe = null;
            }
        }

        if (detailFavoritesUnsubscribe) {
            refreshDetailFavoriteButtons();
        } else {
            await reloadDetailFavorites();
        }
    } else {
        refreshDetailFavoriteButtons();
    }

    document.addEventListener('favorites:updated', (e) => {
        const type = e.detail?.type;
        if (type !== 'detail') return;
        const itemId = String(e.detail?.itemId || '');
        const favorite = !!e.detail?.favorite;
        if (!itemId) return;
        if (favorite) detailFavorites.add(itemId);
        else detailFavorites.delete(itemId);
        refreshDetailFavoriteButtons(itemId);

        if (window.dock?.activeSegment === 'favorites' || currentTopic === 'favorites') {
            currentTopic = 'favorites';
            renderDetailCards(detailsData);
        }
    });
}

async function reloadDetailFavorites() {
    if (!window.appFirebase || !window.appFirebase.enabled) return;
    try {
        const set = await window.appFirebase.loadFavorites('detail');
        if (set && typeof set.has === 'function') {
            detailFavorites = set;
        }
    } catch (_) {
        // ignore
    }
    refreshDetailFavoriteButtons();
}

function refreshDetailFavoriteButtons(targetId = null) {
    const selector = targetId
        ? `.fav-btn[data-fav-detail-id="${targetId}"]`
        : '.fav-btn[data-fav-detail-id]';

    document.querySelectorAll(selector).forEach((btn) => {
        const id = String(btn.dataset.favDetailId || '');
        const active = id && detailFavorites.has(id);
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
        const icon = btn.querySelector('i');
        if (icon) icon.className = active ? 'fas fa-star' : 'far fa-star';
        btn.disabled = !isAuthReady();
    });
}

async function toggleDetailFavorite(cardId) {
    const id = String(cardId);
    if (!isAuthReady()) {
        showToast('Favoriye eklemek için giriş yapın');
        refreshDetailFavoriteButtons(id);
        return;
    }

    const prev = detailFavorites.has(id);
    const next = !prev;
    if (next) detailFavorites.add(id);
    else detailFavorites.delete(id);
    refreshDetailFavoriteButtons(id);

    try {
        await window.appFirebase.setFavorite('detail', id, next);
    } catch (_) {
        if (prev) detailFavorites.add(id);
        else detailFavorites.delete(id);
        refreshDetailFavoriteButtons(id);
        showToast('Kaydetme başarısız');
    }
}

// URL'den paylaşım linkini kontrol et
function handleShareLink() {
    const params = new URLSearchParams(window.location.search);
    const cardId = params.get('card');
    
    if (cardId) {
        highlightedCardId = parseInt(cardId);
        // Filtreleri sıfırla
        currentTopic = 'all';
        searchQuery = '';
        renderDetailCards(detailsData);
        
        // Karta scroll et
        setTimeout(() => {
            const card = document.querySelector(`[data-card-id="${cardId}"]`);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.classList.add('highlighted');
                setTimeout(() => card.classList.remove('highlighted'), 3000);
            }
        }, 100);
    }
}

// Paylaş butonlarını başlat
function initShareButtons() {
    document.addEventListener('click', (e) => {
        const shareBtn = e.target.closest('.share-btn');
        if (shareBtn) {
            e.preventDefault();
            const cardId = shareBtn.dataset.cardId;
            shareCard(cardId);
        }

        const favBtn = e.target.closest('.fav-btn');
        if (favBtn && favBtn.dataset.favDetailId) {
            e.preventDefault();
            e.stopPropagation();
            toggleDetailFavorite(favBtn.dataset.favDetailId);
        }
    });
}

// Kart paylaşma fonksiyonu
function shareCard(cardId) {
    const url = `${window.location.origin}${window.location.pathname}?card=${cardId}`;
    copyToClipboard(url);
}

function copyToClipboard(text) {
    // Textarea ile kopyalama
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0;';
    document.body.appendChild(textarea);
    
    // iOS için özel seçim
    if (navigator.userAgent.match(/ipad|iphone/i)) {
        const range = document.createRange();
        range.selectNodeContents(textarea);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textarea.setSelectionRange(0, 999999);
    } else {
        textarea.select();
    }
    
    let success = false;
    try {
        success = document.execCommand('copy');
    } catch (err) {
        success = false;
    }
    
    document.body.removeChild(textarea);
    
    if (success) {
        showToast('Link kopyalandı!');
    } else {
        showToast('Kopyalama başarısız');
    }
}

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

// Kart render fonksiyonu
function renderDetailCards(data) {
    const grid = document.getElementById('detailsGrid');
    if (!grid) return;

    // Filtreleme
    let filtered = data;
    
    if (currentTopic === 'favorites') {
        filtered = filtered.filter((item) => {
            const id = item && item.id != null ? String(item.id) : '';
            return id && detailFavorites.has(id);
        });
    } else if (currentTopic !== 'all') {
        filtered = filtered.filter(item => item.category === currentTopic);
    }
    
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.coreInfo.toLowerCase().includes(query) ||
            (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query))) ||
            (item.spotPoints && item.spotPoints.some(point => point.toLowerCase().includes(query)))
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="details-empty">
                <div class="details-empty__icon">
                    <i class="fas fa-search"></i>
                </div>
                <h3 class="details-empty__title">Sonuç bulunamadı</h3>
                <p class="details-empty__text">Farklı bir arama terimi veya kategori deneyin</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map((item, index) => createDetailCard(item, index)).join('');
    
    // Expand butonlarını yeniden bağla
    initExpandables();
    
    // Scroll reveal'ı yenile
    setTimeout(() => refreshScrollReveal(), 50);
}

function createDetailCard(item, index = 0) {
    const iconClass = getIconClass(item.category);
    const icon = getCategoryIcon(item.category);
    // İlk 6 kart hemen görünür
    const visibilityClass = index < 6 ? 'scroll-reveal is-visible' : 'scroll-reveal';
    
    // Spot points
    let spotsHTML = '';
    if (item.spotPoints && item.spotPoints.length > 0) {
        spotsHTML = `
            <div class="detail-card__spots">
                <p class="detail-card__spots-title">
                    <i class="fas fa-lightbulb"></i> Spot Bilgiler
                </p>
                <ul class="spot-list">
                    ${item.spotPoints.map(point => `<li class="spot-item">${point}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Alert box
    let alertHTML = '';
    if (item.alert) {
        alertHTML = `
            <div class="detail-card__alert">
                <span class="detail-card__alert-icon">⚠️</span>
                <p class="detail-card__alert-text">${item.alert}</p>
            </div>
        `;
    }

    // Table
    let tableHTML = '';
    if (item.table) {
        tableHTML = `
            <div class="detail-card__table">
                ${item.table}
            </div>
        `;
    }

    // Mnemonic
    let mnemonicHTML = '';
    if (item.mnemonic) {
        mnemonicHTML = `
            <div class="detail-card__mnemonic">
                <p class="detail-card__mnemonic-label">Hatırlatıcı</p>
                <p class="detail-card__mnemonic-text">${item.mnemonic.text}</p>
                ${item.mnemonic.hint ? `<p class="detail-card__mnemonic-hint">${item.mnemonic.hint}</p>` : ''}
            </div>
        `;
    }

    // Extra content (expandable)
    let expandHTML = '';
    if (item.extraInfo) {
        expandHTML = `
            <div class="detail-card__expand">
                <button class="detail-card__expand-btn" type="button">
                    <span><i class="fas fa-plus"></i> Ek Bilgiler</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="detail-card__expand-content">
                    <div class="detail-card__expand-inner">
                        ${item.extraInfo}
                    </div>
                </div>
            </div>
        `;
    }

    // Tags
    let tagsHTML = '';
    if (item.tags && item.tags.length > 0) {
        tagsHTML = `
            <div class="detail-card__footer">
                ${item.tags.map(tag => `<span class="detail-tag">${tag}</span>`).join('')}
            </div>
        `;
    }

    return `
        <article class="detail-card ${visibilityClass}" data-category="${item.category}" data-card-id="${item.id}">
            <div class="detail-card__header">
                <div class="detail-card__icon detail-card__icon--${item.category}">
                    <i class="${icon}"></i>
                </div>
                <div class="detail-card__title-group">
                    <p class="detail-card__category">${getCategoryLabel(item.category)}</p>
                    <h3 class="detail-card__title">${item.title}</h3>
                </div>
                <button class="fav-btn" data-fav-detail-id="${item.id}" aria-pressed="false" title="Favori">
                    <i class="far fa-star"></i>
                </button>
                <button class="share-btn" data-card-id="${item.id}" title="Paylaş">
                    <i class="fas fa-share-alt"></i>
                </button>
            </div>
            <div class="detail-card__body">
                <div class="detail-card__core">
                    <p class="detail-card__core-label">Özet Bilgi</p>
                    <p class="detail-card__core-text">${item.coreInfo}</p>
                </div>
                ${spotsHTML}
                ${tableHTML}
                ${mnemonicHTML}
                ${alertHTML}
            </div>
            ${tagsHTML}
            ${expandHTML}
        </article>
    `;
}

function getIconClass(category) {
    const icons = {
        'bakteriyoloji': 'bakteriyoloji',
        'viroloji': 'viroloji',
        'mikoloji': 'mikoloji',
        'parazitoloji': 'parazitoloji',
        'immunoloji': 'immunoloji',
        'laboratuvar': 'laboratuvar'
    };
    return icons[category] || 'bakteriyoloji';
}

function getCategoryIcon(category) {
    const icons = {
        'bakteriyoloji': 'fas fa-bacterium',
        'viroloji': 'fas fa-virus',
        'mikoloji': 'fas fa-seedling',
        'parazitoloji': 'fas fa-bug',
        'immunoloji': 'fas fa-shield-virus',
        'laboratuvar': 'fas fa-flask'
    };
    return icons[category] || 'fas fa-file-medical';
}

function getCategoryLabel(category) {
    const labels = {
        'bakteriyoloji': 'Bakteriyoloji',
        'viroloji': 'Viroloji',
        'mikoloji': 'Mikoloji',
        'parazitoloji': 'Parazitoloji',
        'immunoloji': 'İmmunoloji',
        'laboratuvar': 'Laboratuvar'
    };
    return labels[category] || category;
}

// Sidebar filtre
function initTopicFilters() {
    const filterBtns = document.querySelectorAll('#topicFilters .nav-item');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTopic = btn.dataset.topic;
            renderDetailCards(detailsData);
            syncDockChips();
        });
    });
}

// Arama
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            searchQuery = e.target.value.trim();
            renderDetailCards(detailsData);
        }, 300);
    });
}

// Expand butonları
function initExpandables() {
    document.querySelectorAll('.detail-card__expand-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            const content = btn.nextElementSibling;
            content.classList.toggle('open');
        });
    });
}

// Dock chip'leri
function initDockChips() {
    const chips = document.querySelectorAll('[data-topic-chip]');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentTopic = chip.dataset.topicChip;
            renderDetailCards(detailsData);
            syncSidebarFilters();
        });
    });
}

function syncDockChips() {
    const chips = document.querySelectorAll('[data-topic-chip]');
    chips.forEach(chip => {
        chip.classList.toggle('active', chip.dataset.topicChip === currentTopic);
    });
}

function syncSidebarFilters() {
    const filterBtns = document.querySelectorAll('#topicFilters .nav-item');
    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.topic === currentTopic);
    });
}

/**
 * Global filter function for Dock integration
 * @param {string} filterId - Filter ID from dock (Klinik Bakteriyoloji, Viroloji, etc.)
 */
window.filterDetailCards = function(filterId) {
    // Normalize filter ID to match data format
    const normalizedFilter = normalizeFilterId(filterId);
    currentTopic = normalizedFilter;
    renderDetailCards(detailsData);
    syncDockChips();
    syncSidebarFilters();
    console.log('Details: Filtered by', normalizedFilter);
}

/**
 * Normalize filter ID from dock to match data category format
 */
function normalizeFilterId(filterId) {
    if (!filterId || filterId === 'all') return 'all';
    if (filterId === 'favorites') return 'favorites';
    
    const lower = filterId.toLowerCase();
    const mappings = {
        'klinik bakteriyoloji': 'bakteriyoloji',
        'viroloji': 'viroloji',
        'mikoloji': 'mikoloji',
        'parazitoloji': 'parazitoloji',
        'laboratuvar': 'laboratuvar',
        'immunoloji': 'immunoloji'
    };
    
    return mappings[lower] || filterId.toLowerCase();
}

/* ==========================================
   SCROLL REVEAL - Apple Style
   Intersection Observer ile scroll animasyonu
   ========================================== */

let scrollRevealObserver = null;

function initScrollReveal() {
    // Reduced motion tercihini kontrol et
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    // Intersection Observer oluştur
    scrollRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Apple-style staggered delay (daha yavaş)
                const delay = Math.min(index * 100, 400);
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay);
                
                scrollRevealObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.15
    });
    
    observeScrollElements();
}

function observeScrollElements() {
    if (!scrollRevealObserver) return;
    
    const elements = document.querySelectorAll('.scroll-reveal:not(.is-visible)');
    elements.forEach(el => {
        scrollRevealObserver.observe(el);
    });
}

function refreshScrollReveal() {
    if (!scrollRevealObserver) {
        initScrollReveal();
    } else {
        observeScrollElements();
    }
}
