import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';
import Navigator from './navigation/MixedNavigators';

export default class App extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);

    return <RootStackNavigator />;
  }
}
