import type { Movie } from '@/schemas/movie.schema'

export const createMovie = async (movie: Omit<Movie, '_id'>): Promise<Movie> => {
  const response = await fetch(`https://crudcrud.com/api/9c6cb3e8adf34de79a6280930b2d6a19/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  })
  return response.json()
}

export const getMovies = async (): Promise<Movie[]> => {
  await sleep(1000)
  const response = await fetch(`https://crudcrud.com/api/9c6cb3e8adf34de79a6280930b2d6a19/movies`)
  return response.json()
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
