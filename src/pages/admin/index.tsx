import React from 'react'
import DashboardLayout from '../../Layouts/DashboardLayout'
import { Space, Typography } from 'antd'

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Space direction="vertical">
          <Typography.Title>Dashboard</Typography.Title>
        </Space>
    </DashboardLayout>
  )
}
