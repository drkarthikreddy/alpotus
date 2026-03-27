/**
 * ALPOTUS 5.0 - UNIFIED SMART ENGINE
 * Designed by: Alpotus Development Team
 * CEO: Sukkannagari Karthik Reddy
 * 
 * Features:
 * 1. GitHub Pages Relative Path Auto-Correction
 * 2. Unified App-Shell Injection (Header & Bottom Nav)
 * 3. Animated Splash Screen Controller
 * 4. Persistent Dark Mode 5.0
 * 5. Intelligent Tab Navigation
 */

// --- 1. PATH RESOLVER ENGINE ---
// This function calculates the relative distance to the root folder
// Essential for GitHub Pages (e.g., username.github.io/repo-name/)
function getAppPrefix() {
    const path = window.location.pathname;
    const isGitHub = window.location.hostname.includes('github.io');
    
    // Split path into segments and remove empty strings
    const segments = path.split('/').filter(p => p !== '' && !p.includes('.html'));
    
    // On GitHub, the first segment is usually the repo name. We ignore it.
    const depth = isGitHub ? segments.length - 1 : segments.length;

    let prefix = "";
    for (let i = 0; i < depth; i++) prefix += "../";
    return prefix || "./";
}

const prefix = getAppPrefix();

// --- 2. UI TEMPLATES ---
const UI_SHELL = {
    splash: `
        <div id="splash">
            <div class="splash-content">ALPOTUS</div>
        </div>
    `,
    header: `
        <header class="app-header">
            <div class="header-container">
                <div class="logo" onclick="window.location.href='${prefix}index.html'">AL<span>POTUS</span></div>
                <div class="search-bar">
                    <input type="text" placeholder="Search Alpotus..." onkeyup="handleUniversalSearch(this.value, 'global-nav-results')">
                    <div id="global-nav-results" class="search-results"></div>
                </div>
            </div>
        </header>
    `,
    bottomNav: `
        <nav class="bottom-nav">
            <div class="nav-container">
                <a href="${prefix}index.html" class="nav-tab" id="nav-home">
                    <i style="font-style:normal; font-size:1.4rem;">🏠</i>
                    <span>Home</span>
                </a>
                <a href="${prefix}mbbs-library.html" class="nav-tab" id="nav-library">
                    <i style="font-style:normal; font-size:1.4rem;">📚</i>
                    <span>Library</span>
                </a>
                <a href="${prefix}games.html" class="nav-tab" id="nav-games">
                    <i style="font-style:normal; font-size:1.4rem;">🎮</i>
                    <span>Games</span>
                </a>
                <a href="${prefix}settings.html" class="nav-tab" id="nav-settings">
                    <i style="font-style:normal; font-size:1.4rem;">⚙️</i>
                    <span>Settings</span>
                </a>
            </div>
        </nav>
    `
};

// --- 3. INITIALIZATION ENGINE ---
function initAlpotus() {
    // Inject components into the body
    document.body.insertAdjacentHTML('afterbegin', UI_SHELL.header);
    document.body.insertAdjacentHTML('afterbegin', UI_SHELL.splash);
    document.body.insertAdjacentHTML('beforeend', UI_SHELL.bottomNav);

    // Apply Saved Theme
    const savedTheme = localStorage.getItem('alpotus-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Handle Splash Screen Removal
    setTimeout(() => {
        const splashEl = document.getElementById('splash');
        if (splashEl) {
            splashEl.classList.add('hidden');
            // Complete removal from DOM for performance
            setTimeout(() => splashEl.remove(), 600);
        }
    }, 200);

    // Active Tab Highlighting
    highlightActiveTab();
}

// --- 4. NAVIGATION LOGIC ---
function highlightActiveTab() {
    const path = window.location.pathname;
    
    // Clear all active states
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));

    // Match based on filename
    if (path.includes('index') || path === '/' || path.endsWith('/')) {
        document.getElementById('nav-home')?.classList.add('active');
    } else if (path.includes('mbbs') || path.includes('explorer')) {
        document.getElementById('nav-library')?.classList.add('active');
    } else if (path.includes('games')) {
        document.getElementById('nav-games')?.classList.add('active');
    } else if (path.includes('settings') || path.includes('about') || path.includes('privacy')) {
        document.getElementById('nav-settings')?.classList.add('active');
    }
}

// --- 5. GLOBAL THEME CONTROLLER ---
function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('alpotus-theme', isDark ? 'dark' : 'light');
    
    // Sync UI if on settings page
    const toggleSwitch = document.getElementById('darkTogglePage');
    if (toggleSwitch) toggleSwitch.checked = isDark;
}

// --- 6. PWA INSTALLATION SYSTEM ---
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

// --- 7. STARTUP & SERVICE WORKER ---
document.addEventListener('DOMContentLoaded', initAlpotus);

// Register Service Worker with Dynamic Prefix
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Using ./sw.js is the most reliable way for GitHub mobile browsers
        navigator.serviceWorker.register('./sw.js')
            .then(reg => {
                console.log('PWA: Service Worker Registered Successfully');
            })
            .catch(err => {
                console.error('PWA: Service Worker Registration Failed', err);
            });
    });
}

/**
 * UTILITY: AUTO-HIDE SEARCH DROPDOWN
 * Closes the global search result box when clicking outside
 */
document.addEventListener('click', (e) => {
    const searchInput = document.querySelector('.search-bar input');
    const resultsBox = document.getElementById('global-nav-results');
    if (resultsBox && e.target !== searchInput) {
        resultsBox.style.display = 'none';
    }
});
