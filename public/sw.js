
// checksums.js
const checksums = {"static":"DA349FB369F2A5D266CCF0D5DFA34370"}


// static_file_list.js
const static_file_list = ["src/assets","src/assets/appium-behave","src/assets/appium-behave/appium-behave.png","src/assets/avatar.jpeg","src/assets/down_sampled","src/assets/down_sampled/voron-tryout","src/assets/down_sampled/voron-tryout/IMG_20190325_115322.jpg","src/assets/favicon.png","src/assets/proj_thumbnails","src/assets/proj_thumbnails/allwinner-v3s-tryout.jpg","src/assets/proj_thumbnails/appium-behave-notes.png","src/assets/proj_thumbnails/helloworld.png","src/assets/proj_thumbnails/hko-weather-bot.jpg","src/assets/proj_thumbnails/linux-toolbox.png","src/assets/proj_thumbnails/opencv-car-counting.jpg","src/assets/proj_thumbnails/pet-pug-project.png","src/assets/proj_thumbnails/portfolio_tryout.png","src/assets/proj_thumbnails/printer-board.png","src/assets/proj_thumbnails/rthk31-rthk32-linux-viewer.png","src/assets/proj_thumbnails/slic3r-batch-export.png","src/assets/proj_thumbnails/tappy_tryout.jpg","src/assets/proj_thumbnails/tradingview-dashboard.png","src/assets/proj_thumbnails/traefik-tryout.png","src/assets/proj_thumbnails/voron-tryout.jpg","src/assets/proj_thumbnails/youtube_split_view_tryout.png","src/assets/proj_thumbnails/z-transfer-demo.png","src/assets/projects","src/assets/projects/allwinner-v3s-tryout","src/assets/projects/allwinner-v3s-tryout/.gitkeep","src/assets/projects/appium-behave-notes","src/assets/projects/appium-behave-notes/.gitkeep","src/assets/projects/hko-weather-bot","src/assets/projects/hko-weather-bot/.gitkeep","src/assets/projects/linux-toolbox","src/assets/projects/linux-toolbox/.gitkeep","src/assets/projects/opencv-car-counting","src/assets/projects/opencv-car-counting/.gitkeep","src/assets/projects/opencv-car-counting/opencv-car-counting.jpg","src/assets/projects/pet-pug-project","src/assets/projects/pet-pug-project/.gitkeep","src/assets/projects/portfolio","src/assets/projects/portfolio/.gitkeep","src/assets/projects/printer-board","src/assets/projects/printer-board/.gitkeep","src/assets/projects/rthk31-rthk32-linux-viewer","src/assets/projects/rthk31-rthk32-linux-viewer/.gitkeep","src/assets/projects/rthk31-rthk32-linux-viewer/rthk31-rthk32-linux-viewer.png","src/assets/projects/slic3r-batch-export","src/assets/projects/slic3r-batch-export/.gitkeep","src/assets/projects/tappy","src/assets/projects/tappy/.gitkeep","src/assets/projects/tradingview-dashboard","src/assets/projects/tradingview-dashboard/.gitkeep","src/assets/projects/traefik-tryout","src/assets/projects/traefik-tryout/.gitkeep","src/assets/projects/voron-tryout","src/assets/projects/voron-tryout/.gitkeep","src/assets/projects/youtube-split-view-tryout","src/assets/projects/youtube-split-view-tryout/youtube_split_view_tryout.png","src/assets/projects/z-transfer-demo","src/assets/projects/z-transfer-demo/transfer-sh.png","src/assets/qr_img.png","src/assets/share-button","src/assets/share-button/facebook.svg","src/assets/share-button/github.svg","src/assets/share-button/linkedin.svg","src/assets/share-button/pinterest.svg","src/assets/share-button/qr-code.png","src/assets/share-button/speech-bubble.svg","src/assets/share-button/whatsapp.svg"]

const staticCacheName = 'site-static-v4';
const dynamicCacheName = 'site-dynamic-v4';

const assets = [
  '/',
  '/index.html'
];

