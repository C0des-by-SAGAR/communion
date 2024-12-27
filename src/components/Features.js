import React from 'react';
import FeaturesCard from './subcomponents/FeaturesCard';
import './Features.css';
import arrow from '../comm-assets/hero-section/arrow.png';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-content">
        <h2 className="features-title">Why Communion Rocks!</h2>
        
        <div className="features-layout">
          <div className="features-text-container">
            <p>
              Communion is not just another platform—it's a vibrant space that unites diverse faiths, beliefs, 
              and traditions. By promoting collaboration and connection, we're fostering a world where 
              differences become strengths and unity becomes the norm.
            </p>
            <button 
              className="features-cta"
              aria-label="Learn more about why you should join us"
            >
              <span>Why Join Us?</span>
              <img src={arrow} alt="" className="arrow" aria-hidden="true" />
            </button>
          </div>
          
          <FeaturesCard />
        </div>
      </div>
    </section>
  );
};

export default Features;