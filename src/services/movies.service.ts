import type { Movie } from '@/schemas/movie.schema'

export const createMovie = async (movie: Omit<Movie, '_id'>): Promise<Movie> => {
  const response = await fetch(`https://crudcrud.com/api/e04d837b63f6414d94d728893dc2deeb/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  })
  return response.json()
}

export const getMovies = async (): Promise<Movie[]> => {
  const response = await fetch(`https://crudcrud.com/api/e04d837b63f6414d94d728893dc2deeb/movies`)
  return response.json()
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const deleteMovie = async (id: string): Promise<void> => {
  await sleep(3000)
  await fetch(`https://crudcrud.com/api/e04d837b63f6414d94d728893dc2deeb/movies/${id}`, {
    method: 'DELETE'
  })
}

export const updateMovie = async (id: string, movie: Omit<Movie, '_id'>): Promise<void> => {
  await fetch(`https://crudcrud.com/api/e04d837b63f6414d94d728893dc2deeb/movies/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  })
}

export const getMovie = async (id: string): Promise<Movie> => {
  const response = await fetch(
    `https://crudcrud.com/api/e04d837b63f6414d94d728893dc2deeb/movies/${id}`
  )
  return response.json()
}
