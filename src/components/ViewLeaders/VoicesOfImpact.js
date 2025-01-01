import React, { useState, useRef, useEffect } from 'react';
import './VoicesOfImpact.css';
import member1 from '../../comm-assets/Leader/impact-1.avif';
import member2 from '../../comm-assets/Leader/impact-2.avif';
import member3 from '../../comm-assets/Leader/impact-3.avif';
import navvector from '../../comm-assets/Leader/Vector-prev.png';
import navvector2 from '../../comm-assets/Leader/Vector-next.png';

const VoicesOfImpact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Emily Roberts",
      role: "Community Member",
      image: member1,
      quote: "Joining this community has been a transformative experience. The leadership, support, and resources available have empowered me to make meaningful changes in both my personal and professional life. The connections I've made here are invaluable, and I'm grateful to be part of such an inspiring group of people.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Community Leader",
      image: member2,
      quote: "Being part of this community has opened new horizons for me. The collaborative spirit and diverse perspectives have enriched my understanding and helped me grow as a leader. The support system here is phenomenal, and I've seen remarkable transformations in both myself and others.",
      rating: 5
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Program Coordinator",
      image: member3,
      quote: "The impact of this community extends far beyond what I initially expected. The mentorship and guidance available have been instrumental in my journey. It's incredible to see how our collective efforts create ripples of positive change throughout our broader community.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    if (currentSlide < testimonials.length - 1) {
      setCurrentSlide(currentSlide + 1);
      sliderRef.current.style.transform = `translateX(-${(currentSlide + 1) * 100}%)`;
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      sliderRef.current.style.transform = `translateX(-${(currentSlide - 1) * 100}%)`;
    }
  };

  return (
    <section className="voices-impact-section" ref={sectionRef}>
      <h2 className="voices-impact-title">
        Voices of Impact: Real Stories from Our Leaders
      </h2>

      <div className="testimonial-carousel-container">
        <button 
          className="carousel-button prev"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          <img src={navvector} alt="prev" />
        </button>

        <div className="testimonial-window">
          <div className="testimonial-slider" ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="testimonial-slide"
              >
                <div className="testimonial-content">
                  <div className="testimonial-image-container">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="testimonial-image"
                    />
                  </div>
                  <div className="testimonial-text">
                    <p className="testimonial-quote">"{testimonial.quote}"</p>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="carousel-button next"
          onClick={nextSlide}
          disabled={currentSlide === testimonials.length - 1}
        >
          <img src={navvector2} alt="next" />
        </button>
      </div>
    </section>
  );
};

export default VoicesOfImpact;
