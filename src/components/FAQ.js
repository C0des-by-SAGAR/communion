import React, { useState } from 'react';
import './FAQ.css';
import arrow from '../comm-assets/hero-section/arrow.png';

const FAQ = () => {
  const faqs = [
    {
      question: "What is the Communion app?",
      answer: "A vibrant platform for connecting diverse faiths and communities!"
    },
    {
      question: "How does it promote social cohesion?",
      answer: "By fostering collaboration and understanding through engaging activities!"
    },
    {
      question: "Is it free to use?",
      answer: "Absolutely! Join the fun without spending a dime!"
    },
    {
      question: "Can I meet new people?",
      answer: "Yes! Connect with like-minded individuals and expand your circle!"
    },
    {
      question: "What if I have more questions?",
      answer: "Reach out to our support team anytime!"
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-header">
        <h2 className="faq-title">Frequently<br />Asked Questions</h2>
        <button className="view-all-btn">
          <span className='flex flex-column-2 items-center justify-space-between'>
            View All <img src={arrow} alt="Arrow" className="arrow" />
          </span>
        </button>
      </div>

      <div className="faq-content">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;