import { z } from 'zod'

const movieSchema = z.object({
  _id: z.string(),
  title: z.string().min(5),
  description: z.string().min(5),
  director: z.string().min(5)
})

export const createMovieSchema = movieSchema.omit({ _id: true })

export type Movie = z.infer<typeof movieSchema>

//type MyOmit<T> = {[P in keyof T as P extends "_id" | "date" ? never: P] :T[P]}
