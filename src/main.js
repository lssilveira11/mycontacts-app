import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import mitt from 'mitt'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

export const bus = mitt();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
