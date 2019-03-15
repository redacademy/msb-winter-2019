import React, { Component } from 'react';

import Card from './Card';

class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Card navigation={this.props.navigation} />;
  }
}

export default CardContainer;
