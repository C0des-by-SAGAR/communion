import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateCommunityForm.css';

const CreateCommunityForm = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    groupPhoto: null,
    groupName: '',
    groupTopic: '',
    groupCategory: '',
    visibility: '',
    description: '',
    groupAdmin: '',
    inviteMembers: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Add animation class to all form fields
            const formFields = entry.target.querySelectorAll('.form-field, .form-buttons');
            formFields.forEach((field) => {
              field.classList.add('animate');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      groupPhoto: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container" ref={formRef}>
      <h2 className="form-title">Fill in the details to create a New Discussion Group</h2>
      
      <form onSubmit={handleSubmit} className="create-group-form">
        <div className="form-field">
          <label>Group Photo</label>
          <div className="photo-upload-area">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="photo-input"
            />
            {!formData.groupPhoto && (
              <div className="photo-placeholder">
                <div className="placeholder-stripes"></div>
              </div>
            )}
          </div>
        </div>

        <div className="form-field">
          <label>Group Name</label>
          <input
            type="text"
            name="groupName"
            placeholder="Enter the name of your discussion group, e.g. 'Child Welfare Support'"
            value={formData.groupName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label>Group Topic</label>
          <input
            type="text"
            name="groupTopic"
            placeholder="Enter your group topic, e.g. 'Child Care'"
            value={formData.groupTopic}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-row">
          <div className="form-field half">
            <label>Group Category</label>
            <select 
              name="groupCategory"
              value={formData.groupCategory}
              onChange={handleInputChange}
            >
              <option value="">Select...</option>
              <option value="spirituality">Spirituality</option>
              <option value="community">Community</option>
              <option value="welfare">Welfare</option>
              <option value="education">Education</option>
            </select>
          </div>

          <div className="form-field half">
            <label>Visibility</label>
            <select
              name="visibility"
              value={formData.visibility}
              onChange={handleInputChange}
            >
              <option value="">Select...</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>

        <div className="form-field">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Briefly describe the purpose or theme of your group"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-row">
          <div className="form-field half">
            <label>Group Admin</label>
            <input
              type="text"
              name="groupAdmin"
              placeholder="Enter email addresses/username of those you'd like to include"
              value={formData.groupAdmin}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-field half">
            <label>Invite Members</label>
            <input
              type="text"
              name="inviteMembers"
              placeholder="Enter email addresses/username of those you'd like to invite"
              value={formData.inviteMembers}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="create-btn">Create Group</button>
          <button 
            type="button" 
            className="view-btn"
            onClick={() => navigate('/discover-communities')}
          >
            View Groups
          </button>
          <button 
            type="button" 
            className="back-btn"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCommunityForm;
