import React from 'react'
import {useState, useEffect} from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
// import Home1 from './components/Home1'
import './App.css'
import './App1.css'

const App = () => {


  return (

    <div id='homecontainer'>
    
      <BrowserRouter>
      <Navigation/>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/contact' element={<Contact/>}/>


        </Routes>
      </BrowserRouter>
    </div>

  )

}

export default App;
