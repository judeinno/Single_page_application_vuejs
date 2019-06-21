import Vue from 'vue'
import AppLayout from '../theme/Layout.vue'

Vue.component('app', {
  // templete with div having ID app for intial binding
  template: `
    `
})
console.log(AppLayout)

const app = new Vue({

  // No need to call the render since app layout already has a render function
  ...AppLayout
})

export { app }
