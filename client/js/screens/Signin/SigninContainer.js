import React, { Component } from 'react';

import Signin from './Signin';

class SigninContainer extends Component {
  static navigationOptions = {
    title: 'Signin'
  };

  render() {
    return <Signin />;
  }
}

export default SigninContainer;
