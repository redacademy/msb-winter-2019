import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';

export default class App extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);

    return <RootStackNavigator />;
  }
}
