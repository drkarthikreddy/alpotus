/**
 * ALPOTUS 4.0 - SERVICE WORKER
 * Features: Full Offline Mode, Fast Caching, and Background Updates.
 */

const CACHE_NAME = 'alpotus-v4.0-cache';

// The "App Shell" - Core files required for the app to function offline
const APP_SHELL = [
    '/',
    '/index.html',
    '/clinical-scores.html',
    '/quick-revision.html',
    '/tools.html',
    '/games.html',
    '/calculators.html',
    '/articles.html',
    '/about.html',
    '/privacy.html',
    '/terms.html',
    '/disclaimer.html',
    '/style.css',
    '/app.js',
    '/search-engine.js',
    '/manifest.json',
    '/data/masterData.js' // The Brain of the app
];

// 1. INSTALL: Save the App Shell to the phone's storage
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Alpotus 4.0: Caching App Shell...');
            return cache.addAll(APP_SHELL);
        })
    );
});

// 2. ACTIVATE: Remove old versions of the app when you update
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('Alpotus 4.0: Clearing Old Cache...');
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

// 3. FETCH: The "Stale-While-Revalidate" Strategy
// This makes the app feel lightning fast. 
// It shows the "Saved" version immediately, then updates in the background.
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchedResponse = fetch(event.request).then((networkResponse) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    // Save the new version of the page for next time
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            }).catch(() => {
                // If offline and file not in cache, show nothing or a custom offline page
            });

            return cachedResponse || fetchedResponse;
        })
    );
});