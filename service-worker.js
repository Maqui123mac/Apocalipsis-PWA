// service-worker.js

// Cache name
const CACHE_NAME = 'apocalipsis-z-hunters-cache-v1';

// Files to cache
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/bootstrap.min.css',
  '/css/responsive.css',
  '/css/jquery.mCustomScrollbar.min.css',
  '/images/fevicon.png',
  '/images/loading.gif',
  '/images/mgtb.png',
  '/js/jquery.min.js',
  '/js/popper.min.js',
  '/js/bootstrap.bundle.min.js',
  '/js/jquery-3.0.0.min.js',
  '/js/plugin.js',
  '/js/jquery.mCustomScrollbar.concat.min.js',
  '/js/custom.js',
  '/https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js',
  '/app.js'
];

// Install service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch resources
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Activate service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
