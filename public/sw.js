
// checksums.js
const checksums = {"static":"A49F1B7A2F0F3FF65C8F584B2CB41A47"}


// static_file_list.js
const static_file_list = ["assets/appium-behave/appium-behave.png","assets/avatar.jpeg","assets/down_sampled/voron-tryout/IMG_20190325_115322.jpg","assets/favicon.png","assets/proj_thumbnails/allwinner-v3s-tryout.jpg","assets/proj_thumbnails/appium-behave-notes.png","assets/proj_thumbnails/helloworld.png","assets/proj_thumbnails/hko-weather-bot.jpg","assets/proj_thumbnails/linux-toolbox.png","assets/proj_thumbnails/opencv-car-counting.jpg","assets/proj_thumbnails/pet-pug-project.png","assets/proj_thumbnails/portfolio_tryout.png","assets/proj_thumbnails/printer-board.png","assets/proj_thumbnails/rthk31-rthk32-linux-viewer.png","assets/proj_thumbnails/slic3r-batch-export.png","assets/proj_thumbnails/tappy_tryout.jpg","assets/proj_thumbnails/tradingview-dashboard.png","assets/proj_thumbnails/traefik-tryout.png","assets/proj_thumbnails/voron-tryout.jpg","assets/proj_thumbnails/youtube_split_view_tryout.png","assets/proj_thumbnails/z-transfer-demo.png","assets/projects/opencv-car-counting/opencv-car-counting.jpg","assets/projects/rthk31-rthk32-linux-viewer/rthk31-rthk32-linux-viewer.png","assets/projects/youtube-split-view-tryout/youtube_split_view_tryout.png","assets/projects/z-transfer-demo/transfer-sh.png","assets/qr_img.png","assets/share-button/facebook.svg","assets/share-button/github.svg","assets/share-button/linkedin.svg","assets/share-button/pinterest.svg","assets/share-button/qr-code.png","assets/share-button/speech-bubble.svg","assets/share-button/whatsapp.svg"]

// index.js

