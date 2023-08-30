import { PokemonState, Pokemon } from '@types'
import axios from '@axios'
import { AxiosResponse } from 'axios'

interface Params {
  limit: number
  offset: number
}

const defaultParams: Params = {
  limit: 24,
  offset: 0,
}

export const fetchPokemon = async (params?: Params): Promise<AxiosResponse<PokemonState>> => {
  params = {
    ...defaultParams,
    ...params,
  }
  const response = axios.get<PokemonState>('pokemon', { params })
  return response
}

export const fetchPokemonDatail = async (namePokemon: string): Promise<Pokemon> => {
  const { data } = await axios.get<Pokemon>(`pokemon/${namePokemon}`)
  return data
}
