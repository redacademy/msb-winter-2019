import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import CarouselBeer from '../../components/CarouselBeer';
import Subheader from '../../components/Subheader';
import Availability from '../../components/Availability';

const AllBeers = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Subheader style={styles.subheader}>Growler</Subheader>

      <View style={styles.carouselWrapper}>
        <CarouselBeer beers={props.beers} />
      </View>
      <Availability />
    </View>
  );
};

AllBeers.propTypes = {
  beers: PropTypes.array.isRequired
};

export default AllBeers;
