// SRS (Spaced Repetition System) - Aralıklı Tekrar Sistemi
// LocalStorage ile kullanıcı ilerlemesi saklanır

class SRSManager {
    constructor() {
        this.cards = contentData.map((card, index) => ({
            ...card,
            srsData: this.loadCardData(card.id) || {
                showCount: 0, // Kaç kez gösterildi (başlangıç 0)
                correctCount: 0, // Kaç kez doğru cevaplandı
                totalReviews: 0, // Toplam değerlendirme sayısı
                nextShowIn: 0, // Kaç soru sonra tekrar gösterilecek
                difficultyLevel: 1, // Zorluk seviyesi (1=Çok Zor, 5=Çok Kolay)
                status: 'new' // new, learning, mastered
            }
        }));
        
        this.currentSession = [];
        this.currentIndex = 0;
        this.sessionStats = {
            completed: 0,
            easy: 0,
            good: 0,
            hard: 0,
            again: 0
        };
        
        this.studyMode = 'all';
        this.categoryFilter = 'all';
        this.turCounter = 0; // Seanstaki toplam tur sayacı
        this.categoryBuckets = this.groupCardsByCategory();
        this.cooldownCards = new Set();
    }
    
    groupCardsByCategory() {
        return this.cards.reduce((map, card) => {
            if (!map.has(card.category)) {
                map.set(card.category, []);
            }
            map.get(card.category).push(card);
            return map;
        }, new Map());
    }
    
    // LocalStorage'dan kart verisini yükle
    loadCardData(cardId) {
        const data = localStorage.getItem(`srs_card_${cardId}`);
        return data ? JSON.parse(data) : null;
    }
    
    // LocalStorage'a kart verisini kaydet
    saveCardData(cardId, srsData) {
        localStorage.setItem(`srs_card_${cardId}`, JSON.stringify(srsData));
    }
    
    // İlerlemeyi sıfırla
    resetProgress() {
        if (confirm('Tüm ilerlemenizi sıfırlamak istediğinizden emin misiniz?')) {
            this.cards.forEach(card => {
                localStorage.removeItem(`srs_card_${card.id}`);
                card.srsData = {
                    showCount: 0,
                    correctCount: 0,
                    totalReviews: 0,
                    nextShowIn: 0,
                    difficultyLevel: 1,
                    status: 'new'
                };
            });
            this.updateStats();
            alert('İlerleme sıfırlandı!');
            location.reload();
        }
    }
    
    // Seans için kartları filtrele
    prepareSession() {
        let filtered = this.categoryFilter === 'all'
            ? [...this.cards]
            : [...(this.categoryBuckets.get(this.categoryFilter) || [])];
        
        // Kategori filtresi
        if (this.categoryFilter !== 'all') {
            filtered = filtered.filter(card => 
                card.category === this.categoryFilter || 
                card.category.includes(this.categoryFilter)
            );
        }
        
        // Mod filtresi
        switch (this.studyMode) {
            case 'due':
                // Gösterilme sırası gelen kartlar (nextShowIn = 0)
                filtered = filtered.filter(card => card.srsData.nextShowIn <= 0);
                break;
            case 'new':
                filtered = filtered.filter(card => card.srsData.status === 'new');
                break;
            case 'difficult':
                // Zorluk seviyesi düşük olanlar (1-2 seviye = zor)
                filtered = filtered.filter(card => 
                    card.srsData.totalReviews > 0 && 
                    card.srsData.difficultyLevel <= 2
                );
                break;
        }
        
        return filtered;
    }
    
