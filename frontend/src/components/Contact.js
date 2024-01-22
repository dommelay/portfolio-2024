import React from 'react'
import {useState, useEffect} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
})
const [messageSent, setMessageSent] = useState(false)
const [messageError, setMessageError] = useState(false)


const handleChange = (e) => {
    e.preventDefault()
    setFormData({...formData, [e.target.name]: e.target.value})
}
const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.send('service_9drkbdz', 'contact_form', formData, 'uebwbWRR7EBbkwtG5').then((response) => {
        console.log(formData)
        setFormData({
            from_name: '',
            from_email: '',
            message: ''
        })
        setMessageSent(true)
    }).catch((error) => {
        console.log('error')
        setFormData({
            from_name: '',
            from_email: '',
            message: ''
        })
        setMessageError(true)
    })
}
    return (
        <div id='testcontainer'>
            <div id='contactpage'>
                    <h1 id='contactme' className='normaltext'>Contact Me</h1>
                    <h2 className='cursive' id='formdescription'>*for buisness inquiries only!</h2>
                    {messageSent ?
                    <>
                        <h1 className='cursive' id='messagesent'>Message Sent Successfully</h1>
                        <h1 className='normaltext messagenext'>You can expect to hear back within three buisness days.</h1> 
                    </>
                    : <></>}
                    {messageError ?
                    <> 
                        <h1 className='cursive' id='messagesent'>Error: Message Not Sent</h1>
                    </>
                    :<></>}
                </div>
            <div id='contactcontainer'>
    
                <div>
                <form id='form' onSubmit={handleSubmit}>
                    <div id='fromnamediv' className='labelinput'>
                        <label className='formlabel' htmlFor='from_name'>Name:</label>
                        <input id='inputname' type='text' name='from_name' value={formData.from_name} onChange={handleChange}></input>
                    </div>
                    <div id='emaildiv' className='labelinput'>
                        <label className='formlabel' htmlFor='from_email'>Email:</label>
                        <input id='inputemail' type='text'name='from_email' value={formData.from_email} onChange={handleChange}></input>
                    </div>
                        <label id='messagelabel' className='formlabel' htmlFor='message'>Message:</label>
                    <div id='messagediv' className='labelinput'>
                        <textarea id='inputmessage' type='text' name='message' value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <button id='submitbttn' className='cursive' type='submit'>submit</button>
                </form>
                </div>
            </div>

        </div>

    )

}

export default Contact;

