import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HelpRequestForm.css';
import { FiCalendar } from 'react-icons/fi';

const HelpRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    needHelp: '',
    category: '',
    urgencyLevel: '',
    description: '',
    documents: null,
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="help-request-form-container">
      <div className="form-pattern" />
      <h2>Fill in the details to Submit a Help Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Need of Help</label>
          <input
            type="text"
            name="needHelp"
            placeholder="What do you need help with?"
            value={formData.needHelp}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select...</option>
              <option value="general">General Assistance</option>
              <option value="health">Health & Wellness</option>
              <option value="education">Education Support</option>
              <option value="emergency">Emergency Aid</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Urgency Level</label>
            <select
              name="urgencyLevel"
              value={formData.urgencyLevel}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select...</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Briefly describe your need in detail (maximum 250 characters). Be clear and specific about the help you're seeking."
            value={formData.description}
            onChange={handleChange}
            rows={6}
            maxLength={250}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Upload Supporting Documents/Photos</label>
            <input
              type="text"
              name="documents"
              placeholder="File Upload"
              className="file-input"
              readOnly
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <div className="date-input-wrapper">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="date-input"
                min={new Date().toISOString().split('T')[0]}
                required
              />
              <FiCalendar className="calendar-icon" />
            </div>
          </div>
        </div>

        <div className="button-group">
          <button type="submit" className="submit-button">
            Submit Help Request
          </button>
          <Link to="/help-center" className="view-button">
            View Help Requests
          </Link>
          <Link to="/" className="back-button">
            Back to Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default HelpRequestForm; 