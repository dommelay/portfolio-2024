import React from 'react'
import {useState} from 'react'
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'


const About = () => 
{
    return (
        <div id='testcontainer'>

            <div id='aboutcontainer'>

                <div id='aboutheader'>
                    <h1 className='normaltext' id='aboutpage'>About</h1>
                    <h1 className='normaltext' id='aboutname'>Dominique Melay</h1>
                </div>

                <div id='beyondbox'>
                    <div id='integritywork'>
                        <h1 className='cursive abouttitle'>Background</h1>
                        <div id='workbttnbox'>
                            <a href='https://drive.google.com/file/d/1NlohvOqzhwWdmip96eGqhd5MDENREogU/view?usp=sharing' target='_blank'>
                                <button className='cursive resumebttn'id='workbttn'>Resume</button>
                            </a>
                        </div>
                    </div>
                    
                    <div className='medescription'>
                        <h2 className='normaltext aboutdescription'>I am a Software/Product Engineer and University of Michigan graduate with a solid foundation in Neuroscience, Biomechanics, and the fundamentals of Engineering. With extensive experience in digital marketing and product design, I bring a diverse skill set that combines technical expertise with a creative and strategic approach. My multifaceted background has uniquely positioned me to tackle complex problems and deliver innovative solutions in the ever-evolving landscape of software development.</h2>
                    </div>
                </div>
                <div id='backgroundbox'>
                    <div id='socialbackground'>
                        <div id='background'>
                            <h1 className='cursive abouttitle'>Beyond the Code</h1>
                        </div>
                        <div id='homeiconbox'>
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
                    <div className='medescription'>
                        <h2 className='normaltext aboutdescription'>Beyond the lines of code, I find inspiration in the artistry of design and the transformative power of fashion. Many years of modeling in New York City in conjunction with my mission to accommodate my sensory needs have heavily influenced my sense of style. I see fashion as the most profound form of self-expression when done authentically - and engineering has allowed me to apply the same level of creativity to the world around me through more than my physical appearance. With my nuanced perspective on user experience, I am keen on popularizing the intersection between Engineering and Fashion with efficient and inclusive innovations.</h2>
                    </div>

                  
                 
                </div>


                <div id='integritybox'>
                    <div id='integritywork'>
                        <h1 className='cursive abouttitle'>Integrity</h1>
                        <div id='workbttnbox'>
                            <Link to={'/contact'}>
                                <button className='cursive' id='workbttn'>work with me</button>
                            </Link>
                        </div>
                    </div>
                    <div className='medescription'>
                        <h2 className='normaltext aboutdescription'>As an autistic person, I take pride in my sense of integrity and high regard as it is often misunderstood as rigidity. I believe in exploring cognitive dissonance and disengaging confirmation bias as the most virtuous way to remain consistent in one's principles. In my professional and personal endeavors, I strive to foster environments centered around open communication, transparency, and collaboration. My motivation to work hard stems directly from my commitment to only perform fair and honest work.</h2>
                    </div>
                </div>

            </div>

        </div>

    )

}

export default About;