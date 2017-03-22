import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '../component/list-view.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: ListView
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
