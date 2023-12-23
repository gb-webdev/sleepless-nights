import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import MyTracks from './pages/MyTracks'
import AboutMe from './pages/AboutMe'
import NotFound from './pages/NotFound'
import './App.css'

const App = () => {
  return (
    <div className="app-div-wrap">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/mytracks' element={<MyTracks />} />
      <Route path='/about' element={<AboutMe />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </div>
  )
}

export default App