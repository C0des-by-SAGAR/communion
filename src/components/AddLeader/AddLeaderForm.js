import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddLeaderForm.css';

const AddLeaderForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    leaderPhoto: null,
    leaderName: '',
    communityName: '',
    description: ''
  });

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
      leaderPhoto: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="add-leader-form-container" id="add-leader-form">
      <h1 className="form-title">
        Add a <span className="highlighted-text">Community Leader</span>
      </h1>

      <form className="leader-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Leader Photo</label>
          <div className="photo-upload-area">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="photo-input"
            />
            {!formData.leaderPhoto && (
              <div className="photo-placeholder">
                <div className="placeholder-stripes"></div>
              </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label>Leader Name</label>
          <input
            type="text"
            name="leaderName"
            value={formData.leaderName}
            onChange={handleInputChange}
            placeholder="Enter the name of your discussion group, e.g., 'Child Welfare Support'"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Leader Community Name</label>
          <input
            type="text"
            name="communityName"
            value={formData.communityName}
            onChange={handleInputChange}
            placeholder="Enter your group topic, e.g., 'Child Care'"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Briefly describe the purpose or theme of your group."
            className="form-textarea"
            rows="6"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Add Leader
          </button>
          <button 
            type="button" 
            className="view-btn"
            onClick={() => navigate('/view-leaders')}
          >
            View Leaders
          </button>
          <button 
            type="button" 
            className="home-btn"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLeaderForm;
