import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
// import RootStackNavigator from './navigation/RootStackNavigator';
import Login from './screens/Login';
import client from './config/api';
import { ApolloProvider } from 'react-apollo';

export default class App extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);

    return (
      <ApolloProvider client={client}>
        <View>
          <Text>Welcome to React Native!</Text>
          <Login />
          {/* <RootStackNavigator /> */}
        </View>
      </ApolloProvider>
    );
  }
}
