import React from 'react';
import footerImg from '../comm-assets/Footer/footer-img.avif';
import logo from '../comm-assets/Logo/LogoPng.png';
import title from '../comm-assets/Logo/title.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div className="cta-content">
          <div className="cta-image">
            <img src={footerImg} alt="Community gathering" />
          </div>
          <div className="cta-text">
            <h2>Become part of the Communion and connect with a global community.</h2>
            <p>Join Communion to engage with a diverse global community, share meaningful connections, and grow together in an inclusive, innovative space.</p>
            <div className="cta-form">
              <input 
                type="email" 
                placeholder="example@gmail.com" 
                className="email-input"
              />
              <button className="notify-btn">Get Notified</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <span className='flex flex-column-2 items-center justify-space-between'>
              <img src={logo} alt="Communion Logo" className="footer-logo" />
              <img src={title} alt="" className='svg-title'/>
            </span>
            <p>Discover the power of connection with Communion. Uniting diverse communities through spirituality and innovation, we foster inclusivity, collaboration, and social cohesion for a better world.</p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/discover-communities">Communities</a></li>
                <li><a href="/upcoming-events">Events</a></li>
                <li><a href="/view-leaders">Leaders</a></li>
                <li><a href="/support">Support</a></li>
                <li><a href="/profile">Profile</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact</h3>
              <ul>
                <li><a href="tel:+0012345678912">+001234567891</a></li>
                <li><a href="mailto:hello@communion.com">hello@communion.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2024. All right reserved to Communion</p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;