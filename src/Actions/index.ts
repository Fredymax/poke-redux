import { ActionTypes } from './types'
import { PokemonState } from '@types'

export const setPokemons = (payload: PokemonState['results']) => ({
  type: ActionTypes.SET_POKEMONS,
  payload,
})
