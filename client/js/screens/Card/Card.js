import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Card = props => {
  return (
    <ImageBackground
      // source={'../../assets/images/logo_bg@3x.png'}
      style={{ width: '100%', height: '100%' }}
    >
      <Text>This is Card.</Text>
    </ImageBackground>
  );
};

Card.propTypes = {};

export default Card;
