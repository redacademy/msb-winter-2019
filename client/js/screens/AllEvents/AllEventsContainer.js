import React, { Component } from 'react';
import { View } from 'react-native';

import AllEvents from './AllEvents';
import styles from './styles';

class AllEventsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AllEvents />;
  }
}

export default AllEventsContainer;
