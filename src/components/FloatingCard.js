import React, { useState } from 'react';
import './FloatingCard.css';
import image1 from '../comm-assets/FloatingCard/image-1.webp';
import image2 from '../comm-assets/FloatingCard/image-2.jpg';
import image3 from '../comm-assets/FloatingCard/image-3.jpg';
import image4 from '../comm-assets/FloatingCard/image-4.jpg';
import image5 from '../comm-assets/FloatingCard/image-5.jpg';
import image6 from '../comm-assets/FloatingCard/image-6.jpeg';
import svg from '../comm-assets/FloatingCard/SVG.png';

const FloatingCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`floating-card ${isExpanded ? 'expanded' : 'collapsed'}`} onClick={toggleCard}>
      {isExpanded ? (
        <section className="card-content">
          <div className="card-header flex flex-column-2 items-center justify-space-between">
            <h2>Discover Countless Moments of Connection Across Diverse Communities</h2>
            <img src={svg} alt="" className='svg-img'/>
          </div>
          <span className='floating-card-btn-container'>
            <button className="explore">Explore Events</button>
            <div className="members-badge">Join 150,000+ Members Worldwide!</div>
          </span>
          
          <div className="gallery-grid">
            <img src={image1} alt="" className="gallery-img" />
            <img src={image2} alt="" className="gallery-img" />
            <img src={image3} alt="" className="gallery-img" />
            <img src={image4} alt="" className="gallery-img" />
            <img src={image5} alt="" className="gallery-img" />
            <img src={image6} alt="" className="gallery-img" />
          </div>

          <div className="stats-container">
            <div className="stat-item">
              <h2>500+</h2>
              <p>Active Users</p>
            </div>
            <div className="stat-item">
              <h2>100+</h2>
              <p>Religious Groups</p>
            </div>
            <div className="stat-item">
              <h2>10,000+</h2>
              <p>Engagements Daily</p>
            </div>
          </div>
        </section>
      ) : (
        <div className="chevron-down">
            <img src={svg} alt="" className='svg-img'/>
        </div>
      )}
    </div>
  );
};

export default FloatingCard;