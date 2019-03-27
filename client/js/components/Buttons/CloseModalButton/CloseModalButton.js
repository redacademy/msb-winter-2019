import React from 'react';
import { View } from 'react-native';

import CustomIcon from '../../CustomIcon';
import styles from './styles';

const CloseModalButton = props => {
  return (
    <View {...props} style={[styles.closeContainer, props.style]}>
      <View {...props} style={[styles.flex, props.style]} />
      <CustomIcon
        {...props}
        source={require('../../../assets/images/Icons/exit_button.png')}
      />
    </View>
  );
};

export default CloseModalButton;
