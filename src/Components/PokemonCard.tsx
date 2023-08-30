import { CSSProperties } from 'react'
import { Card, Col } from 'antd'
import { Pokemon } from '@types'

const { Meta } = Card

interface PokemonCardProps {
  pokemon: Pokemon
}

const styles: CSSProperties = {
  maxInlineSize: '400px',
  inlineSize: '100%',
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { name, sprites } = pokemon
  return (
    <Col xs={24} sm={12} md={6} xxl={4}>
      <Card
        hoverable
        style={styles}
        cover={
          <figure
            style={{
              blockSize: '130px',
              objectFit: 'cover',
              textAlign: 'center',
            }}
          >
            <img
              style={{
                blockSize: '100%',
                inlineSize: 'auto',
              }}
              alt="Pokemon"
              src={sprites.front_default}
            />
          </figure>
        }
      >
        <Meta className="text-capitalize" title={name} description="Some description" />
      </Card>
    </Col>
  )
}
