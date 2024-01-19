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

            <div className='holdwork'>
                <div className='workdescription'>
                    <h1 className='normaltext worktitle'>Weather App</h1>
                    <h2 className='normaltext'></h2>
                </div>
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
                <div className='worktechnologies'>
                    <h1 className='normaltext technologies'>Technologies: MERN - MongoDB, Express.js, React, Node.js. JavaScript, API, REST architecture, HTML, CSS</h1>
                </div>
            </div>
            
            <div className='holdwork'>
                <div className='workdescription'>
                    <h1 className='normaltext worktitle'>Gallery</h1>
                    <h2 className='normaltext'></h2>
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
                <div className='worktechnologies'>
                    <h1 className='normaltext technologies'>Technologies: MERN - MongoDB, Express.js, React, Node.js. TypeScript, API, REST architecture, HTML, CSS</h1>
                </div>
            </div>

            </div>
        </div>

    )

}

export default Work;

  {/* <img className='workimg' src='/images/gallery.jpg' alt='Gallery'/>
                <img className='workimg' src='/images/gallery.jpg' alt='Gallery'/> */}