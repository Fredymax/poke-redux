import { ActionTypes } from '@/Actions/types'
import { ReducerAction, PokemonState } from '@types'

const initialState: PokemonState = {
  count: 0,
  results: [],
  search: '',
}

export const pokemonsReducer = (state: PokemonState = initialState, action: ReducerAction) => {
  switch (action.type) {
    case ActionTypes.SET_POKEMONS:
      return { ...state, results: action.payload }
    default:
      return state
  }
}
