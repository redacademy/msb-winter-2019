import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import CustomText from '../CustomText';
import styles from './styles';

const Button = props => {
  return (
    <TouchableOpacity {...props}>
      <View {...props} style={[styles.buttonWrapper, props.style]}>
        <CustomText {...props} style={[styles.button, props.style]}>
          {props.children}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
