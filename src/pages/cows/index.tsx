import React from 'react'
import RootLayout from '../../Layouts/RootLayout'
import { Space, Typography } from 'antd'

export default function Cows() {
  return (
    <RootLayout>
        <Space direction="vertical">
          <Typography.Title>Cows</Typography.Title>
        </Space>
    </RootLayout>
  )
}
