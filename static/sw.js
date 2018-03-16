importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-apollo-blog",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.2db8e5417f54ea173223.js",
    "revision": "2dc68cf999dcb0e07b79e08a4de97e96"
  },
  {
    "url": "/_nuxt/layouts/default.66a225675b9f6a42910a.js",
    "revision": "0b2aec2ae9282958a2be50cb20121fc9"
  },
  {
    "url": "/_nuxt/manifest.081e2c742150bf0336c0.js",
    "revision": "c09788609db5a57e24bdbf1dbe7eb95c"
  },
  {
    "url": "/_nuxt/pages/about.02196a3c31f61056377c.js",
    "revision": "17ae85f9d01646ab02c7454f3a2ea307"
  },
  {
    "url": "/_nuxt/pages/backup-about.89f68ab146ef9a2b1a64.js",
    "revision": "ebfc6c4ae30e280f7f1155b93d22b538"
  },
  {
    "url": "/_nuxt/pages/index.0776515f7c1981008fba.js",
    "revision": "1a50b5c5b1ff2ba335192b8b463f2695"
  },
  {
    "url": "/_nuxt/pages/post/_slug.994ab2c87a3975680e04.js",
    "revision": "6bb464be46f6889aadb1f8920335c4d2"
  },
  {
    "url": "/_nuxt/vendor.9ee71e3126aca4d9c1c3.js",
    "revision": "2abccfccde9f7121492f97e8e5c48a02"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

