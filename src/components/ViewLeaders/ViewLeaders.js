import React from 'react';
import ViewHero from './ViewHero';
import Voices from './Voices';
import VoicesOfImpact from './VoicesOfImpact';
import CommunityLeaders from './CommunityLeaders';
import Footer from '../Upcoming Events/Footer-event';

const ViewLeaders = () => {
  return (
    <div className="view-leaders">
      <ViewHero />
      <Voices />
      <CommunityLeaders />
      <VoicesOfImpact />
      <Footer />
    </div>
  );
};

export default ViewLeaders;
