import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './styles';
import { hr, center, Subtitle2 } from '../../config/styles';
import Availability from '../../components/Availability';
import CarouselBeer from '../../components/CarouselBeer';

const AllBeers = props => {
  console.log('$$$$$$$', props);
  return (
    <View style={styles.container}>
      <CarouselBeer beers={props.data} />
    </View>
  );
};

AllBeers.propTypes = {
  data: PropTypes.object.isRequired
};

export default AllBeers;
