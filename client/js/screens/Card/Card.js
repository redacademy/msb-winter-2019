import PropTypes from 'prop-types';

const Card = ({ navigation, user }) => {
  console.log('Card', user);
  navigation.navigate('CardTabScreens', { user });
  return null;
};

Card.propTypes = { navigation: PropTypes.object.isRequired };

export default Card;
