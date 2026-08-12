import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductFormView from '../views/ProductFormView.vue'
import OrdersView from '../views/OrdersView.vue'
import UIDemoView from '../views/UIDemoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },
    {
      path: '/products/new',
      name: 'product-new',
      component: ProductFormView,
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView,
    },
    {
      path: '/ui-demo',
      name: 'uidemo',
      component: UIDemoView,
    }
  ],
})

export default router
