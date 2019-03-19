import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default props => (
  <TouchableOpacity {...props}>
    <Image {...props} style={[styles.img, props.style]} />
  </TouchableOpacity>
);
