import { ActionTypes } from './types'
import { Pokemon } from '@types'
import { fetchPokemonDatail } from '@/Hooks/usePokemon'

export const setPokemons = (payload: Pokemon[]) => ({
  type: ActionTypes.SET_POKEMONS,
  payload,
})

export const setLoading = (payload: boolean) => ({
  type: ActionTypes.SET_LOADING,
  payload,
})

export const setFavorite = (payload: Pokemon['id']) => ({
  type: ActionTypes.SET_FAVORITE,
  payload,
})

export const fetchPokemonDatails =
  (pokemons: Pokemon[] = []) =>
  async (dispatch: any) => {
    const pokemonsDetails = await Promise.all(pokemons.map((pokemon) => fetchPokemonDatail(pokemon.name)))
    dispatch(setPokemons(pokemonsDetails))
  }
