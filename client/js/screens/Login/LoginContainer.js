import React, { Component } from 'react';

import Login from './Login';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Login'
  };

  render() {
    return <Login />;
  }
}

export default LoginContainer;
