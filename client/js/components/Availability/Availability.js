import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { center, row } from '../../config/styles';

const Availability = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.availTitle}>Available In Store</Text>
      <View style={styles.imgWrapper}>
        <View style={{ ...row, ...center }}>
          <Image
            style={styles.availImg}
            source={require('../../assets/images/Beers/grey_can_icon.png')}
          />
          <Text style={styles.availSize}>6 x 355 ml</Text>
        </View>

        <View style={{ ...row, ...center }}>
          <Image
            style={styles.availImg}
            source={require('../../assets/images/Beers/grey_bomber_icon.png')}
          />
          <Text style={styles.availSize}>650 ml</Text>
        </View>

        <View style={{ ...row, ...center }}>
          <Image
            style={styles.availImg}
            source={require('../../assets/images/Beers/grey_growler_icon.png')}
          />
          <Text style={styles.availSize}>1 L or 1.89 L</Text>
        </View>
      </View>
    </View>
  );
};

export default Availability;
