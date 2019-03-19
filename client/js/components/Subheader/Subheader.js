import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../CustomText';
import styles from './styles';

propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default props => (
  <View {...props} style={[styles.subheaderContainer, props.style]}>
    <View {...props} style={[styles.subheaderWrapper, props.style]}>
      <CustomText {...props} style={[styles.subheader, props.style]}>
        {props.children}
      </CustomText>
    </View>
  </View>
);
