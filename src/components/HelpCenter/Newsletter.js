import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-container">
        <h2>
          Subscribe Now to Stay Updated on the Latest Help Requests and Make a Difference in Your Community!
        </h2>
        <div className="newsletter-form-container">
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@email.com"
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter; 