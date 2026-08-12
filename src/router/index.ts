import { createRouter, createWebHistory } from 'vue-router'

// Routes are lazy loaded using dynamic imports

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/products/new',
      name: 'product-new',
      component: () => import('../views/ProductFormView.vue'),
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/OrdersView.vue'),
    },
    {
      path: '/orders/:id',
      name: 'order-detail',
      component: () => import('../views/OrderDetailView.vue'),
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('../views/CustomersView.vue'),
    },
    {
      path: '/customers/:id',
      name: 'customer-profile',
      component: () => import('../views/CustomerProfileView.vue'),
    },
    {
      path: '/coupons',
      name: 'coupons',
      component: () => import('../views/CouponsView.vue'),
    },
    {
      path: '/coupons/new',
      name: 'coupon-new',
      component: () => import('../views/CouponFormView.vue'),
    },
    {
      path: '/flash-sales',
      name: 'flash-sales',
      component: () => import('../views/FlashSalesView.vue'),
    },
    {
      path: '/flash-sales/new',
      name: 'flash-sale-new',
      component: () => import('../views/FlashSaleFormView.vue'),
    },
    {
      path: '/ui-demo',
      name: 'uidemo',
      component: () => import('../views/UIDemoView.vue'),
    },
  ],
})

export default router
