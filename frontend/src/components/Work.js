import React from 'react'
import {useState} from 'react'


const Work = () => {
const [weatherHover, setWeatherHover] = useState(false)
const [galleryHover, setGalleryHover] = useState(false)

const handleWeatherHover = () => {
    setWeatherHover(true)
}
const handleWeatherHoverOff = () => {
    setWeatherHover(false)
}
const handleGalleryHover = () => {
    setGalleryHover(true)
}
const handleGalleryHoverOff = () => {
    setGalleryHover(false)
}


    return (
        <div id='testcontainer'>
           
            <div id='workcontainer'>

                <div id='weatherbox'>
                    <div onMouseEnter={handleWeatherHover} className='weatherboxtrue'>
                        <img className='workimg' src='/images/weather.jpg' alt='Weather App'/>
                    </div>
            { weatherHover ? 
            <>
                <a href='https://github.com/dommelay/WeatherApp-frontend' target='_blank'>
                    <div onMouseLeave={handleWeatherHoverOff} className='opaque'></div>
                </a>
            </>
                : <></> }
                </div>

                <div id='artbox'>
                    <div onMouseEnter={handleGalleryHover} className='artboxtrue'>
                        <img className='workimg' src='/images/gallery.jpg' alt='Gallery'></img>
                    </div>
                { galleryHover ?
                <>
                    <a href='https://github.com/dommelay/GalleryFront2' target='_blank'>
                        <div onMouseLeave={handleGalleryHoverOff} className='opaque'></div>
                    </a>
                </>
                : <></>}
                </div>

            </div>
        </div>

    )

}

export default Work;

  {/* <img className='workimg' src='/images/gallery.jpg' alt='Gallery'/>
                <img className='workimg' src='/images/gallery.jpg' alt='Gallery'/> */}