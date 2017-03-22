<template lang="html">
  <div class="list-view">
    <div class="item-container" v-for="item in items">
      <div class="item-title">
        <router-link :to="'/article/' + item.sha" :key="item.sha" class="item-title">
          {{item.name | removeSuffix}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api'
export default {
  components: {

  },
  created() {
    this.getList()
  },
  data() {
    return {
      items: null
    }
  },
  methods: {
    getList() {
      api.getList().then((list) => {
        console.log('list', list);
        this.items = list;
      })
    }
  }
}
</script>

<style lang="less">
.list-view {

}
</style>
