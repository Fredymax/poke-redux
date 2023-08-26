import React from 'react'
import { Row, Col } from 'antd'
import { Wrapper } from './Container'

interface Props {
  children: React.ReactNode
  title: string
}

export const Header = (props: Props) => {
  const { children, title } = props

  return (
    <Wrapper>
      <Row
        align="middle"
        justify={{
          xs: 'center',
          sm: 'space-between',
        }}
        gutter={[8, 8]}
      >
        <Col xs={24} sm={12}>
          <h3 className="title font-sed">{title}</h3>
        </Col>
        <Col xs={24} sm={6}>
          {children}
        </Col>
      </Row>
    </Wrapper>
  )
}
