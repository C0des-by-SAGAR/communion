import React from 'react';
import AddLeaderHeader from './AddLeaderHeader';
import AddLeaderForm from './AddLeaderForm';
import CommunityLeaderCards from './CommunityLeaderCards';
import FooterAddLeader from '../Upcoming Events/Footer-event.js';


const AddLeader = () => {
  return (
    <div className="add-leader">
      <AddLeaderHeader />
      <AddLeaderForm />
      <CommunityLeaderCards />
      <FooterAddLeader />
    </div>
  );
};

export default AddLeader;
