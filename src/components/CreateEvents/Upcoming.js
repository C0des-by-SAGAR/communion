import React from 'react';
import './Upcoming.css';
import childSafety from '../../comm-assets/Events/event-3.avif';
import familySupport from '../../comm-assets/Events/event-8.avif';
import charityFundraiser from '../../comm-assets/Events/event-11.avif';
import charityGala from '../../comm-assets/Events/event-15.avif';
import arrow from '../../comm-assets/hero-section/arrow.png';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Upcoming = () => {
  useScrollAnimation();
  const events = [
    {
      id: 1,
      image: childSafety,
      date: {
        badge: {
          month: 'DEC',
          day: '05'
        }
      },
      title: 'Child Safety and Care Workshop',
      description: 'A workshop for parents and caregivers to learn essential child safety tips, first-aid techniques, and stress management practices.'
    },
    {
      id: 2,
      image: familySupport,
      date: {
        badge: {
          month: 'DEC',
          day: '15'
        }
      },
      title: 'Family Support Services Fair',
      description: 'An event where families can connect with support organizations offering resources like counseling, financial aid, and educational support.'
    },
    {
      id: 3,
      image: charityFundraiser,
      date: {
        badge: {
          month: 'NOV',
          day: '15'
        }
      },
      title: 'Annual Charity Fundraiser',
      description: 'Join us for an evening of music, food, and fun as we raise funds for the local homeless shelter. All proceeds will go towards providing warm meals and shelter for those in need this winter.'
    },
    {
      id: 4,
      image: charityGala,
      date: {
        badge: {
          month: 'JAN',
          day: '01'
        }
      },
      title: 'Hope for Tomorrow: Charity Gala Night',
      description: 'An enchanting evening of music, art, and generosity to raise funds for children\'s education. Enjoy live performances, a silent auction, and dinner with inspiring speeches. Together, we can make a difference.'
    }
  ];

  return (
    <section className="events-section">
      <div className="events-header">
        <span className="star-icon fade-up">✦</span>
        <h2 className="fade-left">Upcoming Events</h2>
      </div>
      
      <div className="events-grid">
        {events.map((event, index) => (
          <div 
            key={event.id} 
            className="event-card zoom-fade"
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="event-image-container">
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="date-badge">
                <span className="month">{event.date.badge.month}</span>
                <span className="day">{event.date.badge.day}</span>
              </div>
            </div>
            
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              
              <div className="event-actions">
                <p className="learn-more">Learn More &gt;</p>
                <button className="get-tickets-btn">
                  Get Tickets
                  <span className="arrow-icon">
                    <img src={arrow} alt="arrow" className="button-arrow" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Upcoming;