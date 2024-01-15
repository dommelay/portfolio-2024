import React from 'react'
import {useState} from 'react'


const Work = () => {
const [weatherHover, setWeatherHover] = useState(false)

const handleWeatherHover = () => {
    setWeatherHover(true)
}
const handleWeatherHoverOff = () => {
    setWeatherHover(false)
}


    return (
        <div id='testcontainer'>
           
            <div id='workcontainer'>

                <div id='weatherbox'>
                    <div onMouseEnter={handleWeatherHover} className='workboxtrue'>
                        <img className='workimg' src='/images/weather.jpg' alt='Weather App'/>
                    </div>
            { weatherHover ? 
            <>
                <a href='https://github.com/dommelay/WeatherApp-frontend' target='_blank'>
                    <div onMouseLeave={handleWeatherHoverOff} className='opaque'></div>
                </a>
            </>
                :
                <></>
            }
                </div>

            </div>
        </div>

    )

}

export default Work;

  {/* <img className='workimg' src='/images/gallery.jpg' alt='Gallery'/>
                <img className='workimg' src='/images/gallery.jpg' alt='Gallery'/> */}