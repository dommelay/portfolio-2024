import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Navigation from './components/Navigation'
import './App.css'

const App = () => {


  return (

    <div id='homecontainer'>
      <Navigation/>
      <h1>Hello World!</h1>
    </div>

  )

}

export default App;
