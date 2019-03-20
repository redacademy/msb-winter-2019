import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';
import CarouselEvents from '../../components/CarouselEvents';
import Subheader from '../../components/Subheader';

const AllEvents = props => {
  return (
    <View style={styles.container}>
      <Subheader style={styles.subheader}>Events</Subheader>

      <View style={styles.carouselWrapper}>
        <CarouselEvents events={props.events} />
      </View>
    </View>
  );
};

AllEvents.propTypes = {
  events: PropTypes.array.isRequired
};

export default AllEvents;
