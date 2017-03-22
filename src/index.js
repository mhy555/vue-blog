import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './common.less'

// create the app instance and mount to #app
const app = new Vue(
  Vue.util.extend({ router }, App)
).$mount('#app')

Vue.filter('removeSuffix', (value) => {
  return value.replace(/\.\w+$/, '')
})

export { app, router }
