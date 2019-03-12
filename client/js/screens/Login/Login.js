import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../components/CustomText';
import Button from '../../components/Button';
import styles from './styles';

const Login = () => {
  return (
    <View style={{ backgroundColor: 'red' }}>
      <CustomText>This is Login.</CustomText>
      <Button style={styles.button}>Sign Up</Button>
    </View>
  );
};

// Login.propTypes = {};

export default Login;
