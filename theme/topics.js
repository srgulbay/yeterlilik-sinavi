/**
 * Topics Module - Konu Özetleri JavaScript
 * Konu anlatımlarını render eden ve görünüm yöneten modül
 */

// Global değişkenler
let currentCategory = 'all';
let searchQuery = '';
let currentView = 'list'; // 'list' veya 'detail'

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    initTopicsModule();
    initTheme();
});

function initTopicsModule() {
    renderTopicsList(topicsData);
    initCategoryFilters();
    initSearch();
    initBackButton();
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

    container.innerHTML = filtered.map(topic => createTopicPreview(topic)).join('');
    
    // Kart tıklama olaylarını bağla
    container.querySelectorAll('.topic-preview').forEach(card => {
        card.addEventListener('click', () => {
            const topicId = parseInt(card.dataset.topicId);
            showTopicDetail(topicId);
        });
    });
}

function createTopicPreview(topic) {
    const icon = getCategoryIcon(topic.category);
    
    return `
        <article class="topic-preview" data-topic-id="${topic.id}">
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
                <span class="topic-preview__read">
                    Oku <i class="fas fa-arrow-right"></i>
                </span>
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

    // Makaleyi render et
    articleContainer.innerHTML = renderTopicArticle(topic);

    // Sayfanın üstüne scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderTopicArticle(topic) {
    const icon = getCategoryIcon(topic.category);
    
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
