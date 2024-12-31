import React from 'react';
import './HelpCenter.css';
import { FiArrowUpRight } from 'react-icons/fi';
import HelpList from './HelpList';
import FAQ from './FAQ';
import Newsletter from './Newsletter';
import Footer from './Footer';

const HelpCenter = () => {
  const supportCategories = [
    {
      title: 'Food',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1470&auto=format&fit=crop',
      link: '/support/food'
    },
    {
      title: 'Shelter',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1470&auto=format&fit=crop',
      link: '/support/shelter'
    },
    {
      title: 'Cloths',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1470&auto=format&fit=crop',
      link: '/support/clothes'
    },
    {
      title: 'Child Care',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop',
      link: '/support/childcare'
    },
    {
      title: 'Medical',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop',
      link: '/support/medical'
    }
  ];

  return (
    <div className="help-center">
      <div className="help-center__header">
        <div className="header-text">
          <h1>Support real-time community needs.</h1>
          <div className="subheader" data-framer-name="Gradient Heading">
            <span className="star-icon">✦</span>
            <span className="lend-hand-text">Lend a Hand Today</span>
          </div>
        </div>
      </div>

      <div className="help-center__grid">
        {supportCategories.map((category, index) => (
          <div 
            key={index} 
            className={`category-card ${index === 0 || index === 1 ? 'large-card' : 'small-card'}`}
          >
            <div 
              className="category-card__image"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${category.image})`,
              }}
            >
              <div className="category-card__content">
                <h3>{category.title}</h3>
                <div className="arrow-icon">
                  <FiArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <HelpList />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HelpCenter;
