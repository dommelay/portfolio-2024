import React from 'react'
import {useState} from 'react'
import {Home} from './Home'
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'

const Navigation = () => {




    return (
    <div id='navcontainer'>

        <div id='navbox'>
            <Link to={'/about'}>
                <h2 className='navitem'>about</h2>
            </Link>
            <Link to={'/work'}>
                <h2 className='navitem'>work</h2>
            </Link>
            <Link to={'/contact'}>
                <h2 className='navitem'>contact</h2>
            </Link>
        </div>

        <div id='navnamebox'>
            <Link to={'/'}>
                <h3 id='navname'>Dominique Melay</h3>
            </Link>
        </div>

    </div>

    )
}

export default Navigation;

   {/* <Link to ={'/'}>
            <h2 className='navitem'>Home</h2>
        </Link> */}