import PropTypes from 'prop-types';

const Card = ({ navigation, user }) => {
  navigation.navigate('CardTabScreens', { user });
  return null;
};

Card.propTypes = { navigation: PropTypes.object.isRequired };

export default Card;
