import React from 'react';
import { View, Linking } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../components/CustomText';
import OrangeButton from '../../components/OrangeButton';
import WhiteButton from '../../components/WhiteButton';
import BlackButton from '../../components/BlackButton';
import styles from './styles';

const Login = () => {
  return (
    <View style={{ backgroundColor: 'red' }}>
      <CustomText>This is Login.</CustomText>
      <OrangeButton
        style={styles.button}
        onPress={() => Linking.openURL('http://www.catipsum.com/')}
      >
        Sign Up
      </OrangeButton>
      <WhiteButton
        style={styles.button}
        onPress={() => Linking.openURL('http://www.catipsum.com/')}
      >
        Sign Up
      </WhiteButton>
      <BlackButton
        style={styles.button}
        onPress={() => Linking.openURL('http://www.catipsum.com/')}
      >
        Availability
      </BlackButton>
    </View>
  );
};

// Login.propTypes = {};

export default Login;
