import React, { useEffect, useRef } from 'react';
import './CommunityLeaderCards.css';
import leader1 from '../../comm-assets/Leader/leader-1.avif';
import leader2 from '../../comm-assets/Leader/leader-2.avif';
import leader3 from '../../comm-assets/Leader/leader-3.avif';
import leader4 from '../../comm-assets/Leader/leader-4.avif';
import arrow from '../../comm-assets/hero-section/arrow.png';

const CommunityLeaderCards = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-view');
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
      name: "Rabbi David Cohen",
      community: "Jewish Community",
      description: "Rabbi Cohen is a spiritual leader dedicated to fostering unity, tradition, and spiritual growth within the Jewish community.",
      image: leader1
    },
    {
      id: 2,
      name: "Ashok",
      community: "Catholic Community",
      description: "Bishop Maria Ruiz leads with compassion and faith, guiding her congregation to deeper connections with God and one another.",
      image: leader2
    },
    {
      id: 3,
      name: "Swami Vivekananda Patel",
      community: "Hindu Heritage Temple",
      description: "Swami Patel is a respected figure in the Hindu community, dedicated to spiritual teachings, wellness, and cultural preservation.",
      image: leader3
    },
    {
      id: 4,
      name: "Imam Amina El-Masri",
      community: "Masjid Noor",
      description: "Imam Amina El-Masri provides guidance and leadership to the Muslim community at Masjid Noor, emphasizing peace, charity, and spiritual growth.",
      image: leader4
    }
  ];

  return (
    <section className="community-add-leaders-section" ref={sectionRef}>
      <h2 className="section-title">
        ✦ Community Leaders
      </h2>

      <div className="leaders-grid">
        {leaders.map(leader => (
          <div key={leader.id} className="leader-card">
            <div className="leader-image-wrapper">
              <img src={leader.image} alt={leader.name} />
            </div>
            <div className="leader-info">
              <h3>{leader.name}</h3>
              <p className="community-name">{leader.community}</p>
              <p className="description">{leader.description}</p>
              <p className="view-profile b">View Profile &gt;</p>
              <button className="connect-button">
                Connect <span className="arrow">
                    <img src={arrow} alt="arrow" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityLeaderCards;
