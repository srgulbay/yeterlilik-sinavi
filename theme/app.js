const DATASET = typeof contentData !== 'undefined'
    ? contentData
    : (typeof window !== 'undefined' ? window.contentData : undefined);
const DATA_READY = Array.isArray(DATASET) && DATASET.length > 0;
const CATEGORY_MAP = DATA_READY ? buildCategoryMap(DATASET) : new Map();
const SEARCH_INDEX = DATA_READY ? buildSearchIndex(DATASET) : [];
const MOBILE_QUERY = typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(max-width: 768px)')
    : null;

document.addEventListener('DOMContentLoaded', () => {
    if (!DATA_READY) {
        const grid = document.getElementById('content-grid');
        if (grid) {
            grid.replaceChildren(buildErrorState());
        }
        return;
    }
    
    renderCards(DATASET);
    updateActiveButton('all');
    buildMobileFilterStrip();
    initDesktopSearch();
    initFilterPanel();
    initShareButtons();
    handleShareLink();
    initScrollReveal(); // Scroll Reveal başlat
    // Segment control artık dock.js tarafından yönetiliyor
    
    if (MOBILE_QUERY) {
        MOBILE_QUERY.addEventListener('change', () => {
            syncCardToggles();
        });
    }
});

// URL'den paylaşım linkini kontrol et
function handleShareLink() {
    const params = new URLSearchParams(window.location.search);
    const questionId = params.get('q');
    
    if (questionId) {
        setTimeout(() => {
            const card = document.querySelector(`[data-question-id="${questionId}"]`);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.classList.add('highlighted');
                // Kartı aç
                if (card.classList.contains('collapsed')) {
                    card.classList.remove('collapsed');
                    card.classList.add('expanded');
                }
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
            e.stopPropagation();
            const questionId = shareBtn.dataset.questionId;
            shareQuestion(questionId);
        }
    });
}

