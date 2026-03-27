/**
 * ALPOTUS 4.0 - MASTER UI ENGINE
 * CEO: Sukkannagari Karthik Reddy
 * Features: PWA Detection, Splash Screen, Universal Search, and Adaptive Layouts.
 * Updated: Integrated 19-Subject MBBS Library Hierarchy
 */

// 1. SMART PATH CALCULATOR
function getPrefix() {
    const path = window.location.pathname;
    // Calculate depth to root by counting folders
    const folders = path.split('/').filter(p => p !== '' && !p.includes('.html'));
    let prefix = "";
    for (let i = 0; i < folders.length; i++) prefix += "../";
    return prefix || "./";
} 

const prefix = getPrefix();

// 2. UI COMPONENTS
const ui = {
    splash: `
        <div id="splash-screen">
            <div class="splash-logo">ALPOTUS</div>
        </div>
    `,
    navbar: `
        <nav class="navbar">
            <div class="logo-text" onclick="window.location.href='${prefix}index.html'">AL<span>POTUS</span></div>
            <div class="nav-search-container">
                <input type="text" class="nav-search-input" placeholder="Search library, tools, scores..." onkeyup="handleUniversalSearch(this.value, 'nav-results')">
                <div id="nav-results" class="search-dropdown"></div>
            </div>
            <div class="menu-btn" onclick="toggleSidebar()" style="cursor:pointer; font-size:1.5rem;">☰</div>
        </nav>
    `,
    sidebar: `
        <div id="sidebar">
            <div class="sidebar-header">MENU</div>
            <nav class="side-nav">
                <a href="${prefix}index.html">🏠 Home</a>
                <a href="${prefix}mbbs-library.html" style="background: rgba(250, 204, 21, 0.1); border-left: 4px solid var(--primary);">📚 MBBS Library</a>
                <a href="${prefix}games.html">🎮 Interactive Games</a>
                <a href="${prefix}clinical-scores.html">📋 Clinical Scores</a>
                <a href="${prefix}tools.html">🛠️ Web Tools</a>
                <a href="${prefix}calculators.html">🧮 Calculators</a>
                <a href="${prefix}articles.html">📑 Knowledge Hub</a>
                <hr style="border:0; border-top:1px solid var(--border-color); margin:10px 0;">
                <a href="${prefix}settings.html">⚙️ Settings</a>
                <a href="${prefix}about.html">👤 About CEO</a>
                <div class="settings-item" onclick="toggleDarkMode()" style="margin-top:10px; cursor:pointer;">
                    <span>🌙 Dark Mode</span>
                </div>
            </nav>
        </div>
        <div class="sidebar-overlay" onclick="toggleSidebar()"></div>
    `,
    bottomNav: `
        <nav id="bottom-nav">
            <a href="${prefix}index.html" class="nav-tab"><i>🏠</i>Home</a>
            <a href="${prefix}mbbs-library.html" class="nav-tab"><i>📚</i>Library</a>
            <a href="${prefix}games.html" class="nav-tab"><i>🎮</i>Games</a>
            <a href="${prefix}settings.html" class="nav-tab"><i>⚙️</i>Settings</a>
        </nav>
    `,
    footer: `
        <footer class="alpotus-footer">
            <div class="footer-accent"><div class="footer-logo">⚡ ALPOTUS DIGITAL HUB</div></div>
            <div class="footer-main">
                <nav class="f-links">
                    <a href="${prefix}mbbs-library.html">Library</a>
                    <a href="${prefix}about.html">About</a>
                    <a href="${prefix}privacy.html">Privacy</a>
                    <a href="${prefix}terms.html">Terms</a>
                    <a href="${prefix}disclaimer.html">Disclaimer</a>
                </nav>
                <div class="f-copy">© ${new Date().getFullYear()} <b>ALPOTUS</b> • CEO: Sukkannagari Karthik Reddy</div>
            </div>
        </footer>
    `
};

// 3. CORE LOGIC
function initAlpotus() {
    // Determine Mode (Standalone PWA or Browser)
    const isPWA = window.matchMedia('(display-mode: standalone)').matches || window.location.search.includes('launcher=pwa');

    // Inject Splash Screen
    document.body.insertAdjacentHTML('afterbegin', ui.splash);

    // Initial Theme Check from LocalStorage
    if (localStorage.getItem('alpotus-theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Handle Splash Screen Fade-out
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.classList.add('fade-out');
            // Remove from DOM after fade animation to improve performance
            setTimeout(() => splash.remove(), 600);
        }
        
        // Inject Main UI components
        renderUI(isPWA);
    }, 2000);
}

function renderUI() {
    // Always load the same 3 components for both Web and PWA
    document.body.insertAdjacentHTML('afterbegin', ui.navbar);
    document.body.insertAdjacentHTML('afterbegin', ui.sidebar);
    document.body.insertAdjacentHTML('beforeend', ui.footer);

}

// 4. UI INTERACTIONS
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (sidebar) sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('alpotus-theme', isDark ? 'dark' : 'light');
    
    // Sync toggle switch if user is on the Settings page
    const pageToggle = document.getElementById('darkTogglePage');
    if (pageToggle) pageToggle.checked = isDark;
}

// 5. PWA INSTALLATION HANDLER
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Logic for custom install buttons can be added here
});

// Launch System on DOM Load
document.addEventListener('DOMContentLoaded', initAlpotus);
// --- FIXED FOR GITHUB PAGES ---
// --- FIXED FOR GITHUB PAGES & CUSTOM DOMAINS ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // We use the 'prefix' variable we calculated at the top of this file
        // to make sure it finds sw.js regardless of folder depth or repo name.
        navigator.serviceWorker.register(prefix + 'sw.js')
            .then(reg => console.log('Alpotus 4.0: Service Worker Registered at: ' + reg.scope))
            .catch(err => console.error('Alpotus 4.0: Service Worker Failed', err));
    });
}
