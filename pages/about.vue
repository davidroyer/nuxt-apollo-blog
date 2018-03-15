<template>
  <h2 v-if="loading > 0">
    Loading...
  </h2>
  <div v-else>
    <h2>About Page...</h2>
  </div>
</template>

<script>

  export default {
    name: 'AboutPage',
    data: () => ({
      loading: 0
    }),
    // apollo: {
    //   $loadingKey: 'loading',
    //   allAuthors: {
    //     query: allAuthors
    //   }
    // }
  }
</script>

<style scoped>
  .author {
    margin-bottom: 72px;
  }
  .info-header {
    text-align: center;
  }
  img {
    height: 120px;
    width: auto;
  }
</style>
