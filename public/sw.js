self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v2').then(function(cache) {
            return cache.addAll([
                '/',
                '/static/css/main.17350c02.css',
                '/static/js/main.js', // TODO Need to add promise that will read from asset-manifest.json
                '/products',
                '/product',
                '/api/products',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
