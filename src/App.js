import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Moments from './components/Moments';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCard from './components/FloatingCard';
import UpcomingEvents from './components/Upcoming Events/UpcomingEvents';
import CreateEvents from './components/CreateEvents/CreateEvents';
import DiscoverCommunities from './components/DiscoverCommunities/DiscoverCommunities';
import CreateCommunity from './components/CreateCommunity/CreateCommunity';
<<<<<<< HEAD
import HelpCenter from './components/HelpCenter/HelpCenter';
=======
import ViewLeaders from './components/ViewLeaders/ViewLeaders';
import AddLeader from './components/AddLeader/AddLeader';

>>>>>>> 686975c (added leaders)
// Create a LandingPage component for the home page content
const LandingPage = () => (
  <div className='landing-page'>
    <Hero />
    <Features />
    <Stats />
    <Moments />
    <Testimonials />
    <Team />
    <FAQ />
    <Footer />
    <FloatingCard />
  </div>
);

class App extends Component {
  handleNavigation = (path) => {
    // Navigation is now handled by React Router
    console.log(`Navigating to: ${path}`);
  };

  render() {
    return (
      <Router>
        <div 
          className="w-100"
          style={{
            maxWidth: '1519.2px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          <Navbar onNavigate={this.handleNavigation} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/upcoming-events" element={<UpcomingEvents />} />
            <Route path="/create-event" element={<CreateEvents />} />
            <Route path="/discover-communities" element={<DiscoverCommunities />} />
            <Route path="/create-community" element={<CreateCommunity />} />
<<<<<<< HEAD
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/support/help" element={<HelpCenter />} />
=======
            <Route path="/view-leaders" element={<ViewLeaders />} />
            <Route path="/add-leader" element={<AddLeader />} />
>>>>>>> 686975c (added leaders)
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
