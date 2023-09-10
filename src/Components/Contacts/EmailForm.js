import React, { useState } from 'react';
import './ContStyle.css'

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement the logic to send the email.
    // You might want to use a third-party service or a backend for this.
    console.log(`Email: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="email-form">
      <h2>Send Me an Email</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default EmailForm;