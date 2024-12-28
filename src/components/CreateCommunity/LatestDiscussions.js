import React, { useRef, useEffect } from 'react';
import './LatestDiscussions.css';
import childWelfare from '../../comm-assets/Discover/group-1.avif';
import bibleStudy from '../../comm-assets/Discover/group-2.avif';
import homeless from '../../comm-assets/Discover/group-3.webp';
import bhagavadGita from '../../comm-assets/Discover/group-4.jpg';
import arrow from '../../comm-assets/hero-section/arrow.png';


const Latestlatest = () => {
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
        const cards = section.querySelectorAll('.discussion-card');
        cards.forEach((card) => observer.observe(card));
      }
  
      return () => {
        if (section) {
          const cards = section.querySelectorAll('.discussion-card');
          cards.forEach((card) => observer.unobserve(card));
        }
      };
    }, []);
  
    const latest = [
      {
        id: 1,
        title: "Child Welfare Support",
        topic: "Topic: Child Care",
        description: "A space for discussing issues related to child welfare, safety, and mental well-being. The group ...",
        image: childWelfare
      },
      {
        id: 2,
        title: "Bible Study Circle",
        topic: "Topic: Bible Groups",
        description: "An engaging group for those interested in exploring the teachings of the Bible. latest range ...",
        image: bibleStudy
      },
      {
        id: 3,
        title: "Support for the Homeless",
        topic: "Topic: Homeless People",
        description: "A group aimed at brainstorming ways to assist homeless individuals and families. Topics include shelter ...",
        image: homeless
      },
      {
        id: 4,
        title: "Bhagavad Gita Reflections",
        topic: "Topic: Bhagavad Gita Group",
        description: "A community dedicated to reading and reflecting on the teachings of the Bhagavad Gita. latest ...",
        image: bhagavadGita
      }
    ];
  
    return (
      <section className="latest-section" id="latest-section" ref={sectionRef}>
        <div className="latest-header">
          <h2>
            <span className="diamond-icon">✦</span>
            <span className="highlighted-text">Latest Group Discussions</span>
          </h2>
        </div>
  
        <div className="latest-grid">
          {latest.map((discussion, index) => (
            <div 
              key={discussion.id} 
              className="discussion-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="discussion-image-container">
                <img 
                  src={discussion.image} 
                  alt={discussion.title} 
                  className="discussion-image"
                />
              </div>
              <div className="discussion-details">
                <h3>{discussion.title}</h3>
                <p className="discussion-topic">{discussion.topic}</p>
                <p className="discussion-description">{discussion.description}</p>
                <p className="learn-more">Learn More »</p>
                <button className="join-conversation">
                  <span className="flex justify-center items-center gap-2">
                    Join Conversation
                    <img src={arrow} alt="arrow" className="arrow-icon" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Latestlatest;