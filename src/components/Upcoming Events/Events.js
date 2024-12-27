import React from 'react';
import './Events.css';
import event1 from '../../comm-assets/Events/event-1.avif';
import event2 from '../../comm-assets/Events/event-2.avif';
import event3 from '../../comm-assets/Events/event-3.avif';
import event4 from '../../comm-assets/Events/event-4.avif';
import event5 from '../../comm-assets/Events/event-5.avif';
import event6 from '../../comm-assets/Events/event-6.avif';
import event7 from '../../comm-assets/Events/event-7.avif';
import event8 from '../../comm-assets/Events/event-8.avif'; 
import event9 from '../../comm-assets/Events/event-9.avif';
import event10 from '../../comm-assets/Events/event-10.avif';
import event11 from '../../comm-assets/Events/event-11.avif';
import event12 from '../../comm-assets/Events/event-12.avif';
import event13 from '../../comm-assets/Events/event-13.avif';
import event14 from '../../comm-assets/Events/event-14.avif';
import event15 from '../../comm-assets/Events/event-15.avif';
import arrow from '../../comm-assets/hero-section/arrow.png';

const Events = () => {
  const events = [
    {
      id: 1,
      date: 'December 05',
      title: 'Parenting Support Group Meetup',
      image: event1,
      description: 'A supportive space where parents can share their challenges, learn from each other, and grow together in their parenting journey.'
    },
    {
      id: 2,
      date: 'November 14',
      title: 'Health Awareness',
      image: event2,
      description: 'Join us for an informative session about maintaining good health and wellness.'
    },
    {
      id: 3,
      date: 'November 05',
      title: 'Child Safety and Care Workshop',
      image: event3,
      description: 'An informative workshop designed to teach parents everything they need to know about child safety and proper care.'
    },
    {
      id: 4,
      date: 'November 20',
      title: 'Cancer Support Group Meeting',
      image: event4,
      description: 'A support group meeting for cancer patients and their families to share experiences and find strength together.'
    },
    {
      id: 5,
      date: 'December 01',
      title: 'Holiday Toy Drive',
      image: event5,
      description: 'A community initiative to collect toys and bring joy to children during the holiday season.'
    },
    {
      id: 6,
      date: 'December 12',
      title: 'Pet Adoption Day',
      image: event6,
      description: 'Find your new furry friend at our pet adoption event and give them a forever home.'
    },
    {
      id: 7,
      date: 'December 14',
      title: 'Health Awareness Program',
      image: event7,
      description: 'Learn about preventive healthcare and maintaining a healthy lifestyle.'
    },
    {
      id: 8,
      date: 'December 15',
      title: 'Family Support Services Fair',
      image: event8,
      description: 'Connect with various family support services and resources available in our community.'
    },
    {
      id: 9,
      date: 'November 22',
      title: 'Annual Thanksgiving Food Drive',
      image: event9,
      description: 'Help us collect and distribute food to families in need during the Thanksgiving season.'
    },
    {
      id: 10,
      date: 'November 14',
      title: 'Children Care',
      image: event10,
      description: 'Professional guidance on child care and development.'
    },
    {
      id: 11,
      date: 'December 15',
      title: 'Annual Charity Fundraiser',
      image: event11,
      description: 'Join us for our biggest fundraising event of the year to support community initiatives.'
    },
    {
      id: 12,
      date: 'November 21',
      title: 'Welcome Party',
      image: event12,
      description: 'A warm welcome celebration for new community members.'
    },
    {
      id: 13,
      date: 'December 25',
      title: 'Christmas Party',
      image: event13,
      description: 'Annual Christmas celebration bringing the community together for festive fun.'
    },
    {
      id: 14,
      date: 'December 25',
      title: 'Charity Run for a Cause',
      image: event14,
      description: 'A charity run to raise funds and awareness for important community causes.'
    },
    {
      id: 15,
      date: 'January 01',
      title: 'Hope for Tomorrow: Charity Gala Night',
      image: event15,
      description: 'A gala night celebrating hope and raising funds for future community initiatives.'
    }
  ];

  return (
    <section className="events-section">
      <div className="events-header">
        <h2 className="fade-up">
          We Helped Communities Connect & Flourish
          <span className="highlighted-text fade-up"> ✦ Upcoming Events</span>
        </h2>
      </div>

      <div className="events-grid">
        {events.map((event, index) => (
          <div 
            key={event.id} 
            className="event-card zoom-fade"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="event-image-container">
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-date">
                <span className="date-number">{event.date.split(' ')[1]}</span>
                <span className="date-month">{event.date.split(' ')[0]}</span>
              </div>
            </div>
            <div className="event-details">
              <h3>{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <p className='h1'>Learn More &gt;</p>
              <button className="see-details">
                <span className='flex flex-column-2 justify-center items-center'>
                    Get Tickets
                    <img src={arrow} alt="arrow" className="button-arrow" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;