import React from 'react';
import './Header.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import arrow from '../../comm-assets/hero-section/arrow.png';
import headerImage from '../../comm-assets/Discover/header-img-1.avif';
import headerImage2 from '../../comm-assets/Discover/header-img-2.avif';

const Header = () => {
  useScrollAnimation();

  return (
    <section className="discover-header">
      <div className="discover-content">
        <div className="discover-text-content">
          <div className='discover-title fade-up'>
              <h1>
                Join the Conversation
              </h1>
              <span className="discover-highlighted fade-left flex flex-col justify-center items-center">
                <span className='sparkle-icon'>✦</span> 
                <h1 className='discover-highlighted'>Build Connections</h1> 
              </span>          
          </div>
          <div className="discover-subtitle fade-right">
            <p className="discover-description fade-right">
              Discover a vibrant community, share your thoughts, and connect with like-minded individuals. Together, we grow.
            </p>
            <button 
              className="join-btn zoom-fade"
              onClick={() => {
                document.getElementById('discussions-section').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Join Conversations
              <img src={arrow} alt="arrow-btn" className="arrow-btn" />
            </button>
          </div>
        </div>
      </div>

      <div className="discover-stats fade-up">
        <div className="discover-images">
          {/* Placeholder for images - will be replaced later */}
          <div>
            <img src={headerImage} alt="header-image-1" className="image-placeholder left-image" />
          </div>
          <div>
            <img src={headerImage2} alt="header-image-2" className="image-placeholder right-image" />
          </div>
        </div>
        
        <div className="stats-container">
          <div className="stats-title">
            <h2>Where Connections Thrive</h2>
            <span className="flex flex-col justify-center items-center">
              <h2>and Ideas Flourish</h2>
              <span className="sparkle-accent">✦ 2x</span> 
            </span>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-icon">⦿</span>
              <p>Happy Community</p>
            </div>
            <div className="stat-item">
              <span className="stat-icon">⦿</span>
              <p>210% Boost in Engagement</p>
            </div>
            <div className="stat-item">
              <span className="stat-icon">⦿</span>
              <p>172+ Ranked Communities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;