import React from 'react';
import './Discover.css';
import discoverImage from '../../comm-assets/Events/discover-img.avif';
import icon1 from '../../comm-assets/Events/icon-1.png';
import icon2 from '../../comm-assets/Events/icon-2.png';
import icon3 from '../../comm-assets/Events/icon-3.png';
import icon4 from '../../comm-assets/Events/icon-4.png';

const Discover = () => {
  const features = [
    {
      id: 1,
      icon: icon1,
      title: 'Expert-Led Sessions',
      description: 'Learn from professionals who are leaders in their fields.'
    },
    {
      id: 2,
      icon: icon2,
      title: 'Interactive Learning',
      description: 'Engage in hands-on activities that enhance your skills.'
    },
    {
      id: 3,
      icon: icon3,
      title: 'Networking Opportunities',
      description: 'Build connections that last beyond the event.'
    },
    {
      id: 4,
      icon: icon4,
      title: 'Actionable Insights and Takeaways',
      description: 'Gain practical knowledge and strategies from every session, ensuring you leave with actionable steps to create a positive impact'
    }
  ];

  return (
    <section className="discover-section">
      <div className="discover-header">
        <h2 className="fade-up">
          Discover What Sets Communion Events Apart
          <span className="highlighted-text fade-up"> ✦ Who We Are</span>
        </h2>
      </div>

      <div className="discover-content">
        <div className="discover-image-container zoom-fade">
          <img 
            src={discoverImage} 
            alt="Interactive learning session" 
            className="discover-image"
          />
        </div>

        <div className="discover-features">
          <h3 className="fade-up">Where Creativity Meets<br />
            <span className="community-impact">Community Impact</span>
          </h3>

          <div className="features-list">
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                className="feature-item zoom-fade"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </span>
                <div className="feature-content">
                  <h4 className="fade-left">{feature.title}</h4>
                  <p className="fade-left">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;