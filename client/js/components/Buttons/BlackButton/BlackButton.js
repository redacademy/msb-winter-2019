import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../CustomText';
import styles from './styles';

const BlackButton = props => {
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

BlackButton.propTypes = {
<<<<<<< HEAD
  children: PropTypes.object.isRequired
=======
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
>>>>>>> develop
};

export default BlackButton;
