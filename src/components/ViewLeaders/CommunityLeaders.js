import React, { useEffect, useRef } from 'react';
import './CommunityLeaders.css';
import leader1 from '../../comm-assets/Leader/leader-1.avif';
import leader2 from '../../comm-assets/Leader/leader-2.avif';
import leader3 from '../../comm-assets/Leader/leader-3.avif';
import leader4 from '../../comm-assets/Leader/leader-4.avif';
import leader5 from '../../comm-assets/Leader/leader-5.avif';
import leader6 from '../../comm-assets/Leader/leader-6.avif';
import leader7 from '../../comm-assets/Leader/leader-7.avif';
import leader8 from '../../comm-assets/Leader/leader-8.avif';
import leader9 from '../../comm-assets/Leader/leader-9.webp';
import leader10 from '../../comm-assets/Leader/leader-10.avif';
import leader11 from '../../comm-assets/Leader/leader-11.avif';
import leader12 from '../../comm-assets/Leader/leader-12.avif';
import arrow from '../../comm-assets/hero-section/arrow.png';

const CommunityLeaders = () => {
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
      const cards = section.querySelectorAll('.leader-profile-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => {
      if (section) {
        const cards = section.querySelectorAll('.leader-profile-card');
        cards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  const leaders = [
    {
      id: 1,
      name: "Rabbi David Cohen",
      organization: "Jewish Community",
      description: "Rabbi Cohen is a spiritual leader dedicated to fostering unity, tradition, and spiritual growth within the Jewish community.",
      image: leader1
    },
    {
      id: 2,
      name: "Ashok",
      organization: "Catholic Community",
      description: "Bishop Maria Rui leads with compassion and faith, guiding her congregation to deeper connections with God and one another.",
      image: leader2
    },
    {
      id: 3,
      name: "Swami Vivekananda Patel",
      organization: "Hindu Heritage Temple",
      description: "Swami Patel is a respected figure in the Hindu community, dedicated to spiritual teachings, wellness, and cultural preservation.",
      image: leader3
    },
    {
      id: 4,
      name: "Imam Amina El-Masri",
      organization: "Masjid Noor",
      description: "Imam Amina El-Masri provides guidance and leadership to the Muslim community of Masjid Noor, emphasizing peace, charity, and spiritual growth.",
      image: leader4
    },
    {
      id: 5,
      name: "Pastor John Mitchell",
      organization: "Faith Community Church",
      description: "Pastor Mitchell is a pillar of strength and compassion, leading his congregation in faith-based outreach and community building.",
      image: leader5
    },
    {
      id: 6,
      name: "Buddhist Monk Tenzin Dorje",
      organization: "Zen Center of Harmony",
      description: "Monk Tenzin Dorje offers teachings on mindfulness, meditation, and peace, helping individuals find harmony and balance in their lives.",
      image: leader6
    },
    {
      id: 7,
      name: "Guru Anjali Sharma",
      organization: "Shanti Mandir",
      description: "Guru Sharma leads with a focus on spiritual enlightenment, guiding followers to inner peace and devotion in community service.",
      image: leader7
    },
    {
      id: 8,
      name: "Sister Maria Gonzales",
      organization: "St. Francis Outreach Center",
      description: "Sister Maria Gonzales is committed to providing service and support to those in need, offering compassion and outreach through the St. Francis Center.",
      image: leader8
    },
    {
      id: 9,
      name: "Rabbi David Cohen",
      organization: "Jewish Community",
      description: "Rabbi is a spiritual leader dedicated to fostering unity, tradition, and spiritual growth within the Jewish community.",
      image: leader9
    },
    {
      id: 10,
      name: "John",
      organization: "Catholic Community",
      description: "John is deeply involved in community outreach and faith-based initiatives, supporting the spiritual growth of his congregation.",
      image: leader10
    },
    {
      id: 11,
      name: "James O'Connor",
      organization: "Youth Empowerment",
      description: "James Kumar is a passionate advocate for empowering youth, helping them develop leadership skills and positive futures.",
      image: leader11
    },
    {
      id: 12,
      name: "Rajesh Kumar",
      organization: "Unity in Diversity Hinduism",
      description: "Rajesh Kumar works to foster inclusivity and harmony within the Hindu community, promoting unity through diversity.",
      image: leader12
    }
  ];

  return (
    <section className="community-leaders-section" id="community-leaders" ref={sectionRef}>
      <div className="community-leaders-header">
        <h2>Community Leaders</h2>
        <p>
          Discover the profiles of our distinguished community leaders. See how their expertise and commitment 
          are driving impactful change and fostering stronger communities.
        </p>
      </div>

      <div className="leaders-profiles-grid">
        {leaders.map((leader, index) => (
          <div 
            key={leader.id} 
            className="leader-profile-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="leader-profile-image">
              <img src={leader.image} alt={leader.name} />
            </div>
            <div className="leader-profile-content">
              <h3>{leader.name}</h3>
              <p className="organization">{leader.organization}</p>
              <p className="description">{leader.description}</p>
              <p className="view-profile">View Profile &gt;</p>
              <span className="profile-actions">
                <button className="connect">
                    Connect <img src={arrow} alt="arrow" className="arrow-png" />
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityLeaders;
