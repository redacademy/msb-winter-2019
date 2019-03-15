import React, { Component } from 'react';
import { Image, Platform, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Stores from './Stores';
import styles from './styles';
import { center, row } from '../../config/styles';

class StoresContainer extends Component {
  static navigationOptions = {
    // title: (
    //   <Image source={require('../../assets/images/Logos/msb_logo_white.png')} />
    // ),
    headerLeft: (
      <TouchableOpacity
      // style={Styles.headerButton}
      // onPress={() => navigation.toggleDrawer()}
      >
        <Icon
          name={Platform.select({
            ios: 'ios-arrow-forward',
            android: 'md-arrow-forward'
          })}
          size={25}
          color={'green'}
        />
      </TouchableOpacity>
    ),
    headerTintColor: '#fff',
    headerTitleStyle: { ...row, ...center }
  };
  render() {
    return <Stores />;
  }
}

export default StoresContainer;
