import React from 'react';
import Container from './Container';
import ImageCard from './subcomponents/ImageCard';
import UA from '../comm-assets/hero-section/unlimited-advantages.png';
import people from '../comm-assets/hero-section/8-people.png';
import arrow from '../comm-assets/hero-section/arrow.png';
import smallcard from '../comm-assets/hero-section/small-card-1.png';
import smallcard2 from '../comm-assets/hero-section/small-card-2.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="min-vh-100 relative hero" style={{ backgroundColor: 'var(--color-background-white)' }}>
      <Container>
        <div className="flex flex-column items-center justify-center min-vh-100 tc">
          <h1 className="f-headline fw9 mb4">
            Connect Communities
          </h1>
          <div className="mb5">
            <h2 className="f3 fw5 lh-copy mb4" style={{ color: 'var(--color-button-darkgrey)' }}>
              Bridging gaps between faiths with tech and a dash of fun!
            </h2>
          </div>
          <div className='hero-layout'>
            <div className='column-left'>
              <div className="mb4">
                <div className="flex items-center mb3">
                  <div className="br-100 bg-blue mr2" style={{width: '20px', height: '20px'}}>
                    <svg viewBox="0 0 24 24" fill="white" className="pa1">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <span className="f5"><img src={UA} alt="Unlimited Advantages" /></span>
                </div>
                <div>
                <span className='flex'>
                  <h2 className="f2 fw7">Unite, Innovate,</h2><img src={smallcard} alt="small card" className='smallcard-1'/> 
                </span> 
                <span className='flex'>
                  <img src={smallcard2} alt="small card" className='smallcard-2'/><h2 className="f2 fw7">Connect, Inspire Together</h2>
                </span>
                </div>
                <div className='flex flex-column-2 items-center'>
                  <button 
                    className="bn br2 pointer mr4 button"
                  >
                    <div className='white flex items-center justify-space-between'>
                      View Our Services
                      <img src={arrow} alt="arrow" className='arrow' />
                    </div>
                  </button>
                  <span className="f4"><img src={people} alt="8 people" className='people'/></span>
                </div>
              </div>
            </div>
            <div className='column-right'>
              <ImageCard/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;