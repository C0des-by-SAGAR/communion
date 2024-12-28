import React, { useState } from 'react';
import './FAQs.css';
import arrow from '../../comm-assets/hero-section/arrow.png';

const FAQs = () => {
  const faqs = [
    {
      question: "What types of events does Communion organize?",
      answer: "We organize a diverse range of events including community meetups, workshops, charity drives, support groups, and educational sessions."
    },
    {
      question: "How do you ensure the quality of your events?",
      answer: "Our events are carefully curated with expert speakers, interactive sessions, and detailed planning to ensure maximum value for participants."
    },
    {
      question: "Are events virtual or in-person?",
      answer: "We offer both virtual and in-person events to accommodate different preferences and ensure maximum accessibility."
    },
    {
      question: "How can I register for an event?",
      answer: "You can register through our website by clicking the 'Get Tickets' button on any event page. The process is simple and straightforward."
    },
    {
      question: "Are group discounts available?",
      answer: "Yes, we offer special rates for group registrations. Contact our team for more information about group pricing."
    },
    {
      question: "What is your cancellation and refund policy?",
      answer: "We have a flexible cancellation policy with full refunds available up to 48 hours before the event."
    },
    {
      question: "Can I volunteer or partner with Communion for events?",
      answer: "Absolutely! We welcome volunteers and partners. Contact us to discuss collaboration opportunities."
    },
    {
      question: "How do I stay updated about future events?",
      answer: "Subscribe to our newsletter and follow our social media channels for the latest updates about upcoming events."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faqs-section">
      <div className="faqs-header">
        <h2 className="faqs-title fade-up">
          Frequently Asked<br />Questions
        </h2>
        <p className="faqs-description fade-left">
          Our dedicated team believes in the power of unity and giving back. Every event 
          we organize is crafted to inspire, support, and strengthen the ties within our communion.
        </p>
        <button 
          className="get-started-btn zoom-fade"
          onClick={() => {
            document.getElementById('events-section').scrollIntoView({ 
              behavior: 'smooth'
            });
          }}
        >
          <span className='flex flex-column-2 items-center justify-space-between'>
            Get Started Now
            <img src={arrow} alt="Arrow" className="button-arrow" />
          </span>
        </button>
      </div>

      <div className="faqs-content">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="faq-item zoom-fade"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer fade-left">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;