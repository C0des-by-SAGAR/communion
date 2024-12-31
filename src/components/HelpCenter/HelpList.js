import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './HelpList.css';

const HelpList = () => {
  const helpRequests = [
    {
      title: 'Clothes',
      topic: 'Topic: Child Care',
      date: 'November 21, 2024',
      description: 'I am in urgent need of clothes and would be incredibly grateful for any help you can provide during this difficult time. Your kindness would mean a lot to me.',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1470&auto=format&fit=crop'
    },
    {
      title: 'Shelter',
      date: 'November 21, 2024',
      description: 'I am in urgent need of shelter for a day and would be deeply grateful for any help you can offer. Your kindness would mean a great deal to me.',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1470&auto=format&fit=crop'
    },
    {
      title: 'Child Care',
      date: 'November 21, 2024',
      description: 'I am in urgent need of child care assistance due to a medical emergency and would be truly grateful for any help you can offer. Your kindness would mean a lot during this time.',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1470&auto=format&fit=crop'
    },
    {
      title: 'Meal',
      date: 'November 21, 2024',
      description: 'I am in urgent need of a meal due to financial difficulties and would greatly appreciate any assistance you can provide. Your kindness would mean a lot to me during this time.',
      image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=1470&auto=format&fit=crop'
    },
    {
      title: 'Shelter',
      date: 'November 21, 2024',
      description: 'I am urgently looking for shelter for a day due to unforeseen circumstances and would greatly appreciate any assistance you can offer. Your help would mean a lot to me during this difficult time.',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1470&auto=format&fit=crop'
    },
    {
      title: 'Transport',
      date: 'November 22, 2024',
      description: 'I need assistance with arranging transportation for an emergency medical appointment. Public transport options are not available in my area of Lucknow, Uttar Pradesh.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1470&auto=format&fit=crop'
    },
    {
      title: 'Temporary Shelter',
      date: 'November 22, 2024',
      description: 'Due to a fire in my home, my family and I are currently without a place to stay. We are seeking temporary shelter until we can rebuild. Any assistance, such as a place to stay or a temporary shelter facility, would be greatly appreciated.',
      image: 'https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=1470&auto=format&fit=crop'
    },
    {
      title: 'Fundraising for Flood Relief',
      date: 'November 25, 2024',
      description: 'Recent floods have left many families in our area without homes or basic necessities. We are raising funds to provide emergency aid, including food, shelter, and medical support. Please help us rebuild their lives.',
      image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=1470&auto=format&fit=crop'
    }

  ];

  return (
    <div className="help-list-section">
      <div className="help-list-header">
        <h2>Stay Updated with Community Needs</h2>
        <div className="subheader">
          <span className="star-icon">✦</span>
          <span className="latest-requests">Latest Help Requests</span>
        </div>
      </div>

      <div className="help-list">
        {helpRequests.map((request, index) => (
          <div key={index} className="help-request-card">
            <div className="request-image">
              <img src={request.image} alt={request.title} />
            </div>
            <div className="request-content">
              <h3>{request.title}</h3>
              {request.topic && <p className="topic">{request.topic}</p>}
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

export default HelpList; 