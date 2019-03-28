import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Subheader from '../../components/Subheader';
import CarouselBeer from '../../components/CarouselBeer';
import Availability from '../../components/Availability';
import styles from './styles';

const AllBeers = props => {
  return (
    <View style={styles.container}>
      <Subheader style={styles.subheader}>Growler</Subheader>

      <View style={styles.content}>
        <CarouselBeer beers={props.beers} />
        <Availability />
      </View>
    </View>
  );
};

AllBeers.propTypes = {
  beers: PropTypes.array.isRequired
};

export default AllBeers;
