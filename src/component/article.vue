<template lang="html">
  <div class="article">
    <article v-if="content" v-html="htmlFromMarkdown"></article>
  </div>
</template>

<script>
import api from '../api'
import marked from '../utils/vendor.js'

export default {
  created() {
    this.getArticle()
  },
  computed: {
    htmlFromMarkdown () {
      return marked(this.content)
    }
  },
  data() {
    return {
      content: null
    }
  },
  methods: {
    getArticle() {
      api.getDetail(this.$route.params.hash).then((res) => {
        this.content = res;
      })
    }
  }
}
</script>

<style lang="less">
.article {
  pre {
    background: #f7f7f7 !important;
    padding: 16px;
    overflow-x: auto;
  }

  code {
    background: #f7f7f7;
    font-family: monospaceFontFamily !important;
  }
}
</style>
