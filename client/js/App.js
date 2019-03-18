import React, { Component } from 'react';
import client from './config/api';
import { ApolloProvider } from 'react-apollo';
import RootStackNavigator from './navigation/RootStackNavigator';
import MixedNavigators from './navigation/MixedNavigators';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MixedNavigators />
      </ApolloProvider>
    );
  }
}
