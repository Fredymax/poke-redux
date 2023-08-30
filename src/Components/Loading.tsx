import { Spin } from 'antd'
import React from 'react'

export const Loading: React.FC = () => {
  return (
    <div className="spin">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <Spin size="large" spinning />
        <h3 className="text-primary">Loading</h3>
      </div>
    </div>
  )
}
