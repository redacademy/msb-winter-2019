import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default props => (
  <TouchableOpacity {...props}>
    <Image {...props} style={[styles.img, props.style]} />
  </TouchableOpacity>
);
