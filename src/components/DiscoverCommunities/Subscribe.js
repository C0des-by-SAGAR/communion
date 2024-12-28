import React, { useState } from 'react';
import './Subscribe.css';

const Subscribe = () => {
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
            Join our discussion groups to stay updated on trending topics, share insights, and connect with like-minded  individuals in the community.
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

export default Subscribe;