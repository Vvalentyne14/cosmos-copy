import React from 'react'
import Hero from './Hero/Hero'
import Navbar from './Navbar/Navbar'
import Marquee from './Marquee/Marquee'
import NewSection from './NewSection/section'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Marquee/>
        <NewSection/>
    </div>
  )
}

export default Home