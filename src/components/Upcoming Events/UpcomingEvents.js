import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import Events from './Events';
import Discover from './Discover';
import FAQs from './FAQs';
import Opportunity from './Opportunity';
import Newsletter from './Newsletter';
import FooterEvent from './Footer-event';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './animations.css';

const UpcomingEvents = () => {
  useScrollAnimation();

  useEffect(() => {
    // Add hero animation classes on load
    const heroElements = document.querySelectorAll('.hero-section *');
    heroElements.forEach((el, index) => {
      if (el.tagName === 'H1' || el.tagName === 'H2') {
        el.classList.add('hero-animate');
      } else if (el.tagName === 'P') {
        el.classList.add('hero-text-animate');
      } else if (el.tagName === 'BUTTON' || el.tagName === 'IMG') {
        el.classList.add('hero-button-animate');
      }
      el.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <main className="w-100">
      <HeroSection />
      <Events />
      <Discover />
      <FAQs />
      <Opportunity />
      <Newsletter />
      <FooterEvent />
    </main>
  );
};

export default UpcomingEvents;
