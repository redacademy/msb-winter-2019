import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import Login from './screens/Login';
import client from './config/api';
import { ApolloProvider } from 'react-apollo';
import RootStackNavigator from './navigation/RootStackNavigator';

export default class App extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);

    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}
