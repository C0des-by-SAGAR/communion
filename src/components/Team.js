import React from 'react';
import './Team.css';
import arrow from '../comm-assets/hero-section/arrow.png';

// Import team member images
import container1 from '../comm-assets/Team/Container-1.png';
import container2 from '../comm-assets/Team/Container-2.png';
import container3 from '../comm-assets/Team/Container-3.png';
import container4 from '../comm-assets/Team/Container-4.png';
import container5 from '../comm-assets/Team/Container-5.png';
import container6 from '../comm-assets/Team/Container-6.png';
import container7 from '../comm-assets/Team/Container-7.png';
import container8 from '../comm-assets/Team/Container-8.png';

const Team = () => {
  return (
    <section className="team-section">
      <div className="team-content">
        <div className="team-info">
          <h2 className="team-title">Meet Our Social<br />Expert Team</h2>
          <p className="team-description">
            Our expert team blends technology, spirituality, and community engagement 
            to create an inclusive platform where everyone can connect, share, and grow. 
            Meet the passionate people behind Communion's vision!
          </p>
          <button className="team-cta">
            Connect With Us
            <img src={arrow} alt="" className="arrow" aria-hidden="true" />
          </button>
        </div>

        <div className="team-members">
          <div className="team-member">
            <img src={container1} alt="Rohan K" className="member-image" />
          </div>
          <div className="team-member">
            <img src={container2} alt="Swami Vivekanan" className="member-image" />
          </div>
          <div className="team-member">
            <img src={container3} alt="Imam Amina El-Masri" className="member-image" />
          </div>
          <div className="team-member">
            <img src={container4} alt="Amira L" className="member-image" />
          </div>
          <div className="team-member">
            <img src={container5} alt="Pastor John Matthews" className="member-image" />
          </div>
          <div className="team-member">
            <img src={container6} alt="Acharya Siddheshwar Jain" className="member-image" />
          </div>
          <div className="team-member">
            <img src={container7} alt="Reverend Marcus" className="member-image" />
          </div>
          <div className="team-member">
            <img src={container8} alt="Kim Jae-hyun" className="member-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
