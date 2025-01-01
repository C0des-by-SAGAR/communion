import React from 'react';
import './HeaderCreate.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import arrow from '../../comm-assets/hero-section/arrow.png';
import avatar from '../../comm-assets/Events/avatar-1.avif';

const HeaderCreate = () => {
  useScrollAnimation();

  return (
    <section className="create-community-header">
      <div className="create-community-content">
        <div className="create-community-text-content">
          <div className='create-community-title fade-up'>
              <h1 className="create-community-highlighted">
                Create a New Discussion Group
              </h1>
              <p className="fade-left flex flex-col justify-center items-center">
                Start a discussion group to connect, share insights, and grow in faith together. Choose a theme, invite others, and create a space for meaningful conversations in our community.
              </p>          
          </div>
          <div className="create-community-subtitle fade-right">
            <p className="create-community-description fade-right">
                <span className="avatar-container">
                    <img src={avatar} alt="avatar" className="avatar-img" />
                    <p className="avatar-text">Start a discussion group and grow in faith together.</p>
                </span>
            </p>
            <button 
              className="join-btn zoom-fade"
              onClick={() => window.location.href = '/discover-communities'}
            >
              View Discussion Groups Now
              <img src={arrow} alt="arrow-btn" className="arrow-btn" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderCreate;