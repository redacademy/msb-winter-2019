import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

export default props => (
  <Text {...props} style={[styles.text, props.style]}>
    {props.children}
  </Text>
);
