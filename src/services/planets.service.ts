import type { PlanetResponse } from '@/types/planets.types'

type GetPlanets = (url: string) => Promise<PlanetResponse>
export const getPlanets: GetPlanets = async (url: string) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}
