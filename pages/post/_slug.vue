<template>
  <h2 v-if="loading > 0">
    Loading...
  </h2>
  <div v-else>
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
    </article>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  import PostContent from '@/components/PostContent'

  const post = gql`
    query post($slug: String!) {
      post: Post(slug: $slug) {
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

  export default {
    name: 'PostPage',
    components: { PostContent },
    data: () => ({
      loading: 0
    }),
    apollo: {
      $loadingKey: 'loading',
      post: {
        query: post,
        variables () {
          return {
            slug: this.$route.params.slug
          }
        }
      }
    },
    computed: {
      authorAvatar() {
        let baseAssetUrl = 'https://media.graphcms.com/'
        let handle = this.post.authors[0].avatar.handle
        let transformation = 'resize=w:150/'
        console.log(handle);
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
