import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import CarouselEvents from '../../CarouselEvents';

const AllEventsTab = props => (
  <View style={styles.container}>
    <View style={styles.carouselWrapper}>
      <CarouselEvents events={props.events} />
    </View>
  </View>
);

AllEventsTab.propTypes = {
  events: PropTypes.object.isRequired
};

export default AllEventsTab;
