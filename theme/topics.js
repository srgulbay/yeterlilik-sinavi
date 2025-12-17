/**
 * Topics Module - Konu Özetleri JavaScript
 * Konu anlatımlarını render eden ve görünüm yöneten modül
 */

// Global değişkenler
let currentCategory = 'all';
let searchQuery = '';
let currentView = 'list'; // 'list' veya 'detail'
let topicStateById = new Map(); // topicId(string) -> { favorite:boolean, readLevel:number }

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    initTopicsModule();
    handleShareLink();
    initScrollReveal();
});

function initTopicsModule() {
    renderTopicsList(topicsData);
    initCategoryFilters();
    initSearch();
    initBackButton();
    initDockChips();
    initTopicState();
    initTopicActions();
}

function normalizeTopicId(topicId) {
    const n = Number(topicId);
    if (!Number.isFinite(n)) return String(topicId);
    return String(n);
}

function clampReadLevel(level) {
    const n = Number(level);
    if (!Number.isFinite(n)) return 0;
    return Math.max(0, Math.min(5, Math.trunc(n)));
}

function getTopicState(topicId) {
    const id = normalizeTopicId(topicId);
    const existing = topicStateById.get(id);
    if (existing) {
        return {
            favorite: !!existing.favorite,
            readLevel: clampReadLevel(existing.readLevel)
        };
    }
    return { favorite: false, readLevel: 0 };
}

function setTopicStateLocal(topicId, patch) {
    const id = normalizeTopicId(topicId);
    const prev = getTopicState(id);
    const next = {
        favorite: Object.prototype.hasOwnProperty.call(patch, 'favorite') ? !!patch.favorite : prev.favorite,
        readLevel: Object.prototype.hasOwnProperty.call(patch, 'readLevel') ? clampReadLevel(patch.readLevel) : prev.readLevel,
    };
    topicStateById.set(id, next);
}

function isAuthReady() {
    return !!(window.appFirebase && window.appFirebase.enabled && window.appFirebase.getUser && window.appFirebase.getUser());
}

async function initTopicState() {
    if (window.appFirebase && typeof window.appFirebase.init === 'function') {
        window.appFirebase.init();
    }

    const onAuth = window.appFirebase && typeof window.appFirebase.onAuth === 'function'
        ? window.appFirebase.onAuth
        : null;

    if (onAuth) {
        onAuth(async (user) => {
            if (user) {
                await reloadTopicStates();
            } else {
                topicStateById = new Map();
                rerenderTopicUI();
            }
        });
    }

    if (isAuthReady()) {
        await reloadTopicStates();
    }

    document.addEventListener('topics:state-updated', (e) => {
        const topicId = e.detail?.topicId;
        const patch = e.detail?.patch;
        if (!topicId || !patch) return;
        setTopicStateLocal(topicId, patch);
        updateTopicUIFor(topicId);
    });
}

async function reloadTopicStates() {
    if (!window.appFirebase || !window.appFirebase.enabled) return;
    try {
        const map = await window.appFirebase.loadTopicStates();
        if (map && typeof map.get === 'function') {
            topicStateById = map;
        }
        rerenderTopicUI();
    } catch (_) {
        // ignore
    }
}

function rerenderTopicUI() {
    if (currentView === 'detail') {
        const params = new URLSearchParams(window.location.search);
        const topicId = params.get('topic');
        if (topicId) {
            showTopicDetail(parseInt(topicId));
            return;
        }
    }
    renderTopicsList(topicsData);
}

function updateTopicUIFor(topicId) {
    const id = normalizeTopicId(topicId);
    const state = getTopicState(id);

    const card = document.querySelector(`.topic-preview[data-topic-id="${id}"]`);
    if (card) {
        const favBtn = card.querySelector('[data-topic-fav]');
        if (favBtn) {
            favBtn.classList.toggle('is-active', state.favorite);
            const icon = favBtn.querySelector('i');
            if (icon) icon.className = state.favorite ? 'fas fa-star' : 'far fa-star';
            favBtn.setAttribute('aria-pressed', String(state.favorite));
        }

        card.querySelectorAll('input[type="checkbox"][data-read-level]').forEach((input) => {
            const level = clampReadLevel(input.dataset.readLevel);
            input.checked = level > 0 && level <= state.readLevel;
            input.disabled = !isAuthReady();
        });
    }

    const detail = document.querySelector(`.topic-article [data-topic-actions][data-topic-id="${id}"]`);
    if (detail) {
        const favBtn = detail.querySelector('[data-topic-fav]');
        if (favBtn) {
            favBtn.classList.toggle('is-active', state.favorite);
            const icon = favBtn.querySelector('i');
            if (icon) icon.className = state.favorite ? 'fas fa-star' : 'far fa-star';
            favBtn.setAttribute('aria-pressed', String(state.favorite));
        }
        detail.querySelectorAll('input[type="checkbox"][data-read-level]').forEach((input) => {
            const level = clampReadLevel(input.dataset.readLevel);
            input.checked = level > 0 && level <= state.readLevel;
            input.disabled = !isAuthReady();
        });
    }
}

