<<<<<<< HEAD
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Features from "./Screens/Features";
import Container from "./Screens/Container";
import Navbar from "./components/Navbar";
import About from "./Screens/About";
import Pricing from "./Screens/Pricing";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={() => <h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
=======
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Features from './Screens/Features'
import Container from './Screens/Container'
import Navbar from './components/Navbar'
import About from './Screens/About'
import Pricing from './Screens/Pricing'
import Contact from './Screens/Contact'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<Container/>}/>
      <Route path='features' element={<Features/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="*" element={() => <h1>Page Not Found</h1>}/>
      
    </Routes>
>>>>>>> 2693e2efe2710f9b591770f20c4dcb0cff11f014
    </BrowserRouter>
  );
};

export default App;
