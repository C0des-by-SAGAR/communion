import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-title fade-up">
          Subscribe to our newsletter to stay informed about our upcoming events, community initiatives, 
          and exclusive opportunities.
        </h2>
        <form onSubmit={handleSubmit} className="newsletter-form zoom-fade">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@email.com"
            className="newsletter-input"
            required
            aria-label="Email address"
          />
          <button type="submit" className="subscribe-btn">
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;