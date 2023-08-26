import { useState } from 'react'
import { Layout } from 'antd'
import { InputSearch } from './Components/InputSearch'
import { Header } from './Components/Header'
import { PokemonCard } from './Components/PokemonCard'
import { PokemonList } from './Components/PokemonList'
import { Main } from './Components/Main'

const { Content } = Layout

function App() {
  const [search, setSearch] = useState<string>('')

  return (
    <Content className="main bg-gradient-primary">
      <Header title="Poke Redux">
        <InputSearch setValue={setSearch} value={search} />
      </Header>
      <Main>
        <PokemonList title="List pokemons">
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </PokemonList>
      </Main>
    </Content>
  )
}

export default App
