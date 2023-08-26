import { useEffect, useState } from 'react'
import { Layout } from 'antd'
import { InputSearch } from './Components/InputSearch'
import { Header } from './Components/Header'
import { PokemonCard } from './Components/PokemonCard'
import { PokemonList } from './Components/PokemonList'
import { Main } from './Components/Main'
import { usePokemon } from '@hooks/usePokemon'

const { Content } = Layout

function App() {
  const [search, setSearch] = useState<string>('')
  const { pokemons, fetchPokemon } = usePokemon()
  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <Content className="main bg-gradient-primary">
      <Header title="Poke Redux">
        <InputSearch setValue={setSearch} value={search} />
      </Header>
      <Main>
        <PokemonList title="Pokemon list">
          {pokemons?.results.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))}
        </PokemonList>
      </Main>
    </Content>
  )
}

export default App
