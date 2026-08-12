import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductFormView from '../views/ProductFormView.vue'
import OrdersView from '../views/OrdersView.vue'
import OrderDetailView from '../views/OrderDetailView.vue'
import CustomersView from '../views/CustomersView.vue'
import CustomerProfileView from '../views/CustomerProfileView.vue'
import CouponsView from '../views/CouponsView.vue'
import CouponFormView from '../views/CouponFormView.vue'
import FlashSalesView from '../views/FlashSalesView.vue'
import FlashSaleFormView from '../views/FlashSaleFormView.vue'
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
      path: '/orders/:id',
      name: 'order-detail',
      component: OrderDetailView,
    },
    {
      path: '/customers',
      name: 'customers',
      component: CustomersView,
    },
    {
      path: '/customers/:id',
      name: 'customer-profile',
      component: CustomerProfileView,
    },
    {
      path: '/coupons',
      name: 'coupons',
      component: CouponsView,
    },
    {
      path: '/coupons/new',
      name: 'coupon-new',
      component: CouponFormView,
    },
    {
      path: '/flash-sales',
      name: 'flash-sales',
      component: FlashSalesView,
    },
    {
      path: '/flash-sales/new',
      name: 'flash-sale-new',
      component: FlashSaleFormView,
    },
    {
      path: '/ui-demo',
      name: 'uidemo',
      component: UIDemoView,
    },
  ],
})

export default router
