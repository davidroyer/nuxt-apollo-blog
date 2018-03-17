importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-apollo-blog",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.e790ca6283c9ea162c63.js",
    "revision": "62b818890392f77f7d3826e68babc367"
  },
  {
    "url": "/_nuxt/layouts/default.66a225675b9f6a42910a.js",
    "revision": "0b2aec2ae9282958a2be50cb20121fc9"
  },
  {
    "url": "/_nuxt/manifest.8ac6867da7402549e343.js",
    "revision": "544db156a5d7eaf11cf6fbfb90f6e4fd"
  },
  {
    "url": "/_nuxt/pages/about.02196a3c31f61056377c.js",
    "revision": "17ae85f9d01646ab02c7454f3a2ea307"
  },
  {
    "url": "/_nuxt/pages/backup-about.b6e105368fba21b61ba5.js",
    "revision": "478307c1f8cbf9c77ed534672385decd"
  },
  {
    "url": "/_nuxt/pages/index.0776515f7c1981008fba.js",
    "revision": "1a50b5c5b1ff2ba335192b8b463f2695"
  },
  {
    "url": "/_nuxt/pages/post/_slug.0e34cf147738b3a9472f.js",
    "revision": "920bd1203bd3e567862f89e4d96cfbe0"
  },
  {
    "url": "/_nuxt/vendor.9ee71e3126aca4d9c1c3.js",
    "revision": "2abccfccde9f7121492f97e8e5c48a02"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

