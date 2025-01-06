import React from 'react';
import './AddLeaderHeader.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import arrow from '../../comm-assets/hero-section/arrow.png';
import avatar from '../../comm-assets/Events/avatar-1.avif';

const AddLeaderHeader = () => {
  useScrollAnimation();

  return (
    <section className="add-leader-header">
      <div className="add-leader-content">
        <div className="add-leader-text-content">
          <div className='add-leader-title fade-up'>
              <div className="add-leader-title-text">
                <h1>Introduce a Leader, Inspire a Community</h1>
              </div>
              <p className="fade-left flex flex-col justify-center items-center">
              Share the story of a remarkable leader who is making a difference. By adding a community leader, you help highlight their impact and inspire others to follow their path of service and dedication.
              </p>          
          </div>
          <div className="add-leader-subtitle fade-right">
            <p className="add-leader-description fade-right">
                <span className="add-leader-avatar-container">
                    <img src={avatar} alt="avatar" className="add-leader-avatar-img" />
                    <p className="avatar-text">Celebrate a leader and their inspiring journey.</p>
                </span>
            </p>
            <button 
              className="join-btn zoom-fade"
              onClick={() => {
                const element = document.getElementById('add-leader-form');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Add a Leader Today
              <img src={arrow} alt="arrow-btn" className="arrow-btn" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddLeaderHeader;