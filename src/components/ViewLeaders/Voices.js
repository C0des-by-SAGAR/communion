import React, { useEffect, useRef } from 'react';
import './Voices.css';
import leader1 from '../../comm-assets/Leader/voice-1.avif';
import leader2 from '../../comm-assets/Leader/voice-2.avif';
import leader3 from '../../comm-assets/Leader/voice-3.avif';
import leader4 from '../../comm-assets/Leader/voice-4.avif';
import arrow from '../../comm-assets/hero-section/arrow.png';
import star from '../../comm-assets/Leader/shooting-star.jpg';

const Voices = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const cards = section.querySelectorAll('.leader-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => {
      if (section) {
        const cards = section.querySelectorAll('.leader-card');
        cards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  const leaders = [
    {
      id: 1,
      name: "Md Abrar",
      role: "Community Advocate",
      quote: "A community advocate with a mission to uplift others, Sophia believes, \"True leadership is about listening, learning, and lifting others up.\"",
      image: leader1
    },
    {
      id: 2,
      name: "James O'Connor",
      role: "Community Connector",
      quote: "As a connector and motivator, James lives by the motto, \"Every small act of kindness strengthens the bonds of our community.\"",
      image: leader2
    },
    {
      id: 3,
      name: "Ashok",
      role: "Visionary Leader",
      quote: "A passionate unifier, Alisha reminds us, \"Unity is the foundation of progress—together, we can achieve greatness.\"",
      image: leader3
    },
    {
      id: 4,
      name: "Ethan",
      role: "Empowerment Specialist",
      quote: "Known for his empowering vision, Ethan shares, \"A leader's role is to inspire others to believe in their own power to make a difference.\"",
      image: leader4
    }
  ];

  return (
    <section className="voices-section" ref={sectionRef}>
      <div className="voices-header">
        <h2 className="voices-title fade-up">Voices of Leadership:</h2>
        <h2 className="voices-subtitle fade-up">Inspiring Change</h2>
        <p className="voices-description fade-up">
          Meet the leaders shaping our communities with their vision, passion, and dedication.
          <br />Let their words ignite your journey to make an impact.
        </p>
        <button 
          className="join-leaders-btn ripple-glow fade-up"
          onClick={() => {
            document.getElementById('community-leaders').scrollIntoView({ 
              behavior: 'smooth'
            });
          }}
        >
          Be the Next Voice of Change - Join Our Leaders Today
          <img src={arrow} alt="arrow" className="view-arrow-btn" />
        </button>
      </div>

      <div className="leaders-grid">
        {leaders.map((leader, index) => (
          <div 
            key={leader.id} 
            className="leader-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="leader-content">
            <span className="leader-icon">
                <img src={star} alt="star" className="star-icon" />
            </span>
              <p className="leader-quote">{leader.quote}</p>
              <div className="leader-info">
                <h3>{leader.name} - <span>{leader.role}</span></h3>
              </div>
            </div>
            <div className="leader-image-container">
              <img src={leader.image} alt={leader.name} className="leader-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Voices;
