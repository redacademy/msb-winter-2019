import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import CustomIcon from '../../CustomIcon';
import styles from './styles';

const CloseModalButton = ({ navigation }) => {
  return (
    <View style={styles.closeContainer}>
      <View style={styles.flex} />
      <CustomIcon
        onPress={() => navigation.goBack()}
        source={require('../../../assets/images/Icons/exit_button.png')}
      />
    </View>
  );
};

CloseModalButton.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default CloseModalButton;
