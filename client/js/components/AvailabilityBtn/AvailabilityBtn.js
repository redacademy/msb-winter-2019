import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const AvailabilityBtn = () => (
  <View style={styles.container}>
    <View style={styles.infoWrapper}>
      <Image
        style={styles.availImg}
        source={require('../../assets/images/Beers/grey_growler_icon.png')}
      />
      <Text style={styles.availSize}>1 L or 1.89 L</Text>
    </View>

    <View style={styles.infoWrapper}>
      <Image
        style={styles.availImg}
        source={require('../../assets/images/Beers/grey_bomber_icon.png')}
      />
      <Text style={styles.availSize}>650 ml</Text>
    </View>

    <View style={styles.canWrapper}>
      <Image
        style={styles.canImg}
        source={require('../../assets/images/Beers/grey_can_icon.png')}
      />
      <Text style={styles.availSize}>6 x 355 ml</Text>
    </View>
  </View>
);

export default AvailabilityBtn;
