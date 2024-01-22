import React from 'react'
import {useState} from 'react'


const Work = () => {
const [weatherHover, setWeatherHover] = useState(false)
const [galleryHover, setGalleryHover] = useState(false)
const [progressHover, setProgressHover] = useState(false)

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
const handleProgressHover = () => {
    setProgressHover(true)
}
const handleProgressOff = () => {
    setProgressHover(false)
}


    return (
        <div id='workpagecontainer'>
           
            <div id='workheader'>
                <h1 className='normaltext' id='workpage'>Web Development</h1>
            </div>   

            <div id='workcontainer'>        
            
            <div className='holdwork'>
                <div className='workdescription'>
                    <h1 className='cursive worktitle'>Gallery</h1>
                    <h2 className='normaltext'></h2>
                </div>

                <div id='artbox'>
                    <div onMouseEnter={handleGalleryHover} className='boxtrue'>
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


            <div className='holdwork' id='holdworkprog'>
                <div className='workdescription'>
                    <h1 className='cursive worktitle'>Weather App</h1>
                    <h2 className='normaltext'></h2>
                </div>
                <div id='weatherbox'>
                    <div onMouseEnter={handleWeatherHover} className='boxtrue'>
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
                    <h1 className='cursive worktitle'>Epoch Tribe</h1>
                    <h2 className='normaltext'></h2>
                </div>
                <div id='progressbox'>
                    <div onMouseEnter={handleProgressHover} className='boxtrue'>
                        <img className='workimg workprogimg' src='/images/workinprogress.png' alt='Weather App'/>
                    </div>
            { progressHover ? 
            <>
                <a href='https://www.epochtribe.com/' target='_blank'>
                    <div onMouseLeave={handleProgressOff} className='opaque'></div>
                </a>
            </>
                : <></> }
                </div>
                <div className='worktechnologies'>
                    <h1 className='normaltext technologies'>Technologies: WordPress, PHP, GoDaddy</h1>
                </div>
            </div>

            </div>
        </div>

    )

}

export default Work;

  {/* <img className='workimg' src='/images/gallery.jpg' alt='Gallery'/>
                <img className='workimg' src='/images/gallery.jpg' alt='Gallery'/> */}