const { createApolloFetch } = require('apollo-fetch');
const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/myBlog'
const gql = require('graphql-tag')
const fetch = createApolloFetch({
  uri: GRAPHCMS_API,
});

const query = `
  query AllPosts {
    allPosts(
      filter: {isPublished: true}
    ) {
      id,
      title,
      slug,
      content,
      tags,
      authors {
        id,
        name,
        avatar {
          id,
          handle,
          url
        }
      }
    }
  }
`

module.exports = {
  head: {
    title: 'nuxt-apollo-blog',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'GraphCMS Blog starter using Apollo Client and Nuxt.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ],
    script: [
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js' }
    ]
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  css: [
    '@/assets/styles/main.css',
    // {src: '@/node_modules/highlight.js/lib/styles/atom-one-dark.css'},
  ],

  modules: [
    '@nuxtjs/apollo',
    ['@nuxtjs/pwa', { icon: false }],
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    html: true,
    linkify: true,
    typographer: true,
    injected: true
  },
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
      // default: '~/apollo/client-configs/default2.js'
    }
  },
  generate: {
    fallback: true,
    routes: async function() {
      const {data} = await fetch({query})
      return data.allPosts.map((post) => {
        return {
          route: '/post/' + post.slug,
          payload: post
        }
      })
    }
  }
}