    // Kartı değerlendir (Sayı Tabanlı SRS)
    rateCard(difficulty) {
        if (this.currentIndex >= this.currentSession.length) return;
        
        const card = this.currentSession[this.currentIndex];
        const srs = card.srsData;
        
        // Gösterim sayısını artır
        srs.showCount++;
        srs.totalReviews++;
        
        // Zorluk seviyesine göre bir sonraki gösterime kaç soru sonra geleceğini hesapla
        let nextShowIn = 0;
        
        switch (difficulty) {
            case 'again':
                // Çok zor - Hemen tekrar (1-2 soru sonra)
                nextShowIn = 1;
                srs.difficultyLevel = Math.max(1, srs.difficultyLevel - 0.5);
                srs.status = 'learning';
                this.sessionStats.again++;
                break;
                
            case 'hard':
                // Zor - Kısa süre sonra (3-5 soru sonra)
                nextShowIn = 3 + Math.floor(srs.correctCount * 0.5);
                srs.correctCount++;
                srs.difficultyLevel = Math.max(1, srs.difficultyLevel - 0.2);
                srs.status = 'learning';
                this.sessionStats.hard++;
                break;
                
            case 'good':
                // İyi - Orta süre sonra (5-10 soru sonra)
                nextShowIn = 5 + Math.floor(srs.correctCount * 1);
                srs.correctCount++;
                srs.difficultyLevel = Math.min(5, srs.difficultyLevel + 0.3);
                srs.status = srs.correctCount >= 3 ? 'mastered' : 'learning';
                this.sessionStats.good++;
                break;
                
            case 'easy':
                // Kolay - Uzun süre sonra (10-20 soru sonra)
                nextShowIn = 10 + Math.floor(srs.correctCount * 2);
                srs.correctCount++;
                srs.difficultyLevel = Math.min(5, srs.difficultyLevel + 0.5);
                srs.status = 'mastered';
                this.sessionStats.easy++;
                break;
        }
        
        // Bir sonraki gösterim sayısını ayarla
        srs.nextShowIn = nextShowIn;
        if (nextShowIn > 0) {
            this.cooldownCards.add(card);
        } else {
            this.cooldownCards.delete(card);
        }
        
        // Kaydet
        this.saveCardData(card.id, srs);
        
        // İstatistikleri güncelle
        this.sessionStats.completed++;
        
        // Sonraki karta geç
        this.nextCard();
    }
    
    // Sonraki kart
    nextCard() {
        this.currentIndex++;
        this.turCounter++; // Tur sayacını artır
        
        this.decrementCooldowns();
        
        if (this.currentIndex >= this.currentSession.length) {
            this.completeSession();
        } else {
            this.showCard();
        }
    }
    
    decrementCooldowns() {
        if (this.cooldownCards.size === 0) return;
        const finished = [];
        for (const card of this.cooldownCards) {
            if (card.srsData.nextShowIn > 0) {
                card.srsData.nextShowIn--;
            }
            if (card.srsData.nextShowIn <= 0) {
                finished.push(card);
            }
        }
        finished.forEach(card => this.cooldownCards.delete(card));
    }
    
    // Kartı göster
    showCard() {
        const card = this.currentSession[this.currentIndex];
        const flashcard = document.getElementById('study-card');
        
        // Flip durumunu sıfırla
        flashcard.classList.remove('flipped');
        
        // İlerleme
        document.getElementById('currentCard').textContent = this.currentIndex + 1;
        document.getElementById('totalInSession').textContent = this.currentSession.length;
        
        const progress = ((this.currentIndex + 1) / this.currentSession.length) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
        
        // Kart içeriği
        document.getElementById('card-category').textContent = card.category;
        document.getElementById('card-topic').textContent = card.topic || '';
        document.getElementById('card-question').textContent = card.question;
        document.getElementById('card-answer').textContent = card.correctAnswer;
        
        // Detayları oluştur
        let detailsHTML = `<p class="core-info">${card.details.coreInfo}</p>`;
        
        if (card.details.keyPoints) {
            detailsHTML += '<div class="key-points"><ul>';
            card.details.keyPoints.forEach(point => {
                detailsHTML += `<li>${point}</li>`;
            });
            detailsHTML += '</ul></div>';
        }
        
        if (card.details.table) {
            detailsHTML += card.details.table;
        }
        
        if (card.details.alert || card.details.pitfalls) {
            const alertText = card.details.alert || card.details.pitfalls;
            const icon = card.details.alert ? '⚠️' : '🎯';
            detailsHTML += `<div class="alert-box"><span class="alert-icon">${icon}</span><p class="alert-text">${alertText}</p></div>`;
        }
        
        // İlgili Sorular bölümü ekle
        if (card.details.relatedQuestions && card.details.relatedQuestions.length > 0) {
            detailsHTML += '<div class="related-questions">';
            detailsHTML += '<div class="related-title"><i class="fas fa-clipboard-list"></i> SORULMA İHTİMALİ YÜKSEK İLGİLİ SORULAR</div>';
            detailsHTML += '<ul class="related-list">';
            card.details.relatedQuestions.forEach((q, index) => {
                detailsHTML += `<li class="has-index"><span class="related-index">${index + 1}.</span>${q}</li>`;
            });
            detailsHTML += '</ul></div>';
        }
        
        document.getElementById('card-details').innerHTML = detailsHTML;
        
        // Zorluk butonlarının zamanlarını güncelle
        this.updateDifficultyTimes(card);
    }
    