const staticCacheName = `site-static-${checksums.static}`;
const dynamicCacheName = `site-dynamic-${checksums.static}`;


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
      cache.addAll( static_file_list );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrc3Vtcy5qcyIsInN0YXRpY19maWxlX2xpc3QuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGNoZWNrc3Vtcy5qc1xuY29uc3QgY2hlY2tzdW1zID0ge1wic3RhdGljXCI6XCJBNDlGMUI3QTJGMEYzRkY2NUM4RjU4NEIyQ0I0MUE0N1wifVxuIiwiXG4vLyBzdGF0aWNfZmlsZV9saXN0LmpzXG5jb25zdCBzdGF0aWNfZmlsZV9saXN0ID0gW1wiYXNzZXRzL2FwcGl1bS1iZWhhdmUvYXBwaXVtLWJlaGF2ZS5wbmdcIixcImFzc2V0cy9hdmF0YXIuanBlZ1wiLFwiYXNzZXRzL2Rvd25fc2FtcGxlZC92b3Jvbi10cnlvdXQvSU1HXzIwMTkwMzI1XzExNTMyMi5qcGdcIixcImFzc2V0cy9mYXZpY29uLnBuZ1wiLFwiYXNzZXRzL3Byb2pfdGh1bWJuYWlscy9hbGx3aW5uZXItdjNzLXRyeW91dC5qcGdcIixcImFzc2V0cy9wcm9qX3RodW1ibmFpbHMvYXBwaXVtLWJlaGF2ZS1ub3Rlcy5wbmdcIixcImFzc2V0cy9wcm9qX3RodW1ibmFpbHMvaGVsbG93b3JsZC5wbmdcIixcImFzc2V0cy9wcm9qX3RodW1ibmFpbHMvaGtvLXdlYXRoZXItYm90LmpwZ1wiLFwiYXNzZXRzL3Byb2pfdGh1bWJuYWlscy9saW51eC10b29sYm94LnBuZ1wiLFwiYXNzZXRzL3Byb2pfdGh1bWJuYWlscy9vcGVuY3YtY2FyLWNvdW50aW5nLmpwZ1wiLFwiYXNzZXRzL3Byb2pfdGh1bWJuYWlscy9wZXQtcHVnLXByb2plY3QucG5nXCIsXCJhc3NldHMvcHJval90aHVtYm5haWxzL3BvcnRmb2xpb190cnlvdXQucG5nXCIsXCJhc3NldHMvcHJval90aHVtYm5haWxzL3ByaW50ZXItYm9hcmQucG5nXCIsXCJhc3NldHMvcHJval90aHVtYm5haWxzL3J0aGszMS1ydGhrMzItbGludXgtdmlld2VyLnBuZ1wiLFwiYXNzZXRzL3Byb2pfdGh1bWJuYWlscy9zbGljM3ItYmF0Y2gtZXhwb3J0LnBuZ1wiLFwiYXNzZXRzL3Byb2pfdGh1bWJuYWlscy90YXBweV90cnlvdXQuanBnXCIsXCJhc3NldHMvcHJval90aHVtYm5haWxzL3RyYWRpbmd2aWV3LWRhc2hib2FyZC5wbmdcIixcImFzc2V0cy9wcm9qX3RodW1ibmFpbHMvdHJhZWZpay10cnlvdXQucG5nXCIsXCJhc3NldHMvcHJval90aHVtYm5haWxzL3Zvcm9uLXRyeW91dC5qcGdcIixcImFzc2V0cy9wcm9qX3RodW1ibmFpbHMveW91dHViZV9zcGxpdF92aWV3X3RyeW91dC5wbmdcIixcImFzc2V0cy9wcm9qX3RodW1ibmFpbHMvei10cmFuc2Zlci1kZW1vLnBuZ1wiLFwiYXNzZXRzL3Byb2plY3RzL29wZW5jdi1jYXItY291bnRpbmcvb3BlbmN2LWNhci1jb3VudGluZy5qcGdcIixcImFzc2V0cy9wcm9qZWN0cy9ydGhrMzEtcnRoazMyLWxpbnV4LXZpZXdlci9ydGhrMzEtcnRoazMyLWxpbnV4LXZpZXdlci5wbmdcIixcImFzc2V0cy9wcm9qZWN0cy95b3V0dWJlLXNwbGl0LXZpZXctdHJ5b3V0L3lvdXR1YmVfc3BsaXRfdmlld190cnlvdXQucG5nXCIsXCJhc3NldHMvcHJvamVjdHMvei10cmFuc2Zlci1kZW1vL3RyYW5zZmVyLXNoLnBuZ1wiLFwiYXNzZXRzL3FyX2ltZy5wbmdcIixcImFzc2V0cy9zaGFyZS1idXR0b24vZmFjZWJvb2suc3ZnXCIsXCJhc3NldHMvc2hhcmUtYnV0dG9uL2dpdGh1Yi5zdmdcIixcImFzc2V0cy9zaGFyZS1idXR0b24vbGlua2VkaW4uc3ZnXCIsXCJhc3NldHMvc2hhcmUtYnV0dG9uL3BpbnRlcmVzdC5zdmdcIixcImFzc2V0cy9zaGFyZS1idXR0b24vcXItY29kZS5wbmdcIixcImFzc2V0cy9zaGFyZS1idXR0b24vc3BlZWNoLWJ1YmJsZS5zdmdcIixcImFzc2V0cy9zaGFyZS1idXR0b24vd2hhdHNhcHAuc3ZnXCJdXG4iLCIvLyBpbmRleC5qc1xuXG5jb25zdCBzdGF0aWNDYWNoZU5hbWUgPSBgc2l0ZS1zdGF0aWMtJHtjaGVja3N1bXMuc3RhdGljfWA7XG5jb25zdCBkeW5hbWljQ2FjaGVOYW1lID0gYHNpdGUtZHluYW1pYy0ke2NoZWNrc3Vtcy5zdGF0aWN9YDtcblxuXG5jb25zdCBsaW1pdENhY2hlU2l6ZSA9ICggbmFtZSwgc2l6ZSApID0+IHtcbiAgLy8gY29uc29sZS5sb2coJ2xpbWl0Q2FjaGVTaXplIGNhbGxpbmcnKVxuICBjYWNoZXMub3BlbiggbmFtZSApLnRoZW4oIGNhY2hlID0+IHtcbiAgICBjYWNoZS5rZXlzKCkudGhlbigga2V5cyA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZGVsZXRlIGNhY2hlJywga2V5cylcbiAgICAgIGlmICgga2V5cy5sZW5ndGggPiBzaXplICkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGVsZXRlIGNhY2hlJywga2V5c1swXSlcbiAgICAgICAgY2FjaGUuZGVsZXRlKCBrZXlzWyAwIF0gKS50aGVuKFxuICAgICAgICAgIGxpbWl0Q2FjaGVTaXplKCBuYW1lLCBzaXplIClcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0gKVxuICB9IClcbn1cblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCAnaW5zdGFsbCcsIGV2dCA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKCdzZXJ2aWNlIHdvcmtlciBoYXMgYmVlbiBpbnN0YWxsZWQnLCBldnQpO1xuICBldnQud2FpdFVudGlsKFxuICAgIGNhY2hlcy5vcGVuKCBzdGF0aWNDYWNoZU5hbWUgKVxuICAgIC50aGVuKCBjYWNoZSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2NhY2hpbmcgc3RhdGljIGFzc2V0cycgKVxuICAgICAgY2FjaGUuYWRkQWxsKCBzdGF0aWNfZmlsZV9saXN0ICk7XG4gICAgfSApXG4gIClcbn0gKVxuXG4vLyBhY3RpdmF0ZVxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCAnYWN0aXZhdGUnLCBldnQgPT4ge1xuICAvLyBjb25zb2xlLmxvZyggJ3NlcnZpY2Ugd29ya2VyIGhhcyBiZWVuIGFjdGl2YXRlZCcsIGV2dCApO1xuICBldnQud2FpdFVudGlsKFxuICAgIGNhY2hlcy5rZXlzKClcbiAgICAudGhlbigga2V5cyA9PiB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICAgIGtleXNcbiAgICAgICAgLmZpbHRlcigga2V5ID0+IGtleSAhPT0gc3RhdGljQ2FjaGVOYW1lIClcbiAgICAgICAgLm1hcCgga2V5ID0+IGNhY2hlcy5kZWxldGUoIGtleSApIClcbiAgICAgIClcbiAgICB9IClcbiAgKVxufSApXG4vLyBmZXRjaCBldmVudFxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCAnZmV0Y2gnLCBldnQgPT4ge1xuICAvLyBjb25zb2xlLmxvZyggJ2ZldGNoIGV2ZW50JywgZXZ0IClcbiAgLy8gY29uc29sZS5sb2coICdjaGVjayB0aGlzICcsIGV2dC5yZXF1ZXN0LnVybCwgZXZ0LnJlcXVlc3QudXJsLmluZGV4T2YoICdmaXJlc3RvcmUuZ29vZ2xlYXBpcy5jb20nICkgKVxuICBpZiAoIGV2dC5yZXF1ZXN0LnVybC5pbmRleE9mKCAnZmlyZXN0b3JlLmdvb2dsZWFwaXMuY29tJyApID09PSAtMSApIHtcblxuICAgIGV2dC5yZXNwb25kV2l0aChcbiAgICAgIGNhY2hlcy5tYXRjaCggZXZ0LnJlcXVlc3QgKS50aGVuKCBjYWNoZVJlcyA9PiB7XG4gICAgICAgIHJldHVybiBjYWNoZVJlcyB8fCBmZXRjaCggZXZ0LnJlcXVlc3QgKVxuICAgICAgICAgIC50aGVuKCBmZXRjaFJlcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVzLm9wZW4oIGR5bmFtaWNDYWNoZU5hbWUgKS50aGVuKCBjYWNoZSA9PiB7XG4gICAgICAgICAgICAgIGNhY2hlLnB1dCggZXZ0LnJlcXVlc3QudXJsLCBmZXRjaFJlcy5jbG9uZSgpIClcblxuICAgICAgICAgICAgICBsaW1pdENhY2hlU2l6ZSggZHluYW1pY0NhY2hlTmFtZSwgMzAgKVxuICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXNcbiAgICAgICAgICAgIH0gKVxuICAgICAgICAgIH0gKVxuXG4gICAgICB9IClcbiAgICAgIC5jYXRjaCggKCkgPT4ge1xuICAgICAgICBpZiAoIGV2dC5yZXF1ZXN0LnVybC5pbmRleE9mKCAnLmh0bWwnICkgKSB7XG4gICAgICAgICAgcmV0dXJuIGNhY2hlcy5tYXRjaCggJy9wYWdlcy9mYWxsYmFjay5odG1sJyApXG4gICAgICAgIH1cbiAgICAgIH0gKVxuICAgIClcbiAgfSBlbHNlIHtcblxuICB9XG5cbn0gKSJdfQ==