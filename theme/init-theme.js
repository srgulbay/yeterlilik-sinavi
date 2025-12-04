// Apply stored or preferred theme before styles load to avoid flash
(function applyInitialTheme() {
    try {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
    } catch (error) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})();
