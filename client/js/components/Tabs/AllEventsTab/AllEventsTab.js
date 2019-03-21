import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import CarouselEvents from '../../CarouselEvents';

const AllEventsTab = props => {
  return (
    <View style={styles.carouselWrapper}>
      <CarouselEvents events={props.navigation.getParam('events')} />
    </View>
  );
};

export default AllEventsTab;
