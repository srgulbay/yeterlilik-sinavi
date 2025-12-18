/**
 * Topics Module - Konu Özetleri JavaScript
 * Konu anlatımlarını render eden ve görünüm yöneten modül
 */

// Global değişkenler
let currentCategory = 'all';
let searchQuery = '';
let currentView = 'list'; // 'list' veya 'detail'
let topicStateById = new Map(); // topicId(string) -> { favorite:boolean, readLevel:number }

let topicsListLayout = 'cards'; // 'cards' | 'compact'

let topicsSortMode = 'added'; // 'added' | 'category' | 'priority' | 'needsReview' | 'mostReviewed'

let topicAddedIndexById = new Map(); // topicId(string) -> index(number)

let suppressRemotePrefsWrite = false;

let topicPriorityById = new Map(); // topicId(string) -> { score:number(0-100), tier:'high'|'med'|'low', label:string, iconClass:string }

// Manual fine-tuning per topic (TUS/yan dal/yeterlilik “high-yield” emphasis).
// Keep boosts modest: overall ranking still derives from content-derived signals.
const TOPIC_PRIORITY_MANUAL_OVERRIDES = {
    // Bakteriyoloji
    '1': { boost: 6 },   // Bacillus anthracis
    '3': { boost: 8 },   // Streptococcus agalactiae
    '4': { boost: 26 },  // Bakteriyoloji Ayırıcı Testler
    '8': { boost: 22 },  // Fenotipik Direnç Testleri

    // Mikoloji
    '9': { boost: 18 },  // Candida + C. auris
    '20': { boost: 16 }, // Aspergillus
    '21': { boost: 10 }, // Dermatofitler
    '22': { boost: 14 }, // Cryptococcus
    '23': { boost: 10 }, // Dimorfik mantarlar
    '24': { boost: 18 }, // Antifungal ilaçlar/direnç
    '25': { boost: 14 }, // Mukormikoz
    '26': { boost: 14 }, // Pneumocystis

    // Parazitoloji
    '10': { boost: 16 }, // Malarya
    '11': { boost: 10 }, // Bağırsak protozoonları
    '12': { boost: 16 }, // Toxoplasma
    '13': { boost: 10 }, // Leishmania
    '14': { boost: 10 }, // Nematodlar
    '15': { boost: 10 }, // Cestodlar
    '16': { boost: 10 }, // Trematodlar
    '17': { boost: 16 }, // Tanı yöntemleri + antiparaziterler

    // Viroloji
    '2': { boost: 18 },  // Ortomiksovirüsler (influenza)
    '18': { boost: 10 }, // Paramiksovirüsler
    '27': { boost: 24 }, // Hepatit virüsleri
    '28': { boost: 28 }, // HIV + ART
    '29': { boost: 16 }, // Herpesvirüsler
    '30': { boost: 12 }, // Kuduz
    '31': { boost: 14 }, // HPV
    '32': { boost: 10 }, // Enterovirüsler
    '33': { boost: 10 }, // Koronavirüsler
    '34': { boost: 6 },  // Adenovirüs
    '35': { boost: 10 }, // Arbovirüsler
    '36': { boost: 10 }, // Rotavirüs

    // Laboratuvar
    '19': { boost: 18 }, // Temel lab kavramları
};

let topicEndObserver = null;

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    initTopicsModule();
    handleShareLink();
    initScrollReveal();
});

function initTopicsModule() {
    initTopicPriority(topicsData);
    initTopicAddedOrder(topicsData);
    initTopicsLayoutToggle();
    initTopicsSortControl();
    renderTopicsList(topicsData);
    initCategoryFilters();
    initSearch();
    initBackButton();
    initDockChips();
    initTopicState();
    initTopicActions();
}

function storageGetSafe(key, fallback) {
    try {
        const v = window.localStorage?.getItem(key);
        return v != null ? v : fallback;
    } catch (_) {
        return fallback;
    }
}

function storageSetSafe(key, value) {
    try {
        window.localStorage?.setItem(key, String(value));
        return true;
    } catch (_) {
        return false;
    }
}

function initTopicAddedOrder(data) {
    const source = Array.isArray(data) ? data : [];
    const map = new Map();
    source.forEach((t, idx) => {
        if (!t || t.id == null) return;
        map.set(normalizeTopicId(t.id), idx);
    });
    topicAddedIndexById = map;
}

