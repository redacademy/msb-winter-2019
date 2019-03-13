import React from 'react';
import { View, Linking } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../components/CustomText';
import OrangeButton from '../../components/OrangeButton';
import WhiteButton from '../../components/WhiteButton';
import BlackButton from '../../components/BlackButton';
import { fonts, colors, row } from '../../config/styles';
import styles from './styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <CustomText>This is Login.</CustomText>
    </View>
  );
};

Login.propTypes = {};

export default Login;