    // Zorluk butonlarının gösterim sayılarını güncelle
    updateDifficultyTimes(card) {
        const srs = card.srsData;
        
        // Again: 1-2 soru sonra
        document.querySelector('.btn-again .diff-time').textContent = '1 soru sonra';
        
        // Hard: 3-5 soru sonra
        const hardShows = 3 + Math.floor(srs.correctCount * 0.5);
        document.querySelector('.btn-hard .diff-time').textContent = hardShows + ' soru sonra';
        
        // Good: 5-10 soru sonra
        const goodShows = 5 + Math.floor(srs.correctCount * 1);
        document.querySelector('.btn-good .diff-time').textContent = goodShows + ' soru sonra';
        
        // Easy: 10-20 soru sonra
        const easyShows = 10 + Math.floor(srs.correctCount * 2);
        document.querySelector('.btn-easy .diff-time').textContent = easyShows + ' soru sonra';
    }
    
    // Seans tamamlandı
    completeSession() {
        document.getElementById('study-card').style.display = 'none';
        document.getElementById('session-complete').classList.remove('hidden');
        
        document.getElementById('completedCount').textContent = this.sessionStats.completed;
        document.getElementById('easyCount').textContent = this.sessionStats.easy;
        
        this.updateStats();
    }
    
    // İstatistikleri güncelle
    updateStats() {
        const categoryPool = this.categoryFilter === 'all'
            ? [...this.cards]
            : this.cards.filter(card =>
                card.category === this.categoryFilter ||
                card.category.includes(this.categoryFilter)
            );
        const total = categoryPool.length;
        const readyCount = this.prepareSession().length;
        const mastered = categoryPool.filter(c => c.srsData.status === 'mastered').length;

        const totalTargets = [
            document.getElementById('totalCards')
        ];
        totalTargets.forEach(node => {
            if (node) node.textContent = total;
        });

        const readyTargets = [
            document.getElementById('dueCards'),
            document.getElementById('dueCardsHero'),
            document.getElementById('dueCardsHeroMobile')
        ];
        readyTargets.forEach(node => {
            if (node) node.textContent = readyCount;
        });

        const masteredTargets = [
            document.getElementById('masteredCards')
        ];
        masteredTargets.forEach(node => {
            if (node) node.textContent = mastered;
        });

        updateReadyState();
    }
}

// Global instance
let srsManager;
const CATEGORY_ICON_MAP = {
    'Genel Mikrobiyoloji': 'fas fa-bacterium',
    'Sterilizasyon': 'fas fa-fire-flame-curved',
    'Pre-Analitik': 'fas fa-vial',
    'Klinik Bakteriyoloji': 'fas fa-microscope',
    'Mikrobiyota': 'fas fa-dna',
    'Mikoloji': 'fas fa-virus',
    'Yeterlilik sınavı 2025': 'fas fa-graduation-cap'
};

const MODE_COPY = {
    all: {
        label: 'Tüm kartlar',
        description: 'Tüm sorular rastgele sırayla'
    },
    due: {
        label: 'Tekrar zamanı',
        description: 'Tekrar zamanı gelen sorular'
    },
    new: {
        label: 'Sadece yeni kartlar',
        description: 'Hiç çalışmadığınız yeni sorular'
    },
    difficult: {
        label: 'Zor kartlar',
        description: 'Zorlandığınız sorulara odaklan'
    }
};

