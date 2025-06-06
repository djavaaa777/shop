import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
        console.log('Success:', data)
        setSubmitted(true)
    })
    .catch(error => {
        console.error('Error:', error)
    });
}

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or suggestions, feel free to reach out to us!</p>
      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <p className="thank-you">Thank you for your message! We'll get back to you soon.</p>
      )}
    </div>
  )
}

export default Contact
