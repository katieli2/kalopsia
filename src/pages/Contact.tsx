import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: add these to a gitignore
    emailjs.send(
      'kalopsia', 
      'template_03gez3s', 
      formData,
      'O3HZBI23VJapAAobW'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccessMessage('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }).catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send message.');
    });
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Submit</button>
        {successMessage && <p>{successMessage}</p>}
        <p>You can reach us at kalopsialit@gmail.com.</p>
      </form>
    </div>
  );
};

export default Contact;
