import React from 'react';
import HeaderCreate from './HeaderCreate';
import CreateCommunityForm from './CreateCommunityForm';
import LatestDiscussions from './LatestDiscussions';
import FooterComm from '../Upcoming Events/Footer-event.js';

const CreateCommunity = () => {
  return (
    <div className="create-community">
      <HeaderCreate />
      <CreateCommunityForm />
      <LatestDiscussions />
      <FooterComm />
    </div>
  );
};

export default CreateCommunity;