function renderReadCheckboxes(topicId) {
    const state = getTopicState(topicId);
    const disabledAttr = isAuthReady() ? '' : 'disabled';

    return `
        <div class="topic-read-checks" data-topic-read>
            ${[1, 2, 3, 4, 5].map((n) => {
                const checked = state.readLevel >= n ? 'checked' : '';
                return `
                    <label class="topic-check" title="${n}. tur">
                        <input type="checkbox" ${checked} ${disabledAttr} data-topic-id="${topicId}" data-read-level="${n}">
                        <span>${n}</span>
                    </label>
                `;
            }).join('')}
        </div>
    `;
}

function renderFavoriteButton(topicId) {
    const state = getTopicState(topicId);
    const active = state.favorite;
    return `
        <button class="topic-fav-btn ${active ? 'is-active' : ''}" type="button" data-topic-fav data-topic-id="${topicId}" aria-pressed="${active}" title="Favori">
            <i class="${active ? 'fas fa-star' : 'far fa-star'}"></i>
        </button>
    `;
}

function initTopicActions() {
    const list = document.getElementById('topicsList');
    if (list) {
        list.addEventListener('click', async (e) => {
            const favBtn = e.target.closest('[data-topic-fav]');
            if (favBtn) {
                e.preventDefault();
                e.stopPropagation();
                await toggleFavorite(favBtn.dataset.topicId);
                return;
            }

            const checkbox = e.target.closest('input[type="checkbox"][data-read-level]');
            if (checkbox) {
                e.stopPropagation();
                await toggleReadLevel(checkbox.dataset.topicId, checkbox.dataset.readLevel);
            }
        });
    }

    const detail = document.getElementById('topicDetail');
    if (detail) {
        detail.addEventListener('click', async (e) => {
            const favBtn = e.target.closest('[data-topic-fav]');
            if (favBtn) {
                e.preventDefault();
                e.stopPropagation();
                await toggleFavorite(favBtn.dataset.topicId);
                return;
            }

            const checkbox = e.target.closest('input[type="checkbox"][data-read-level]');
            if (checkbox) {
                e.stopPropagation();
                await toggleReadLevel(checkbox.dataset.topicId, checkbox.dataset.readLevel);
            }
        });
    }
}

async function toggleFavorite(topicId) {
    const id = normalizeTopicId(topicId);
    if (!isAuthReady()) {
        showToast('Favoriye eklemek için giriş yapın');
        updateTopicUIFor(id);
        return;
    }

    const prev = getTopicState(id);
    const next = !prev.favorite;
    setTopicStateLocal(id, { favorite: next });
    updateTopicUIFor(id);

    try {
        await window.appFirebase.setTopicState(id, { favorite: next });
    } catch (_) {
        setTopicStateLocal(id, { favorite: prev.favorite });
        updateTopicUIFor(id);
        showToast('Kaydetme başarısız');
    }
}

async function toggleReadLevel(topicId, clickedLevel) {
    const id = normalizeTopicId(topicId);
    const level = clampReadLevel(clickedLevel);
    if (!isAuthReady()) {
        showToast('İşaretlemek için giriş yapın');
        updateTopicUIFor(id);
        return;
    }

    const prev = getTopicState(id);
    const nextLevel = prev.readLevel >= level ? Math.max(0, level - 1) : level;
    setTopicStateLocal(id, { readLevel: nextLevel });
    updateTopicUIFor(id);

    try {
        await window.appFirebase.setTopicState(id, { readLevel: nextLevel });
    } catch (_) {
        setTopicStateLocal(id, { readLevel: prev.readLevel });
        updateTopicUIFor(id);
        showToast('Kaydetme başarısız');
    }
}

// URL'den paylaşım linkini kontrol et
function handleShareLink() {
    const params = new URLSearchParams(window.location.search);
    const topicId = params.get('topic');
    
    if (topicId) {
        showTopicDetail(parseInt(topicId));
    }
}

