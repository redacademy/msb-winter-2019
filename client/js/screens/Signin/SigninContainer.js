import React, { Component } from 'react';

import Signin from './Signin';

class SigninContainer extends Component {
  static navigationOptions = {
    title: 'Sign in'
  };

  render() {
    return <Signin />;
  }
}

export default SigninContainer;
