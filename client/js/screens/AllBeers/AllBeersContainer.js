import React, { Component } from 'react';
import { View } from 'react-native';

import AllBeers from './AllBeers';
import styles from './styles';

class AllBeersContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AllBeers />;
  }
}

export default AllBeersContainer;
