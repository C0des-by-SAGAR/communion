import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import Navbar from '../Navbar';
import HelpRequestForm from './HelpRequestForm';
import members from '../../comm-assets/HelpCenter/members.avif';
import './CreateHelpRequest.css';
import LatestRequests from './LatestRequests';
import FooterEvent from '../Upcoming Events/Footer-event';
const CreateHelpRequest = () => {
  return (
    <>
      <Navbar />
      <div className="create-help-request">
        <div className="help-request-header">
          <div className="header-content">
            <div className="header-left">
              <h1>Request Help and Connect with the Community</h1>
              <p>Submit your request and let the community lend a hand. Fill out the form below with the details of your need, and we'll help connect you with those who can assist.</p>
            </div>
            <div className="header-right">
              <div className="community-preview">
                <div className="preview-content">
                  <img src={members} alt="Community members" className="members-image" />
                  <div className="community-text">
                    <p>Stay Updated with Community Needs</p>
                  </div>
                </div>
                <Link to="/help-center" className="view-requests-button">
                  View Help Requests <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <HelpRequestForm />
        <LatestRequests />
      </div>
      <FooterEvent />
    </>
  );
};

export default CreateHelpRequest; 