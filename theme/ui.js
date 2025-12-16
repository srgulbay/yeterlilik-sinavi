(function () {
    const THEME_KEY = 'theme';
    const VALID_THEMES = new Set(['light', 'dark']);

    function safeGetStoredTheme() {
        try {
            const value = localStorage.getItem(THEME_KEY);
            return VALID_THEMES.has(value) ? value : null;
        } catch (error) {
            return null;
        }
    }

    function safeSetStoredTheme(theme) {
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (error) {
            // ignore
        }
    }

    function getTheme() {
        const fromAttr = document.documentElement.getAttribute('data-theme');
        if (VALID_THEMES.has(fromAttr)) return fromAttr;

        const fromStorage = safeGetStoredTheme();
        if (fromStorage) return fromStorage;

        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    }

    function updateThemeUI(theme) {
        const iconClass = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        const textValue = theme === 'dark' ? 'Açık Mod' : 'Koyu Mod';
        const pressed = String(theme === 'dark');

        document.querySelectorAll('[data-theme-icon]').forEach((icon) => {
            icon.className = iconClass;
        });

        document.querySelectorAll('[data-theme-text]').forEach((label) => {
            label.textContent = textValue;
        });

        document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
            button.setAttribute('aria-pressed', pressed);
        });
    }

    function setTheme(nextTheme, { persist = true } = {}) {
        const theme = nextTheme === 'dark' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        if (persist) safeSetStoredTheme(theme);
        updateThemeUI(theme);

        try {
            document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
        } catch (error) {
            // ignore
        }
    }

    function toggleTheme() {
        const current = getTheme();
        setTheme(current === 'dark' ? 'light' : 'dark', { persist: true });
    }

    function initThemeToggles() {
        updateThemeUI(getTheme());

        document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                toggleTheme();
            });
        });
    }

    document.addEventListener('DOMContentLoaded', initThemeToggles);

    window.getTheme = getTheme;
    window.setTheme = setTheme;
    window.toggleTheme = toggleTheme;
})();

