import PlanetsView from '@/views/PlanetsView.vue'
import DemoView from '@/views/DemoView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: PlanetsView
  },
  {
    path: '/demo',
    component: DemoView
  },
  {
    path: '/create_movie',
    component: () => import('@/views/CreateMovieView.vue')
  },
  {
    path: '/list_movies',
    component: () => import('@/views/MoviesListView.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
