import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send(
      'service_ae85uad',
      'Template_1',
      templateParams,
      'LucRYRVJY9RNO9T5g'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setError(true);
      });
  };



return (


    <form onSubmit={sendEmail}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Message:</label>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">Send</button>
      {success && <p>Message sent successfully!</p>}
      {error && <p>Error sending message.</p>}
    </form>
  );
};

export default ContactForm;