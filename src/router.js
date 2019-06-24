import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'
import Login from './theme/Login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Category },
  { path: '/login', component: Login }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
