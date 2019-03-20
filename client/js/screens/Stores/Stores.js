import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Stores = props => {
  return (
    <View style={styles.container}>
      <Text>This is Stores.</Text>
    </View>
  );
};

Stores.propTypes = {};

export default Stores;
