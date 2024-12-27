import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Testimonials.css';
import person1 from '../comm-assets/Testimonials/person-1.avif';
import person2 from '../comm-assets/Testimonials/person-2.avif';
import person3 from '../comm-assets/Testimonials/person-3.avif';
import prev from '../comm-assets/Testimonials/Vector-prev.png';
import next from '../comm-assets/Testimonials/Vector-next.png';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      text: "Communion has transformed how I connect with my community, fostering unity and understanding among diverse faiths.",
      author: "John M.,",
      location: "USA",
      image: person1,
      bgColor: "#DEE2FF",
      color: "#111928"
    },
    {
      text: "Being part of Communion is life-changing, blending innovation with spirituality to create a truly inclusive space.",
      author: "Rohan K.,",
      location: "India",
      image: person2,
      bgColor: "#111928",
      color: "#FFFFFF"
    },
    {
      text: "Through Communion, I've joined events and discussions that broadened my perspective and connected me globally.",
      author: "Amira L.,",
      location: "UAE",
      image: person3,
      bgColor: "#DEE2FF",
      color: "#111928"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  // Create a circular array for smooth transition
  const getVisibleTestimonials = () => {
    const visibleTestimonials = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visibleTestimonials.push(testimonials[index]);
    }
    return visibleTestimonials;
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-content">
        <h2 className="testimonials-title">
          Trusted by Over 1500+ Active<br />Global Users
        </h2>
        <p className="testimonials-subtitle">
          Join a growing community of over 1500 users worldwide who trust us to 
          connect, engage, and thrive together.
        </p>

        <div className="testimonials-slider">
          <div 
            className="testimonials-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`
            }}
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card 
                key={index} 
                className="testimonial-card"
                style={{ 
                  backgroundColor: testimonial.bgColor,
                  color: testimonial.color
                }}
              >
                <Card.Body>
                  <Card.Text className="testimonial-text">
                    {testimonial.text}
                  </Card.Text>
                  <div className="testimonial-author">
                    <Card.Img 
                      src={testimonial.image} 
                      className="author-image"
                      alt=""
                    />
                    <div className="author-info">
                      <Card.Text className="author-name">
                        {testimonial.author}
                      </Card.Text>
                      <Card.Text className="author-location">
                        {testimonial.location}
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

        <div className="navigation-buttons">
          <button 
            className="nav-button prev"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <img src={prev} alt="" className='svg-img'/>
          </button>
          <button 
            className="nav-button next"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <img src={next} alt="" className='svg-img'/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 