import React from 'react';
import { View, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import CustomIcon from '../CustomIcon/';
import styles from './styles';

const ErrorModal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgBgWrapper}>
        <Image
          source={require('../../assets/images/Logos/msb_logo.png')}
          style={styles.imgBg}
        />
      </View>
      <View style={styles.close}>
        <View style={styles.flex} />
        <CustomIcon
          source={require('../../assets/images/Icons/exit_icon.png')}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>SORRY!</Text>
        <Image
          style={styles.img}
          source={require('../../assets/images/Icons/spill_icon.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>But don't cry over spilled beer.</Text>
          <Text style={styles.text}>Try Again!</Text>
        </View>
      </View>
    </View>
  );
};

ErrorModal.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default withNavigation(ErrorModal);
