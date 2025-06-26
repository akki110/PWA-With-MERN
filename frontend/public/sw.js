const CACHE_NAME = 'pwa-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

// ✅ Install Event - Pre-cache assets
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Caching files');
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  self.skipWaiting(); // Activate worker immediately
});

// ✅ Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[ServiceWorker] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim(); // Claim clients immediately
});

// ✅ Fetch Event - Respond with cache or network
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Return cached asset
      }

      return fetch(event.request)
        .then((networkResponse) => {
          // Cache the new file (optional)
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => caches.match('/index.html')); // Offline fallback for SPA routes
    })
  );
});

// self.addEventListener('push', event => {
//   const data = event.data.json();
//   console.log('[Service Worker] Push Received.');

//   self.registration.showNotification(data.title, {
//     body: data.body,
//     icon: '/pwa-192x192.png',
//   });
// });

// self.addEventListener('notificationclick', event => {
//   event.notification.close();
//   event.waitUntil(
//     clients.openWindow('/')
//   );
// });
// This service worker script handles installation, activation, caching of assets,
// and fetch events to serve cached content or fallback to network requests.