function buildCategoryFilters() {
    const container = document.getElementById('categoryFilters') || document.querySelector('.filter-menu');
    if (!container) return;

    container.innerHTML = '';

    const createButton = (label, value, iconClass) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'nav-item';
        btn.dataset.category = value;
        btn.innerHTML = `<i class="${iconClass}"></i> ${label}`;
        btn.addEventListener('click', () => filterCategory(value));
        container.appendChild(btn);
    };

    createButton('Tümü', 'all', 'fas fa-th-large');

    const categories = Array.from(new Set(contentData.map(item => item.category)))
        .sort((a, b) => a.localeCompare(b, 'tr', { sensitivity: 'base' }));

    categories.forEach(category => {
        const icon = CATEGORY_ICON_MAP[category] || 'fas fa-tag';
        createButton(category, category, icon);
    });

    buildSrsMobileFilterStrip(['all', ...categories]);
    setActiveCategoryButton('all');
}

function setActiveCategoryButton(category) {
    document.querySelectorAll('.filter-menu .nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    document.querySelectorAll('.mobile-filter-chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.category === category);
    });
}

function buildSrsMobileFilterStrip(categories) {
    const strip = document.getElementById('mobileFilterStrip');
    if (!strip) return;

    const fragment = document.createDocumentFragment();
    categories.forEach(category => {
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
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    srsManager = new SRSManager();
    buildCategoryFilters();
    initSessionControls();
    initModeDock();
    srsManager.updateStats();
    initFilterPanel();
});

// Çalışma modunu ayarla
function setStudyMode(mode) {
    if (!srsManager) return;
    const targetMode = MODE_COPY[mode] ? mode : 'all';
    srsManager.studyMode = targetMode;

    document.querySelectorAll('[data-mode-trigger]').forEach(btn => {
        const btnMode = btn.dataset.modeTrigger;
        btn.classList.toggle('active', btnMode === targetMode);
    });

    const copy = MODE_COPY[targetMode];
    const info = document.getElementById('session-info');
    if (info) {
        info.textContent = copy.description;
    }
    const label = document.getElementById('activeModeLabel');
    if (label) {
        label.textContent = copy.label;
    }

    updateReadyState();
}

// Kategori filtresi
function filterCategory(category) {
    srsManager.categoryFilter = category;
    setActiveCategoryButton(category);
    updateReadyState();
}

// Kartları önceliklendir
function shuffleCards() {
    const cards = srsManager.prepareSession();
    if (cards.length === 0) {
        alert('Bu filtrede çalışılacak soru yok!');
        return;
    }

    const prioritized = prioritizeCards(cards);
    const previewCount = Math.min(3, prioritized.length);
    const previewList = prioritized.slice(0, previewCount)
        .map(card => `• ${card.topic || card.question}`)
        .join('\n');
    const previewText = previewList ? `\nÖn sıralardaki kartlar:\n${previewList}` : '';

    alert(`${prioritized.length} kart gösterim sayısına göre sıralandı.${previewText}`);
}

// Seansı başlat
function startSession() {
    const cards = srsManager.prepareSession();
    
    if (cards.length === 0) {
        alert('Bu filtrede çalışılacak soru yok!');
        return;
    }
    
    const prioritized = prioritizeCards(cards);
    const sessionTarget = getSessionSizeTarget();
    const sessionLength = Math.min(sessionTarget, prioritized.length);

    if (sessionLength === 0) {
        alert('Bu filtrede çalışılacak soru yok!');
        return;
    }

    const slider = document.getElementById('sessionSizeInput');
    if (slider && parseInt(slider.value, 10) !== sessionLength) {
        slider.value = sessionLength;
        handleSessionSizeChange({ target: slider });
    }

    srsManager.currentSession = prioritized.slice(0, sessionLength);
    srsManager.currentIndex = 0;
    srsManager.sessionStats = {
        completed: 0,
        easy: 0,
        good: 0,
        hard: 0,
        again: 0
    };
    
    // Ekranları göster/gizle
    document.getElementById('study-card').style.display = 'block';
    document.getElementById('session-complete').classList.add('hidden');
    document.body.classList.add('session-active');
    document.getElementById('study-card').classList.remove('flipped');
    closeFilterPanelOverlay();

    srsManager.showCard();
}

// Kartı çevir
function flipCard() {
    const flashcard = document.getElementById('study-card');
    flashcard.classList.toggle('flipped');
}

// Kartı değerlendir
function rateCard(difficulty) {
    srsManager.rateCard(difficulty);
}

// İlerlemeyi sıfırla
function resetProgress() {
    srsManager.resetProgress();
}

function exitSession() {
    document.body.classList.remove('session-active');
    document.getElementById('study-card').style.display = 'none';
    document.getElementById('session-complete').classList.add('hidden');
    document.getElementById('progressFill').style.width = '0%';
    document.getElementById('currentCard').textContent = '0';
    document.getElementById('totalInSession').textContent = '0';
    if (srsManager) {
        srsManager.currentSession = [];
        srsManager.currentIndex = 0;
        srsManager.sessionStats = {
            completed: 0,
            easy: 0,
            good: 0,
            hard: 0,
            again: 0
        };
        srsManager.updateStats();
    }
}

let filterPanelCloser = null;

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

    document.querySelectorAll('[data-filter-trigger]').forEach(trigger => {
        trigger.addEventListener('click', openPanel);
    });
    closeBtn?.addEventListener('click', closePanel);
    panel.addEventListener('click', event => {
        if (event.target === panel) {
            closePanel();
        }
    });
    document.addEventListener('keydown', event => {
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

// Klavye kısayolları
document.addEventListener('keydown', (e) => {
    const flashcard = document.getElementById('study-card');
    
    if (flashcard.style.display === 'none') return;
    
    if (e.code === 'Space') {
        e.preventDefault();
        flipCard();
    } else if (flashcard.classList.contains('flipped')) {
        switch (e.code) {
            case 'Digit1':
                rateCard('again');
                break;
            case 'Digit2':
                rateCard('hard');
                break;
            case 'Digit3':
                rateCard('good');
                break;
            case 'Digit4':
                rateCard('easy');
                break;
        }
    }
});

function prioritizeCards(cards) {
    return [...cards].sort((a, b) => {
        const showDiff = a.srsData.showCount - b.srsData.showCount;
        if (showDiff !== 0) return showDiff;
        const nextDiff = a.srsData.nextShowIn - b.srsData.nextShowIn;
        if (nextDiff !== 0) return nextDiff;
        return a.id - b.id;
    });
}

function initSessionControls() {
    const slider = document.getElementById('sessionSizeInput');
    if (!slider) return;
    slider.dataset.min = slider.min || '5';
    slider.addEventListener('input', handleSessionSizeChange);
    handleSessionSizeChange({ target: slider });
}

function initModeDock() {
    const modeButtons = document.querySelectorAll('[data-mode-trigger]');
    if (modeButtons.length === 0) return;
    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setStudyMode(btn.dataset.modeTrigger || 'all');
        });
    });
    const initialMode = (srsManager && srsManager.studyMode) ? srsManager.studyMode : 'all';
    setStudyMode(initialMode);
}

