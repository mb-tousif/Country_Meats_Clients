import React from 'react'
import DashboardLayout from '../../Layouts/DashboardLayout'
import backG from '../../Assets/login.jpeg'
const rootStyle:React.CSSProperties = {
  background:`url(${backG})`,
  minHeight:"70vh",
  padding:"2rem",
}

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div style={rootStyle}>Dashboard</div>
    </DashboardLayout>
  )
}