function normalizeTopicsSortMode(mode) {
    const v = String(mode || '').trim();
    if (v === 'topic') return 'category';
    if (v === 'added' || v === 'category' || v === 'priority' || v === 'needsReview' || v === 'mostReviewed') return v;
    return 'added';
}

function setTopicsSortMode(mode) {
    const next = normalizeTopicsSortMode(mode);
    topicsSortMode = next;
    storageSetSafe('topics:sortMode', next);

    const sortRoot = document.querySelector('[data-topics-sort]');
    const label = sortRoot?.querySelector('[data-topics-sort-label]');
    if (label) {
        label.textContent = getSortLabel(next);
    }

    if (sortRoot) {
        sortRoot.querySelectorAll('[data-sort-value]').forEach((btn) => {
            const v = String(btn.getAttribute('data-sort-value') || '');
            btn.setAttribute('aria-selected', String(v === next));
        });
    }

    if (!suppressRemotePrefsWrite && isAuthReady() && window.appFirebase && typeof window.appFirebase.setUserPrefs === 'function') {
        window.appFirebase.setUserPrefs({ topicsSortMode: next }).catch(() => {});
    }
}

function getSortLabel(mode) {
    switch (mode) {
        case 'category': return 'Kategori sırası';
        case 'priority': return 'Öncelik skoru';
        case 'needsReview': return 'Az tekrar edilenler';
        case 'mostReviewed': return 'Çok tekrar edilenler';
        case 'added':
        default:
            return 'Ekleniş sırası';
    }
}

async function hydrateTopicsSortFromUserPrefs() {
    if (!isAuthReady() || !window.appFirebase || typeof window.appFirebase.loadUserPrefs !== 'function') return;
    try {
        const prefs = await window.appFirebase.loadUserPrefs();
        const remote = prefs && typeof prefs === 'object' ? prefs.topicsSortMode : null;
        if (remote === 'topic' || remote === 'added' || remote === 'category' || remote === 'priority' || remote === 'needsReview' || remote === 'mostReviewed') {
            suppressRemotePrefsWrite = true;
            setTopicsSortMode(remote);
            suppressRemotePrefsWrite = false;
            if (currentView === 'list') {
                renderTopicsList(topicsData);
            }
            return;
        }

        // If remote has no value yet, seed it from local preference.
        await window.appFirebase.setUserPrefs({ topicsSortMode: topicsSortMode });
    } catch (_) {
        // ignore
    } finally {
        suppressRemotePrefsWrite = false;
    }
}

function initTopicsSortControl() {
    const saved = storageGetSafe('topics:sortMode', 'added');
    setTopicsSortMode(saved);

    if (window.appFirebase && typeof window.appFirebase.init === 'function') {
        window.appFirebase.init();
    }

    if (window.appFirebase && typeof window.appFirebase.onAuth === 'function') {
        window.appFirebase.onAuth((user) => {
            if (user) {
                hydrateTopicsSortFromUserPrefs();
            }
        });
    }

    if (isAuthReady()) {
        hydrateTopicsSortFromUserPrefs();
    }

    const root = document.querySelector('[data-topics-sort]');
    if (!root) return;
    const trigger = root.querySelector('[data-topics-sort-trigger]');
    const menu = root.querySelector('[data-topics-sort-menu]');
    if (!trigger || !menu) return;

    setTopicsSortMode(topicsSortMode);

    const close = () => {
        root.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
    };

    const open = () => {
        root.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
    };

    const toggle = () => {
        if (root.classList.contains('is-open')) close();
        else open();
    };

    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        toggle();
    });

    menu.querySelectorAll('[data-sort-value]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const v = String(btn.getAttribute('data-sort-value') || '');
            setTopicsSortMode(v);
            close();
            if (currentView === 'list') {
                renderTopicsList(topicsData);
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!root.classList.contains('is-open')) return;
        const t = e.target;
        if (t && root.contains(t)) return;
        close();
    }, { capture: true });

    document.addEventListener('keydown', (e) => {
        if (!root.classList.contains('is-open')) return;
        if (e.key === 'Escape') {
            e.preventDefault();
            close();
        }
    });
}

