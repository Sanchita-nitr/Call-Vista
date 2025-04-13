import React from 'react'
import DashboardPage from './call/page'
import Hero from './hero/page'
import Navbar from './navbar/page';

const page = () => {
  return (
    <div>
      <Navbar/>
        <Hero/>
        <DashboardPage/>
    </div>
  )
}

export default page