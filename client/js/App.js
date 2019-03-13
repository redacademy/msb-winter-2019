import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';
import Login from './screens/Login';

export default class App extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);

    return <RootStackNavigator />;
  }
}
