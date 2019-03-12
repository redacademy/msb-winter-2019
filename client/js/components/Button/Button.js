import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import CustomText from '../CustomText';
import styles from './styles';

const Button = props => {
  return (
    <TouchableOpacity {...props} style={[styles.buttonWrapper, props.style]}>
      <CustomText style={styles.button}>{props.children}</CustomText>
    </TouchableOpacity>
  );
};

export default Button;
