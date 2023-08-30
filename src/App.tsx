import type { PokemonState } from '@types'

import { useEffect, useRef } from 'react'
import { Layout } from 'antd'
// import { InputSearch } from './Components/InputSearch'
import { Header } from './Components/Header'
import { PokemonCard } from './Components/PokemonCard'
import { PokemonList } from './Components/PokemonList'
import { Main } from './Components/Main'
import { fetchPokemon, fetchPokemonData } from '@hooks/usePokemon'
import { setPokemons } from '@/Actions'

import { useSelector, useDispatch } from 'react-redux'
import PerfectScrollbar from 'react-perfect-scrollbar'

import 'react-perfect-scrollbar/dist/css/styles.css'

function App() {
  const pokemons = useSelector((state: PokemonState) => state.results)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchPokemon()
      .then(({ data }) => Promise.all(data.results.map((result) => fetchPokemonData(result.name))))
      .then((pokemons) => {
        dispatch(setPokemons(pokemons))
      })
  }, [])

  return (
    <PerfectScrollbar className="scrollable">
      <Layout.Content className="main bg-gradient-primary">
        <Header title="Poke Redux">{/* <InputSearch setValue={setSearch} value={search} /> */}</Header>
        <Main>
          <PokemonList title="Pokemon list">
            {!!pokemons.length &&
              pokemons.map((pokemon, index: number) => <PokemonCard key={index} pokemon={pokemon} />)}
          </PokemonList>
        </Main>
      </Layout.Content>
    </PerfectScrollbar>
  )
}

export default App
