import React, { Component } from 'react';
import { View } from 'react-native';

import Home from './Home';
import styles from './styles';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Home />;
  }
}

export default HomeContainer;
