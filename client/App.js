import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Card from './js/screens/Card';
// import RootStackNavigator from './navigation/RootStackNavigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

export default class App extends Component {
  render() {
    return (
      <View>
        <Card />
      </View>
    );
  }
}
