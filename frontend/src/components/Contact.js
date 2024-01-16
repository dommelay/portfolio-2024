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
           
            <div id='contactcontainer'>
                <form id='form' onSubmit={handleSubmit}>
                    <label htmlFor='from_name'>Name:</label>
                        <input type='text' name='from_name' value={formData.from_name} onChange={handleChange}></input>
                    <label htmlFor='from_email'>Email:</label>
                        <input type='text'name='from_email' value={formData.from_email} onChange={handleChange}></input>
                    <label htmlFor='message'>Message:</label>
                        <input type='text' name='message' value={formData.message} onChange={handleChange}></input>
                    <button type='submit'>submit</button>
                </form>
            </div>

        </div>

    )

}

export default Contact;

