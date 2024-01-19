import React from 'react'
import {useState, useEffect} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
})
// useEffect(() => {
//     console.log('testing')
// })
const handleChange = (e) => {
    e.preventDefault()
    setFormData({...formData, [e.target.name]: e.target.value})
}
const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.send('service_9drkbdz', 'contact_form', formData, 'uebwbWRR7EBbkwtG5').then((response) => {
        console.log(formData)
    }).catch((error) => {
        console.log('error')
    })
}
    return (
        <div id='testcontainer'>
            <div id='contactpage'>
                    <h1 id='contactme' className='normaltext'>Contact Me</h1>
                    <h2 className='cursive' id='formdescription'>*for buisness inquiries only!</h2>
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
                        <input id='inputmessage' type='text' name='message' value={formData.message} onChange={handleChange}></input>
                    </div>
                    <button id='submitbttn' className='cursive' type='submit'>submit</button>
                </form>
                </div>
            </div>

        </div>

    )

}

export default Contact;

