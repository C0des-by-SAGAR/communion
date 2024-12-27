import React from 'react';
import StatsCard from './subcomponents/StatsCard';
import './Stats.css';
import svg1 from '../comm-assets/Stats/SVG-1.png';
import svg2 from '../comm-assets/Stats/SVG-2.png';
import svg3 from '../comm-assets/Stats/SVG-3.png';
import svg4 from '../comm-assets/Stats/SVG-4.png';

const Stats = () => {
  const features = [
    {
      title: "Global Connectivity",
      description: "Connecting people from diverse religious communities worldwide, fostering meaningful engagement.",
      link: "View Details >",
      icon: svg1
    },
    {
      title: "Foster Inclusive Collaboration and Connect with People Around You",
      description: "Engage, collaborate, and connect with diverse people to build inclusive and meaningful relationships.",
      link: "View Details >",
      icon: svg2
    },
    {
      title: "Innovative Technology",
      description: "Utilizing cutting-edge tools to enhance user experience and encourage active participation.",
      link: "View Details >",
      icon: svg3
    },
    {
      title: "Daily Growth",
      description: "Over 10,000+ daily engagements, creating a thriving community where spirituality and innovation meet.",
      link: "View Details >",
      icon: svg4
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-content">
        <div className="stats-header">
          <h2 className="stats-title">
            More Than <span className="highlight">10,000+</span> Engagements daily<br />across the world
          </h2>
          <p className="stats-description">
            Experience the power of connection with over 10,000 daily interactions worldwide, uniting diverse communities through innovation, collaboration, and shared spirituality.
          </p>
        </div>

        <div className="stats-layout">
          <div className="stats-images">
            <StatsCard />
          </div>
          
          <div className="stats-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-content">
                  <div className="feature-icon">
                    <img src={feature.icon} alt={`${feature.title} Icon`} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <a href="#" className="feature-link">{feature.link}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;