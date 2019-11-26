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


// workbox.routing.registerRoute("/project_detail/voron-tryout", workbox.strategies.networkFirst());
workbox.routing.registerRoute('/project_detail/tradingview-dashboard', workbox.strategies.NetworkFirst());
workbox.routing.registerRoute('/project_detail/voron-tryout', workbox.strategies.NetworkFirst());
workbox.routing.registerRoute('/project_detail/appium-behave-notes', workbox.strategies.NetworkFirst());
workbox.routing.registerRoute('/project_detail/tappy', workbox.strategies.NetworkFirst());
workbox.routing.registerRoute('/project_detail/portfolio', workbox.strategies.NetworkFirst());
workbox.routing.registerRoute('/project_detail/youtube-split-view-tryout', workbox.strategies.NetworkFirst());
workbox.routing.registerRoute('/project_detail/traefik-tryout', workbox.strategies.NetworkFirst());
workbox.routing.registerRoute('/project_detail/pet-pug-project', workbox.strategies.NetworkFirst());
workbox.routing.registerRoute('/project_detail/z-transfer-demo', workbox.strategies.NetworkFirst());
workbox.routing.registerRoute('/project_detail/rthk31-rthk32-linux-viewer', workbox.strategies.NetworkFirst());
workbox.routing.registerRoute('/project_detail/opencv-car-counting', workbox.strategies.NetworkFirst());
workbox.routing.registerRoute('/project_detail/linux-toolbox', workbox.strategies.NetworkFirst());
workbox.routing.registerRoute('/project_detail/hko-weather-bot', workbox.strategies.NetworkFirst());
workbox.routing.registerRoute('/project_detail/slic3r-batch-export', workbox.strategies.NetworkFirst());
workbox.routing.registerRoute('/project_detail/allwinner-v3s-tryout', workbox.strategies.NetworkFirst());
workbox.routing.registerRoute('/project_detail/printer-board', workbox.strategies.NetworkFirst());

// for (url_path of TileConfig){
//   workbox.routing.registerRoute(
//     `/project_detail/${url_path}`,
//     workbox.strategies.networkFirst());
// }
