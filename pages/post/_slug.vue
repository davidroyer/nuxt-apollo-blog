<template>
  <div v-if="!loading > 0">
    <article>
      <div class="article-header">
        <h1>{{post.title}}</h1>
        <small class="tag" v-if="post.tags" v-for="(tag, index) in post.tags" :key="index">{{tag}}</small>
        <div class="author">
          <span v-html="post.authors[0].name"></span>
          <img :src="authorAvatar" alt="Author Headshot">
        </div>
      </div>

      <PostContent :markdown="post.content"/>
      <!-- <div v-html="post.contentHtml"></div> -->
    </article>
  </div>
</template>

<script>
  import allPosts from '~/apollo/queries/allPosts'
  import post from '~/apollo/queries/post'
  import PostContent from '@/components/PostContent'

  export default {
    name: 'PostPage',
    head () {
      return {
        title: this.post.title,
        link: [
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css' }
        ],
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },
    components: { PostContent },
    async asyncData({params, payload, error, app}) {

      if (payload) return { post: payload }
      else {
        let {data} = await app.apolloProvider.defaultClient.query(
          { query: post, prefetch: true, variables: {slug: params.slug} }
        )
        return { post: data.post }
      }
    },
    data: () => ({
      loading: 0
    }),
    apollo: {
      $loadingKey: 'loading',
    },
    computed: {
      authorAvatar() {
        let baseAssetUrl = 'https://media.graphcms.com/'
        let handle = this.post.authors[0].avatar.handle
        let transformation = 'resize=w:150/'
        // console.log(handle);
        return baseAssetUrl + transformation + handle
        // return `${baseAssetUrl/handle}`
      }
    }
  }
</script>

<style scoped>
  .placeholder {
    height: 366px;
    background-color: #eee;
  }

  .article-header {
    text-align: center;
  }
</style>
