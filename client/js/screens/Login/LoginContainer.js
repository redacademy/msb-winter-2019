import React, { Component } from 'react';

import Login from './Login';
import { colors } from '../../config/styles';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: colors.black,
      borderBottomWidth: 0
    }
  };

  render() {
    return <Login />;
  }
}

export default LoginContainer;
