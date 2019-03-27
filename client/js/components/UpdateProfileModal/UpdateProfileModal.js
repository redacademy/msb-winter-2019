import React from 'react';
import { View, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import CustomText from '../CustomText';
import CloseModalButton from '../Buttons/CloseModalButton';
import styles from './styles';

const UpdateProfileModal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CloseModalButton onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <CustomText style={styles.title}>UPDATED!</CustomText>
        <Image source={require('../../assets/images/Icons/nachos_icon.png')} />
        <CustomText style={styles.text}>
          Your profile has been updated.
        </CustomText>
      </View>
    </View>
  );
};

UpdateProfileModal.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default withNavigation(UpdateProfileModal);
