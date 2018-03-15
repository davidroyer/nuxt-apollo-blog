<template>
  <div v-html="content"></div>
</template>
<script>
import Marked from 'marked'
import HighlightJs from 'highlight.js'
export default {
  name: 'post-content',
  computed: {
    content () {
      Marked.setOptions({
        gfm: true,
        highlight: function (code) {
          return HighlightJs.highlightAuto(code).value
        }
      })
      return Marked(this.markdown || '')
    }
  },
  props: {
    markdown: String
  }
}
</script>
