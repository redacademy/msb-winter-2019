import PropTypes from 'prop-types';

const Card = ({ navigation }) => {
  navigation.navigate('TabScreens');
  return null;
};

Card.propTypes = { navigation: PropTypes.object.isRequired };

export default Card;
