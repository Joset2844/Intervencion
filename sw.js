const CACHE = 'intervenciones-v1';
const SHELL = ['./', './index.html', './manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// Solo cachea el "shell" estático; nunca intercepta llamadas a Firebase
// (Firestore/Storage/Auth), que necesitan ir siempre a la red.
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  if (url.includes('firestore.googleapis.com') || url.includes('googleapis.com') || url.includes('firebasestorage')) {
    return; // deja pasar sin cachear
  }
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
