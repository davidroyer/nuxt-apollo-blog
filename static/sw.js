importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-apollo-blog",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.429a04b992bd90e4b66a.js",
    "revision": "8f3cfc86a2acf947a462f5cc2b4b5a4d"
  },
  {
    "url": "/_nuxt/layouts/default.66a225675b9f6a42910a.js",
    "revision": "0b2aec2ae9282958a2be50cb20121fc9"
  },
  {
    "url": "/_nuxt/manifest.b97456a3dadef80ee09b.js",
    "revision": "2e296a219e3efa82513adb293dd7e135"
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
    "url": "/_nuxt/pages/index.6647759b0375c8e34493.js",
    "revision": "4b98a94fbb09ce97f19e8e0cb25fec4b"
  },
  {
    "url": "/_nuxt/pages/post/_slug.8fdad9eeebf4dc99fedf.js",
    "revision": "246ef3516a0e195cef9c7b542549ef7a"
  },
  {
    "url": "/_nuxt/vendor.02a6400a3a505e93b818.js",
    "revision": "e04da9dc413479d6de7d4969270a8652"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

