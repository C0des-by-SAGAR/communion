import React, { useState } from 'react';
import { FiChevronDown, FiArrowUpRight } from 'react-icons/fi';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the Help Requests page?",
      answer: "The Help Requests page allows users to share and respond to community needs in real time."
    },
    {
      question: "Who can post a help request?",
      answer: "Any registered member of the community can post a help request."
    },
    {
      question: "How do I respond to a help request?",
      answer: "Click on a request that interests you and follow the instructions to offer your support."
    },
    {
      question: "How do I ensure my help request gets noticed?",
      answer: "Use a clear title, provide specific details, and choose relevant categories for your request."
    },
    {
      question: "Can I edit or delete my help request after posting?",
      answer: "Yes, you can edit or delete your request through your account dashboard."
    },
    {
      question: "How do I verify the legitimacy of a help request?",
      answer: "Always exercise caution and communicate directly with the requester to confirm details."
    },
    {
      question: "Are there guidelines for posting help requests?",
      answer: "Yes, always exercise caution and communicate directly with the requester to confirm details."
    },
    {
      question: "Is there a limit to how many help requests I can post?",
      answer: "You can post multiple requests, but please ensure they are genuine and necessary."
    }
  ];

  return (
    <div className="help-faq-section">
      <div className="help-faq-container">
        <div className="help-faq-header">
          <div className="help-faq-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="help-faq-description">
            <p>
              Have questions? We've got you covered! Explore the frequently asked
              questions below to learn more about how to use the Help Requests page
              effectively and make the most out of your experience.
            </p>
            <button className="help-faq-button">
              Help <FiArrowUpRight />
            </button>
          </div>
        </div>

        <div className="help-faq-grid">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`help-faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <div className="help-faq-question">
                <h3>{faq.question}</h3>
                <FiChevronDown className="icon" />
              </div>
              <div className="help-faq-answer">
                <div>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 