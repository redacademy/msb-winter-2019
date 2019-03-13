import React, { Component } from 'react';
import { View } from 'react-native';

import Profile from './Profile';
import styles from './styles';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Profile />;
  }
}

export default ProfileContainer;
