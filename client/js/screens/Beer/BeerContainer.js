import React, { Component } from 'react';
import { View } from 'react-native';

import Beer from './Beer';
import styles from './styles';

class BeerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Beer />;
  }
}

export default BeerContainer;
