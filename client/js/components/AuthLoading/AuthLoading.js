import React from 'react';
import { getLoggedInUser } from '../../config/models';
import { ActivityIndicator, View } from 'react-native';

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.navigateToAppOrAuth();
  }

  navigateToAppOrAuth = async () => {
    const userId = await getLoggedInUser();
    this.props.navigation.navigate(userId ? 'App' : 'Auth');
  };

  render() {
    return <ActivityIndicator />;
  }
}

export default AuthLoading;
