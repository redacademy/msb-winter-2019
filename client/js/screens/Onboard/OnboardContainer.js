import React, { Component } from 'react';
import Onboard from './Onboard';

class OnboardContainer extends Component {
  static navigationOptions = {
    title: 'Onboard'
  };

  render() {
    return <Onboard />;
  }
}

export default OnboardContainer;
