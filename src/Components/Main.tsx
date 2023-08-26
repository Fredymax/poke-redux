import { ReactNode } from 'react'
import { Row, Col } from 'antd'
import { Wrapper } from './Container'

interface Props {
  children: ReactNode
}

export const Main = (props: Props) => {
  const { children } = props
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
        <Col xs={24}>{children}</Col>
      </Row>
    </Wrapper>
  )
}
