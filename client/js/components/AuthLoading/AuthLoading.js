import React from 'react';
import { getLoggedInUser } from '../../config/models';
import { ActivityIndicator, View } from 'react-native';

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToAppOrAuth();
  }

  navigateToAppOrAuth = async () => {
    const userId = await getLoggedInUser();
    this.props.navigation.navigate(userId ? 'App' : 'Auth');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AuthLoading;
