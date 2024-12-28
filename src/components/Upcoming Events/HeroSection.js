import React from 'react';
import './HeroSection.css';
import hero1 from '../../comm-assets/Events/hero-1.avif';
import hero2 from '../../comm-assets/Events/hero-2.avif';
import hero3 from '../../comm-assets/Events/hero-3.avif';
import hero4 from '../../comm-assets/Events/hero-4.avif';
import hero5 from '../../comm-assets/Events/hero-5.avif';
import hero6 from '../../comm-assets/Events/hero-6.avif';
import avatar1 from '../../comm-assets/Events/avatar-1.avif';
import arrow from '../../comm-assets/hero-section/arrow.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Heading Section */}
      <div className="hero-container">
        <h1 className="hero-title">
          Uniting Communities Through
          <span className="highlighted-text"> ✦ Inspiring Events</span>
        </h1>
        <p className="hero-description">
          At Communion, we're committed to organizing events that foster connections, inspire
          personal and professional growth, and bring people together to share meaningful
          experiences. From workshops to conferences, every event is designed to leave a lasting
          impact on our attendees.
        </p>

        {/* CTA Section */}
        <div className="cta-container">
          <button 
            className="explore-button"
            onClick={() => {
              document.getElementById('events-section').scrollIntoView({ 
                behavior: 'smooth'
              });
            }}
          >
            <span className="flex flex-column-2 gap-2"> Explore Events <img src={arrow} alt="arrow" className="arrow" /></span>
          </button>
          <div className="trust-section">
            <img src={avatar1} alt="Trusted by individuals" className="trust-avatar" />
            <span>Trusted by Over 15k+ Individuals Worldwide.</span>
          </div>
        </div>

        {/* Image Grid */}
        <div className="image-grid">
          <img src={hero1} alt="Tech workshop with participants collaborating" className="grid-item-one" />
          <img src={hero2} alt="Business conference with keynote speaker" className="grid-item-two" />
          <img src={hero3} alt="Networking event with professionals mingling" className="grid-item-three" />
          <img src={hero4} alt="Educational seminar with engaged audience" className="grid-item-four" />
          <img src={hero5} alt="Community meetup with group activities" className="grid-item-five" />
          <img src={hero6} alt="Community meetup with group activities" className="grid-item-six" />
        </div>

        {/* Impact and Stats */}
        <div className="impact-section">
          <span className="impact-heading">
            <h1>Helping You Connect, Learn,</h1>
            <h1>and Thrive 
                <span className="impact-highlight"> ✦ 2x Impact</span>
            </h1>
          </span>
          <div className="stats-section">
            <div className="stat">
              <h3>98%</h3>
              <p>Opportunities Expanded</p>
            </div>
            <div className="stat">
              <h3>89%</h3>
              <p>Attendee Satisfaction</p>
            </div>
            <div className="stat">
              <h3>15k+</h3>
              <p>Engaged Participants</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
