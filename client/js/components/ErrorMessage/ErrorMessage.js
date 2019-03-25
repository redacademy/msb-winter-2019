import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../CustomText';
import styles from './styles';

const ErrorMessage = props => {
  return (
    <View {...props} style={[styles.container, props.style]}>
      <CustomText {...props} style={[styles.text, props.style]}>
        {props.children}
      </CustomText>
    </View>
  );
};

ErrorMessage.propTypes = {
  children: PropTypes.string.isRequired
};

export default ErrorMessage;