// URL'yi güncelle (history API)
function updateURL(topicId) {
    const url = topicId 
        ? `${window.location.pathname}?topic=${topicId}`
        : window.location.pathname;
    window.history.pushState({}, '', url);
}

// Konu paylaşma fonksiyonu
function shareTopic(topicId) {
    const url = `${window.location.origin}${window.location.pathname}?topic=${topicId}`;
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

// Konu listesi render
function renderTopicsList(data) {
    const container = document.getElementById('topicsList');
    if (!container) return;

    // Filtreleme
    let filtered = data;
    
    if (currentCategory !== 'all') {
        filtered = filtered.filter(item => item.category === currentCategory);
    }
    
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.subtitle.toLowerCase().includes(query) ||
            item.summary.toLowerCase().includes(query) ||
            (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query)))
        );
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="topics-empty">
                <div class="topics-empty__icon">
                    <i class="fas fa-search"></i>
                </div>
                <h3 class="topics-empty__title">Sonuç bulunamadı</h3>
                <p class="topics-empty__text">Farklı bir arama terimi veya kategori deneyin</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map((topic, index) => createTopicPreview(topic, index)).join('');
    
    // Kart tıklama olaylarını bağla
    container.querySelectorAll('.topic-preview').forEach(card => {
        card.addEventListener('click', (event) => {
            // Ignore clicks on interactive controls
            if (event.target && event.target.closest && event.target.closest('[data-topic-fav], input[data-read-level], .topic-read-checks, label.topic-check')) {
                return;
            }
            const topicId = parseInt(card.dataset.topicId);
            showTopicDetail(topicId);
        });
    });
    
    // Scroll reveal'ı yenile
    setTimeout(() => refreshScrollReveal(), 50);
}

function createTopicPreview(topic, index = 0) {
    const icon = getCategoryIcon(topic.category);
    // İlk 6 kart hemen görünür
    const visibilityClass = index < 6 ? 'scroll-reveal is-visible' : 'scroll-reveal';
    
    return `
        <article class="topic-preview ${visibilityClass}" data-topic-id="${topic.id}">
            <div class="topic-preview__header">
                <div class="topic-preview__icon topic-preview__icon--${topic.category}">
                    <i class="${icon}"></i>
                </div>
                <div class="topic-preview__info">
                    <p class="topic-preview__category">${getCategoryLabel(topic.category)}</p>
                    <h3 class="topic-preview__title">${topic.title}</h3>
                    <p class="topic-preview__subtitle">${topic.subtitle}</p>
                </div>
            </div>
            <div class="topic-preview__body">
                <p class="topic-preview__summary">${topic.summary}</p>
            </div>
            <div class="topic-preview__footer">
                <div class="topic-preview__tags">
                    ${topic.tags.slice(0, 3).map(tag => `<span class="topic-tag">${tag}</span>`).join('')}
                </div>
                <div class="topic-preview__right">
                    ${renderFavoriteButton(topic.id)}
                    ${renderReadCheckboxes(topic.id)}
                    <span class="topic-preview__read">
                        Oku <i class="fas fa-arrow-right"></i>
                    </span>
                </div>
            </div>
        </article>
    `;
}

// Konu detay görünümü
function showTopicDetail(topicId) {
    const topic = topicsData.find(t => t.id === topicId);
    if (!topic) return;

    const listSection = document.getElementById('topicsList');
    const detailSection = document.getElementById('topicDetail');
    const articleContainer = document.getElementById('topicArticle');

    // Görünümleri değiştir
    listSection.style.display = 'none';
    detailSection.style.display = 'block';
    currentView = 'detail';

    // URL'yi güncelle
    updateURL(topicId);
    
    // Sayfa başlığını güncelle
    document.title = `${topic.title} | Konu Özetleri`;

    // Makaleyi render et
    articleContainer.innerHTML = renderTopicArticle(topic);

    // Sayfanın üstüne scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderTopicArticle(topic) {
    const icon = getCategoryIcon(topic.category);
    const topicId = topic.id;
    const state = getTopicState(topicId);
    
    let sectionsHTML = topic.sections.map(section => {
        return `
            <div class="article-section">
                <h2 class="section-title">
                    <i class="${section.icon || 'fas fa-bookmark'}"></i>
                    ${section.title}
                </h2>
                <div class="section-content">
                    ${section.content}
                </div>
            </div>
        `;
    }).join('');

    return `
        <header class="article-header">
            <div class="article-header__top">
                <div class="article-icon article-icon--${topic.category}">
                    <i class="${icon}"></i>
                </div>
                <div class="article-meta">
                    <p class="article-category">${getCategoryLabel(topic.category)}</p>
                    <h1 class="article-title">${topic.title}</h1>
                    <p class="article-subtitle">${topic.subtitle}</p>
                </div>
                <div class="article-actions" data-topic-actions data-topic-id="${topicId}">
                    <div class="article-actions__row">
                        ${renderFavoriteButton(topicId)}
                        ${renderReadCheckboxes(topicId)}
                        <button class="share-btn share-btn--article" onclick="shareTopic(${topic.id})" title="Bu konuyu paylaş">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>
                    <div class="article-actions__row" aria-label="Okuma durumu">
                        <span class="topic-preview__read">${state.readLevel}/5</span>
                    </div>
                </div>
            </div>
            <div class="article-tags">
                ${topic.tags.map(tag => `<span class="article-tag">${tag}</span>`).join('')}
            </div>
        </header>
        <div class="article-content">
            ${sectionsHTML}
        </div>
    `;
}

