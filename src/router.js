import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      // 垂直居中
      path: '/middle',
      component: () => import('./Middle.vue')
    },
    {
      // trasition
      path: '/transition',
      component: () => import('./Transition.vue')
    },
    {
      // animation
      path: '/animation',
      component: () => import('./Animation.vue')
    }
  ]
});
