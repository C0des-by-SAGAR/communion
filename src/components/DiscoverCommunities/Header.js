import React from 'react';
import './Header.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import arrow from '../../comm-assets/hero-section/arrow.png';
import headerImage from '../../comm-assets/Discover/header-img-1.avif';
import headerImage2 from '../../comm-assets/Discover/header-img-2.avif';

const Header = () => {
  useScrollAnimation();

  return (
    <section className="community-header">
      <div className="community-content">
        <div className="community-text-content">
          <div className='community-title fade-up'>
              <h1>
                Join the Conversation
              </h1>
              <span className="community-highlighted fade-left flex flex-col justify-center items-center">
                <span className='sparkle-icon'>✦</span> 
                <h1 className='community-highlighted'>Build Connections</h1> 
              </span>          
          </div>
          <div className="community-subtitle fade-right">
            <p className="community-description fade-right">
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

      <div className="community-discover-stats fade-up">
        <div className="community-images">
          {/* Placeholder for images - will be replaced later */}
          <div>
            <img src={headerImage} alt="header-image-1" className="image-placeholder left-image" />
          </div>
          <div>
            <img src={headerImage2} alt="header-image-2" className="image-placeholder right-image" />
          </div>
        </div>
        
        <div className="discover-stats-container">
          <div className="discover-stats-title">
            <h2>Where Connections Thrive</h2>
            <span className="discover-stats-title-highlighted">
              <h2>and Ideas Flourish</h2>
              <span className="sparkle-accent">✦ 2x</span> 
            </span>
          </div>
          <div className="discover-stats-grid">
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