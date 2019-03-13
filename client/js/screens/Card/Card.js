import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import Barcode from 'react-native-barcode-builder';
import styles from './styles';

const Card = props => {
  return (
<<<<<<< HEAD
    <ImageBackground
      // source={'../../assets/images/logo_bg@3x.png'}
      style={{ width: '100%', height: '100%' }}
    >
      <Text>This is Card.</Text>
    </ImageBackground>
=======
    <View>
      <Text>This is Card.</Text>
      <Barcode value="Test Card" format="CODE128" />
    </View>
>>>>>>> develop
  );
};

Card.propTypes = {};

export default Card;