function showTopicsList() {
    const listSection = document.getElementById('topicsList');
    const detailSection = document.getElementById('topicDetail');

    // URL'yi temizle
    updateURL(null);
    
    // Sayfa başlığını geri al
    document.title = 'Konu Özetleri | Mikrobiyoloji Anlatımları';

    detailSection.style.display = 'none';
    listSection.style.display = 'grid';
    currentView = 'list';
}

// Geri butonu
function initBackButton() {
    const backBtn = document.getElementById('backToList');
    if (backBtn) {
        backBtn.addEventListener('click', showTopicsList);
    }
}

// Yardımcı fonksiyonlar
function getCategoryIcon(category) {
    const icons = {
        'bakteriyoloji': 'fas fa-bacterium',
        'viroloji': 'fas fa-virus',
        'mikoloji': 'fas fa-seedling',
        'parazitoloji': 'fas fa-bug',
        'immunoloji': 'fas fa-shield-virus'
    };
    return icons[category] || 'fas fa-file-medical';
}

function getCategoryLabel(category) {
    const labels = {
        'bakteriyoloji': 'Bakteriyoloji',
        'viroloji': 'Viroloji',
        'mikoloji': 'Mikoloji',
        'parazitoloji': 'Parazitoloji',
        'immunoloji': 'İmmunoloji'
    };
    return labels[category] || category;
}

// Sidebar kategori filtreleri
function initCategoryFilters() {
    const filterBtns = document.querySelectorAll('#topicFilters .nav-item');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.topic;
            renderTopicsList(topicsData);
            syncDockChips();
            
            // Liste görünümüne dön
            if (currentView === 'detail') {
                showTopicsList();
            }
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
            renderTopicsList(topicsData);
            
            // Arama yapılırken liste görünümüne dön
            if (currentView === 'detail') {
                showTopicsList();
            }
        }, 300);
    });
}

// Dock chip'leri
function initDockChips() {
    const chips = document.querySelectorAll('[data-topic-chip]');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentCategory = chip.dataset.topicChip;
            renderTopicsList(topicsData);
            syncSidebarFilters();
            
            if (currentView === 'detail') {
                showTopicsList();
            }
        });
    });
}

function syncDockChips() {
    const chips = document.querySelectorAll('[data-topic-chip]');
    chips.forEach(chip => {
        chip.classList.toggle('active', chip.dataset.topicChip === currentCategory);
    });
}

function syncSidebarFilters() {
    const filterBtns = document.querySelectorAll('#topicFilters .nav-item');
    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.topic === currentCategory);
    });
}

/**
 * Normalize filter ID from dock to match data category format
 */
function normalizeFilterId(filterId) {
    if (!filterId || filterId === 'all') return 'all';
    
    const lower = filterId.toLowerCase();
    const mappings = {
        'klinik bakteriyoloji': 'bakteriyoloji',
        'viroloji': 'viroloji',
        'mikoloji': 'mikoloji',
        'parazitoloji': 'parazitoloji'
    };
    
    return mappings[lower] || filterId.toLowerCase();
}

/**
 * Global filter function for Dock integration
 * @param {string} filterId - Filter ID from dock (Klinik Bakteriyoloji, Viroloji, etc.)
 */
window.filterTopics = function(filterId) {
    // Normalize filter ID to match data format
    const normalizedFilter = normalizeFilterId(filterId);
    currentCategory = normalizedFilter;
    renderTopicsList(topicsData);
    syncDockChips();
    syncSidebarFilters();
    
    // Go to list view if in detail view
    if (currentView === 'detail') {
        showTopicsList();
    }
    console.log('Topics: Filtered by', normalizedFilter);
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
