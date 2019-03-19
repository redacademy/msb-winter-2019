import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default props => (
  <Text {...props} style={[styles.text, props.style]}>
    {props.children}
  </Text>
);
