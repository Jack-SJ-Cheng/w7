import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard/Admin.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/AdminProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/Dashboard/AdminOrders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/Dashboard/AdminCoupons.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
