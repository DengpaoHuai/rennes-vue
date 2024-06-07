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
  const setAllMovies = async () => {
    movies.value = await getMovies()
  }

  const addMovie = (movie: Movie) => {
    movies.value.push(movie)
  }
  const deleteMovieById = (id: string) => {
    movies.value = movies.value.filter((movie) => movie._id !== id)
  }

  const getMovieById = (id: string) => {
    return movies.value.find((movie) => movie._id === id)
  }

  const updateMovieById = (movie: Movie) => {
    const index = movies.value.findIndex((movie) => movie._id === movie._id)
    movies.value[index] = movie
  }

  return { setAllMovies, movies, addMovie, deleteMovieById, getMovieById, updateMovieById }
})

export default useMovies
