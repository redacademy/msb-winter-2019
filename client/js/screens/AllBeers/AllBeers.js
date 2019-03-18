import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import BeerCarousel from '../../components/BeerCarousel';
import styles from './styles';

const AllBeers = ({ data }) => {
  return (
    <View>
      {data.allBeers.map(beer => {
        <BeerCarousel key={beer.id} data={beer} />;
      })}
    </View>
  );
};

AllBeers.propTypes = {
  data: PropTypes.object.isRequired
};

export default AllBeers;
