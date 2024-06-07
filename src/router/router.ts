import PlanetsView from '@/views/PlanetsView.vue'
import DemoView from '@/views/DemoView.vue'
import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized
} from 'vue-router'
import useMovies from '@/store/useMoviesStore'
import { client } from '@/main'
import { getMovie } from '@/services/movies.service'

const routes = [
  {
    path: '/',
    component: PlanetsView,
    meta: {
      layout: 'main'
    }
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
  },
  {
    path: '/update_movie/:id',
    name: 'EditMovie',
    component: () => import('@/views/UpdateMovieView.vue'),
    beforeEnter: async (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      console.log('coucou :)')
      await client.prefetchQuery({
        queryKey: ['movie', to.params.id],
        queryFn: () => getMovie(to.params.id as string)
      })
      next()
    }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
