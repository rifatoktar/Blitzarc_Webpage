'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c935bbb36738c93e5cf638795afccad4",
".git/config": "d3704b8afc7a670b5160a916680eb937",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2f6bddc17e718c0462a95641176d4f0f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "005ffca2bd4e7b7ff08c2725734471a0",
".git/logs/refs/heads/main": "9f254021079e3e2cef103a556ee96fe4",
".git/logs/refs/remotes/origin/main": "cde30acdf3a51d067a989634fe50edfc",
".git/objects/01/aae4c2f4f1d80d76dc3a622dbd1df7ae7dabe1": "07835d2301ef48af7cc294c4caa9671c",
".git/objects/0d/4d15832231bb68d059d295187062271f20be36": "f1a60361dce92d78af9e5f1e16048352",
".git/objects/14/7097fdd413fb88284b7234253bd79d5608e72d": "e7965c0ce70917cef42dec79d426a768",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/24/26b687f30287a870722f7f839e4814fa5286a5": "f10f9c7ac39d10534ef25a7b5b81d8e4",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/30/411a7b7480dcb258ce05064a4eaea1fc5b383b": "79410f0fa32a0cb6b379516ef9300394",
".git/objects/34/a53fee58f03296d9b39f88afa6ed85e3c2dc7b": "73804f476806c6c67acdcd02ca05ebf3",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/49/d40e093f8a580ff934fec7c21c382a76aca6fb": "60802bf64ff519796a6e6d21942f8e14",
".git/objects/50/54bf3fce4d67ec68d0ac25a5b6f4dab3f22fcc": "671ab119062be376140615bca43e35e6",
".git/objects/51/a4be0a2d3c42072dfd9f10882d9f8a6493c6c1": "7607a806be000f4469e9b58c8938cbaa",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/5d/30caa8cda5c217668be24f95a87117a91344fa": "e5f04b68cab5d7a9a69205433982d9d8",
".git/objects/5f/1e0efa28a6bb0cc565981ffc98266a0f9f030f": "e6c03aa7645c42babd99221ea12efef8",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/5093f0f92fa77f4a8875daaf6f340c79499159": "cf84da90e74ecb8763b2e70f71063709",
".git/objects/66/319d3fb335f9c6ed4be7f6abb494b6e4412ed1": "46f86c0c2674daf1b1f75bcfaa907dab",
".git/objects/69/a5a33065ec08e4d377c3f9b558d22453236bf3": "3ed91f34f05177ed8216de8e5dbe79b4",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/74/d2c3bf8e88dc07d5c243ec325101d6fbc8bdb9": "ec155faebe49c8ff36fb8abe2b376a5f",
".git/objects/7d/91b9fbe94f27c06ac7e53f15a2e02121735df1": "cd43ae601fc44223757146b5e9f0e358",
".git/objects/7d/bc765d3986b0b7845ad4d816bde17a51eabfa2": "df0eb0bda1fe42e9f52fad1ace95cd10",
".git/objects/83/2c78f28ff311971c85420372b16324fb3af431": "b8ed06e912ce8de7fbd50e3fe2b21553",
".git/objects/86/ff3fe0dbd6ba8fe3d059e43416dd1d96128253": "00361ce231fd37b4f44f58d9e0720704",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/90/3ac018babc6b4a9d632d10cde78d60e7950633": "1437a471767ec9eb9ca5d63ea4a4b4d9",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a2/1a09d3810492b0d22299f16ef24c33baecf87e": "dc6b2ba188e0142b6b1b9f38fc5c6125",
".git/objects/b4/e3b71326d881df44e422f15204d81676bd1392": "8e8c6c97ab3d909461330189ce766abd",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/d2/16e607b9ba53ebc35b3f624add7f856116546d": "e18c9305b25293c16f5cf273af7c4e8c",
".git/objects/d4/2d67fd0ff8262f9b08fabd99ac4ffec38990e4": "c21aebde97c674bf662cbf6b698f5bf7",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/f0/375d1d9b3ecf183ea37f33f6705524e25013f8": "f1e8c71943146034463a57bd9771e17a",
".git/objects/f2/7c75b7abbab5f8dac2236617b25a7b9b756c48": "1cbb9c7d99494fc3a65ada77d631506f",
".git/objects/fb/253abe6f903810e01da0a1c9bf2534a5265b30": "bd3ff7a0c07489046d52a9f3b932d321",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/refs/heads/main": "ee5a8aaa45cdc1dd044600401b5b9412",
".git/refs/remotes/origin/main": "ee5a8aaa45cdc1dd044600401b5b9412",
"assets/AssetManifest.bin": "d918ef48da9af01ccc5b55b321ddc824",
"assets/AssetManifest.bin.json": "47af0c470ecce279a62568b93d59d8c4",
"assets/AssetManifest.json": "c83aada72e8b085159d62af9fecf99ad",
"assets/assets/icons/at.svg": "9ec67296011b42fc0266dcfdd38a5623",
"assets/assets/icons/copy.svg": "6e2fe5c693690392192e56b46e0d8917",
"assets/assets/icons/user.svg": "729e7c06e79ab4d4de426305ce5accba",
"assets/assets/images/at.png": "4ed9d1b70f0f398cc8bb2df2370bd4df",
"assets/assets/images/back.png": "437d361e3731b9dd7fb39d91d56bcca5",
"assets/assets/images/conf.png": "e085a0e91e06008ea633e531ebe24b6f",
"assets/assets/images/copy.png": "f4827f9ae369d8a04e968fa752563f01",
"assets/assets/images/doctor.png": "ea0061de470ff64c7e70d2b93e5bfd58",
"assets/assets/images/face.png": "5b327ec05ac9d0805509a755c691b9f1",
"assets/assets/images/hotel.png": "fc566e4c2f412ee5e3a80323617cfd39",
"assets/assets/images/laptop.png": "7a7788db2be1dce2589af486bdae9635",
"assets/assets/images/logo.png": "45e95b7e809dc7909797714483b2821d",
"assets/assets/images/mail_box.png": "0446eb06db2345ffd3288edd3f676c1b",
"assets/assets/images/palette.png": "f8fc4e95f57481a8151711342141571a",
"assets/assets/images/user.png": "1d0e634d46787fa5a693f9a321bc4628",
"assets/assets/images/workout.png": "05a4e05c6ac922dc1828a683ea89a574",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "96a77fb45fdcb4414af8ce458fbab712",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d034f96c6f1750de005851a96053a739",
"icons/android-icon-144x144.png": "09ac019a51ef90246246595f3334dab4",
"icons/android-icon-192x192.png": "6767b36a52a61d45cca989bb15bb8217",
"icons/android-icon-36x36.png": "d22e09c3b3993aeeb1f83b8433312ff6",
"icons/android-icon-48x48.png": "3719f9c62d90d9328827ae6a217a16f3",
"icons/android-icon-72x72.png": "7f0d1ec54a8572f7bfe72566c9885d4f",
"icons/android-icon-96x96.png": "f157c5c7e93559b5aeae6326b80a49f8",
"icons/apple-icon-114x114.png": "f80a3cfd21d9fc3699c9bebecfc42f5f",
"icons/apple-icon-120x120.png": "02bfaaaebfd8629f5401916e41d11e51",
"icons/apple-icon-144x144.png": "09ac019a51ef90246246595f3334dab4",
"icons/apple-icon-152x152.png": "c3e6db7ef263c703fc734b1aa0b6e00c",
"icons/apple-icon-180x180.png": "839195c2a19c409fee04ba42f33efba9",
"icons/apple-icon-57x57.png": "64e7fd3a13b8dbb32c364dc8bfd17b42",
"icons/apple-icon-60x60.png": "f80f16e4e265b00bcfdd2415345aba95",
"icons/apple-icon-72x72.png": "7f0d1ec54a8572f7bfe72566c9885d4f",
"icons/apple-icon-76x76.png": "5bdc9f710b249f346f6995e983cb28d0",
"icons/apple-icon-precomposed.png": "b15d8d54cdce3458d4feb29f5bb9aca8",
"icons/apple-icon.png": "b15d8d54cdce3458d4feb29f5bb9aca8",
"icons/at.svg": "9ec67296011b42fc0266dcfdd38a5623",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/copy.svg": "6e2fe5c693690392192e56b46e0d8917",
"icons/favicon-16x16.png": "0fbdb5b549766700ad1dbb592991a328",
"icons/favicon-32x32.png": "fcf7ba0e7b6d53932cfaefd9bb12b1d0",
"icons/favicon-96x96.png": "f157c5c7e93559b5aeae6326b80a49f8",
"icons/favicon.ico": "886240308c4ddff00d1dd4952d00e06d",
"icons/manifest.json": "6a9844731ca26d97767866acda6c7afc",
"icons/ms-icon-144x144.png": "09ac019a51ef90246246595f3334dab4",
"icons/ms-icon-150x150.png": "1876993aeb6d02934369f8723b38d479",
"icons/ms-icon-310x310.png": "f78a3943235d5f4188a6736eecef03cb",
"icons/ms-icon-70x70.png": "f0549db3f4034274b407560e3c3004d7",
"icons/user.svg": "729e7c06e79ab4d4de426305ce5accba",
"images/at.png": "4ed9d1b70f0f398cc8bb2df2370bd4df",
"images/back.png": "437d361e3731b9dd7fb39d91d56bcca5",
"images/conf.png": "e085a0e91e06008ea633e531ebe24b6f",
"images/copy.png": "f4827f9ae369d8a04e968fa752563f01",
"images/doctor.png": "ea0061de470ff64c7e70d2b93e5bfd58",
"images/face.png": "5b327ec05ac9d0805509a755c691b9f1",
"images/hotel.png": "fc566e4c2f412ee5e3a80323617cfd39",
"images/laptop.png": "7a7788db2be1dce2589af486bdae9635",
"images/logo.png": "45e95b7e809dc7909797714483b2821d",
"images/mail_box.png": "0446eb06db2345ffd3288edd3f676c1b",
"images/palette.png": "f8fc4e95f57481a8151711342141571a",
"images/user.png": "1d0e634d46787fa5a693f9a321bc4628",
"images/workout.png": "05a4e05c6ac922dc1828a683ea89a574",
"index.html": "6d0b0f7495be80bfa1673147c798ae09",
"/": "6d0b0f7495be80bfa1673147c798ae09",
"main.dart.js": "671419fb123e913c355c4dd045695ee6",
"manifest.json": "b5bf0d666c4977d4a9c4a88bb20927c6",
"version.json": "ab5e063a0b43250efad03bc640c7ef51"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
