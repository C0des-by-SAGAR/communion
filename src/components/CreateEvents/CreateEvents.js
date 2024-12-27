import React from 'react';
import HeroCreateEvent from './HeroCreateEvent';
import CreateEventForm from './CreateEventForm';
import Upcoming from './Upcoming';
import OpportunityCreate from './OpportunityCreate';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import FooterEvent from '../Upcoming Events/Footer-event.js';

const CreateEvents = () => {
  useScrollAnimation();

  return (
    <main className="w-100">
      <HeroCreateEvent />
      <CreateEventForm />
      <Upcoming />
      <OpportunityCreate />
      <FooterEvent />
    </main>
  );
};

export default CreateEvents;