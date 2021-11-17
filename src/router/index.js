import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/cart.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/',
    name: 'Product',
    component: Product
  }
]

const router = new VueRouter({
  routes
})

export default router
