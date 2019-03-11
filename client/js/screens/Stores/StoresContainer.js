import React, { Component } from 'react';
import { View } from 'react-native';

import Stores from './Stores';
import styles from './styles';

class StoresContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Stores />;
  }
}

export default StoresContainer;
