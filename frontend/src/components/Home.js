import React from 'react'
import {useState} from 'react'


const Home = () => 
{
    return (
        <div id='homecontainerbox'>
           
           <div id='homeheader'>
                <h1 className='cursive' id='hometitle'>Software & Product Engineer</h1>
           </div>
            <div id='homeimg'>
                <img id='homeshot' src='/images/FullSizeRender.jpg' alt='Dominique Melay'></img>
            </div>
            <div id='homefooter'>
                <h1 className='cursive'>Dominique Melay</h1>
            </div>

        </div>

    )

}

export default Home;