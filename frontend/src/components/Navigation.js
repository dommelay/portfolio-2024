import React from 'react'
import {useState} from 'react'
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'

const Navigation = () => {




    return (
    <div id='navcontainer'>

        <div id='navbox'>
            <h2 className='navitem'>home</h2>
            <h2 className='navitem'>about</h2>
            <h2 className='navitem'>work</h2>
            <h2 className='navitem'>contact</h2>
        </div>

        <div id='navnamebox'>
            <h3 id='navname'>Dominique Melay</h3>
        </div>

    </div>

    )
}

export default Navigation;

   {/* <Link to ={'/'}>
            <h2 className='navitem'>Home</h2>
        </Link> */}