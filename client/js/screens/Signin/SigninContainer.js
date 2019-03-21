import React, { Component } from 'react';

import Signin from './Signin';
import Onboard from '../Onboard';

class SigninContainer extends Component {
  static navigationOptions = {
    title: 'Signin'
  };

  render() {
    return <Signin />;
    // return <Onboard />;
  }
}

export default SigninContainer;