function setTopicsListLayout(mode) {
    const next = (mode === 'compact') ? 'compact' : 'cards';
    topicsListLayout = next;
    storageSetSafe('topics:listLayout', next);

    if (!suppressRemotePrefsWrite && isAuthReady() && window.appFirebase && typeof window.appFirebase.setUserPrefs === 'function') {
        window.appFirebase.setUserPrefs({ topicsListLayout: next }).catch(() => {});
    }

    const container = document.getElementById('topicsList');
    if (container) {
        container.classList.toggle('topics-list--compact', next === 'compact');
    }

    const btn = document.querySelector('[data-topics-layout-toggle]');
    if (btn) {
        const isCompact = next === 'compact';
        btn.setAttribute('aria-label', isCompact ? 'Görünüm: Liste' : 'Görünüm: Kart');
        btn.title = isCompact ? 'Görünüm: Liste' : 'Görünüm: Kart';
        const icon = btn.querySelector('i');
        if (icon) icon.className = isCompact ? 'fas fa-list' : 'fas fa-grip';
    }
}

async function hydrateTopicsLayoutFromUserPrefs() {
    if (!isAuthReady() || !window.appFirebase || typeof window.appFirebase.loadUserPrefs !== 'function') return;
    try {
        const prefs = await window.appFirebase.loadUserPrefs();
        const remote = prefs && typeof prefs === 'object' ? prefs.topicsListLayout : null;
        if (remote === 'cards' || remote === 'compact') {
            suppressRemotePrefsWrite = true;
            setTopicsListLayout(remote);
            suppressRemotePrefsWrite = false;
            if (currentView === 'list') {
                renderTopicsList(topicsData);
            }
            return;
        }

        // If remote has no value yet, seed it from local preference.
        await window.appFirebase.setUserPrefs({ topicsListLayout: topicsListLayout });
    } catch (_) {
        // ignore
    } finally {
        suppressRemotePrefsWrite = false;
    }
}

function initTopicsLayoutToggle() {
    const saved = storageGetSafe('topics:listLayout', 'cards');
    setTopicsListLayout(saved);

    if (window.appFirebase && typeof window.appFirebase.init === 'function') {
        window.appFirebase.init();
    }

    if (window.appFirebase && typeof window.appFirebase.onAuth === 'function') {
        window.appFirebase.onAuth((user) => {
            if (user) {
                hydrateTopicsLayoutFromUserPrefs();
            }
        });
    }

    if (isAuthReady()) {
        hydrateTopicsLayoutFromUserPrefs();
    }

    const btn = document.querySelector('[data-topics-layout-toggle]');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const next = topicsListLayout === 'compact' ? 'cards' : 'compact';
        setTopicsListLayout(next);
        // Re-render list if we're on list view.
        if (currentView === 'list') {
            renderTopicsList(topicsData);
        }
    });
}

function toSearchText(value) {
    return String(value || '')
        .toLocaleLowerCase('tr-TR')
        .replace(/\s+/g, ' ')
        .trim();
}

function countMatches(text, re) {
    if (!text) return 0;
    const regex = re.global ? re : new RegExp(re.source, `${re.flags}g`);
    let count = 0;
    let m;
    // Guard against zero-length matches.
    while ((m = regex.exec(text)) !== null) {
        count += 1;
        if (m.index === regex.lastIndex) regex.lastIndex += 1;
    }
    return count;
}

function scoreLog(count, weight, cap = 999) {
    const c = Math.min(cap, Math.max(0, Number(count) || 0));
    if (c <= 0) return 0;
    // Diminishing returns: 1→1.0, 2→1.58, 3→2.0, ...
    return (Number(weight) || 0) * Math.log1p(c);
}

