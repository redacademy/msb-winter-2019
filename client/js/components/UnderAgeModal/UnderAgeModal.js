import React from 'react';
import { View, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

import CustomIcon from '../CustomIcon';
import styles from './styles';

const UnderAgeModal = ({ navigation }) => {
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
          source={require('../../assets/images/Icons/lock_growler_icon.png')}
          style={styles.img}
        />
        <Text style={styles.text}>
          Please come again when you are of legal age to drink!
        </Text>
      </View>
    </View>
  );
};

export default withNavigation(UnderAgeModal);
