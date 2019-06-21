import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Category
}]
const router = new VueRouter({
  routes
})

export default router
