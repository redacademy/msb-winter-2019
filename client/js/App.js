import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import Card from './screens/Card';

export default class App extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);

    return <Card />;
  }
}