function computeTopicPriorityBaseScore(topic) {
    const title = toSearchText(topic?.title);
    const subtitle = toSearchText(topic?.subtitle);
    const summary = toSearchText(topic?.summary);
    const tags = Array.isArray(topic?.tags) ? topic.tags.map(toSearchText).join(' ') : '';
    const sectionTitles = Array.isArray(topic?.sections)
        ? topic.sections.map((s) => toSearchText(s?.title)).join(' ')
        : '';

    const sectionContent = Array.isArray(topic?.sections)
        ? topic.sections.map((s) => toSearchText(s?.content)).join(' ')
        : '';

    // IMPORTANT:
    // We cannot know real exam frequencies without an external corpus.
    // Instead, we infer “exam-likelihood” from:
    // - explicit exam cues embedded in the content (Sınav Notu / Soru tipi)
    // - decision-making density (tanı/tedavi/algoritma/ayırıcı)
    // - high-yield phrasing (en sık, klasik, altın standart, ilk seçenek)
    // - structure density (tables, warning/alert boxes, mnemonics)
    const hay = `${title} ${subtitle} ${summary} ${tags} ${sectionTitles} ${sectionContent}`;

    let score = 0;

    // Explicit exam cues (strongest signal when present)
    const explicitExam = countMatches(hay, /\bsınav\s*notu\b|\bsinav\s*notu\b|\bsoru\s*tipi\b|\btus\b|\byeterlilik\b/g);
    score += scoreLog(explicitExam, 42, 10);

    // “High-yield” phrasing, frequency & importance hints
    const freqHints = countMatches(hay, /\ben\s*sık\b|\ben\s*önemli\b|\bklasik\b|\btipik\b|\bmutlaka\b|\bçok\s*sık\b|\bsıklıkla\b/g);
    score += scoreLog(freqHints, 16, 30);

    // Diagnostic reasoning & interpretation
    const diagnosis = countMatches(hay, /\btanı\b|\btanıda\b|\btanısal\b|\byorum\b|\bdiferansiyel\b|\bayırıcı\b|\baltın\s*standart\b|\bsensitivite\b|\bspesifisite\b|\bduyarlılık\b|\bözgüllük\b/g);
    score += scoreLog(diagnosis, 14, 60);

    // Treatment & prevention
    const treatment = countMatches(hay, /\btedavi\b|\bprofilaksi\b|\başı\b|\başılama\b|\bilk\s*seç(enek|im)\b|\bilk\s*tercih\b|\bkontrendike\b|\byan\s*etki\b|\bdoz\b/g);
    score += scoreLog(treatment, 12, 60);

    // Antimicrobial resistance / guidelines
    const resistance = countMatches(hay, /\bdirenç\b|\bresistans\b|\bcls[ıi]\b|\beucast\b|\b(esbl|ampc|mrsa|vre)\b|\bkarbapenem\b|\bvankomisin\b|\bsefalosporin\b|\bbeta\s*-?laktam\b|\bkinolon\b/g);
    score += scoreLog(resistance, 12, 50);

    // Core clinical syndromes that tend to be repeatedly queried
    const syndromes = countMatches(hay, /\bsepsis\b|\bmenenjit\b|\bpnömoni\b|\bhepatit\b|\bhiv\b|\btüberküloz\b|\bendokardit\b|\bü(se|ye)\b|\bosteomiyelit\b|\bishal\b|\bkolera\b/g);
    score += scoreLog(syndromes, 10, 40);

    // Special populations / infection control
    const specialPops = countMatches(hay, /\bgebelik\b|\byenidoğan\b|\bimmünsüprese\b|\bimmunsuprese\b|\baids\b|\bnozokomiyal\b|\bhastane\s*enfeksiyonu\b|\bizolasyon\b/g);
    score += scoreLog(specialPops, 9, 40);

    // Structure density (content author already encoded “teachable moments”)
    const tableCount = countMatches(sectionContent, /<table\b/g);
    score += scoreLog(tableCount, 7, 12);

    const alertCount = countMatches(sectionContent, /alert-box\b|⚠️|🚨/g);
    score += scoreLog(alertCount, 5, 20);

    const mnemonicCount = countMatches(sectionContent, /mnemonic-box\b|\bmnemonik\b/g);
    score += scoreLog(mnemonicCount, 4, 12);

    const algorithmicLists = countMatches(sectionContent, /\b(1\.|2\.|3\.|4\.|5\.)\b|→/g);
    score += scoreLog(algorithmicLists, 2.5, 120);

    // Breadth: cap strongly to avoid rewarding mere length.
    const sectionCount = Array.isArray(topic?.sections) ? topic.sections.length : 0;
    const tagCount = Array.isArray(topic?.tags) ? topic.tags.length : 0;
    score += Math.min(18, sectionCount * 1.8);
    score += Math.min(8, tagCount * 0.8);

    // Mild category prior (kept subtle)
    const category = toSearchText(topic?.category);
    if (category === 'immunoloji') score += 4;
    if (category === 'viroloji') score += 2;

    return score;
}

