import Vue from 'vue'
import VueRouter from 'vue-router'
// import Category from './theme/Category.vue'
// import Login from './theme/Login.vue'
// import NotFound from './theme/NotFound.vue'

// For lazy loading we use to load components on the fly only when needed
const Category = () => System.import('./theme/Category.vue')
const Login = () => System.import('./theme/Login.vue')
const NotFound = () => System.import('./theme/NotFound.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/category/:id', name: 'category', component: Category },
  { path: '/', redirect: '/category/front-end' },
  { path: '*', component: NotFound }
]
const router = new VueRouter({
  mode: 'history',
  // For the bulma US library we need to set the active class to the is-active one
  linkActiveClass: 'is-active',
  // This helps in the position on the page where the UI was lasted viewed from.
  scrollBehavior: (to, from, savedPosition) => ({y: 0}),
  routes
})

export default router
