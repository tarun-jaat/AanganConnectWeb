import React from 'react'
import Home from '../components/Home'
import Features from './Features'
import About from './About'
import Pricing from './Pricing'
const Container = () => {
  return (
    <div>
        <Home/>
        <Features/>
        <About/>
        <Pricing/>
    </div>
  )
}

export default Container