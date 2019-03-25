import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const UpdateProfileModal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.closeContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.close}
            source={require('../../assets/images/Icons/exit_button.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}> UPDATED! </Text>
        <Image source={require('../../assets/images/Icons/nachos_icon.png')} />
        <Text style={styles.text}>Your profile has been updated</Text>
      </View>
      <View />
    </View>
  );
};

export default withNavigation(UpdateProfileModal);
