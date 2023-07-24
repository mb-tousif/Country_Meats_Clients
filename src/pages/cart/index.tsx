import React from 'react'
import RootLayout from '../../Layouts/RootLayout'
import { Space, Typography } from 'antd'

export default function Cart() {
  return (
    <RootLayout>
        <Space direction="vertical">
          <Typography.Title>Cart</Typography.Title>
        </Space>
    </RootLayout>
  )
}
