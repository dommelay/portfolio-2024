import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'


const Home = () => 
{
    return (
        <div id='homecontainerbox'>
           
           <div id='homeheader'>
                <h1 className='cursive' id='hometitle'>Software & Product Engineer</h1>
                <h1 className='cursive' id='homename'>Dominique Melay</h1>
           </div>

            <div id='homemiddle'>
                {/* <div className='homeinfobox'>
                    <h1 className='cursive homeinfo flexend'>Freelance</h1>
                    <h1 className='cursive homeinfo'>Web Development</h1>
                    <h1 className='cursive homeinfo flexend'>Fashion/Modeling</h1>
                </div> */}
                <div id='homeimg'>
                    <img id='homeshot' src='/images/homeshot.png' alt='Dominique Melay'></img>
                </div>
                <div id='workcalldivhome'>
                    <div className='homeinfobox'>
                        <h1 className='normaltext homeinfo center'>Freelance</h1>
                        <h1 className='normaltext homeinfo'>Web Development</h1>
                        <h1 className='normaltext homeinfo flexend'>Digital Marketing</h1>
                        <h1 className='normaltext homeinfo'>Product Design</h1>
                        <h1 className='normaltext homeinfo flexend'>Fashion/Modeling</h1>
                        <h1 className='normaltext homeinfo'>Content Creation</h1>
                    </div>
                    <Link to={'/contact'}>
                        <button className='cursive workbttnhome' id='workbttn'>work with me</button>
                    </Link>
                </div>
            </div>

            {/* <div id='homefooter'>
                <h1 className='normaltext'>Dominique Melay</h1>
            </div> */}

        </div>

    )

}

export default Home;