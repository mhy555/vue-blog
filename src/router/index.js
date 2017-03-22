import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '../component/list-view.vue'
import Article from '../component/article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: ListView
  },
  {
    path: '/article/:hash',
    name: 'article',
    component: Article
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
