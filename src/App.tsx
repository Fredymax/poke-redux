import { useEffect } from 'react'
import { Layout } from 'antd'
// import { InputSearch } from './Components/InputSearch'
import { Header } from './Components/Header'
import { PokemonCard } from './Components/PokemonCard'
import { PokemonList } from './Components/PokemonList'
import { Main } from './Components/Main'
import { fetchPokemon } from '@hooks/usePokemon'
import type { Pokemon, PokemonState } from '@types'
import { setPokemons as setPokemonsActions } from '@/Actions'

import { connect } from 'react-redux'

const { Content } = Layout

interface AppProps {
  setPokemons: (ev: PokemonState['results']) => void
  pokemons: PokemonState['results']
}

function App({ setPokemons, pokemons }: AppProps) {
  useEffect(() => {
    fetchPokemon().then(({ data }) => {
      setPokemons(data.results)
    })
  }, [])

  return (
    <Content className="main bg-gradient-primary">
      <Header title="Poke Redux">{/* <InputSearch setValue={setSearch} value={search} /> */}</Header>
      <Main>
        <PokemonList title="Pokemon list">
          {!!pokemons.length &&
            pokemons.map((pokemon: Pokemon, index: number) => <PokemonCard key={index} pokemon={pokemon} />)}
        </PokemonList>
      </Main>
    </Content>
  )
}

const mapStateToProps = (state: PokemonState) => ({
  pokemons: state.results,
})

const mapDispatchToProps = (dispatch: any) => ({
  setPokemons: (value: PokemonState['results']) => dispatch(setPokemonsActions(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
