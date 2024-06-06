import type { Movie } from '@/schemas/movie.schema'
import { getMovies } from '@/services/movies.service'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

type MoviesStore = {
  movies: Movie[]
}

const useMovies = defineStore('movies', () => {
  const movies = ref<Movie[]>([])

  onMounted(() => {
    getMovies().then((data) => {
      movies.value = data
    })
  })
  const addMovie = (movie: Movie) => {
    movies.value.push(movie)
  }
  const deleteMovieById = (id: string) => {
    movies.value = movies.value.filter((movie) => movie._id !== id)
  }
  return { movies, addMovie, deleteMovieById }
})

export default useMovies
