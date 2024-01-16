import React from 'react'
import {useState} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
})

const handleChange = (e) => {
    e.preventDefault()
    setFormData({...formData, [e.target.name]: e.target.value})
}
    return (
        <div id='testcontainer'>
           
            <div id='contactcontainer'>
                <form id='form'>
                    <label htmlFor='from_name'>Name:</label>
                        <input type='text' name='from_name' value={formData.from_name} onChange={handleChange}></input>
                    <label htmlFor='from_email'>Email:</label>
                        <input type='text'name='from_email' value={formData.from_email} onChange={handleChange}></input>
                    <label htmlFor='message'>Message:</label>
                        <input type='text' name='message' value={formData.message} onChange={handleChange}></input>
                </form>
            </div>

        </div>

    )

}

export default Contact;

