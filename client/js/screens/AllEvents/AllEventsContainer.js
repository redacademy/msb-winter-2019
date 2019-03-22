import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AllEvents from './AllEvents';

class AllEventsContainer extends Component {
  render() {
    return <AllEvents navigation={this.props.navigation} />;
  }
}

AllEventsContainer.propTypes = { navigation: PropTypes.object.isRequired };

export default AllEventsContainer;
