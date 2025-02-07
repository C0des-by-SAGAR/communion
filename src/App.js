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
import HelpCenter from './components/HelpCenter/HelpCenter';
<<<<<<< HEAD
import ViewLeaders from './components/ViewLeaders/ViewLeaders';
import AddLeader from './components/AddLeader/AddLeader';

=======
import CreateHelpRequest from './components/CreateHelpRequest/CreateHelpRequest';
import ViewLeaders from './components/ViewLeaders/ViewLeaders';
import AddLeader from './components/AddLeader/AddLeader';
>>>>>>> e4413af7045aa826489261ae0b4384da33b54a02
// Create a LandingPage component for the home page content
const LandingPage = () => (
  <div className='landing-page responsive-container'>
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
            maxWidth: '100%',
            margin: '0 auto',
            position: 'relative',
            overflowX: 'hidden'
          }}
        >
          <Navbar onNavigate={this.handleNavigation} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/upcoming-events" element={<UpcomingEvents />} />
            <Route path="/create-event" element={<CreateEvents />} />
            <Route path="/discover-communities" element={<DiscoverCommunities />} />
            <Route path="/create-community" element={<CreateCommunity />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/support/help" element={<HelpCenter />} />
<<<<<<< HEAD
=======
            <Route path="/create-help-request" element={<CreateHelpRequest />} />
            <Route path="/support/help-form" element={<CreateHelpRequest />} />
>>>>>>> e4413af7045aa826489261ae0b4384da33b54a02
            <Route path="/view-leaders" element={<ViewLeaders />} />
            <Route path="/add-leader" element={<AddLeader />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
