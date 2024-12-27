import React from 'react';
import './HeroCreateEvent.css';
import avatarGroup from '../../comm-assets/Events/avatar-1.avif';
import arrow from '../../comm-assets/hero-section/arrow.png';

const HeroCreateEvent = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Create a New Event
          </h1>
          <h2 className="hero-title highlighted-text">
            Fill in the details to create your event
          </h2>
          <p className="hero-description">
            Fill out the form below with the key details about your event, including date, location, 
            and highlights. Make it engaging to attract your audience and ensure everything is set 
            for a successful launch.
          </p>
        </div>

        <div className="hero-stats">
          <div className="avatar-stats">
            <img 
              src={avatarGroup} 
              alt="Community members" 
              className="avatar-group-img"
            />
            <span className="stats-text">
              Trusted by Over 15k+<br />
              Individuals Worldwide.
            </span>
          </div>
          <button className="explore-btn">
            Explore Events
            <img src={arrow} alt="Arrow" className="btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCreateEvent;