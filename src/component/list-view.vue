<template lang="html">
  <div class="list-view">
    <div class="item-container" v-for="item in items">
      <router-link :to="'/article/' + item.sha" :key="item.sha" class="item-title">
        {{ item.title }}
      </router-link>
      <div class="date">
        {{ item.date }}
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
  .item-container {
    padding: 30px 0 30px 35%;
    font-family: monospace;
    color: #282828;
    .item-title {
      font-size: 18px;
      padding: 10px 0;
    }
    .date {
      padding: 10px 0 10px 20px;
      font-size: 14px;
    }
  }
}
</style>
