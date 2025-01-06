import React from 'react';
import './RealStories.css';
import realStoriesImage from '../../comm-assets/Discover/RealStroies.avif';
import Kamal from '../../comm-assets/Discover/Kamal.avif';
import Steven from '../../comm-assets/Discover/Steven.avif';
import Priya from '../../comm-assets/Discover/Priya.avif';
import Sarah from '../../comm-assets/Discover/Sarah.jpg';

const RealStories = () => {
  const realStories = [
    {
      id: 1,
      quote: "The group discussions are not just informative but also deeply engaging. It feels amazing to be part of a community that values everyone's input. Through these discussions, I've gained new perspectives on child welfare and learned practical strategies for supporting children's emotional well-being. The diverse experiences shared by other members have helped me develop a more comprehensive approach to childcare. What stands out most is how the community fosters an environment of mutual respect and continuous learning. The practical insights shared here have transformed my understanding of child development and community support systems. Every discussion brings new ideas and innovative approaches to nurturing young minds.",
      name: "Kamal",
      role: "Community Enthusiast",
      profileImage: Kamal
    },
    {
      id: 2,
      quote: "Joining these discussions has been a game-changer for me! I've connected with so many inspiring individuals and gained fresh perspectives on spiritual growth and community service. The Bible study discussions are particularly enriching, offering deep insights into scripture and its practical applications in modern life. The supportive environment has helped me grow both personally and spiritually, while the diverse viewpoints shared have broadened my understanding of faith and community service. The way members connect scripture to contemporary challenges has been eye-opening, making ancient wisdom relevant to today's world. Each session leaves me with new insights and practical ways to live out my faith.",
      name: "Steven",
      role: "Active Member",
      profileImage: Steven
    },
    {
      id: 3,
      quote: "I've learned so much from these discussions about supporting the homeless community. The practical insights and collaborative approach to problem-solving have been invaluable. Members share real experiences and innovative solutions that have actually made a difference in their communities. From organizing shelter initiatives to coordinating meal programs, the knowledge shared here has helped me contribute more effectively to my local homeless support programs. The commitment to dignity and respect in our approach is truly inspiring. We've developed comprehensive strategies that address not just immediate needs but also long-term solutions for housing stability and community reintegration. The success stories shared here give hope and practical guidance.",
      name: "Priya",
      role: "Regular Participant",
      profileImage: Priya
    },
    {
      id: 4,
      quote: "Being part of this community has opened new horizons in understanding ancient wisdom and its modern applications. Our discussions on the Bhagavad Gita have been transformative, offering deep insights into life's fundamental questions. The diverse perspectives shared by members from different backgrounds have enriched my understanding of the text immensely. We've explored everything from karma yoga to dharma, and how these teachings apply to modern challenges. The respectful exchange of ideas and practical applications of these timeless teachings has been truly enlightening. The way members connect ancient wisdom with contemporary challenges has helped me develop a more balanced approach to life's complexities. Each discussion reveals new layers of understanding.",
      name: "Sarah",
      role: "Community Leader",
      profileImage: Sarah
    }
  ];

  return (
    <section className="real-stories-section">
      <div className="stories-header">
        <h2>Hear from our community.</h2>
        <span className="stories-subtitle">
            <span className="stories-subtitle-icon">✦</span>
            <h2>Real Stories, Real Impact</h2> 
        </span>
      </div>

      <div className="real-stories-grid">
        <div className="main-image-container">
          <img 
            src={realStoriesImage} 
            alt="Community member" 
            className="main-image" 
          />
        </div>

        <div className="real-stories-container">
          {realStories.map((realStories) => (
            <div key={realStories.id} className="real-stories-card">
              <div className="real-stories-content">
                <blockquote className="real-stories-quote">
                  "{realStories.quote}"
                </blockquote>
                <div className="real-stories-footer">
                  <div className="real-stories-author">
                    <img 
                      src={realStories.profileImage} 
                      alt={realStories.name} 
                      className="author-image" 
                    />
                    <div className="author-info">
                      <h3>{realStories.name}</h3>
                      <p>{realStories.role}</p>
                    </div>
                  </div>
                  <a href="#" className="view-case-study">
                    View Case Study
                    <span className="arrow-icon">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealStories;