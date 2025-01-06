import React from 'react';
import './ViewHero.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import arrow from '../../comm-assets/hero-section/arrow.png';
import avatar from '../../comm-assets/Events/avatar-1.avif';
import header1 from '../../comm-assets/Leader/Header-1.avif';
import header2 from '../../comm-assets/Leader/Header-2.avif';

const ViewHero = () => {
  useScrollAnimation();

  return (
    <section className="view-leader-header">
      <div className="view-leader-content">
        <div className="view-leader-text-content">
          <div className='view-leader-title fade-up'>
              <div className="view-leader-title-text">
                <h1>Empowered Leaders</h1>
                <h1 className="view-leader-highlighted">
                    ✦ United Vision
                </h1>
              </div>
              <p className="fade-left flex flex-col justify-center items-center">
              Discover the passionate individuals driving change and fostering connections in our communities. Together, we celebrate their impact and support their journey to inspire, lead, and create meaningful relationships.
              </p>          
          </div>
          <div className="view-leader-subtitle fade-right">
            <p className="view-leader-description fade-right">
                <span className="avatar-container">
                    <img src={avatar} alt="avatar" className="avatar-img" />
                    <p className="avatar-text">Empowering a Global Network of Leaders</p>
                </span>
            </p>
            <button 
              className="join-btn zoom-fade"
              onClick={() => {
                const element = document.getElementById('community-leaders');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore
              <img src={arrow} alt="arrow-btn" className="arrow-btn" />
            </button>
          </div>
        </div>
        <div className="view-leader-hero-images">
            <img src={header1} alt="header1" className="view-leader-image-1" />
            <img src={header2} alt="header2" className="view-leader-image-2" />
            <div className="view-leader-stats-grid">
                <div className="view-leader-stat-item fade-up">
                  <h2>84+</h2>
                  <p>Expert Members</p>
                </div>
                <div className="view-leader-stat-item fade-up">
                  <h2>30+</h2>
                  <p>Marketing Courses</p>
                </div>
                <div className="view-leader-stat-item fade-up">
                  <h2>145+</h2>
                  <p>Global Companies</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ViewHero;