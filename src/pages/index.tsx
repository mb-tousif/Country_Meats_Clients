import React from 'react'
import RootLayout from '../Layouts/RootLayout'
import CowCard from '../UI/CowCard'


export default function Home() {
 
  return (
    <RootLayout>
    <h1 style={{color: "red"}}>Country Meats Ltd Home Page</h1>
    <CowCard />
    </RootLayout>
  )
}