// Soru paylaşma fonksiyonu
function shareQuestion(questionId) {
    const url = `${window.location.origin}${window.location.pathname}?q=${questionId}`;
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

function renderCards(data) {
    const container = document.getElementById('content-grid');
    if (!container) return;

    if (!data || data.length === 0) {
        container.replaceChildren(buildEmptyState());
        return;
    }

    const fragment = document.createDocumentFragment();

    data.forEach((item, index) => {
        if (!item || !item.details) return;

        const card = document.createElement('div');
        // İlk 6 kart hemen görünür, sonrakiler scroll ile
        const isInitialVisible = index < 6;
        card.className = isInitialVisible ? 'card scroll-reveal is-visible' : 'card scroll-reveal';
        card.setAttribute('data-question-id', item.id);

        const extraContent = item.details.table || '';
        const listContent = Array.isArray(item.details.keyPoints)
            ? `<div class="key-points"><ul>${item.details.keyPoints.map(p => `<li>${p}</li>`).join('')}</ul></div>`
            : '';

        let alertContent = '';
        if (item.details.alert || item.details.pitfalls) {
            const text = item.details.alert || item.details.pitfalls;
            const icon = item.details.alert ? '⚠️' : '🎯';
            alertContent = `<div class="alert-box"><span class="alert-icon">${icon}</span><p class="alert-text">${text}</p></div>`;
        }

        let relatedContent = '';
        if (item.details.relatedQuestions && item.details.relatedQuestions.length > 0) {
            relatedContent = `
                <div class="related-questions">
                    <div class="related-title">
                        <i class="fas fa-link"></i> İlgili Sorular
                    </div>
                    <ul class="related-list">
                        ${item.details.relatedQuestions.map(q => `<li>${q}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        const compact = isCompactMode();
        const expanded = !compact;

        card.innerHTML = `
            <div class="card-header">
                <div class="card-header__top">
                    <span class="badge">${item.category}</span>
                    <button class="share-btn" data-question-id="${item.id}" title="Bu soruyu paylaş">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
                ${item.topic ? `<div class="topic-badge"><i class="fas fa-bookmark"></i> ${item.topic}</div>` : ''}
                <h3 class="question">${item.question}</h3>
            </div>
            <div class="card-body">
                <div class="answer-section">
                    <span class="answer-label">Doğru Cevap</span>
                    <span class="answer-text">${item.correctAnswer}</span>
                </div>
                
                <div class="analysis-section">
                    <div class="section-title">Uzman Analizi</div>
                    <div class="core-info">${item.details.coreInfo}</div>
                    ${listContent}
                    ${extraContent}
                    ${alertContent}
                    ${relatedContent}
                </div>
                <button class="card-toggle" type="button" aria-expanded="${expanded}">
                    <span>${expanded ? 'Detayları Gizle' : 'Detayları Aç'}</span>
                    <i class="fas fa-chevron-down" aria-hidden="true"></i>
                </button>
            </div>
        `;
        if (compact) {
            card.classList.add('collapsed');
        } else {
            card.classList.add('expanded');
        }
        fragment.appendChild(card);
    });

    container.replaceChildren(fragment);
    syncCardToggles();
    
    // Scroll reveal'ı yenile
    setTimeout(() => refreshScrollReveal(), 50);
}

/**
 * Normalize filter ID from dock segment to category name
 * Handles mapping between dock segment IDs and data categories
 */
function normalizeFilterId(filterId) {
    if (!filterId || filterId === 'all') return 'all';
    
    // Segment ID'leri direkt eşleşebilir
    if (CATEGORY_MAP.has(filterId)) {
        return filterId;
    }
    
    // Lowercase kontrolü
    const lowerFilter = filterId.toLowerCase();
    for (const [key, _] of CATEGORY_MAP) {
        if (key.toLowerCase() === lowerFilter) {
            return key;
        }
        // Kısmi eşleşme (örn: "Bakteriyoloji" → "Klinik Bakteriyoloji")
        if (key.toLowerCase().includes(lowerFilter) || lowerFilter.includes(key.toLowerCase())) {
            return key;
        }
    }
    
    return filterId;
}

function filterCategory(category) {
    console.log('filterCategory called with:', category);
    console.log('CATEGORY_MAP keys:', Array.from(CATEGORY_MAP.keys()));
    
    // Normalize the category ID
    const normalizedCategory = normalizeFilterId(category);
    console.log('Normalized category:', normalizedCategory);
    
    updateActiveButton(normalizedCategory);
    if (typeof window.setDockCategoryActive === 'function') {
        window.setDockCategoryActive(normalizedCategory);
    }
    
    const title = normalizedCategory === 'all' ? 'Tüm Konular' : normalizedCategory;
    const filterText = document.getElementById('active-filter-text');
    if (filterText) {
        filterText.innerText = `${title} ile ilgili kartlar görüntüleniyor`;
    }

    if (normalizedCategory === 'all') {
        console.log('Rendering all cards:', DATASET.length);
        renderCards(DATASET);
    } else {
        const filteredData = CATEGORY_MAP.get(normalizedCategory) || [];
        console.log('Rendering filtered cards:', filteredData.length, 'for category:', normalizedCategory);
        renderCards(filteredData);
    }
}

function updateActiveButton(category) {
    document.querySelectorAll('.nav-menu .nav-item, .filter-menu .nav-item').forEach(btn => {
        const targetCategory = btn.dataset.category;
        const isMatch = targetCategory
            ? targetCategory === category
            : category === 'all' && btn.textContent.includes('Tüm');
        btn.classList.toggle('active', isMatch);
    });

    document.querySelectorAll('.mobile-filter-chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.category === category);
    });
    
    // Segment control artık dock.js tarafından yönetiliyor
    // Dock segment'i güncelle (eğer dock varsa)
    if (window.dock && typeof window.dock.selectSegment === 'function') {
        // Sadece segment ID'yi güncelle, applySegmentAction'ı tekrar çağırmadan
        window.dock.activeSegment = category;
    }
}

let searchTimeout;
let filterPanelCloser = null;
function searchContent() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        performSearch();
    }, 300);
}

function initDesktopSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    input.addEventListener('input', () => {
        searchContent();
    });
}

function performSearch() {
    const term = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!term) {
        renderCards(DATASET);
        const filterText = document.getElementById('active-filter-text');
        if (filterText) {
            filterText.textContent = 'Tüm konular ve uzman analizleri görüntüleniyor';
        }
        return;
    }
    
    const filtered = SEARCH_INDEX
        .filter(entry => entry.fields.some(field => field.includes(term)))
        .map(entry => entry.ref);
    
    renderCards(filtered);
    
    const filterText = document.getElementById('active-filter-text');
    if (filterText) {
        filterText.textContent = `"${term}" için ${filtered.length} sonuç bulundu`;
    }
}

function buildCategoryMap(data) {
    return data.reduce((map, item) => {
        if (!item || !item.category) return map;
        if (!map.has(item.category)) {
            map.set(item.category, []);
        }
        map.get(item.category).push(item);
        return map;
    }, new Map());
}

function buildSearchIndex(data) {
    return data.map(item => ({
        ref: item,
        fields: [
            (item.question || '').toLowerCase(),
            (item.topic || '').toLowerCase(),
            (item.details?.coreInfo || '').toLowerCase(),
            (item.category || '').toLowerCase(),
            (item.correctAnswer || '').toLowerCase()
        ]
    }));
}

