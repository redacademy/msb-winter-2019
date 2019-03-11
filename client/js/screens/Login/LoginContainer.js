import React, { Component } from 'react';
import { View } from 'react-native';

import Login from './Login';
import styles from './styles';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Login />;
  }
}

export default LoginContainer;
