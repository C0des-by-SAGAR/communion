import React from 'react';
import Header from './Header';
import GroupDiscussions from './GroupDiscussions';
import RealStories from './RealStories';
import FAQDiscover from './FAQDiscover';
import Subscribe from './Subscribe';
import FooterEvent from '../Upcoming Events/Footer-event.js';

const DiscoverCommunities = () => {
  return (
    <div className="discover-communities">
      <Header />
      <GroupDiscussions />
      <RealStories />
      <FAQDiscover />
      <Subscribe />
      <FooterEvent />
    </div>
  );
};

export default DiscoverCommunities;