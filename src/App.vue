<template>
  <div class="app-root">
    <header class="header">
      <router-link to="/">{{ title }}</router-link>
      <div style="clear: both"></div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  import conf from './config'

  export default {
    data () {
      return {
        title: conf.blogTitle
      }
    },
    components: {

    },
    mounted() {

    }
  }
</script>

<style lang="less">
@import '~prismjs/themes/prism.css';
.app-root {
  .header {
    font-size: 40px;
    font-family: fantasy;
    padding: 40px 10% 20px;
  }
}
</style>
