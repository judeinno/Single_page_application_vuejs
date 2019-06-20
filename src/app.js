import Vue from 'vue'

Vue.component('app', {
  // templete with div having ID app for intial binding
  template: `
    <div id="app">
      <nav class="nav has-shadow">
        <div class="container">
          <a href="/">
            <img src="http://bit.ly/vue-img"
              alt="Vue Intro" />
          </a>
        </div>
      </nav>

      <section class="main-section section"></section>
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            Follow us on
            <a href="https://twitter.com/judeinno" target="_blank">Twitter</a>
          </div>
        </div>
      </footer>
    </div>`
})

const app = new Vue({
  // Vue JS property that returns an element
  // Same as templete: '<app></app>'
  render: h => h('app')
})

export { app }
