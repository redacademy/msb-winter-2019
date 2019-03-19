import React, { Component } from 'react';
import { View } from 'react-native';

import Event from './Event';
import styles from './styles';

class EventContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Events'
  };

  render() {
    return <Event />;
  }
}

export default EventContainer;
