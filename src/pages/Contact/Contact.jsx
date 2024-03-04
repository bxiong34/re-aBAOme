import React from 'react';
import './Contact.css';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log('Form data:', data);
  };

  return (
    <div className='input-boxes'>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="Name" required/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="Email" requiredpattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Invalid email address"/>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="Message" required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}