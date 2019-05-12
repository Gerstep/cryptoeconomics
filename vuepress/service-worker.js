/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cf7c7a39624cc0c890570778cbf8ebea"
  },
  {
    "url": "assets/css/0.styles.3e1d0bd1.css",
    "revision": "9ea15421c257b7c2e72a5668b435969f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.9809e03a.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.5169c684.js",
    "revision": "2d562f1e86824547542b634185ed06e6"
  },
  {
    "url": "assets/js/4.d7976a7d.js",
    "revision": "b6be717ada01e64dd8f09189af4b0e1e"
  },
  {
    "url": "assets/js/5.d5c6c7e7.js",
    "revision": "1a39b30d1c4131d3f1f680e28e5b3923"
  },
  {
    "url": "assets/js/6.d04ea0af.js",
    "revision": "916d00004f945dc40e6e2bac0ec2b670"
  },
  {
    "url": "assets/js/app.60b614db.js",
    "revision": "b0c075b6e4bcd5e1f1a5b4830ce05ea5"
  },
  {
    "url": "guide/index.html",
    "revision": "9e76e77761a2b4cffff57b54a19716b5"
  },
  {
    "url": "index.html",
    "revision": "eb0d9765de1622da3609b7d0d6768b69"
  },
  {
    "url": "projects/index.html",
    "revision": "a24011f3f8d805fb438ad669101e3cfe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
