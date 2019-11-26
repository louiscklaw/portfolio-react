// import TileConfig from './config/tile_configs'

// See https://developers.google.com/web/tools/workbox/guides/configure-workbox
// workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// app-shell
workbox.routing.registerRoute("/", workbox.strategies.networkFirst());

// customize the path available for offline
workbox.routing.registerRoute("/projects", workbox.strategies.networkFirst());
workbox.routing.registerRoute("/project_detail/voron-tryout", workbox.strategies.networkFirst());

// for (url_path of TileConfig){
//   workbox.routing.registerRoute(
//     `/project_detail/${url_path}`,
//     workbox.strategies.networkFirst());
// }
