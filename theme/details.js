/**
 * Details Module - Ayrıntılı Dosyalar JavaScript
 * Spot bilgi kartlarını render eden ve filtreleme işlemleri yapan modül
 */

// Global değişkenler
let currentTopic = 'all';
let searchQuery = '';

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    initDetailsModule();
    initTheme();
});

function initDetailsModule() {
    renderDetailCards(detailsData);
    initTopicFilters();
    initSearch();
    initExpandables();
    initDockChips();
}

// Tema fonksiyonları
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeButton(savedTheme);
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
    const iconClass = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    const textValue = theme === 'dark' ? 'Açık Mod' : 'Koyu Mod';
    
    document.querySelectorAll('[data-theme-icon]').forEach(icon => {
        icon.className = iconClass;
    });
    document.querySelectorAll('[data-theme-text]').forEach(label => {
        label.textContent = textValue;
    });
}

// Kart render fonksiyonu
function renderDetailCards(data) {
    const grid = document.getElementById('detailsGrid');
    if (!grid) return;

    // Filtreleme
    let filtered = data;
    
    if (currentTopic !== 'all') {
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

    grid.innerHTML = filtered.map(item => createDetailCard(item)).join('');
    
    // Expand butonlarını yeniden bağla
    initExpandables();
}

function createDetailCard(item) {
    const iconClass = getIconClass(item.category);
    const icon = getCategoryIcon(item.category);
    
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
        <article class="detail-card" data-category="${item.category}">
            <div class="detail-card__header">
                <div class="detail-card__icon detail-card__icon--${item.category}">
                    <i class="${icon}"></i>
                </div>
                <div class="detail-card__title-group">
                    <p class="detail-card__category">${getCategoryLabel(item.category)}</p>
                    <h3 class="detail-card__title">${item.title}</h3>
                </div>
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
