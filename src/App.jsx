import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Features from './Screens/Features'
import Container from './Screens/Container'
import Navbar from './components/Navbar'
import About from './Screens/About'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<Container/>}/>
      <Route path='features' element={<Features/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="*" element={() => <h1>Page Not Found</h1>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App