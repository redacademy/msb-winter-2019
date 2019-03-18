import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const FavBeers = props => {
  return (
    <View style={styles.container}>
      <Text>This is FavBeers.</Text>
    </View>
  );
};

FavBeers.propTypes = {};

export default FavBeers;
