(function () {
  'use strict';

  const STORAGE_PREFIX = 'appHighlighter:v1';
  const CONTEXT_LEN = 36;
  const MAX_QUOTE_LEN = 1600;
  const MAX_HIGHLIGHTS_PER_TOPIC = 400;

  const DEFAULT_PALETTE = [
    { label: 'Sarı', color: '#facc15' },
    { label: 'Yeşil', color: '#22c55e' },
    { label: 'Mavi', color: '#38bdf8' },
    { label: 'Mor', color: '#a78bfa' },
    { label: 'Pembe', color: '#fb7185' },
  ];

  function isAuthReady() {
    return !!(window.appFirebase && window.appFirebase.enabled && window.appFirebase.getUser && window.appFirebase.getUser());
  }

  function normalizeTopicId(topicId) {
    const n = Number(topicId);
    if (!Number.isFinite(n)) return String(topicId);
    return String(n);
  }

  function canUseStorage() {
    try {
      return typeof window !== 'undefined' && !!window.localStorage;
    } catch (_) {
      return false;
    }
  }

  function storageGet(key, fallback) {
    if (!canUseStorage()) return fallback;
    try {
      const raw = window.localStorage.getItem(key);
      if (!raw) return fallback;
      return JSON.parse(raw);
    } catch (_) {
      return fallback;
    }
  }

  function storageSet(key, value) {
    if (!canUseStorage()) return false;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (_) {
      return false;
    }
  }

  function storageKey(topicId, uid) {
    const id = normalizeTopicId(topicId);
    const who = uid ? String(uid) : 'guest';
    return `${STORAGE_PREFIX}:highlights:${who}:${id}`;
  }

  function clampInt(value, min, max) {
    const n = Number(value);
    if (!Number.isFinite(n)) return min;
    return Math.max(min, Math.min(max, Math.trunc(n)));
  }

  function normalizeHexColor(input) {
    const raw = String(input || '').trim();
    if (!raw) return '';
    const hex = raw.startsWith('#') ? raw : `#${raw}`;
    const m = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.exec(hex);
    if (!m) return '';
    const value = m[1];
    if (value.length === 6) return `#${value.toLowerCase()}`;
    const expanded = value.split('').map((c) => c + c).join('');
    return `#${expanded.toLowerCase()}`;
  }

  function hexToRgba(hex, alpha) {
    const normalized = normalizeHexColor(hex);
    if (!normalized) return '';
    const r = parseInt(normalized.slice(1, 3), 16);
    const g = parseInt(normalized.slice(3, 5), 16);
    const b = parseInt(normalized.slice(5, 7), 16);
    const a = Math.max(0, Math.min(1, Number(alpha) || 0));
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  function buildMarkStyle(color) {
    const c = normalizeHexColor(color) || DEFAULT_PALETTE[0].color;
    const bg = hexToRgba(c, 0.22);
    const border = hexToRgba(c, 0.36);
    return { color: c, bg, border };
  }

  function showToast(message) {
    if (typeof window.showToast === 'function') {
      window.showToast(message);
      return;
    }

    const existing = document.querySelector('.share-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'share-toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${String(message || '')}`;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  function showConfirm({ message, confirmText = 'Evet', cancelText = 'Hayır' }) {
    if (typeof window.showConfirmToast === 'function') {
      return new Promise((resolve) => {
        window.showConfirmToast({
          message,
          confirmText,
          cancelText,
          onConfirm: () => resolve(true),
          onCancel: () => resolve(false),
        });
      });
    }

    // Minimal fallback.
    // eslint-disable-next-line no-alert
    return Promise.resolve(window.confirm(String(message || 'Emin misiniz?')));
  }

  function cssEscape(value) {
    const s = String(value || '');
    try {
      if (window.CSS && typeof window.CSS.escape === 'function') return window.CSS.escape(s);
    } catch (_) {
      // ignore
    }
    return s.replace(/[^a-zA-Z0-9_-]/g, '\\$&');
  }

  function removeActiveMarkClass(scopeEl) {
    if (!scopeEl) return;
    scopeEl.querySelectorAll('mark.text-highlight.is-active').forEach((m) => m.classList.remove('is-active'));
  }

  function removeAllHighlightMarks(scopeEl) {
    if (!scopeEl) return;
    const marks = Array.from(scopeEl.querySelectorAll('mark.text-highlight[data-hl-id]'));
    marks.forEach((mark) => {
      const parent = mark.parentNode;
      if (!parent) return;
      parent.replaceChild(document.createTextNode(mark.textContent || ''), mark);
      if (parent.normalize) parent.normalize();
    });
  }

  function unwrapMarksById(scopeEl, highlightId) {
    if (!scopeEl || !highlightId) return;
    const sel = `mark.text-highlight[data-hl-id="${cssEscape(highlightId)}"]`;
    const marks = Array.from(scopeEl.querySelectorAll(sel));
    marks.forEach((mark) => {
      const parent = mark.parentNode;
      if (!parent) return;
      parent.replaceChild(document.createTextNode(mark.textContent || ''), mark);
      if (parent.normalize) parent.normalize();
    });
  }

  function getSelectionRangeWithin(scopeEl) {
    if (!scopeEl) return null;
    const sel = window.getSelection ? window.getSelection() : null;
    if (!sel || sel.rangeCount <= 0) return null;
    const range = sel.getRangeAt(0);
    if (!range || range.collapsed) return null;
    const startOk = scopeEl.contains(range.startContainer);
    const endOk = scopeEl.contains(range.endContainer);
    if (!startOk || !endOk) return null;
    return range.cloneRange();
  }

  function getRangeTextOffsets(scopeEl, range) {
    const preStart = document.createRange();
    preStart.selectNodeContents(scopeEl);
    preStart.setEnd(range.startContainer, range.startOffset);
    const start = preStart.toString().length;

    const preEnd = document.createRange();
    preEnd.selectNodeContents(scopeEl);
    preEnd.setEnd(range.endContainer, range.endOffset);
    const end = preEnd.toString().length;

    return { start, end };
  }

  function rangeFromTextOffsets(scopeEl, start, end) {
    const startOffset = clampInt(start, 0, Number.MAX_SAFE_INTEGER);
    const endOffset = clampInt(end, startOffset, Number.MAX_SAFE_INTEGER);
    if (endOffset <= startOffset) return null;

    const walker = document.createTreeWalker(scopeEl, NodeFilter.SHOW_TEXT, null);
    let pos = 0;
    let startNode = null;
    let endNode = null;
    let startInNode = 0;
    let endInNode = 0;

    while (walker.nextNode()) {
      const node = walker.currentNode;
      const text = node.nodeValue || '';
      const len = text.length;
      if (!startNode && pos + len >= startOffset) {
        startNode = node;
        startInNode = startOffset - pos;
      }
      if (pos + len >= endOffset) {
        endNode = node;
        endInNode = endOffset - pos;
        break;
      }
      pos += len;
    }

    if (!startNode || !endNode) return null;
    try {
      const range = document.createRange();
      range.setStart(startNode, startInNode);
      range.setEnd(endNode, endInNode);
      return range;
    } catch (_) {
      return null;
    }
  }

  function collectTextNodesForRange(scopeEl, range) {
    const nodes = [];
    const root = range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE
      ? range.commonAncestorContainer
      : range.commonAncestorContainer.parentElement;

    const walker = document.createTreeWalker(root || scopeEl, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node || !node.nodeValue) return NodeFilter.FILTER_REJECT;
        if (!scopeEl.contains(node)) return NodeFilter.FILTER_REJECT;
        if (node.parentElement && node.parentElement.closest('mark.text-highlight')) return NodeFilter.FILTER_REJECT;
        if (node.parentElement && node.parentElement.closest('button, a, input, textarea, select, [contenteditable="true"]')) {
          return NodeFilter.FILTER_REJECT;
        }
        try {
          if (!range.intersectsNode(node)) return NodeFilter.FILTER_REJECT;
        } catch (_) {
          // Older Safari: intersectsNode may throw if node is doctype etc; ignore.
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  }

  function wrapRangeWithMark(scopeEl, range, highlightId, color) {
    const id = String(highlightId || '').trim();
    if (!id) return 0;

    const selectedText = range.toString();
    if (!selectedText || !selectedText.trim()) return 0;

    const { color: c, bg, border } = buildMarkStyle(color);

    const nodes = collectTextNodesForRange(scopeEl, range);
    if (!nodes.length) return 0;

    let pieces = 0;

    nodes.forEach((node) => {
      const text = node.nodeValue || '';
      if (!text) return;

      const isStart = node === range.startContainer;
      const isEnd = node === range.endContainer;
      const startOffset = isStart ? range.startOffset : 0;
      const endOffset = isEnd ? range.endOffset : text.length;
      if (endOffset <= startOffset) return;

      const before = text.slice(0, startOffset);
      const middle = text.slice(startOffset, endOffset);
      const after = text.slice(endOffset);
      if (!middle) return;

      const frag = document.createDocumentFragment();
      if (before) frag.appendChild(document.createTextNode(before));

      const mark = document.createElement('mark');
      mark.className = 'text-highlight';
      mark.dataset.hlId = id;
      mark.style.setProperty('--hl-color', c);
      mark.style.setProperty('--hl-bg', bg);
      mark.style.setProperty('--hl-border', border);
      mark.textContent = middle;
      frag.appendChild(mark);

      if (after) frag.appendChild(document.createTextNode(after));

      node.parentNode.replaceChild(frag, node);
      pieces += 1;
    });

    return pieces;
  }

  function buildHighlightRecord({ topicId, scopeEl, range, color }) {
    const id = `hl_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
    const { start, end } = getRangeTextOffsets(scopeEl, range);
    const text = scopeEl.textContent || '';
    const quote = range.toString().slice(0, MAX_QUOTE_LEN);
    const prefix = text.slice(Math.max(0, start - CONTEXT_LEN), start);
    const suffix = text.slice(end, end + CONTEXT_LEN);

    return {
      id,
      topicId: normalizeTopicId(topicId),
      start,
      end,
      quote,
      prefix,
      suffix,
      color: normalizeHexColor(color) || DEFAULT_PALETTE[0].color,
      v: 1,
      updatedAt: Date.now(),
    };
  }

  function normalizeHighlightRecord(input) {
    const data = input && typeof input === 'object' ? input : {};
    const id = String(data.id || '').trim();
    const topicId = String(data.topicId || '').trim();
    if (!id || !topicId) return null;

    const start = clampInt(data.start, 0, Number.MAX_SAFE_INTEGER);
    const end = clampInt(data.end, start + 1, Number.MAX_SAFE_INTEGER);
    const quote = String(data.quote || '').slice(0, MAX_QUOTE_LEN);
    const prefix = String(data.prefix || '').slice(0, CONTEXT_LEN);
    const suffix = String(data.suffix || '').slice(0, CONTEXT_LEN);
    const color = normalizeHexColor(data.color) || DEFAULT_PALETTE[0].color;

    return {
      id,
      topicId,
      start,
      end,
      quote,
      prefix,
      suffix,
      color,
      v: 1,
      updatedAt: clampInt(data.updatedAt, 0, Number.MAX_SAFE_INTEGER),
    };
  }

  function dedupeAndSort(records) {
    const map = new Map();
    records.forEach((r) => {
      const rec = normalizeHighlightRecord(r);
      if (!rec) return;
      const prev = map.get(rec.id);
      if (!prev || rec.updatedAt >= prev.updatedAt) map.set(rec.id, rec);
    });
    return Array.from(map.values()).sort((a, b) => (a.start - b.start) || a.id.localeCompare(b.id));
  }

  function findAnchoredOffsets(scopeEl, rec) {
    if (!scopeEl || !rec) return null;
    const text = scopeEl.textContent || '';
    const quote = String(rec.quote || '');
    if (!quote) return null;

    const s = clampInt(rec.start, 0, text.length);
    const e = clampInt(rec.end, s, text.length);
    if (e > s && text.slice(s, e) === quote) {
      return { start: s, end: e };
    }

    const prefix = String(rec.prefix || '');
    const suffix = String(rec.suffix || '');
    if (!quote.trim()) return null;

    const matches = [];
    let idx = 0;
    while (idx <= text.length) {
      const found = text.indexOf(quote, idx);
      if (found === -1) break;
      matches.push(found);
      idx = found + Math.max(1, quote.length);
      if (matches.length > 250) break;
    }

    for (const m of matches) {
      if (prefix) {
        if (m < prefix.length) continue;
        if (text.slice(m - prefix.length, m) !== prefix) continue;
      }
      if (suffix) {
        const afterStart = m + quote.length;
        if (afterStart + suffix.length > text.length) continue;
        if (text.slice(afterStart, afterStart + suffix.length) !== suffix) continue;
      }
      return { start: m, end: m + quote.length };
    }

    // Fallback: first match
    if (matches.length) return { start: matches[0], end: matches[0] + quote.length };
    return null;
  }

  class Highlighter {
    constructor() {
      this.topicId = null;
      this.rootEl = null;
      this.scopeEl = null;
      this.records = [];

      this.pendingRange = null;
      this.activeHighlightId = null;
      this.toolbarEl = null;
      this.colorInput = null;
      this.btnRemove = null;
      this.btnClear = null;
      this.btnCustom = null;

      this.isOpen = false;
      this._boundSelectionChange = null;
      this._boundDocClick = null;
      this._boundScroll = null;
    }

    init() {
      if (this.toolbarEl) return;
      this.toolbarEl = this._buildToolbar();
      document.body.appendChild(this.toolbarEl);

      this._boundSelectionChange = () => this._onSelectionChange();
      document.addEventListener('selectionchange', this._boundSelectionChange);

      this._boundDocClick = (e) => this._onDocumentClick(e);
      document.addEventListener('click', this._boundDocClick, { capture: true });

      this._boundScroll = () => this.hide();
      window.addEventListener('scroll', this._boundScroll, { passive: true, capture: true });

      document.addEventListener('auth:changed', () => {
        if (!this.scopeEl || !this.topicId) return;
        this.reload().catch(() => {});
      });
    }

    attach({ topicId, rootEl }) {
      this.init();
      this.detach();

      this.topicId = normalizeTopicId(topicId);
      this.rootEl = rootEl || null;
      const scope = rootEl?.querySelector?.('.article-content') || rootEl || null;
      this.scopeEl = scope;

      if (!this.scopeEl || !this.topicId) return;

      // Prevent native selection toolbar from stealing focus when tapping swatches.
      this.scopeEl.addEventListener('pointerdown', (e) => this._onPointerDown(e), { passive: true });
      this.scopeEl.addEventListener('pointerup', (e) => this._onPointerUp(e));
      this.scopeEl.addEventListener('dblclick', (e) => this._onPointerUp(e));
      this.scopeEl.addEventListener('contextmenu', (e) => this._onContextMenu(e));

      this.scopeEl.addEventListener('click', (e) => this._onScopeClick(e));

      this.reload().catch(() => {});
    }

    detach() {
      this.hide();
      this.pendingRange = null;
      this.activeHighlightId = null;

      if (this.scopeEl) {
        removeActiveMarkClass(this.scopeEl);
      }

      this.topicId = null;
      this.rootEl = null;
      this.scopeEl = null;
      this.records = [];
    }

    async reload() {
      if (!this.scopeEl || !this.topicId) return;

      removeAllHighlightMarks(this.scopeEl);
      removeActiveMarkClass(this.scopeEl);

      const uid = isAuthReady() ? window.appFirebase.getUser().uid : null;
      let items = [];

      if (uid && window.appFirebase && typeof window.appFirebase.loadHighlights === 'function') {
        try {
          const remote = await window.appFirebase.loadHighlights(this.topicId);
          if (Array.isArray(remote)) items = remote;
        } catch (_) {
          // ignore
        }
      }

      this.records = dedupeAndSort(items).slice(0, MAX_HIGHLIGHTS_PER_TOPIC);
      this._applyAll();
      this._syncToolbarButtons();
    }

    hide() {
      if (!this.toolbarEl) return;
      this.toolbarEl.classList.remove('is-open');
      this.isOpen = false;
      this.pendingRange = null;
      this.activeHighlightId = null;
      if (this.scopeEl) removeActiveMarkClass(this.scopeEl);
      this._syncToolbarButtons();
    }

    _buildToolbar() {
      const el = document.createElement('div');
      el.className = 'highlight-toolbar';
      el.setAttribute('role', 'toolbar');
      el.setAttribute('aria-label', 'Highlighter');

      DEFAULT_PALETTE.forEach(({ label, color }) => {
        const swatch = document.createElement('button');
        swatch.type = 'button';
        swatch.className = 'highlight-toolbar__swatch';
        swatch.dataset.hlColor = color;
        swatch.setAttribute('aria-label', `${label} vurgula`);
        swatch.title = `${label} vurgula`;
        swatch.style.setProperty('--swatch', hexToRgba(color, 0.72));

        swatch.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
        swatch.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this._applyColor(color);
        });
        el.appendChild(swatch);
      });

      const divider = document.createElement('div');
      divider.className = 'highlight-toolbar__divider';
      divider.setAttribute('aria-hidden', 'true');
      el.appendChild(divider);

      const customBtn = document.createElement('button');
      customBtn.type = 'button';
      customBtn.className = 'highlight-toolbar__btn';
      customBtn.dataset.hlCustom = '1';
      customBtn.setAttribute('aria-label', 'Özel renk seç');
      customBtn.title = 'Özel renk';
      customBtn.innerHTML = '<i class="fas fa-palette" aria-hidden="true"></i>';
      customBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      customBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.colorInput?.click();
      });
      el.appendChild(customBtn);
      this.btnCustom = customBtn;

      const input = document.createElement('input');
      input.type = 'color';
      input.className = 'highlight-toolbar__color-input';
      input.style.position = 'fixed';
      input.style.left = '-9999px';
      input.style.width = '1px';
      input.style.height = '1px';
      input.tabIndex = -1;
      input.addEventListener('input', () => {
        const color = normalizeHexColor(input.value);
        if (!color) return;
        this._applyColor(color);
      });
      el.appendChild(input);
      this.colorInput = input;

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'highlight-toolbar__btn';
      removeBtn.dataset.hlRemove = '1';
      removeBtn.setAttribute('aria-label', 'Vurguyu sil');
      removeBtn.title = 'Vurguyu sil';
      removeBtn.innerHTML = '<i class="fas fa-eraser" aria-hidden="true"></i>';
      removeBtn.disabled = true;
      removeBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      removeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this._removeActiveHighlight();
      });
      el.appendChild(removeBtn);
      this.btnRemove = removeBtn;

      const clearBtn = document.createElement('button');
      clearBtn.type = 'button';
      clearBtn.className = 'highlight-toolbar__btn';
      clearBtn.dataset.hlClear = '1';
      clearBtn.setAttribute('aria-label', 'Bu konudaki tüm vurguları temizle');
      clearBtn.title = 'Tümünü temizle';
      clearBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
      clearBtn.disabled = true;
      clearBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      clearBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        await this._clearAll();
      });
      el.appendChild(clearBtn);
      this.btnClear = clearBtn;

      return el;
    }

    _syncToolbarButtons() {
      const hasAny = !!(this.records && this.records.length);
      if (this.btnClear) this.btnClear.disabled = !hasAny;

      const canRemove = !!this.activeHighlightId;
      if (this.btnRemove) this.btnRemove.disabled = !canRemove;

      if (!isAuthReady()) {
        if (this.btnCustom) this.btnCustom.disabled = true;
        const swatches = this.toolbarEl?.querySelectorAll?.('.highlight-toolbar__swatch') || [];
        swatches.forEach((b) => { b.disabled = true; });
        if (this.btnRemove) this.btnRemove.disabled = true;
        if (this.btnClear) this.btnClear.disabled = true;
      } else {
        if (this.btnCustom) this.btnCustom.disabled = false;
        const swatches = this.toolbarEl?.querySelectorAll?.('.highlight-toolbar__swatch') || [];
        swatches.forEach((b) => { b.disabled = false; });
        if (this.btnClear) this.btnClear.disabled = !hasAny;
        if (this.btnRemove) this.btnRemove.disabled = !canRemove;
      }
    }

    _applyAll() {
      if (!this.scopeEl) return;
      if (!Array.isArray(this.records) || !this.records.length) return;

      // Apply in reverse order (from end to start) to keep offsets stable.
      const list = [...this.records].sort((a, b) => (b.start - a.start) || b.id.localeCompare(a.id));
      list.forEach((rec) => {
        const anchored = findAnchoredOffsets(this.scopeEl, rec);
        if (!anchored) return;
        const range = rangeFromTextOffsets(this.scopeEl, anchored.start, anchored.end);
        if (!range) return;
        wrapRangeWithMark(this.scopeEl, range, rec.id, rec.color);
      });
    }

    _openAtRect(rect) {
      if (!this.toolbarEl) return;
      const r = rect || null;
      if (!r) return;

      this.toolbarEl.style.left = '0px';
      this.toolbarEl.style.top = '0px';
      this.toolbarEl.classList.add('is-open');
      this.isOpen = true;
      this._syncToolbarButtons();

      // Position after visible to measure size.
      const toolbarRect = this.toolbarEl.getBoundingClientRect();
      const centerX = r.left + r.width / 2;
      const margin = 10;
      const maxLeft = window.innerWidth - toolbarRect.width - margin;
      const left = Math.max(margin, Math.min(maxLeft, centerX - toolbarRect.width / 2));

      const preferAbove = r.top > toolbarRect.height + 18;
      const top = preferAbove ? (r.top - toolbarRect.height - 12) : (r.bottom + 12);

      this.toolbarEl.style.left = `${Math.round(left)}px`;
      this.toolbarEl.style.top = `${Math.round(Math.max(margin, top))}px`;
    }

    _openForRange(range) {
      if (!range) return;
      const rects = range.getClientRects ? Array.from(range.getClientRects()) : [];
      const rect = rects.length ? rects[0] : (range.getBoundingClientRect ? range.getBoundingClientRect() : null);
      if (!rect || !rect.width) return;
      this._openAtRect(rect);
    }

    _onSelectionChange() {
      if (!this.scopeEl) return;
      const range = getSelectionRangeWithin(this.scopeEl);
      if (!range) return;

      // If selection is inside an existing mark, switch to "edit existing".
      const startMark = range.startContainer?.parentElement?.closest?.('mark.text-highlight[data-hl-id]');
      const endMark = range.endContainer?.parentElement?.closest?.('mark.text-highlight[data-hl-id]');
      if (startMark && endMark && startMark.dataset.hlId && startMark.dataset.hlId === endMark.dataset.hlId) {
        this.pendingRange = null;
        this.activeHighlightId = startMark.dataset.hlId;
        removeActiveMarkClass(this.scopeEl);
        this._setActiveMark(this.activeHighlightId, true);
        this._openAtRect(startMark.getBoundingClientRect());
        return;
      }

      this.pendingRange = range;
      this.activeHighlightId = null;
      removeActiveMarkClass(this.scopeEl);

      // Only show for meaningful selections.
      const text = range.toString();
      if (!text || !text.trim() || text.length > MAX_QUOTE_LEN) return;

      this._openForRange(range);
    }

    _onPointerDown(e) {
      if (!this.scopeEl) return;
      const mark = e.target?.closest?.('mark.text-highlight[data-hl-id]');
      if (!mark) return;
      this.activeHighlightId = mark.dataset.hlId || null;
    }

    _onPointerUp() {
      if (!this.scopeEl) return;
      // selectionchange will handle opening; do nothing.
    }

    _onContextMenu(e) {
      // Let selection change happen, but keep toolbar responsive.
      if (!this.scopeEl) return;
      if (!this.scopeEl.contains(e.target)) return;
      setTimeout(() => this._onSelectionChange(), 0);
    }

    _onScopeClick(e) {
      if (!this.scopeEl) return;
      const mark = e.target?.closest?.('mark.text-highlight[data-hl-id]');
      if (!mark) return;

      e.preventDefault();
      e.stopPropagation();

      const id = mark.dataset.hlId || null;
      if (!id) return;
      this.pendingRange = null;
      this.activeHighlightId = id;
      removeActiveMarkClass(this.scopeEl);
      this._setActiveMark(id, true);
      this._openAtRect(mark.getBoundingClientRect());
    }

    _onDocumentClick(e) {
      if (!this.isOpen) return;
      const t = e.target;
      if (!t) return;
      if (this.toolbarEl && this.toolbarEl.contains(t)) return;
      if (this.scopeEl && this.scopeEl.contains(t)) return;
      this.hide();
    }

    _setActiveMark(highlightId, active) {
      if (!this.scopeEl || !highlightId) return;
      const sel = `mark.text-highlight[data-hl-id="${cssEscape(highlightId)}"]`;
      this.scopeEl.querySelectorAll(sel).forEach((m) => m.classList.toggle('is-active', !!active));
    }

    async _applyColor(color) {
      if (!this.scopeEl || !this.topicId) return;
      if (!isAuthReady()) {
        showToast('Vurgulamak için giriş yap');
        return;
      }

      const c = normalizeHexColor(color) || DEFAULT_PALETTE[0].color;

      if (this.activeHighlightId) {
        const id = this.activeHighlightId;
        const rec = this.records.find((r) => r.id === id);
        if (!rec) return;
        rec.color = c;
        rec.updatedAt = Date.now();
        this._setMarkColor(id, c);
        await this._persistChanges({ upsert: [rec] });
        this._syncToolbarButtons();
        return;
      }

      const range = this.pendingRange || getSelectionRangeWithin(this.scopeEl);
      if (!range) return;

      const text = range.toString();
      if (!text || !text.trim()) return;
      if (text.length > MAX_QUOTE_LEN) {
        showToast('Seçim çok uzun');
        return;
      }

      const offsets = getRangeTextOffsets(this.scopeEl, range);
      const normalizedRange = rangeFromTextOffsets(this.scopeEl, offsets.start, offsets.end);
      if (!normalizedRange) {
        showToast('Bu seçimi vurgulamak mümkün değil');
        return;
      }

      // Avoid nested/overlapping highlights: unwrap any existing ones in selection.
      const marksInRange = Array.from(this.scopeEl.querySelectorAll('mark.text-highlight[data-hl-id]')).filter((m) => {
        try {
          return normalizedRange.intersectsNode(m);
        } catch (_) {
          return false;
        }
      });
      const touched = new Set();
      marksInRange.forEach((m) => {
        const id = m.dataset.hlId;
        if (id) touched.add(id);
      });
      touched.forEach((id) => {
        unwrapMarksById(this.scopeEl, id);
        this.records = this.records.filter((r) => r.id !== id);
      });

      const rec = buildHighlightRecord({ topicId: this.topicId, scopeEl: this.scopeEl, range: normalizedRange, color: c });
      wrapRangeWithMark(this.scopeEl, normalizedRange, rec.id, rec.color);

      this.records = dedupeAndSort([rec, ...this.records]).slice(0, MAX_HIGHLIGHTS_PER_TOPIC);
      await this._persistChanges({ upsert: [rec], deleteIds: Array.from(touched) });
      this.hide();
    }

    _setMarkColor(highlightId, color) {
      if (!this.scopeEl || !highlightId) return;
      const { color: c, bg, border } = buildMarkStyle(color);
      const sel = `mark.text-highlight[data-hl-id="${cssEscape(highlightId)}"]`;
      this.scopeEl.querySelectorAll(sel).forEach((m) => {
        m.style.setProperty('--hl-color', c);
        m.style.setProperty('--hl-bg', bg);
        m.style.setProperty('--hl-border', border);
      });
    }

    async _removeActiveHighlight() {
      if (!this.scopeEl || !this.topicId) return;
      if (!isAuthReady()) {
        showToast('Vurguları yönetmek için giriş yap');
        return;
      }
      const id = this.activeHighlightId;
      if (!id) return;

      unwrapMarksById(this.scopeEl, id);
      this.records = this.records.filter((r) => r.id !== id);
      await this._persistChanges({ deleteIds: [id] });
      this.hide();
    }

    async _clearAll() {
      if (!this.scopeEl || !this.topicId) return;
      if (!isAuthReady()) {
        showToast('Vurguları temizlemek için giriş yap');
        return;
      }
      if (!this.records.length) return;

      const ok = await showConfirm({ message: 'Bu konudaki tüm vurgular silinsin mi?' });
      if (!ok) return;

      const ids = this.records.map((r) => r.id);
      removeAllHighlightMarks(this.scopeEl);
      this.records = [];

      if (window.appFirebase && typeof window.appFirebase.clearHighlights === 'function') {
        try {
          await window.appFirebase.clearHighlights(this.topicId);
        } catch (_) {
          // ignore
        }
      } else {
        await this._persistChanges({ deleteIds: ids });
      }

      this.hide();
    }

    async _persistChanges({ upsert = [], deleteIds = [] } = {}) {
      const uid = isAuthReady() ? window.appFirebase.getUser().uid : null;
      if (!uid || !window.appFirebase) return;
      const api = window.appFirebase;

      const toUpsert = Array.isArray(upsert) ? upsert.map(normalizeHighlightRecord).filter(Boolean) : [];
      const toDelete = Array.isArray(deleteIds) ? deleteIds.map((x) => String(x || '').trim()).filter(Boolean) : [];

      if (toUpsert.length && typeof api.saveHighlight === 'function') {
        for (const rec of toUpsert) {
          try {
            await api.saveHighlight(rec);
          } catch (_) {
            // ignore
          }
        }
      }

      if (toDelete.length && typeof api.deleteHighlight === 'function') {
        for (const id of toDelete) {
          try {
            await api.deleteHighlight(id, this.topicId);
          } catch (_) {
            // ignore
          }
        }
      }
    }
  }

  window.appHighlighter = window.appHighlighter || new Highlighter();
})();
