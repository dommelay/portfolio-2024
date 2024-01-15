import React from 'react'
import {useState} from 'react'


const Home = () => 
{
    return (
        <div id='testcontainer'>
            {/* <div className='pagetitle'>
                <h1>HOME PAGE</h1>
            </div> */}
            <div className='homecontainer'>
                <div>
                    <img id='headshot' src='/images/headshot.png' alt='Head Shot'/>
                </div>
                <div id='homeinfobox'>
                    <h2>Dominique Melay</h2>
                    <h1 className='cursive'>Software & Product Engineer</h1>
                    <h3>A Software Developer and University of Michigan graduate with a strong foundation in Neuroscience, Biomechincs, and fundamentals of Engineering. </h3>
                    <div id='homeiconbox'>
                        {/* <button id='resumebttn'>resume</button> */}
                        <div id='homeicons'>
                            <a href='https://github.com/dommelay' target='_blank'>
                                <img className='socialicon' src='/images/github.png' alt='GitHub'/>
                            </a>
                            <a href='https://www.linkedin.com/in/dominiquemelayclark/' target='_blank'>
                                <img className='socialicon' src='/images/linkedin.png' alt='Linkedin'/>
                            </a>
                            <a href='https://www.instagram.com/dommelay/' target='_blank'>
                                <img className='socialicon' src='/images/instagram.png' alt='Instagram'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Home;