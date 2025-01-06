import React from 'react';
import './LatestRequests.css';
import { FiArrowUpRight } from 'react-icons/fi';

const LatestRequests = () => {
  const requests = [
    {
      id: 1,
      title: 'Clothes',
      topic: 'Topic: Child Care',
      date: 'November 21, 2024',
      description: 'I am in urgent need of clothes and would be incredibly grateful for any help you can provide during this difficult time. Your kindness would mean a lot to me.',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1470&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Shelter',
      topic: 'Topic: Housing',
      date: 'November 21, 2024',
      description: 'I am in urgent need of shelter for a day and would be deeply grateful for any help you can offer. Your kindness would mean a great deal to me.',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1470&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Child Care',
      topic: 'Topic: Child Care',
      date: 'November 21, 2024',
      description: 'I am in urgent need of child care assistance due to a medical emergency and would be truly grateful for any help you can offer. Your kindness would mean a lot during this time.',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1470&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Meal',
      topic: 'Topic: Food',
      date: 'November 21, 2024',
      description: 'I am in urgent need of a meal due to financial difficulties and would greatly appreciate any assistance you can provide. Your kindness would mean a lot to me during this time.',
      image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=1470&auto=format&fit=crop'
    }
  ];

  return (
    <div className="help-list-section">
      <div className="help-list-header">
        <div className="subheader">
          <span className="star-icon">✦</span>
          <span className="latest-requests">Latest Help Requests</span>
        </div>
      </div>

      <div className="help-list">
        {requests.map((request) => (
          <div key={request.id} className="help-request-card">
            <div className="request-image">
              <img src={request.image} alt={request.title} />
            </div>
            <div className="request-content">
              <h3>{request.title}</h3>
              <p className="topic">{request.topic}</p>
              <p className="date">{request.date}</p>
              <p className="description">{request.description}</p>
              <div className="request-footer">
                <a href="#" className="view-profile">View Profile →</a>
                <button className="help-button">
                  Help <FiArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestRequests;
