// Apply stored preferences before styles load to avoid flash
(function applyInitialPrefs() {
    const root = document.documentElement;

    try {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        root.setAttribute('data-theme', theme);
    } catch (_) {
        root.setAttribute('data-theme', 'light');
    }

    // Prevent dock flash when user previously minimized it (DockFab restores on DOMContentLoaded).
    try {
        const saved = localStorage.getItem('dock-minimized');
        if (saved != null && JSON.parse(saved) === true) {
            root.setAttribute('data-dock-minimized', 'true');
        }
    } catch (_) {
        // ignore
    }
})();
