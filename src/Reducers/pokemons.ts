import { ActionTypes } from '@/Actions/types'
import { ReducerAction, PokemonState } from '@types'

const initialState: PokemonState = {
  search: '',
  loading: true,

  count: 0,
  results: [],
}

export const pokemonsReducer = (state: PokemonState = initialState, action: ReducerAction): PokemonState => {
  switch (action.type) {
    case ActionTypes.SET_POKEMONS:
      return { ...state, results: action.payload }
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload }
    case ActionTypes.SET_FAVORITE:
      const newResultsValue = [...state.results]
      const index = newResultsValue.findIndex((c) => c.id === action.payload)
      if (index === -1) return state
      newResultsValue[index].favorite = !newResultsValue[index].favorite
      return { ...state, results: newResultsValue }
    default:
      return state
  }
}
