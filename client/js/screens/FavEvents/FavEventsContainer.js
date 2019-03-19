import React, { Component } from 'react';
import { View } from 'react-native';

import FavEvents from './FavEvents';
import styles from './styles';

class FavEventsContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'FavEvents'
  };

  render() {
    return <FavEvents />;
  }
}

export default FavEventsContainer;
