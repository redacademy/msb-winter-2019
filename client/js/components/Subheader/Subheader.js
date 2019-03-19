import React from 'react';
import { View } from 'react-native';

import CustomText from '../CustomText';
import styles from './styles';

export default props => (
  <View {...props} style={[styles.subheaderContainer, props.style]}>
    <View {...props} style={[styles.subheaderWrapper, props.style]}>
      <CustomText {...props} style={[styles.subheader, props.style]}>
        {props.children}
      </CustomText>
    </View>
  </View>
);
