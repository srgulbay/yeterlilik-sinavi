(function () {
    function initDock() {
        const dock = document.querySelector('.session-dock');
        if (!dock) return;
        initDockToggle(dock);
        initDockLinks(dock);
        if ((dock.dataset.dockContext || '').toLowerCase() === 'reference') {
            initReferenceDock(dock);
        }
    }

    function initDockToggle(dock) {
        const toggle = dock.querySelector('.dock-toggle');
        if (!toggle) return;

        const syncState = () => {
            const collapsed = dock.classList.contains('collapsed');
            toggle.setAttribute('aria-expanded', String(!collapsed));
            toggle.setAttribute('aria-label', collapsed ? 'Alt adayı genişlet' : 'Alt adayı daralt');
            const icon = toggle.querySelector('i');
            if (icon) {
                icon.className = collapsed ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
            }
        };

        toggle.addEventListener('click', () => {
            dock.classList.toggle('collapsed');
            syncState();
        });

        syncState();
    }

    function initDockLinks(dock) {
        const buttons = dock.querySelectorAll('[data-dock-link]');
        if (buttons.length === 0) return;

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const target = button.getAttribute('data-dock-link');
                if (!target) return;

                if (target.startsWith('#')) {
                    const section = document.querySelector(target);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                } else {
                    window.location.href = target;
                }
            });
        });
    }

    function initReferenceDock(dock) {
        const chips = dock.querySelectorAll('[data-category-chip]');
        if (chips.length === 0) return;

        const activateChip = (category) => {
            const normalized = category && category.trim() ? category : 'all';
            chips.forEach((chip) => {
                const chipCategory = chip.getAttribute('data-category-chip') || 'all';
                chip.classList.toggle('active', chipCategory === normalized);
            });
        };

        chips.forEach((chip) => {
            chip.addEventListener('click', () => {
                const category = chip.getAttribute('data-category-chip') || 'all';
                if (typeof window.filterCategory === 'function') {
                    window.filterCategory(category);
                }
                activateChip(category);
            });
        });

        window.setDockCategoryActive = activateChip;

        const activeNav = document.querySelector('.nav-item.active');
        if (activeNav) {
            const category = activeNav.getAttribute('data-category') || 'all';
            activateChip(category);
        } else {
            activateChip('all');
        }
    }

    document.addEventListener('DOMContentLoaded', initDock);
})();
