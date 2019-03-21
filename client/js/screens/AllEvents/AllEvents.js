// import React from 'react';
// import { View, Text } from 'react-native';
// import PropTypes from 'prop-types';

// import styles from './styles';

// const AllEvents = () => {
//   return <Text>This is AllEvents.</Text>;
// };

// AllEvents.propTypes = {};

// export default AllEvents;

import PropTypes from 'prop-types';

const AllEvents = ({ navigation }) => {
  navigation.navigate('AllEventsTabScreens');
  return null;
};

AllEvents.propTypes = { navigation: PropTypes.object.isRequired };

export default AllEvents;
