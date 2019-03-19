import React, { Component } from 'react';
import Signup from './Signup';

class SignupContainer extends Component {
  static navigationOptions = {
    title: 'Sign up'
  };

  render() {
    return <Signup />;
  }
}

export default SignupContainer;
