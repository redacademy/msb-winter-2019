import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';
import Login from './screens/Login';
import Home from './screens/Home';

export default class App extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);

    return (
      <View>
        {/* <Text>Welcome to React Native!</Text> */}
        {/* <Login /> */}
        <Home />
        <RootStackNavigator />
      </View>
    );
  }
}
