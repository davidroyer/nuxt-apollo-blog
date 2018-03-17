<template>
  <div v-html="content"></div>
</template>
<script>
import Marked from 'marked'
import Highlight from 'highlight.js/lib/highlight.js'

import highlightCSS from 'highlight.js/lib/languages/css.js';
import highlightJS from 'highlight.js/lib/languages/javascript.js';
// import 'highlight.js/lib/styles/atom-one-dark.css'
Highlight.registerLanguage('css', highlightCSS);
Highlight.registerLanguage('javascript', highlightJS);

export default {
  name: 'post-content',
  computed: {
    content () {
      Marked.setOptions({
        gfm: true
      })
      return Marked(this.markdown || '')
    }
  },
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
