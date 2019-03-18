import React, { Component } from 'react';
import { Image, View } from 'react-native';

import Stores from './Stores';
import styles from './styles';

class StoresContainer extends Component {
  static navigationOptions = {
    title: (
      <Image source={require('../../assets/images/Logos/msb_logo_white.png')} />
    ),
    headerTintColor: '#fff'
    // headerTitleStyle: { ...Header }
  };
  render() {
    return <Stores />;
  }
}

export default StoresContainer;
