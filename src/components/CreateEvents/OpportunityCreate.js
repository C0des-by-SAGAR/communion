import React from 'react';
import './OpportunityCreate.css';
import arrow from '../../comm-assets/hero-section/arrow.png';
import avatar from '../../comm-assets/Events/avatar-1.avif';

const OpportunityCreate = () => {
  const features = [
    {
      id: 1,
      icon: '✦',
      text: 'Customized workshops tailored to community needs.',
    },
    {
      id: 2,
      icon: '✦',
      text: "Access to resources and materials to implement what you've learned.",
    },
    {
      id: 3,
      icon: '✦',
      text: 'Expert guidance to support your journey long after the event.',
    },
  ];

  return (
    <section className="opportunity-section">
      <div className="opportunity-container">
        {/* Left Section */}
        <div className="opportunity-left">
          <h2 className="opportunity-title fade-up">
            Never Miss an Opportunity<br />to Grow and Connect
          </h2>
          <div className="avatar-group zoom-fade">
            <div className="avatars">
              <img src={avatar} alt="Community member" className="avatar-img" />
            </div>
            <span className="join-text fade-left">Join the Movement</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="opportunity-right">
          <p className="opportunity-description fade-left">
            Whether you're looking to make a difference, meet like-minded
            people, or simply lend a helping hand, there's a place for you here.
            Join us, and let's make an impact together!
          </p>

          <div className="features-list">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="feature-item zoom-fade"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="feature-icon">{feature.icon}</span>
                <p className="fade-left">{feature.text}</p>
              </div>
            ))}
          </div>

          <button className="get-tickets-btn zoom-fade">
            <span className="flex flex-column-2 items-center justify-space-between">
              View All Events
              <img src={arrow} alt="Arrow" className="button-arrow" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OpportunityCreate;
