import React, { Component } from 'react';
import { View } from 'react-native';

import FavBeers from './FavBeers';
import styles from './styles';

class FavBeersContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <FavBeers />;
  }
}

export default FavBeersContainer;
