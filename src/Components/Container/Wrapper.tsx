import React from 'react'

interface Props {
  children: React.ReactNode
}

const styled: React.CSSProperties = {
  maxInlineSize: '1200px',
  margin: 'auto',
  padding: '1rem',
}

export const Wrapper = ({ children }: Props) => {
  return <div style={styled}>{children}</div>
}
