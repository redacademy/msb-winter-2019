import React from 'react';
import PropTypes from 'prop-types';
import CarouselEvents from '../../components/CarouselEvents';

const AllEvents = props => {
  return <CarouselEvents events={props.events} />;
};

AllEvents.propTypes = {};

export default AllEvents;
