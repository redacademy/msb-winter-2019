import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';
import Login from './screens/Login';
import Card from './screens/Card';

export default class App extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);

    return (
      <View>
        {/* <Login /> */}
        <Card />
        <RootStackNavigator />
      </View>
    );
  }
}
