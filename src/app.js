import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'Hi there25'
  },
  // Helps vueJs know how to rerender the section that its mounted on
  template: '<div id="app">{{hello}}</div>'
})

export { app }
