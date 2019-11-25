
// checksums.js
const checksums = {"static":"115E84350AA0EC3B62CAB7E55E57DAE1"}


// static_file_list.js
const static_file_list = ["src/assets","src/assets/appium-behave","src/assets/appium-behave/appium-behave.png","src/assets/avatar.jpeg","src/assets/down_sampled","src/assets/down_sampled/voron-tryout","src/assets/down_sampled/voron-tryout/IMG_20190325_115322.jpg","src/assets/favicon.png","src/assets/proj_thumbnails","src/assets/proj_thumbnails/allwinner-v3s-tryout.jpg","src/assets/proj_thumbnails/appium-behave-notes.png","src/assets/proj_thumbnails/helloworld-logo-png-2.png","src/assets/proj_thumbnails/hko-weather-bot.jpg","src/assets/proj_thumbnails/linux-toolbox.png","src/assets/proj_thumbnails/opencv-car-counting.jpg","src/assets/proj_thumbnails/pet-pug-project.png","src/assets/proj_thumbnails/portfolio_tryout.png","src/assets/proj_thumbnails/printer-board.png","src/assets/proj_thumbnails/rthk31-rthk32-linux-viewer.png","src/assets/proj_thumbnails/slic3r-batch-export.png","src/assets/proj_thumbnails/tappy_tryout.jpg","src/assets/proj_thumbnails/tradingview-dashboard.png","src/assets/proj_thumbnails/traefik-tryout.png","src/assets/proj_thumbnails/voron-tryout.jpg","src/assets/proj_thumbnails/youtube_split_view_tryout.png","src/assets/proj_thumbnails/z-transfer-demo.png","src/assets/projects","src/assets/projects/allwinner-v3s-tryout","src/assets/projects/allwinner-v3s-tryout/.gitkeep","src/assets/projects/appium-behave-notes","src/assets/projects/appium-behave-notes/.gitkeep","src/assets/projects/hko-weather-bot","src/assets/projects/hko-weather-bot/.gitkeep","src/assets/projects/linux-toolbox","src/assets/projects/linux-toolbox/.gitkeep","src/assets/projects/opencv-car-counting","src/assets/projects/opencv-car-counting/.gitkeep","src/assets/projects/opencv-car-counting/opencv-car-counting.jpg","src/assets/projects/pet-pug-project","src/assets/projects/pet-pug-project/.gitkeep","src/assets/projects/portfolio","src/assets/projects/portfolio/.gitkeep","src/assets/projects/printer-board","src/assets/projects/printer-board/.gitkeep","src/assets/projects/rthk31-rthk32-linux-viewer","src/assets/projects/rthk31-rthk32-linux-viewer/.gitkeep","src/assets/projects/rthk31-rthk32-linux-viewer/rthk31-rthk32-linux-viewer.png","src/assets/projects/slic3r-batch-export","src/assets/projects/slic3r-batch-export/.gitkeep","src/assets/projects/tappy","src/assets/projects/tappy/.gitkeep","src/assets/projects/tradingview-dashboard","src/assets/projects/tradingview-dashboard/.gitkeep","src/assets/projects/traefik-tryout","src/assets/projects/traefik-tryout/.gitkeep","src/assets/projects/voron-tryout","src/assets/projects/voron-tryout/.gitkeep","src/assets/projects/youtube-split-view-tryout","src/assets/projects/youtube-split-view-tryout/youtube_split_view_tryout.png","src/assets/projects/z-transfer-demo","src/assets/projects/z-transfer-demo/transfer-sh.png","src/assets/qr_img.png","src/assets/share-button","src/assets/share-button/facebook.svg","src/assets/share-button/github.svg","src/assets/share-button/linkedin.svg","src/assets/share-button/pinterest.svg","src/assets/share-button/qr-code.png","src/assets/share-button/speech-bubble.svg","src/assets/share-button/whatsapp.svg"]


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrc3Vtcy5qcyIsInN0YXRpY19maWxlX2xpc3QuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGNoZWNrc3Vtcy5qc1xuY29uc3QgY2hlY2tzdW1zID0ge1wic3RhdGljXCI6XCIxMTVFODQzNTBBQTBFQzNCNjJDQUI3RTU1RTU3REFFMVwifVxuIiwiXG4vLyBzdGF0aWNfZmlsZV9saXN0LmpzXG5jb25zdCBzdGF0aWNfZmlsZV9saXN0ID0gW1wic3JjL2Fzc2V0c1wiLFwic3JjL2Fzc2V0cy9hcHBpdW0tYmVoYXZlXCIsXCJzcmMvYXNzZXRzL2FwcGl1bS1iZWhhdmUvYXBwaXVtLWJlaGF2ZS5wbmdcIixcInNyYy9hc3NldHMvYXZhdGFyLmpwZWdcIixcInNyYy9hc3NldHMvZG93bl9zYW1wbGVkXCIsXCJzcmMvYXNzZXRzL2Rvd25fc2FtcGxlZC92b3Jvbi10cnlvdXRcIixcInNyYy9hc3NldHMvZG93bl9zYW1wbGVkL3Zvcm9uLXRyeW91dC9JTUdfMjAxOTAzMjVfMTE1MzIyLmpwZ1wiLFwic3JjL2Fzc2V0cy9mYXZpY29uLnBuZ1wiLFwic3JjL2Fzc2V0cy9wcm9qX3RodW1ibmFpbHNcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzL2FsbHdpbm5lci12M3MtdHJ5b3V0LmpwZ1wiLFwic3JjL2Fzc2V0cy9wcm9qX3RodW1ibmFpbHMvYXBwaXVtLWJlaGF2ZS1ub3Rlcy5wbmdcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzL2hlbGxvd29ybGQtbG9nby1wbmctMi5wbmdcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzL2hrby13ZWF0aGVyLWJvdC5qcGdcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzL2xpbnV4LXRvb2xib3gucG5nXCIsXCJzcmMvYXNzZXRzL3Byb2pfdGh1bWJuYWlscy9vcGVuY3YtY2FyLWNvdW50aW5nLmpwZ1wiLFwic3JjL2Fzc2V0cy9wcm9qX3RodW1ibmFpbHMvcGV0LXB1Zy1wcm9qZWN0LnBuZ1wiLFwic3JjL2Fzc2V0cy9wcm9qX3RodW1ibmFpbHMvcG9ydGZvbGlvX3RyeW91dC5wbmdcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzL3ByaW50ZXItYm9hcmQucG5nXCIsXCJzcmMvYXNzZXRzL3Byb2pfdGh1bWJuYWlscy9ydGhrMzEtcnRoazMyLWxpbnV4LXZpZXdlci5wbmdcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzL3NsaWMzci1iYXRjaC1leHBvcnQucG5nXCIsXCJzcmMvYXNzZXRzL3Byb2pfdGh1bWJuYWlscy90YXBweV90cnlvdXQuanBnXCIsXCJzcmMvYXNzZXRzL3Byb2pfdGh1bWJuYWlscy90cmFkaW5ndmlldy1kYXNoYm9hcmQucG5nXCIsXCJzcmMvYXNzZXRzL3Byb2pfdGh1bWJuYWlscy90cmFlZmlrLXRyeW91dC5wbmdcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzL3Zvcm9uLXRyeW91dC5qcGdcIixcInNyYy9hc3NldHMvcHJval90aHVtYm5haWxzL3lvdXR1YmVfc3BsaXRfdmlld190cnlvdXQucG5nXCIsXCJzcmMvYXNzZXRzL3Byb2pfdGh1bWJuYWlscy96LXRyYW5zZmVyLWRlbW8ucG5nXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL2FsbHdpbm5lci12M3MtdHJ5b3V0XCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL2FsbHdpbm5lci12M3MtdHJ5b3V0Ly5naXRrZWVwXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL2FwcGl1bS1iZWhhdmUtbm90ZXNcIixcInNyYy9hc3NldHMvcHJvamVjdHMvYXBwaXVtLWJlaGF2ZS1ub3Rlcy8uZ2l0a2VlcFwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy9oa28td2VhdGhlci1ib3RcIixcInNyYy9hc3NldHMvcHJvamVjdHMvaGtvLXdlYXRoZXItYm90Ly5naXRrZWVwXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL2xpbnV4LXRvb2xib3hcIixcInNyYy9hc3NldHMvcHJvamVjdHMvbGludXgtdG9vbGJveC8uZ2l0a2VlcFwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy9vcGVuY3YtY2FyLWNvdW50aW5nXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL29wZW5jdi1jYXItY291bnRpbmcvLmdpdGtlZXBcIixcInNyYy9hc3NldHMvcHJvamVjdHMvb3BlbmN2LWNhci1jb3VudGluZy9vcGVuY3YtY2FyLWNvdW50aW5nLmpwZ1wiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy9wZXQtcHVnLXByb2plY3RcIixcInNyYy9hc3NldHMvcHJvamVjdHMvcGV0LXB1Zy1wcm9qZWN0Ly5naXRrZWVwXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL3BvcnRmb2xpb1wiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy9wb3J0Zm9saW8vLmdpdGtlZXBcIixcInNyYy9hc3NldHMvcHJvamVjdHMvcHJpbnRlci1ib2FyZFwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy9wcmludGVyLWJvYXJkLy5naXRrZWVwXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL3J0aGszMS1ydGhrMzItbGludXgtdmlld2VyXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL3J0aGszMS1ydGhrMzItbGludXgtdmlld2VyLy5naXRrZWVwXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL3J0aGszMS1ydGhrMzItbGludXgtdmlld2VyL3J0aGszMS1ydGhrMzItbGludXgtdmlld2VyLnBuZ1wiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy9zbGljM3ItYmF0Y2gtZXhwb3J0XCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL3NsaWMzci1iYXRjaC1leHBvcnQvLmdpdGtlZXBcIixcInNyYy9hc3NldHMvcHJvamVjdHMvdGFwcHlcIixcInNyYy9hc3NldHMvcHJvamVjdHMvdGFwcHkvLmdpdGtlZXBcIixcInNyYy9hc3NldHMvcHJvamVjdHMvdHJhZGluZ3ZpZXctZGFzaGJvYXJkXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL3RyYWRpbmd2aWV3LWRhc2hib2FyZC8uZ2l0a2VlcFwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy90cmFlZmlrLXRyeW91dFwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy90cmFlZmlrLXRyeW91dC8uZ2l0a2VlcFwiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy92b3Jvbi10cnlvdXRcIixcInNyYy9hc3NldHMvcHJvamVjdHMvdm9yb24tdHJ5b3V0Ly5naXRrZWVwXCIsXCJzcmMvYXNzZXRzL3Byb2plY3RzL3lvdXR1YmUtc3BsaXQtdmlldy10cnlvdXRcIixcInNyYy9hc3NldHMvcHJvamVjdHMveW91dHViZS1zcGxpdC12aWV3LXRyeW91dC95b3V0dWJlX3NwbGl0X3ZpZXdfdHJ5b3V0LnBuZ1wiLFwic3JjL2Fzc2V0cy9wcm9qZWN0cy96LXRyYW5zZmVyLWRlbW9cIixcInNyYy9hc3NldHMvcHJvamVjdHMvei10cmFuc2Zlci1kZW1vL3RyYW5zZmVyLXNoLnBuZ1wiLFwic3JjL2Fzc2V0cy9xcl9pbWcucG5nXCIsXCJzcmMvYXNzZXRzL3NoYXJlLWJ1dHRvblwiLFwic3JjL2Fzc2V0cy9zaGFyZS1idXR0b24vZmFjZWJvb2suc3ZnXCIsXCJzcmMvYXNzZXRzL3NoYXJlLWJ1dHRvbi9naXRodWIuc3ZnXCIsXCJzcmMvYXNzZXRzL3NoYXJlLWJ1dHRvbi9saW5rZWRpbi5zdmdcIixcInNyYy9hc3NldHMvc2hhcmUtYnV0dG9uL3BpbnRlcmVzdC5zdmdcIixcInNyYy9hc3NldHMvc2hhcmUtYnV0dG9uL3FyLWNvZGUucG5nXCIsXCJzcmMvYXNzZXRzL3NoYXJlLWJ1dHRvbi9zcGVlY2gtYnViYmxlLnN2Z1wiLFwic3JjL2Fzc2V0cy9zaGFyZS1idXR0b24vd2hhdHNhcHAuc3ZnXCJdXG4iLCJcbmNvbnN0IGNhY2hlX3N0YXRpY19hc3NldF9uYW1lID0gJ3N0YXRpY19jYWNoZV8nICsgY2hlY2tzdW1zLnN0YXRpY1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBldnQgPT4ge1xuICBldnQud2FpdFVudGlsKFxuICAgIGNhY2hlcy5vcGVuKGNhY2hlX3N0YXRpY19hc3NldF9uYW1lKVxuICAgICAgLnRoZW4oIGNhY2hlID0+IHtcbiAgICAgICAgY2FjaGUuYWRkQWxsKHN0YXRpY19maWxlX2xpc3QpXG4gICAgICB9KVxuICApXG59KVxuXG5jb25zb2xlLmxvZygnaGVsbG8gc3cuanMnKTsiXX0=