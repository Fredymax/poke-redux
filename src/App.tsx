import { useEffect } from 'react'
import { Layout } from 'antd'
// import { InputSearch } from './Components/InputSearch'
import { Header } from './Components/Header'
import { PokemonCard } from './Components/PokemonCard'
import { PokemonList } from './Components/PokemonList'
import { Main } from './Components/Main'
import { fetchPokemon } from '@hooks/usePokemon'
import type { Pokemon, PokemonState } from '@types'
import { setPokemons } from '@/Actions'

import { useSelector, useDispatch } from 'react-redux'

function App() {
  const pokemons = useSelector((state: PokemonState) => state.results)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchPokemon().then(({ data }) => {
      dispatch(setPokemons(data.results))
    })
  }, [])

  return (
    <Layout.Content className="main bg-gradient-primary">
      <Header title="Poke Redux">
        {/* <InputSearch setValue={setSearch} value={search} /> */}
      </Header>
      <Main>
        <PokemonList title="Pokemon list">
          {!!pokemons.length &&
            pokemons.map((pokemon: Pokemon, index: number) => <PokemonCard key={index} pokemon={pokemon} />)}
        </PokemonList>
      </Main>
    </Layout.Content>
  )
}

export default App