function initTopicPriority(data) {
    const items = Array.isArray(data) ? data : [];
    const raw = items
        .map((t) => {
            const id = normalizeTopicId(t?.id);
            const base = computeTopicPriorityBaseScore(t);
            const manual = TOPIC_PRIORITY_MANUAL_OVERRIDES[id]?.boost ?? 0;
            return { id, rawScore: base + (Number(manual) || 0) };
        })
        .filter((x) => x.id);

    if (raw.length === 0) {
        topicPriorityById = new Map();
        return;
    }

    const rawScores = raw.map((x) => x.rawScore);
    const min = Math.min(...rawScores);
    const max = Math.max(...rawScores);

    // Normalize to 0..100 so it stays stable when new topics are added.
    const normalized = raw.map((x) => {
        const score = (max === min)
            ? 50
            : Math.round(((x.rawScore - min) / (max - min)) * 100);
        return { id: x.id, score };
    }).sort((a, b) => b.score - a.score);

    const n = normalized.length;
    const highCut = Math.max(1, Math.round(n * 0.15));
    const medCut = Math.max(highCut + 1, Math.round(n * 0.50));

    const map = new Map();
    normalized.forEach((x, idx) => {
        let tier = 'low';
        let label = 'Düşük';
        let iconClass = 'far fa-bookmark';
        if (idx < highCut) {
            tier = 'high';
            label = 'Yüksek';
            iconClass = 'fas fa-bolt';
        } else if (idx < medCut) {
            tier = 'med';
            label = 'Orta';
            iconClass = 'fas fa-lightbulb';
        }
        map.set(x.id, { score: x.score, tier, label, iconClass });
    });

    topicPriorityById = map;
}

function getTopicPriority(topicId) {
    const id = normalizeTopicId(topicId);
    const p = topicPriorityById.get(id);
    if (p) return p;
    return { score: 50, tier: 'low', label: 'Düşük', iconClass: 'far fa-bookmark' };
}

