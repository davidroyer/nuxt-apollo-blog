<template>
  <!-- <div v-html="content"></div> -->
  <div v-html="$md.render(markdown)"></div>


</template>
<script>
import Highlight from 'highlight.js/lib/highlight.js'
import hljsBash from 'highlight.js/lib/languages/bash.js';
import highlightCSS from 'highlight.js/lib/languages/css.js';
import hljsJs from 'highlight.js/lib/languages/javascript.js';

Highlight.registerLanguage('css', highlightCSS);
Highlight.registerLanguage('base', hljsBash);
Highlight.registerLanguage('javascript', hljsJs);

export default {
  name: 'post-content',
  props: {
    markdown: String
  },
  mounted() {
    this.$el.querySelectorAll('pre > code').forEach((el) => {
      Highlight.highlightBlock(el);
    });
  }
}
</script>

<style></style>
