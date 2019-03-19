import React from 'react';
import { getLoggedInUser } from '../../config/models';
import { ActivityIndicator } from 'react-native';

class AuthLoading extends React.Component {
  componentDidMount = async () => {
    const userId = await getLoggedInUser();
    this.props.navigation.navigate(userId ? 'App' : 'Auth');
  };

  render() {
    return <ActivityIndicator />;
  }
}

export default AuthLoading;
