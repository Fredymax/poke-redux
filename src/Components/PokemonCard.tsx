import { CSSProperties } from 'react'
import { Card, Col } from 'antd'

const { Meta } = Card

// interface Props {}

const styles: CSSProperties = {
  maxInlineSize: '400px',
  inlineSize: '100%',
}

// export const PokemonCard = (props: Props) => {
export const PokemonCard = () => {
  return (
    <Col xs={24} sm={12} md={6} xxl={4}>
      <Card
        hoverable
        style={styles}
        cover={<img alt="Pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" />}
      >
        <Meta title="Eevee" description="Some description" />
      </Card>
    </Col>
  )
}
