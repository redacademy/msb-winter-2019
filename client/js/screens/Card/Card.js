import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import Barcode from 'react-native-barcode-builder';
import styles from './styles';

const Card = props => {
  return (
    <View>
      <Text>This is Card.</Text>
      <Barcode value='Test Card' format='CODE128' />
    </View>
  );
};

Card.propTypes = {};

export default Card;
