import React from 'react'
import Hero from './Hero/Hero'
import Navbar from './Navbar/Navbar'
import Marquee from './Marquee/Marquee'
import NewSection from './NewSection/section'
import Outlay from './Outlay/Outlay'
import AnotherMarquee from './AnotherMarquee/MarqueePro'
import BestFit from './BestFit/BestFit'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Marquee/>
        <NewSection/>
        <AnotherMarquee/>
        <BestFit/>
    </div>
  )
}

export default Home