function renderTopicRecommendation(topicId) {
    const p = getTopicPriority(topicId);
    const title = `Öneri önceliği: ${p.label} (${p.score}/100)`;
    return `
        <span class="topic-reco topic-reco--${p.tier}" title="${title}" aria-label="${title}">
            <i class="${p.iconClass}" aria-hidden="true"></i>
        </span>
    `;
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

function getRepeatAmbianceClassByLevel(readLevel) {
    const level = clampReadLevel(readLevel);
    if (level >= 4) return 'repeat-high';
    if (level <= 1) return 'repeat-low';
    return '';
}

function applyTopicRepeatAmbiance(el, readLevel) {
    if (!el) return;
    // User-specific: don't paint everything red when signed out.
    if (!isAuthReady()) {
        el.classList.remove('repeat-low', 'repeat-high');
        return;
    }
    const cls = getRepeatAmbianceClassByLevel(readLevel);
    el.classList.toggle('repeat-low', cls === 'repeat-low');
    el.classList.toggle('repeat-high', cls === 'repeat-high');
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

        // Favorites-only view needs re-filtering when favorite changes.
        if (currentView === 'list' && currentCategory === 'favorites') {
            renderTopicsList(topicsData);
        }
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
        applyTopicRepeatAmbiance(card, state.readLevel);
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

    const row = document.querySelector(`.topic-row[data-topic-id="${id}"]`);
    if (row) {
        applyTopicRepeatAmbiance(row, state.readLevel);
        const favBtn = row.querySelector('[data-topic-fav]');
        if (favBtn) {
            favBtn.classList.toggle('is-active', state.favorite);
            const icon = favBtn.querySelector('i');
            if (icon) icon.className = state.favorite ? 'fas fa-star' : 'far fa-star';
            favBtn.setAttribute('aria-pressed', String(state.favorite));
        }

        row.querySelectorAll('input[type="checkbox"][data-read-level]').forEach((input) => {
            const level = clampReadLevel(input.dataset.readLevel);
            input.checked = level > 0 && level <= state.readLevel;
            input.disabled = !isAuthReady();
        });
    }

    const detail = document.querySelector(`.topic-article [data-topic-actions][data-topic-id="${id}"]`);
    if (detail) {
        applyTopicRepeatAmbiance(detail, state.readLevel);
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

            const label = e.target.closest('label.topic-check');
            if (label) {
                e.preventDefault();
                e.stopPropagation();
                const input = label.querySelector('input[type="checkbox"][data-read-level]');
                if (input) {
                    await toggleReadLevel(input.dataset.topicId, input.dataset.readLevel);
                }
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

            const label = e.target.closest('label.topic-check');
            if (label) {
                e.preventDefault();
                e.stopPropagation();
                const input = label.querySelector('input[type="checkbox"][data-read-level]');
                if (input) {
                    await toggleReadLevel(input.dataset.topicId, input.dataset.readLevel);
                }
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

async function incrementReadLevelOnce(topicId) {
    const id = normalizeTopicId(topicId);
    if (!isAuthReady()) {
        showToast('İşaretlemek için giriş yapın');
        updateTopicUIFor(id);
        return;
    }

    const prev = getTopicState(id);
    if (prev.readLevel >= 5) {
        updateTopicUIFor(id);
        return;
    }

    const nextLevel = clampReadLevel(prev.readLevel + 1);
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

function showConfirmToast({ message, confirmText = 'Evet', cancelText = 'Hayır', onConfirm, onCancel }) {
    const existing = document.querySelector('.share-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'share-toast share-toast--confirm';
    toast.innerHTML = `
        <div class="share-toast__text">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
        <div class="share-toast__actions">
            <button type="button" class="btn btn-sm btn-primary" data-toast-confirm>${confirmText}</button>
            <button type="button" class="btn btn-sm btn-secondary" data-toast-cancel>${cancelText}</button>
        </div>
    `;

    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);

    const cleanup = () => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    };

    toast.querySelector('[data-toast-confirm]')?.addEventListener('click', async () => {
        cleanup();
        try {
            await onConfirm?.();
        } catch (_) {
            // ignore
        }
    });
    toast.querySelector('[data-toast-cancel]')?.addEventListener('click', () => {
        cleanup();
        try {
            onCancel?.();
        } catch (_) {
            // ignore
        }
    });
}

function clearTopicEndObserver() {
    try {
        topicEndObserver?.disconnect();
    } catch (_) {
        // ignore
    }
    topicEndObserver = null;
}

function setupTopicEndPrompt(topicId) {
    clearTopicEndObserver();

    const id = normalizeTopicId(topicId);
    const sentinel = document.querySelector('[data-topic-end-sentinel]');
    if (!sentinel) return;

    const sessionKey = `topics:end-toast-shown:${id}`;
    if (sessionStorage.getItem(sessionKey)) return;

    topicEndObserver = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (!entry || !entry.isIntersecting) return;

        sessionStorage.setItem(sessionKey, '1');
        clearTopicEndObserver();

        if (!isAuthReady()) {
            showToast('Tebrikler! Konu özetini bitirdin. Tekrar işaretlemek için giriş yap.');
            return;
        }

        const state = getTopicState(id);
        const nextLevel = clampReadLevel(state.readLevel + 1);

        // If already maxed, just congratulate.
        if (state.readLevel >= 5 || nextLevel <= state.readLevel) {
            showToast('Tebrikler! Konu özetini bitirdin.');
            return;
        }

        showConfirmToast({
            message: 'Tebrikler! Konu özetini bitirdin. 1 tekrar işaretlensin mi?',
            confirmText: 'Evet',
            cancelText: 'Hayır',
            onConfirm: async () => {
                await incrementReadLevelOnce(id);
            }
        });
    }, {
        root: null,
        threshold: 0.25
    });

    topicEndObserver.observe(sentinel);
}

// Konu listesi render
function renderTopicsList(data) {
    if (typeof document !== 'undefined' && typeof document.startViewTransition === 'function') {
        const prefersReduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        if (!prefersReduce) {
            document.startViewTransition(() => {
                renderTopicsListCore(data);
            });
            return;
        }
    }

    renderTopicsListCore(data);
}

function renderTopicsListCore(data) {
    const container = document.getElementById('topicsList');
    if (!container) return;

    setTopicsListLayout(topicsListLayout);

    // Filtreleme
    let filtered = data;

    if (currentCategory === 'favorites') {
        filtered = filtered.filter((item) => {
            const st = getTopicState(item.id);
            return !!st.favorite;
        });
    } else if (currentCategory !== 'all') {
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

    filtered = sortTopics(filtered);

    // Premium wave: stagger the view-transition animations top-to-bottom.
    installTopicsWaveTransitionStyles(filtered);

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

    if (topicsListLayout === 'compact') {
        container.innerHTML = filtered.map((topic) => createTopicRow(topic)).join('');
    } else {
        container.innerHTML = filtered.map((topic, index) => createTopicPreview(topic, index)).join('');
    }

    // Fallback wave for browsers without View Transitions.
    applyWaveFallbackAnimation(container);
    
    // Item click handlers (open detail)
    container.querySelectorAll('.topic-preview, .topic-row').forEach((item) => {
        item.addEventListener('click', (event) => {
            if (event.target && event.target.closest && event.target.closest('[data-topic-fav], input[data-read-level], .topic-read-checks, label.topic-check')) {
                return;
            }
            const topicId = parseInt(item.dataset.topicId);
            showTopicDetail(topicId);
        });
    });
    
    // Scroll reveal'ı yenile
    setTimeout(() => refreshScrollReveal(), 50);
}

function installTopicsWaveTransitionStyles(orderedTopics) {
    if (typeof document === 'undefined') return;
    if (typeof document.startViewTransition !== 'function') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const items = Array.isArray(orderedTopics) ? orderedTopics : [];
    const ids = items
        .slice(0, 30)
        .map((t) => (t && t.id != null ? String(t.id) : ''))
        .filter(Boolean);

    let styleEl = document.getElementById('topicsWaveVTStyles');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'topicsWaveVTStyles';
        document.head.appendChild(styleEl);
    }

    const stepMs = 30;
    const maxDelay = 600;
    const durationMs = 420;
    let css = '@media (prefers-reduced-motion: no-preference) {\n';
    ids.forEach((id, idx) => {
        const delay = Math.min(maxDelay, idx * stepMs);
        css += `::view-transition-group(topicItem-${id}), ::view-transition-group(topicIcon-${id}), ::view-transition-group(topicTitle-${id}) { animation-delay: ${delay}ms; animation-duration: ${durationMs}ms; animation-timing-function: var(--ease-apple-out); }\n`;
    });
    css += '}\n';
    styleEl.textContent = css;
}

function applyWaveFallbackAnimation(container) {
    if (!container) return;
    if (typeof document !== 'undefined' && typeof document.startViewTransition === 'function') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const items = Array.from(container.querySelectorAll('.topic-preview, .topic-row'));
    if (items.length === 0) return;

    const stepMs = 26;
    const maxDelay = 520;
    items.forEach((el, idx) => {
        const delay = Math.min(maxDelay, idx * stepMs);
        el.style.setProperty('--enter-delay', `${delay}ms`);
    });

    container.classList.remove('is-wave-enter');
    requestAnimationFrame(() => {
        container.classList.add('is-wave-enter');
        window.setTimeout(() => {
            container.classList.remove('is-wave-enter');
        }, 900);
    });
}

function sortTopics(list) {
    const source = Array.isArray(list) ? list : [];
    if (source.length <= 1) return source;
    const arr = source.slice();

    const getIdNum = (t) => {
        const n = Number(t && t.id);
        return Number.isFinite(n) ? n : 0;
    };

    const getAddedIdx = (t) => {
        const key = normalizeTopicId(t && t.id);
        const idx = topicAddedIndexById.get(key);
        return Number.isFinite(idx) ? idx : 999999;
    };

    const byIdAsc = (a, b) => getIdNum(a) - getIdNum(b);

    const categoryOrder = {
        'bakteriyoloji': 1,
        'viroloji': 2,
        'mikoloji': 3,
        'parazitoloji': 4,
        'immunoloji': 5,
    };

    const getCategoryRank = (t) => {
        const key = String(t && t.category || '').trim().toLowerCase();
        const rank = categoryOrder[key];
        return Number.isFinite(rank) ? rank : 999;
    };

    if (topicsSortMode === 'category') {
        arr.sort((a, b) => {
            const ca = getCategoryRank(a);
            const cb = getCategoryRank(b);
            if (ca !== cb) return ca - cb;
            return byIdAsc(a, b) || (getAddedIdx(a) - getAddedIdx(b));
        });
        return arr;
    }

    if (topicsSortMode === 'priority') {
        arr.sort((a, b) => {
            const pa = getTopicPriority(a && a.id).score;
            const pb = getTopicPriority(b && b.id).score;
            return (pb - pa) || byIdAsc(a, b) || (getAddedIdx(a) - getAddedIdx(b));
        });
        return arr;
    }

    if (topicsSortMode === 'needsReview') {
        arr.sort((a, b) => {
            const ra = clampReadLevel(getTopicState(a && a.id).readLevel);
            const rb = clampReadLevel(getTopicState(b && b.id).readLevel);
            if (ra !== rb) return ra - rb;
            const pa = getTopicPriority(a && a.id).score;
            const pb = getTopicPriority(b && b.id).score;
            return (pb - pa) || byIdAsc(a, b) || (getAddedIdx(a) - getAddedIdx(b));
        });
        return arr;
    }

    if (topicsSortMode === 'mostReviewed') {
        arr.sort((a, b) => {
            const ra = clampReadLevel(getTopicState(a && a.id).readLevel);
            const rb = clampReadLevel(getTopicState(b && b.id).readLevel);
            if (ra !== rb) return rb - ra;
            const pa = getTopicPriority(a && a.id).score;
            const pb = getTopicPriority(b && b.id).score;
            return (pb - pa) || byIdAsc(a, b) || (getAddedIdx(a) - getAddedIdx(b));
        });
        return arr;
    }

    // added (default): preserve dataset order
    arr.sort((a, b) => (getAddedIdx(a) - getAddedIdx(b)) || byIdAsc(a, b));
    return arr;
}

function createTopicRow(topic) {
    const icon = getCategoryIcon(topic.category);
    const state = getTopicState(topic.id);
    const repeatClass = isAuthReady() ? getRepeatAmbianceClassByLevel(state.readLevel) : '';

    return `
        <article class="topic-row ${repeatClass}" data-topic-id="${topic.id}" style="view-transition-name: topicItem-${topic.id}">
            <div class="topic-row__left">
                <div class="topic-row__icon-stack">
                    <div class="topic-row__icon topic-preview__icon--${topic.category}" style="view-transition-name: topicIcon-${topic.id}">
                        <i class="${icon}" aria-hidden="true"></i>
                    </div>
                    ${renderTopicRecommendation(topic.id)}
                </div>
                <div class="topic-row__text">
                    <div class="topic-row__meta">
                        <span class="topic-row__category">${getCategoryLabel(topic.category)}</span>
                    </div>
                    <div class="topic-row__title" style="view-transition-name: topicTitle-${topic.id}">${topic.title}</div>
                    <div class="topic-row__subtitle">${topic.subtitle}</div>
                </div>
            </div>
            <div class="topic-row__right">
                ${renderFavoriteButton(topic.id)}
                ${renderReadCheckboxes(topic.id)}
            </div>
        </article>
    `;
}

function createTopicPreview(topic, index = 0) {
    const icon = getCategoryIcon(topic.category);
    // İlk 6 kart hemen görünür
    const visibilityClass = index < 6 ? 'scroll-reveal is-visible' : 'scroll-reveal';
    const state = getTopicState(topic.id);
    const repeatClass = isAuthReady() ? getRepeatAmbianceClassByLevel(state.readLevel) : '';
    
    return `
        <article class="topic-preview ${visibilityClass} ${repeatClass}" data-topic-id="${topic.id}" style="view-transition-name: topicItem-${topic.id}">
            <div class="topic-preview__header">
                <div class="topic-preview__icon topic-preview__icon--${topic.category}" style="view-transition-name: topicIcon-${topic.id}">
                    <i class="${icon}"></i>
                </div>
                <div class="topic-preview__info">
                    <p class="topic-preview__category">${getCategoryLabel(topic.category)}</p>
                    <h3 class="topic-preview__title" style="view-transition-name: topicTitle-${topic.id}">${topic.title}</h3>
                    <p class="topic-preview__subtitle">${topic.subtitle}</p>
                </div>
                ${renderTopicRecommendation(topic.id)}
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

    wrapScrollableTables(articleContainer);

    setupTopicEndPrompt(topicId);

    // Sayfanın üstüne scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function wrapScrollableTables(scopeEl) {
    if (!scopeEl || !scopeEl.querySelectorAll) return;
    const tables = Array.from(scopeEl.querySelectorAll('.article-content table.article-table'));
    tables.forEach((table) => {
        if (!table || table.closest('.table-scroll')) return;
        const parent = table.parentElement;
        if (!parent) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'table-scroll';
        parent.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
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
            <div class="topic-end-sentinel" data-topic-end-sentinel aria-hidden="true"></div>
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

    clearTopicEndObserver();
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
        'immunoloji': 'İmmünoloji',
        'laboratuvar': 'Laboratuvar'
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
    if (filterId === 'favorites') return 'favorites';
    
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
