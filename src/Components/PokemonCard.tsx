import { CSSProperties } from 'react'
import { Card, Col, Space, Tag } from 'antd'
import { Pokemon } from '@types'
import { ButtonFavorite } from './ButtonFavorite'

interface PokemonCardProps {
  pokemon: Pokemon
}

const styles: CSSProperties = {
  maxInlineSize: '400px',
  inlineSize: '100%',
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name, sprites, types, favorite = false } = pokemon
  return (
    <Col xs={24} sm={12} md={6}>
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
        className="text-capitalize"
        title={name}
        extra={<ButtonFavorite id={id} favorite={favorite} />}
      >
        <Card.Meta
          className="text-capitalize"
          description={
            <>
              <p style={{ marginBlockEnd: '.5rem', fontWeight: 'bold' }}>Types</p>
              <Space size={[0, 8]} wrap>
                {types.map((c, index) => (
                  <Tag color="#87d068" key={index}>
                    {c.type.name}
                  </Tag>
                ))}
              </Space>
            </>
          }
        />
      </Card>
    </Col>
  )
}
