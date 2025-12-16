/**
 * ============================================
 * DOCK FAB JS - Minimize/Expand Toggle
 * ============================================
 * Versiyon: 3.0.0
 * Tarih: 16 Aralık 2025
 * 
 * Session-dock ve mobile-dock için minimize/expand kontrolü.
 * Dock gizlendiğinde FAB butonu görünür, tıklanınca dock açılır.
 */

'use strict';

class DockFab {
    constructor() {
        // DOM Elements
        this.fab = document.getElementById('dockFab');
        this.sessionDock = document.querySelector('.session-dock');
        this.mobileDock = document.getElementById('mobileDock');
        this.sessionMinimizeBtn = this.sessionDock?.querySelector('.dock-minimize');
        
        // State
        this.isMinimized = false;
        this.storageKey = 'dock-minimized';
        
        // Init
        this.init();
    }
    
    /**
     * Initialize
     */
    init() {
        if (!this.fab) {
            console.warn('DockFab: #dockFab element not found');
            return;
        }
        
        // Restore state from localStorage
        this.restoreState();
        
        // Bind events
        this.bindEvents();
        
        console.log('DockFab: Initialized');
    }
    
    /**
     * Bind event listeners
     */
    bindEvents() {
        // FAB click - expand dock
        this.fab.addEventListener('click', () => this.expand());
        
        // Session dock minimize button
        this.sessionMinimizeBtn?.addEventListener('click', () => this.minimize());
        
        // Mobile dock minimize - add to pill
        this.addMobileMinimizeButton();
        
        // Keyboard support
        document.addEventListener('keydown', (e) => {
            // Escape to minimize dock
            if (e.key === 'Escape' && !this.isMinimized) {
                // Only if no other modal is open
                const hasOpenModal = document.querySelector('.global-search.is-open, .filter-panel.active');
                if (!hasOpenModal) {
                    this.minimize();
                }
            }
            
            // D to toggle dock
            if (e.key === 'd' && !e.ctrlKey && !e.metaKey && !e.altKey) {
                const target = e.target;
                const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
                if (!isInput) {
                    e.preventDefault();
                    this.toggle();
                }
            }
        });
    }
    
    /**
     * Add minimize button to mobile dock pill
     */
    addMobileMinimizeButton() {
        const pill = this.mobileDock?.querySelector('.dock__pill');
        if (!pill) return;
        
        // Check if already exists
        if (pill.querySelector('.dock__minimize-btn')) return;
        
        // Create minimize button
        const minimizeBtn = document.createElement('button');
        minimizeBtn.className = 'dock__minimize-btn';
        minimizeBtn.type = 'button';
        minimizeBtn.setAttribute('aria-label', 'Dock\'u gizle');
        minimizeBtn.setAttribute('title', 'Dock\'u gizle');
        minimizeBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
        
        // Append to pill
        pill.appendChild(minimizeBtn);
        
        // Bind click
        minimizeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.minimize();
        });
    }
    
    /**
     * Minimize dock (hide dock, show FAB)
     */
    minimize() {
        this.isMinimized = true;
        
        // Add minimized class to docks
        this.sessionDock?.classList.add('minimized');
        this.mobileDock?.classList.add('minimized');
        
        // Show FAB
        this.fab.classList.add('visible');
        
        // Save state
        this.saveState();
        
        // Announce for screen readers
        this.announce('Dock gizlendi');
    }
    
    /**
     * Expand dock (show dock, hide FAB)
     */
    expand() {
        this.isMinimized = false;
        
        // Remove minimized class from docks
        this.sessionDock?.classList.remove('minimized');
        this.mobileDock?.classList.remove('minimized');
        
        // Hide FAB
        this.fab.classList.remove('visible');
        
        // Save state
        this.saveState();
        
        // Announce for screen readers
        this.announce('Dock gösterildi');
    }
    
    /**
     * Toggle minimize/expand
     */
    toggle() {
        if (this.isMinimized) {
            this.expand();
        } else {
            this.minimize();
        }
    }
    
    /**
     * Save state to localStorage
     */
    saveState() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.isMinimized));
        } catch (e) {
            console.warn('DockFab: Could not save state', e);
        }
    }
    
    /**
     * Restore state from localStorage
     */
    restoreState() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            if (saved !== null) {
                const wasMinimized = JSON.parse(saved);
                if (wasMinimized) {
                    this.minimize();
                }
            }
        } catch (e) {
            console.warn('DockFab: Could not restore state', e);
        }
    }
    
    /**
     * Announce message for screen readers
     */
    announce(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => announcement.remove(), 1000);
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.dockFab = new DockFab();
});
