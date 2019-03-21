import PropTypes from 'prop-types';

const AllEvents = props => {
  props.navigation.navigate('AllEventsTabScreens', { events: props.events });

  return null;
};

AllEvents.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default AllEvents;
