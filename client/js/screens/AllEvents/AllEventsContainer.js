import React from 'react';
import PropTypes from 'prop-types';

import AllEvents from './AllEvents';

const AllEventsContainer = ({ navigation }) => (
  <AllEvents navigation={avigation} />
);

AllEventsContainer.propTypes = { navigation: PropTypes.object.isRequired };

export default AllEventsContainer;
