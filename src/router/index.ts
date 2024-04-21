import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hackertext',
      name: 'hackertext',
      component: () => import('../views/HackerTextView.vue')
    },
    {
      path: '/psychedelic-cards',
      name: 'psychedelic-cards',
      component: () => import('../views/PsychedelicCardsView.vue')
    },
    {
      path: '/image-mask',
      name: 'image-mask',
      component: () => import('../views/ImageMaskView.vue')
    }
  ]
})

export default router
