import type { Movie } from '@/schemas/movie.schema'
import { defineStore } from 'pinia'

type MoviesStore = {
  movies: Movie[]
}

const useMovies = defineStore('movies', {
  state: (): MoviesStore => ({
    movies: []
  }),
  actions: {
    setAllMovies(movies: Movie[]) {
      this.movies = movies
    },
    addMovie(movie: Movie) {
      this.movies.push(movie)
    }
  }
})

export default useMovies
