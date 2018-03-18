importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-apollo-blog",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.474784c189774abe6de5.js",
    "revision": "42286fbaa359ec23988315ed82a78c5a"
  },
  {
    "url": "/_nuxt/layouts/default.66a225675b9f6a42910a.js",
    "revision": "0b2aec2ae9282958a2be50cb20121fc9"
  },
  {
    "url": "/_nuxt/manifest.9bd2b52c96cb65235c60.js",
    "revision": "bc977e0383c297625aa455c3c9720639"
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
    "url": "/_nuxt/pages/post/_slug.df1806a83cd82061f57b.js",
    "revision": "cdf5d35a8d059c76390e1c83e8c379b4"
  },
  {
    "url": "/_nuxt/vendor.02a6400a3a505e93b818.js",
    "revision": "e04da9dc413479d6de7d4969270a8652"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

