import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import store from './vuex/index.js'
import router from './router'

const app = new Vue({
  router,
  // No need to call the render since app layout already has a render function
  ...AppLayout,
  // Include the store
  store
})

export { app, router, store }
