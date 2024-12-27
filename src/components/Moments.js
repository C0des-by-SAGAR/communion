import React from 'react';
import Card from 'react-bootstrap/Card';
import './Moments.css';
import arrow from '../comm-assets/hero-section/arrow.png';

// Import your images
import moment1 from '../comm-assets/Moments/moments-1.jpg';
import moment2 from '../comm-assets/Moments/moments-2.avif';
import moment3 from '../comm-assets/Moments/moments-3.avif';
import moment4 from '../comm-assets/Moments/moments-4.avif';
import moment5 from '../comm-assets/Moments/moments-5.avif';
import moment6 from '../comm-assets/Moments/moments-6.avif';

const Moments = () => {
  const moments = [
    {
      image: moment1,
      title: "Shared Service Projects",
      description: "Make a difference by joining hands to support impactful projects that uplift communities and bring positive change.",
      link: "View Cast Study >"
    },
    {
      image: moment2,
      title: "Community Celebrations",
      description: "Experience the joy of shared festivities as we honor traditions, embrace diversity, and strengthen communal bonds.",
      link: "View Cast Study >"
    },
    {
        image: moment3,
      title: "Volunteer Gatherings",
      description: "Join like-minded individuals in meaningful initiatives, giving back to communities and building lasting connections.",
      link: "View Cast Study >"
    },
    {
      image: moment4,
      title: "Cultural Exchanges",
      description: "Explore unique traditions, cuisines, and stories, building bridges across diverse cultures and backgrounds.",
      link: "View Cast Study >"
    },
    {
      image: moment5,
      title: "Volunteer Gatherings",
      description: "Join like-minded individuals in meaningful initiatives, giving back to communities and building lasting connections.",
      link: "View Cast Study >"
    },
    {
      image: moment6,
      title: "Analytics and Reporting",
      description: "Our cutting-edge social media marketing tactics will help you maximize your brand's online visibility and expand your business exponentially.",
      link: "View Cast Study >"
    }
  ];

  return (
    <section className="moments-section">
      <div className="moments-content">
        <div className="moments-header">
          <h2 className="moments-title">
            Moments of Connection We've<br />Made So Far...
          </h2>
          <p className="moments-description">
            Explore the impactful connections we've fostered so far, bringing together diverse communities
            through shared experiences, collaboration, and innovation.
          </p>
          <button className="moments-cta">
            <span>View All Moments</span>
            <img src={arrow} alt="" className="arrow" aria-hidden="true" />
          </button>
        </div>

        <div className="moments-grid">
          {moments.map((moment, index) => (
            <div key={index} className="moment-card">
              <Card>
                <Card.Body>
                <Card.Img variant="top" src={moment.image} className="moment-image" />
                  <div className="card-title">{moment.title}</div>
                  <div className='card-text'>{moment.description}</div>
                  <button className="moment-link">
                    <span>{moment.link}</span>
                  </button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Moments; 