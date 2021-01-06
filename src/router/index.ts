import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/views/AppHome.vue';
import Gradebook from '@/views/Gradebook.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/gradebook',
    name: 'Gradebook',
    component: Gradebook,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
