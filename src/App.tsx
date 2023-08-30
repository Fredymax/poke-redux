import type { PokemonState } from '@types'

import { useEffect } from 'react'
import { Layout } from 'antd'
// import { InputSearch } from './Components/InputSearch'
import { Header } from './Components/Header'
import { PokemonCard } from './Components/PokemonCard'
import { PokemonList } from './Components/PokemonList'
import { Main } from './Components/Main'
import { Loading as LoadingComponent } from './Components/Loading'
import { fetchPokemon } from '@hooks/usePokemon'
import { fetchPokemonDatails, setLoading } from '@/Actions'

import { useSelector, useDispatch } from 'react-redux'
import PerfectScrollbar from 'react-perfect-scrollbar'

import 'react-perfect-scrollbar/dist/css/styles.css'

function App() {
  const pokemons = useSelector((state: PokemonState) => state.results)
  const loading = useSelector((state: PokemonState) => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(true))
    fetchPokemon()
      .then(async ({ data }) => {
        // @ts-ignore
        await dispatch(fetchPokemonDatails(data.results))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }, [])

  return (
    <PerfectScrollbar className="scrollable">
      {loading && <LoadingComponent />}
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
