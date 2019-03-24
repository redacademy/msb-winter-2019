import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const ErrorModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View />
        <Text style={styles.title}>SORRY!</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/images/Icons/exit_icon.png')} />
        </TouchableOpacity>
      </View>

      <Image
        style={styles.beer}
        source={require('../../assets/images/Icons/spill_icon.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>But don't cry over spilled beer.</Text>
        <Text style={styles.text}>Try Again!</Text>
      </View>
    </View>
  );
};

export default ErrorModal;
