let currentVersion = "4";
const staticCacheName = "site-static-v" + currentVersion;
const assets = ["/"];

// Listen to registration/install event
self.addEventListener("install", evt => {
  // Service worker is being installed
  // console.log('Service worker is being installed ');
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Activate event listener a
self.addEventListener("activate", evt => {
  // Service worker is now active
  // Delete previous cache
  evt.waitUntil(
    caches.keys().then(keys => {
      // Delete all accept the current one
      if (keys) {
        return Promise.all(
          (keys
          .filter(key => (key !== staticCacheName))
          .forEach(key => caches.delete(key))) || []
        )
      }
    })
  )
});

// Fetch events listner
self.addEventListener("fetch", evt => {
  evt.respondWith(
    caches.match(evt.request)
      .then(cacheResponse => {
        return (
          cacheResponse              // Available, so return from cache
          || fetch(evt.request)      // Not available, so fetch  
            .then(fetchResponse => {
              return caches.open(staticCacheName)
                .then(cache => {
                  cache.put(evt.request.url, fetchResponse.clone());
                  return fetchResponse;
                })
            })
        )
      })
  )
});
