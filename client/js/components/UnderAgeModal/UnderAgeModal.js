import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const UnderAgeModal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View />
        <Text style={styles.title}>SORRY!</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={require('../../assets/images/Icons/exit_icon.png')} />
        </TouchableOpacity>
      </View>

      <Image
        style={styles.img}
        source={require('../../assets/images/Icons/lock_growler_icon.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Please come again when you are of legal age to drink!
        </Text>
      </View>
    </View>
  );
};

export default withNavigation(UnderAgeModal);
