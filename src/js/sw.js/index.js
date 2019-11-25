
const cache_static_asset_name = 'static_cache_' + checksums.static

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cache_static_asset_name)
      .then( cache => {
        cache.addAll(static_file_list)
      })
  )
})

console.log('hello sw.js');