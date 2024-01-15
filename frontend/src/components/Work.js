import React from 'react'
import {useState} from 'react'


const Work = () => 
{
    return (
        <div id='testcontainer'>
            <div className='pagetitle'>
                <h1>WORK PAGE</h1>
            </div>
            <div id='workcontainer'>
                <a href='https://github.com/dommelay/WeatherApp-frontend' target='_blank'>
                    <img className='workimg' src='/images/weather.jpg' alt='Weather App'/>
                </a>
                <img className='workimg' src='/images/gallery.jpg' alt='Gallery'/>
                <img className='workimg' src='/images/gallery.jpg' alt='Gallery'/>
            </div>
        </div>

    )

}

export default Work;