function buildMobileFilterStrip() {
    const strip = document.getElementById('mobileFilterStrip');
    if (!strip) return;

    const categories = ['all', ...Array.from(CATEGORY_MAP.keys())]
        .filter((value, index, self) => self.indexOf(value) === index);

    const fragment = document.createDocumentFragment();
    categories.forEach((category) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'mobile-filter-chip';
        chip.dataset.category = category;
        chip.textContent = category === 'all' ? 'Tümü' : category;
        chip.addEventListener('click', () => {
            filterCategory(category);
            closeFilterPanelOverlay();
        });
        fragment.appendChild(chip);
    });

    strip.setAttribute('role', 'tablist');
    strip.replaceChildren(fragment);
    updateActiveButton('all');
}

function isCompactMode() {
    return MOBILE_QUERY ? MOBILE_QUERY.matches : false;
}

function syncCardToggles() {
    const compact = isCompactMode();
    document.querySelectorAll('.card').forEach((card) => {
        const toggle = card.querySelector('.card-toggle');
        if (!toggle) return;

        if (!compact) {
            card.classList.remove('collapsed');
            card.classList.add('expanded');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.querySelector('span').textContent = 'Detayları Gizle';
        } else if (!card.classList.contains('user-set')) {
            card.classList.add('collapsed');
            card.classList.remove('expanded');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.querySelector('span').textContent = 'Detayları Aç';
        }

        toggle.onclick = () => {
            if (!isCompactMode()) return;
            const isExpanded = card.classList.toggle('expanded');
            card.classList.toggle('collapsed', !isExpanded);
            card.classList.add('user-set');
            toggle.setAttribute('aria-expanded', String(isExpanded));
            toggle.querySelector('span').textContent = isExpanded ? 'Detayları Gizle' : 'Detayları Aç';
        };
    });
}

function initFilterPanel() {
    const panel = document.getElementById('filterPanel');
    const closeBtn = document.getElementById('closeFilterPanel');
    const sheet = panel?.querySelector('.filter-panel__sheet');
    if (!panel || !sheet) return;

    const openPanel = () => {
        panel.classList.add('visible');
        panel.setAttribute('aria-hidden', 'false');
        document.body.classList.add('filters-open');
        window.requestAnimationFrame(() => sheet.focus());
    };

    const closePanel = () => {
        panel.classList.remove('visible');
        panel.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('filters-open');
    };

    filterPanelCloser = closePanel;

    document.querySelectorAll('[data-filter-trigger]').forEach((trigger) => {
        trigger.addEventListener('click', openPanel);
    });
    closeBtn?.addEventListener('click', closePanel);
    panel.addEventListener('click', (event) => {
        if (event.target === panel) {
            closePanel();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && panel.classList.contains('visible')) {
            closePanel();
        }
    });
}

function closeFilterPanelOverlay() {
    if (typeof filterPanelCloser === 'function') {
        filterPanelCloser();
    }
}

function buildEmptyState() {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `
        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
        <p style="font-size: 1.1rem; font-weight: 600;">Aradığınız kriterlere uygun içerik bulunamadı</p>
        <p style="font-size: 0.9rem; margin-top: 0.5rem; opacity: 0.7;">Lütfen arama terimlerinizi değiştirerek tekrar deneyin</p>
    `;
    empty.style.cssText = 'width:100%;text-align:center;padding:4rem 2rem;color:var(--text-secondary);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;';
    return empty;
}

function buildErrorState() {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'text-align:center;padding:4rem;color:var(--danger);';
    wrapper.innerHTML = `
        <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
        <h2>Veri Yükleme Hatası</h2>
        <p>enriched_content.js dosyası yüklenemedi. Lütfen sayfayı yenileyin.</p>
    `;
    return wrapper;
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
                const delay = Math.min(index * 100, 400); // 100ms aralık, max 400ms
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay);
                
                // Bir kez göründükten sonra observe etmeyi bırak
                scrollRevealObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        rootMargin: '0px 0px -100px 0px', // Alt kısımdan 100px önce tetikle (daha geç)
        threshold: 0.15 // %15 görünür olduğunda
    });
    
    // Mevcut kartları observe et
    observeScrollElements();
}

function observeScrollElements() {
    if (!scrollRevealObserver) return;
    
    // Tüm scroll-reveal elementlerini bul
    const elements = document.querySelectorAll('.scroll-reveal:not(.is-visible)');
    elements.forEach(el => {
        scrollRevealObserver.observe(el);
    });
}

// Yeni içerik eklendiğinde çağrılacak
function refreshScrollReveal() {
    if (!scrollRevealObserver) {
        initScrollReveal();
    } else {
        observeScrollElements();
    }
}

// Global export for dock.js
window.filterCategory = filterCategory;
