import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Beer from './Beer';

class BeerContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Beer',
    header: null
  };

  render() {
    const { navigation } = this.props;
    const beer = navigation.getParam('item');

    return <Beer navigation={navigation} beer={beer} />;
  }
}

BeerContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default BeerContainer;
