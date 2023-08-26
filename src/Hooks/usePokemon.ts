import { useState } from 'react'
import { PokemonResponse } from '@types'
import axios from '@axios'

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState<PokemonResponse>()

  const fetchPokemon = async () => {
    try {
      const { data } = await axios.get<PokemonResponse>('pokemon', {
        params: {
          limit: 10,
          offset: 0,
        },
      })
      setPokemons(data)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    fetchPokemon,
    pokemons,
  }
}
