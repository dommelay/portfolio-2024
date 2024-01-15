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
                    <h2 className='normaltext' id='homename'>Dominique Melay</h2>
                    <h1 className='cursive' id='homeposition'>Software & Product Engineer</h1>
                    <h3 className='normaltext' id='homebrand'>A Software Engineer and University of Michigan graduate with a solid foundation in Neuroscience, Biomechanics, and the fundamentals of Engineering. Experienced in digital marketing and product design, I bring a diverse skill set that combines technical expertise with a creative and strategic approach; uniquely positioning me to tackle complex problems and deliver innovative solutions in the ever-evolving landscape of software development.</h3>
                    {/* <div id='homeiconbox'>
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
                    </div> */}
                </div>
            </div>
        </div>

    )

}

export default Home;