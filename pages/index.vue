<template>
  <section v-if="!loading > 0">
    <h1>New Update</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.slug}`" class='link'>
          <h3>{{post.title}}</h3>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
  import allPosts from '~/apollo/queries/allPosts'

  export default {
    name: 'HomePage',
    async asyncData({params, payload, error, app}) {

      if (payload) return { allPosts: payload }
      else {
        let {data} = await app.apolloProvider.defaultClient.query(
          { query: allPosts, prefetch: true }
        )
        return { posts: data.allPosts }
      }
    },
    data: () => ({
      loading: 0
    }),
    apollo: {
      $loadingKey: 'loading'
    }
  }
</script>

<style scoped>
  ul {
    padding: 0;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    border: 1px solid #eee;
    overflow: hidden;
    border-radius: 5px;
  }
  .link {
    display: flex;
    color: #000;
  }
  .link:hover {
    box-shadow: 1px 1px 5px #999;
  }
  .placeholder {
    background-color: #eee;
    min-width: 100px;
    margin-right: 24px;
  }
  img {
    display: block;
    height: 100%;
  }
  .show-more-wrapper {
    display: flex;
    justify-content: center;
  }
  button {
    width: 100%;
    font-size: 16px;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    padding: 16px 24px;
    background: deepskyblue;
    border: none;
    border-radius: 0;
    cursor: pointer;
  }
</style>
