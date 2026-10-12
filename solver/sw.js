/*
 * Star ID is now part of Dark Sky Almanac, whose service worker
 * (/sw.js) keeps it working offline. The standalone version registered its
 * own worker here, scoped to /solver/. Phones that still have it fetch this
 * file on their next visit: it removes the old cache, steps aside, and
 * reloads the page so the Almanac's worker takes over. It deliberately does
 * not touch any other cache.
 */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    await caches.delete('pointing-check-v1');
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
  })());
});
