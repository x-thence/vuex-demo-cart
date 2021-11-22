import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/',
    name: 'Product',
    component: Product,
    meta: {
      title: '商品列表'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
