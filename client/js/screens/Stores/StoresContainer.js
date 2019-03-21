import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Stores from './Stores';

class StoresContainer extends Component {
  static navigationOptions = {
    title: 'Stores'
  };

  render() {
    return <Stores />;
  }
}

StoresContainer.propTypes = {
  navigation: PropTypes.object
};

export default StoresContainer;
