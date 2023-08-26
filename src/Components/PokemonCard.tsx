import { CSSProperties } from 'react'
import { Card, Col } from 'antd'
import { Pokemon } from '@types'

const { Meta } = Card

interface Props {
  pokemon: Pokemon
}

const styles: CSSProperties = {
  maxInlineSize: '400px',
  inlineSize: '100%',
}

export const PokemonCard = (props: Props) => {
  const { pokemon } = props
  return (
    <Col xs={24} sm={12} md={6} xxl={4}>
      <Card
        hoverable
        style={styles}
        cover={<img alt="Pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" />}
      >
        <Meta className="text-capitalize" title={pokemon.name} description="Some description" />
      </Card>
    </Col>
  )
}
