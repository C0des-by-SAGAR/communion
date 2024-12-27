import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './CreateEventForm.css';
import L from 'leaflet';

// Fix for default marker icon in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Component to handle map position changes
function MapController({ center }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
}

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    organizer: '',
    maxParticipants: '',
    eventType: '',
    location: ''
  });

  const [currentLocation, setCurrentLocation] = useState({
    lat: 51.505,
    lng: -0.09,
  });

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  const handleLocationSearch = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      
      if (data.length > 0) {
        setCurrentLocation({
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon)
        });
      }
    } catch (error) {
      console.error("Error searching location:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      ...formData,
      location: currentLocation
    });
  };

  return (
    <section className="create-event-form-section fade-up">
      <form onSubmit={handleSubmit} className="create-event-form">
        <div className="form-group">
          <label htmlFor="title">Event Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter your event title, e.g., 'Leadership Workshop 2024'"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Location</label>
          <div className="location-container">
            <div className="location-search">
              <div className="search-form">
                <input
                  type="text"
                  placeholder="Search for a location"
                  className="location-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleLocationSearch();
                    }
                  }}
                />
                <button 
                  type="button"
                  className="search-button"
                  onClick={handleLocationSearch}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="map-container">
              <MapContainer
                center={[currentLocation.lat, currentLocation.lng]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[currentLocation.lat, currentLocation.lng]} />
                <MapController center={[currentLocation.lat, currentLocation.lng]} />
              </MapContainer>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Provide a brief overview of your event, e.g., 'A workshop to enhance leadership skills and teamwork.'"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="organizer">Organizer</label>
            <input
              type="text"
              id="organizer"
              placeholder="Organizer Name: 'e.g., Communion Events'"
              value={formData.organizer}
              onChange={(e) => setFormData({...formData, organizer: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="maxParticipants">Max Participants</label>
            <input
              type="number"
              id="maxParticipants"
              placeholder="Enter max participants"
              value={formData.maxParticipants}
              onChange={(e) => setFormData({...formData, maxParticipants: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="eventType">Event Type</label>
            <select
              id="eventType"
              value={formData.eventType}
              onChange={(e) => setFormData({...formData, eventType: e.target.value})}
              required
            >
              <option value="">Select...</option>
              <option value="workshop">Workshop</option>
              <option value="seminar">Seminar</option>
              <option value="conference">Conference</option>
              <option value="meetup">Meetup</option>
            </select>
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="create-btn">Create Event</button>
          <button type="button" className="back-events-btn">Back to Events</button>
          <button type="button" className="back-home-btn">Back to Home</button>
        </div>
      </form>
    </section>
  );
};

export default CreateEventForm;