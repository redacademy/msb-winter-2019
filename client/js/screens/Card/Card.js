import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import Barcode from 'react-native-barcode-builder';
import styles from './styles';

const Card = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/logo_bg.png')}
        style={styles.imgBg}
      >
        <Text>This is Card.</Text>
        <Barcode value="Test Card" format="CODE128" />
      </ImageBackground>
    </View>
  );
};

Card.propTypes = {};

export default Card;
