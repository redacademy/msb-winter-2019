import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Card'
  };

  render() {
    return <Card navigation={this.props.navigation} />;
  }
}

CardContainer.propTypes = { navigation: PropTypes.object.isRequired };

export default CardContainer;