const limitCacheSize = ( name, size ) => {
  // console.log('limitCacheSize calling')
  caches.open( name ).then( cache => {
    cache.keys().then( keys => {
      // console.log('delete cache', keys)
      if ( keys.length > size ) {
        // console.log('delete cache', keys[0])
        cache.delete( keys[ 0 ] ).then(
          limitCacheSize( name, size )
        )
      }
    } )
  } )
}

self.addEventListener( 'install', evt => {
  // console.log('service worker has been installed', evt);
  evt.waitUntil(
    caches.open( staticCacheName )
    .then( cache => {
      // console.log( 'caching static assets' )
      cache.addAll( assets );
    } )
  )
} )

// activate
self.addEventListener( 'activate', evt => {
  // console.log( 'service worker has been activated', evt );
  evt.waitUntil(
    caches.keys()
    .then( keys => {
      return Promise.all(
        keys
        .filter( key => key !== staticCacheName )
        .map( key => caches.delete( key ) )
      )
    } )
  )
} )
// fetch event
self.addEventListener( 'fetch', evt => {
  // console.log( 'fetch event', evt )
  // console.log( 'check this ', evt.request.url, evt.request.url.indexOf( 'firestore.googleapis.com' ) )
  if ( evt.request.url.indexOf( 'firestore.googleapis.com' ) === -1 ) {

    evt.respondWith(
      caches.match( evt.request ).then( cacheRes => {
        return cacheRes || fetch( evt.request )
          .then( fetchRes => {
            return caches.open( dynamicCacheName ).then( cache => {
              cache.put( evt.request.url, fetchRes.clone() )

              limitCacheSize( dynamicCacheName, 30 )
              return fetchRes
            } )
          } )

      } )
      .catch( () => {
        if ( evt.request.url.indexOf( '.html' ) ) {
          return caches.match( '/pages/fallback.html' )
        }
      } )
    )
  } else {

  }

} )
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrc3Vtcy5qcyIsInN0YXRpY19maWxlX2xpc3QuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBjaGVja3N1bXMuanNcbmNvbnN0IGNoZWNrc3VtcyA9IHtcInN0YXRpY1wiOlwiREEzNDlGQjM2OUYyQTVEMjY2Q0NGMEQ1REZBMzQzNzBcIn1cbiIsIlxuLy8gc3RhdGljX2ZpbGVfbGlzdC5qc1xuY29uc3Qgc3RhdGljX2ZpbGVfbGlzdCA9IFtcInNyYy9hc3NldHNcIixcInNyYy9hc3NldHMvYXBwaXVtLWJlaGF2ZVwiLFwic3JjL2Fzc2V0cy9hcHBpdW0tYmVoYXZlL2FwcGl1bS1iZWhhdmUucG5nXCIsXCJzcmMvYXNzZXRzL2F2YXRhci5qcGVnXCIsXCJzcmMvYXNzZXRzL2Rvd25fc2FtcGxlZFwiLFwic3JjL2Fzc2V0cy9kb3duX3NhbXBsZWQvdm9yb24tdHJ5b3V0XCIsXCJzcmMvYXNzZXRzL2Rvd25fc2FtcGxlZC92b3Jvbi10cnlvdXQvSU1HXzIwMTkwMzI1XzExNTMyMi5qcGdcIixcInNyYy9hc3NldHMvZmF2aWNvbi5wbmdcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzXCIsXCJzcmMvYXNzZXRzL3Byb2pfdGh1bWJuYWlscy9hbGx3aW5uZXItdjNzLXRyeW91dC5qcGdcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzL2FwcGl1bS1iZWhhdmUtbm90ZXMucG5nXCIsXCJzcmMvYXNzZXRzL3Byb2pfdGh1bWJuYWlscy9oZWxsb3dvcmxkLnBuZ1wiLFwic3JjL2Fzc2V0cy9wcm9qX3RodW1ibmFpbHMvaGtvLXdlYXRoZXItYm90LmpwZ1wiLFwic3JjL2Fzc2V0cy9wcm9qX3RodW1ibmFpbHMvbGludXgtdG9vbGJveC5wbmdcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzL29wZW5jdi1jYXItY291bnRpbmcuanBnXCIsXCJzcmMvYXNzZXRzL3Byb2pfdGh1bWJuYWlscy9wZXQtcHVnLXByb2plY3QucG5nXCIsXCJzcmMvYXNzZXRzL3Byb2pfdGh1bWJuYWlscy9wb3J0Zm9saW9fdHJ5b3V0LnBuZ1wiLFwic3JjL2Fzc2V0cy9wcm9qX3RodW1ibmFpbHMvcHJpbnRlci1ib2FyZC5wbmdcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzL3J0aGszMS1ydGhrMzItbGludXgtdmlld2VyLnBuZ1wiLFwic3JjL2Fzc2V0cy9wcm9qX3RodW1ibmFpbHMvc2xpYzNyLWJhdGNoLWV4cG9ydC5wbmdcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzL3RhcHB5X3RyeW91dC5qcGdcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzL3RyYWRpbmd2aWV3LWRhc2hib2FyZC5wbmdcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzL3RyYWVmaWstdHJ5b3V0LnBuZ1wiLFwic3JjL2Fzc2V0cy9wcm9qX3RodW1ibmFpbHMvdm9yb24tdHJ5b3V0LmpwZ1wiLFwic3JjL2Fzc2V0cy9wcm9qX3RodW1ibmFpbHMveW91dHViZV9zcGxpdF92aWV3X3RyeW91dC5wbmdcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzL3otdHJhbnNmZXItZGVtby5wbmdcIixcInNyYy9hc3NldHMvcHJvamVjdHNcIixcInNyYy9hc3NldHMvcHJvamVjdHMvYWxsd2lubmVyLXYzcy10cnlvdXRcIixcInNyYy9hc3NldHMvcHJvamVjdHMvYWxsd2lubmVyLXYzcy10cnlvdXQvLmdpdGtlZXBcIixcInNyYy9hc3NldHMvcHJvamVjdHMvYXBwaXVtLWJlaGF2ZS1ub3Rlc1wiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy9hcHBpdW0tYmVoYXZlLW5vdGVzLy5naXRrZWVwXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL2hrby13ZWF0aGVyLWJvdFwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy9oa28td2VhdGhlci1ib3QvLmdpdGtlZXBcIixcInNyYy9hc3NldHMvcHJvamVjdHMvbGludXgtdG9vbGJveFwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy9saW51eC10b29sYm94Ly5naXRrZWVwXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL29wZW5jdi1jYXItY291bnRpbmdcIixcInNyYy9hc3NldHMvcHJvamVjdHMvb3BlbmN2LWNhci1jb3VudGluZy8uZ2l0a2VlcFwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy9vcGVuY3YtY2FyLWNvdW50aW5nL29wZW5jdi1jYXItY291bnRpbmcuanBnXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL3BldC1wdWctcHJvamVjdFwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy9wZXQtcHVnLXByb2plY3QvLmdpdGtlZXBcIixcInNyYy9hc3NldHMvcHJvamVjdHMvcG9ydGZvbGlvXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL3BvcnRmb2xpby8uZ2l0a2VlcFwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy9wcmludGVyLWJvYXJkXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL3ByaW50ZXItYm9hcmQvLmdpdGtlZXBcIixcInNyYy9hc3NldHMvcHJvamVjdHMvcnRoazMxLXJ0aGszMi1saW51eC12aWV3ZXJcIixcInNyYy9hc3NldHMvcHJvamVjdHMvcnRoazMxLXJ0aGszMi1saW51eC12aWV3ZXIvLmdpdGtlZXBcIixcInNyYy9hc3NldHMvcHJvamVjdHMvcnRoazMxLXJ0aGszMi1saW51eC12aWV3ZXIvcnRoazMxLXJ0aGszMi1saW51eC12aWV3ZXIucG5nXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL3NsaWMzci1iYXRjaC1leHBvcnRcIixcInNyYy9hc3NldHMvcHJvamVjdHMvc2xpYzNyLWJhdGNoLWV4cG9ydC8uZ2l0a2VlcFwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy90YXBweVwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy90YXBweS8uZ2l0a2VlcFwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy90cmFkaW5ndmlldy1kYXNoYm9hcmRcIixcInNyYy9hc3NldHMvcHJvamVjdHMvdHJhZGluZ3ZpZXctZGFzaGJvYXJkLy5naXRrZWVwXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL3RyYWVmaWstdHJ5b3V0XCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL3RyYWVmaWstdHJ5b3V0Ly5naXRrZWVwXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL3Zvcm9uLXRyeW91dFwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy92b3Jvbi10cnlvdXQvLmdpdGtlZXBcIixcInNyYy9hc3NldHMvcHJvamVjdHMveW91dHViZS1zcGxpdC12aWV3LXRyeW91dFwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy95b3V0dWJlLXNwbGl0LXZpZXctdHJ5b3V0L3lvdXR1YmVfc3BsaXRfdmlld190cnlvdXQucG5nXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL3otdHJhbnNmZXItZGVtb1wiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy96LXRyYW5zZmVyLWRlbW8vdHJhbnNmZXItc2gucG5nXCIsXCJzcmMvYXNzZXRzL3FyX2ltZy5wbmdcIixcInNyYy9hc3NldHMvc2hhcmUtYnV0dG9uXCIsXCJzcmMvYXNzZXRzL3NoYXJlLWJ1dHRvbi9mYWNlYm9vay5zdmdcIixcInNyYy9hc3NldHMvc2hhcmUtYnV0dG9uL2dpdGh1Yi5zdmdcIixcInNyYy9hc3NldHMvc2hhcmUtYnV0dG9uL2xpbmtlZGluLnN2Z1wiLFwic3JjL2Fzc2V0cy9zaGFyZS1idXR0b24vcGludGVyZXN0LnN2Z1wiLFwic3JjL2Fzc2V0cy9zaGFyZS1idXR0b24vcXItY29kZS5wbmdcIixcInNyYy9hc3NldHMvc2hhcmUtYnV0dG9uL3NwZWVjaC1idWJibGUuc3ZnXCIsXCJzcmMvYXNzZXRzL3NoYXJlLWJ1dHRvbi93aGF0c2FwcC5zdmdcIl1cbiIsImNvbnN0IHN0YXRpY0NhY2hlTmFtZSA9ICdzaXRlLXN0YXRpYy12NCc7XG5jb25zdCBkeW5hbWljQ2FjaGVOYW1lID0gJ3NpdGUtZHluYW1pYy12NCc7XG5cbmNvbnN0IGFzc2V0cyA9IFtcbiAgJy8nLFxuICAnL2luZGV4Lmh0bWwnXG5dO1xuXG5jb25zdCBsaW1pdENhY2hlU2l6ZSA9ICggbmFtZSwgc2l6ZSApID0+IHtcbiAgLy8gY29uc29sZS5sb2coJ2xpbWl0Q2FjaGVTaXplIGNhbGxpbmcnKVxuICBjYWNoZXMub3BlbiggbmFtZSApLnRoZW4oIGNhY2hlID0+IHtcbiAgICBjYWNoZS5rZXlzKCkudGhlbigga2V5cyA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZGVsZXRlIGNhY2hlJywga2V5cylcbiAgICAgIGlmICgga2V5cy5sZW5ndGggPiBzaXplICkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGVsZXRlIGNhY2hlJywga2V5c1swXSlcbiAgICAgICAgY2FjaGUuZGVsZXRlKCBrZXlzWyAwIF0gKS50aGVuKFxuICAgICAgICAgIGxpbWl0Q2FjaGVTaXplKCBuYW1lLCBzaXplIClcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0gKVxuICB9IClcbn1cblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCAnaW5zdGFsbCcsIGV2dCA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKCdzZXJ2aWNlIHdvcmtlciBoYXMgYmVlbiBpbnN0YWxsZWQnLCBldnQpO1xuICBldnQud2FpdFVudGlsKFxuICAgIGNhY2hlcy5vcGVuKCBzdGF0aWNDYWNoZU5hbWUgKVxuICAgIC50aGVuKCBjYWNoZSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2NhY2hpbmcgc3RhdGljIGFzc2V0cycgKVxuICAgICAgY2FjaGUuYWRkQWxsKCBhc3NldHMgKTtcbiAgICB9IClcbiAgKVxufSApXG5cbi8vIGFjdGl2YXRlXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoICdhY3RpdmF0ZScsIGV2dCA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKCAnc2VydmljZSB3b3JrZXIgaGFzIGJlZW4gYWN0aXZhdGVkJywgZXZ0ICk7XG4gIGV2dC53YWl0VW50aWwoXG4gICAgY2FjaGVzLmtleXMoKVxuICAgIC50aGVuKCBrZXlzID0+IHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgICAga2V5c1xuICAgICAgICAuZmlsdGVyKCBrZXkgPT4ga2V5ICE9PSBzdGF0aWNDYWNoZU5hbWUgKVxuICAgICAgICAubWFwKCBrZXkgPT4gY2FjaGVzLmRlbGV0ZSgga2V5ICkgKVxuICAgICAgKVxuICAgIH0gKVxuICApXG59IClcbi8vIGZldGNoIGV2ZW50XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoICdmZXRjaCcsIGV2dCA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKCAnZmV0Y2ggZXZlbnQnLCBldnQgKVxuICAvLyBjb25zb2xlLmxvZyggJ2NoZWNrIHRoaXMgJywgZXZ0LnJlcXVlc3QudXJsLCBldnQucmVxdWVzdC51cmwuaW5kZXhPZiggJ2ZpcmVzdG9yZS5nb29nbGVhcGlzLmNvbScgKSApXG4gIGlmICggZXZ0LnJlcXVlc3QudXJsLmluZGV4T2YoICdmaXJlc3RvcmUuZ29vZ2xlYXBpcy5jb20nICkgPT09IC0xICkge1xuXG4gICAgZXZ0LnJlc3BvbmRXaXRoKFxuICAgICAgY2FjaGVzLm1hdGNoKCBldnQucmVxdWVzdCApLnRoZW4oIGNhY2hlUmVzID0+IHtcbiAgICAgICAgcmV0dXJuIGNhY2hlUmVzIHx8IGZldGNoKCBldnQucmVxdWVzdCApXG4gICAgICAgICAgLnRoZW4oIGZldGNoUmVzID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZXMub3BlbiggZHluYW1pY0NhY2hlTmFtZSApLnRoZW4oIGNhY2hlID0+IHtcbiAgICAgICAgICAgICAgY2FjaGUucHV0KCBldnQucmVxdWVzdC51cmwsIGZldGNoUmVzLmNsb25lKCkgKVxuXG4gICAgICAgICAgICAgIGxpbWl0Q2FjaGVTaXplKCBkeW5hbWljQ2FjaGVOYW1lLCAzMCApXG4gICAgICAgICAgICAgIHJldHVybiBmZXRjaFJlc1xuICAgICAgICAgICAgfSApXG4gICAgICAgICAgfSApXG5cbiAgICAgIH0gKVxuICAgICAgLmNhdGNoKCAoKSA9PiB7XG4gICAgICAgIGlmICggZXZ0LnJlcXVlc3QudXJsLmluZGV4T2YoICcuaHRtbCcgKSApIHtcbiAgICAgICAgICByZXR1cm4gY2FjaGVzLm1hdGNoKCAnL3BhZ2VzL2ZhbGxiYWNrLmh0bWwnIClcbiAgICAgICAgfVxuICAgICAgfSApXG4gICAgKVxuICB9IGVsc2Uge1xuXG4gIH1cblxufSApIl19