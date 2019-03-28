import React from 'react';
import { View, Image } from 'react-native';

import CustomText from '../CustomText';
import styles from './styles';

const Availability = () => (
  <View style={styles.container}>
    <CustomText style={styles.availTitle}>Available In Store</CustomText>
    <View style={styles.infoContainer}>
      <View style={styles.infoWrapper}>
        <Image
          style={styles.availImg}
          source={require('../../assets/images/Beers/grey_can_icon.png')}
        />
        <CustomText style={styles.availSize}>6 x 355 ml</CustomText>
      </View>

      <View style={styles.infoWrapper}>
        <Image
          style={styles.availImg}
          source={require('../../assets/images/Beers/grey_bomber_icon.png')}
        />
        <CustomText style={styles.availSize}>650 ml</CustomText>
      </View>

      <View style={styles.infoWrapper}>
        <Image
          style={styles.availImg}
          source={require('../../assets/images/Beers/grey_growler_icon.png')}
        />
        <CustomText style={styles.availSize}>1 L or 1.89 L</CustomText>
      </View>
    </View>
  </View>
);

export default Availability;
