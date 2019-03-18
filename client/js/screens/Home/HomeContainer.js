import React, { Component } from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import styles from './styles';

class HomeContainer extends Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    return <Home />;
  }
}

export default HomeContainer;