function handleSessionSizeChange(event) {
    if (!event || !event.target) return;
    const value = parseInt(event.target.value, 10) || 0;
    document.querySelectorAll('[data-session-size-value]').forEach(el => {
        el.textContent = `${value} kart`;
    });
}

function getSessionSizeTarget() {
    const slider = document.getElementById('sessionSizeInput');
    if (!slider) return 10;
    return parseInt(slider.value, 10) || parseInt(slider.min, 10) || 10;
}

function updateReadyState() {
    if (!srsManager) return;
    const available = srsManager.prepareSession().length;
    document.querySelectorAll('[data-ready-count]').forEach(el => {
        el.textContent = available;
    });
    document.querySelectorAll('[data-session-start]').forEach(btn => {
        btn.disabled = available === 0;
    });

    const slider = document.getElementById('sessionSizeInput');
    if (slider) {
        const min = parseInt(slider.dataset.min || slider.min || '5', 10);
        const maxVal = Math.max(min, available);
        slider.max = maxVal;
        if (available === 0) {
            slider.value = min;
            handleSessionSizeChange({ target: slider });
            document.querySelectorAll('[data-session-size-value]').forEach(el => {
                el.textContent = '0 kart';
            });
            return;
        }

        if (parseInt(slider.value, 10) > maxVal) {
            slider.value = maxVal;
        }
        handleSessionSizeChange({ target: slider });
    }
}

// Global exports for dock.js
window.setStudyMode = setStudyMode;
window.filterCategory = filterCategory;
