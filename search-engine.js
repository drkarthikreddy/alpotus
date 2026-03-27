/**
 * ALPOTUS 4.0 - UNIVERSAL SEARCH ENGINE
 * Features: Multi-Category Scanning, Offline Support, and Safe String Handling.
 */

function handleUniversalSearch(query, targetId = 'nav-results') {
    const resultsContainer = document.getElementById(targetId);
    if (!resultsContainer) return;

    // 1. DATA FLATTENING
    // Converts the Master Object into one searchable array
    const allItems = [];
    if (typeof AlpotusData !== 'undefined') {
        for (const category in AlpotusData) {
            AlpotusData[category].items.forEach(item => {
                allItems.push({ ...item, categoryTitle: AlpotusData[category].title });
            });
        }
    }

    // 2. INPUT VALIDATION
    if (!query || query.length < 2) {
        resultsContainer.innerHTML = '';
        resultsContainer.style.display = 'none';
        return;
    }

    // 3. FILTERING LOGIC
    const matches = allItems.filter(item => {
        const searchStr = `${item.name} ${item.desc} ${item.categoryTitle}`.toLowerCase();
        return searchStr.includes(query.toLowerCase());
    });

    // 4. RENDER RESULTS
    if (matches.length > 0) {
        resultsContainer.style.display = 'block';
        
        // Take top 8 results for a clean "App" feel
        const displayMatches = matches.slice(0, 8);

        resultsContainer.innerHTML = displayMatches.map(item => {
            // Ensure path is safe for JavaScript execution
            const safePath = item.path.replace(/'/g, "\\'");
            
            return `
                <div class="search-item" onclick="window.location.href='${prefix}${safePath}'">
                    <div class="search-icon">${item.icon}</div>
                    <div class="search-info">
                        <div class="search-name">${item.name}</div>
                        <div class="search-cat">${item.categoryTitle}</div>
                    </div>
                    <div class="search-arrow">→</div>
                </div>
            `;
        }).join('');
    } else {
        // No Results State
        resultsContainer.style.display = 'block';
        resultsContainer.innerHTML = `
            <div class="search-item" style="justify-content:center; opacity:0.6; cursor:default;">
                <span>No results for "${query}"</span>
            </div>
        `;
    }
}

/**
 * 5. AUTO-HIDE SEARCH
 * Hides the search results if the user clicks anywhere else
 */
document.addEventListener('click', (e) => {
    const navSearch = document.querySelector('.nav-search-input');
    const heroSearch = document.querySelector('.main-search');
    const dropdowns = document.querySelectorAll('.search-dropdown, #search-results');
    
    if (e.target !== navSearch && e.target !== heroSearch) {
        dropdowns.forEach(d => d.style.display = 'none');
    }
});