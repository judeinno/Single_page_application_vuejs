import Vue from 'vue'
import AppLayout from '../theme/Layout.vue'

Vue.component('app', {
  // templete with div having ID app for intial binding
  template: `
    `
})

const app = new Vue({

  // render the templete
  render: h => h(AppLayout)
})

export { app }
