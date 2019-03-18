import PropTypes from 'prop-types';

const Card = ({ navigation }) => {
  navigation.navigate('CardTabScreens');
  return null;
};

Card.propTypes = { navigation: PropTypes.object.isRequired };

export default Card;
