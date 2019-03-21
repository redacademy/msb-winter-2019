import PropTypes from 'prop-types';

const AllEvents = ({ navigation }) => {
  navigation.navigate('AllEventsTabScreens');

  return null;
};

AllEvents.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default AllEvents;
