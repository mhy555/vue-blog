<template>
  <div id='app'>
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

</style>
