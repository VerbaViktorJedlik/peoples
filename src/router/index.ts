import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', redirect: '/emberek'},
    {path: '/emberek/:id', component: () => import('@/views/ContactView.vue')},
    // { path: '/keszitette', component: () => import('@/views/ContactView.vue') },
    { path: '/emberek', component: () => import('@/views/PeopleList.vue') },
  ],
  scrollBehavior (to, from, savedPosition): ScrollPosition | { left: number, top: number } | undefined {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
