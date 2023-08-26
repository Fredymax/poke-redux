import React from 'react'
import { Col, Row } from 'antd'

interface Props {
  children: React.ReactNode
  title: string
}

export const PokemonList = (props: Props) => {
  const { title, children } = props
  return (
    <>
      <Row>
        <Col span={24}>
          <h1
            style={{
              marginBlockEnd: '1em',
            }}
            className="text-primary"
          >
            {title}
          </h1>
        </Col>
      </Row>
      <Row gutter={[32, 32]}>{children}</Row>
    </>
  )
}

PokemonList.defaultProps = {
  title: 'Assign a title',
}
