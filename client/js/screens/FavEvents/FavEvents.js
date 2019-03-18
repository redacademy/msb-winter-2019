import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const FavEvents = props => {
  return (
    <View style={styles.container}>
      <Text>This is FavEvents.</Text>
    </View>
  );
};

FavEvents.propTypes = {};

export default FavEvents;
