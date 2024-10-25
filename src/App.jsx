import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Dahboard from './Screens/Dashboard'
import About from './Screens/About'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Dahboard/>} >
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      
      <Route path="*" element={() => <h1>Page Not Found</h1>}/>
      
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App