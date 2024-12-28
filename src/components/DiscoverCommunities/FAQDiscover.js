import React, { useState, useEffect, useRef } from 'react';
import './FAQDiscover.css';
import arrow from '../../comm-assets/hero-section/arrow.png';

const FAQDiscover = () => {
  const faqs = [
    {
      question: "What are group discussions on this platform?",
      answer: "Group discussions are interactive forums where community members share ideas, insights, and opinions on trending topics."
    },
    {
      question: "How can I stay updated on new discussions?",
      answer: "You can subscribe to notifications or follow specific groups to get updates on the latest conversations."
    },
    {
      question: "How do I join a group discussion?",
      answer: "Simply click on the 'Join a Discussion' button above, browse through available topics, and click to participate. You can start engaging right away!"
    },
    {
      question: "Can I invite friends to join a discussion?",
      answer: "Yes! You can share discussion links with friends or use our invite feature to bring others into the conversation."
    },
    {
      question: "Can I create my own discussion group?",
      answer: "Yes, you can create and moderate your own discussion groups on topics that interest you and your community."
    },
    {
      question: "Are the discussions moderated?",
      answer: "Yes, all discussions are moderated to ensure a respectful and productive environment for everyone."
    },
    {
      question: "Are there any rules for participating in discussions?",
      answer: "Yes, we have community guidelines to ensure respectful and constructive discussions. All participants are expected to follow these guidelines."
    },
    {
      question: "What types of topics are discussed here?",
      answer: "Our platform hosts a wide range of topics including spirituality, community service, social issues, personal growth, and more."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              entry.target.classList.add('fade-in-left');
            }
            if (entry.target === contentRef.current) {
              entry.target.classList.add('fade-in-right');
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section className="faq-section" ref={sectionRef}>
      <div className="faq-header animate-hidden" ref={headerRef}>
        <h2 className="faq-title">Frequently<br />Asked Questions</h2>
        <p className="faq-subtitle">
          Got questions? We've got answers! Explore the FAQs below to learn how to join,
          participate, and make the most of our group discussions.
        </p>
        <button 
          className="join-discussion-btn"
          onClick={() => {
            document.getElementById('discussions-section').scrollIntoView({ 
              behavior: 'smooth'
            });
          }}
        >
          Join a Discussion
          <span className="arrow-icon">
            <img src={arrow} alt="arrow" />
          </span>
        </button>
      </div>

      <div className="faq-content animate-hidden" ref={contentRef}>
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

export default FAQDiscover;