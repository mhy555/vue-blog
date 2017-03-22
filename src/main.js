import Vue from 'vue'
import App from './App.vue'
import './common.less'
import VueRouter from 'vue-router'
import ListView from './component/list-view.vue'
import Article from './component/article.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/', component: ListView },
    { path: '/article/:hash', component: Article }
  ]
})
// create the app instance and mount to #app
new Vue(
  Vue.util.extend({ router }, App)
).$mount('#app')

Vue.filter('removeSuffix', (value) => {
  return value.replace(/\.\w+$/, '')
})
