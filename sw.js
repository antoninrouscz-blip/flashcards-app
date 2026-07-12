// Bump CACHE_VERSION on every release to bust old caches.
const CACHE_VERSION = 'v22';
const CACHE_NAME = `slovicka-shell-${CACHE_VERSION}`;
const APP_SHELL = [
  './',
  'index.html',
  'styles.css',
  'app.js?v=16',
  'cloud.js?v=2',
  'firebase-config.js',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(APP_SHELL)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME && k.startsWith('slovicka-shell-'))
        .map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Never cache Firebase API / Firestore traffic.
  if (url.hostname.includes('googleapis.com') ||
      url.hostname.includes('firebaseio.com') ||
      url.hostname.includes('firebase') ||
      url.hostname.includes('google.com')) {
    return;
  }
  if (e.request.method !== 'GET') return;
  // Cache-first for same-origin app shell, network fallback.
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, copy));
        return resp;
      }).catch(() => caches.match('index.html')))
    );
  }
});
