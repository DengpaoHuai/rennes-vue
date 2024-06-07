// createMovie.spec.ts
import { createMovie } from '@/services/movies.service'
import { describe, it, expect, vi } from 'vitest'

describe('createMovie', () => {
  it('should create a movie and return the created movie object', async () => {
    const mockMovie = { title: 'Inception', director: 'Christopher Nolan', description: '2010' }
    const mockResponse = { ...mockMovie, _id: '12345' }

    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockResponse)
    })

    const result = await createMovie(mockMovie)

    expect(result).toEqual(mockResponse)
    expect(global.fetch).toHaveBeenCalledWith(
      'https://crudcrud.com/api/e04d837b63f6414d94d728893dc2deeb/movies',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mockMovie)
      }
    )
  })
})
