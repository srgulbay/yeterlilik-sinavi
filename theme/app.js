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
    initSearchOverlay();
    initFilterPanel();
    initShareButtons();
    handleShareLink();
    
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

    data.forEach((item) => {
        if (!item || !item.details) return;

        const card = document.createElement('div');
        card.className = 'card';
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
}

function filterCategory(category) {
    updateActiveButton(category);
    if (typeof window.setDockCategoryActive === 'function') {
        window.setDockCategoryActive(category);
    }
    
    const title = category === 'all' ? 'Tüm Konular' : category;
    const filterText = document.getElementById('active-filter-text');
    if (filterText) {
        filterText.innerText = `${title} ile ilgili kartlar görüntüleniyor`;
    }

    if (category === 'all') {
        renderCards(DATASET);
    } else {
        renderCards(CATEGORY_MAP.get(category) || []);
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

function initSearchOverlay() {
    const overlay = document.getElementById('searchOverlay');
    const closeBtn = document.getElementById('closeSearchOverlay');
    const mobileInput = document.getElementById('mobileSearchInput');
    const desktopInput = document.getElementById('searchInput');
    if (!overlay || !mobileInput) return;

    const openOverlay = () => {
        overlay.classList.add('visible');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('search-open');
        if (desktopInput) {
            mobileInput.value = desktopInput.value;
        }
        window.requestAnimationFrame(() => mobileInput.focus());
    };

    const closeOverlay = () => {
        overlay.classList.remove('visible');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('search-open');
    };

    document.querySelectorAll('[data-search-trigger]').forEach((trigger) => {
        trigger.addEventListener('click', openOverlay);
    });
    closeBtn?.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeOverlay();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && overlay.classList.contains('visible')) {
            closeOverlay();
        }
    });
    mobileInput.addEventListener('input', () => {
        if (desktopInput) {
            desktopInput.value = mobileInput.value;
        }
        searchContent();
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
