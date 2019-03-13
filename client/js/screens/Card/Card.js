import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Card = props => {
  console.log('card');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        background: 'white'
      }}
    >
      {/* <ImageBackground
        source={require('../../assets/images/logo_bg.png')}
        backgroundColor={'white'}
      > */}
      <Text style={{ color: 'gold' }}>This is Card.</Text>
      {/* </ImageBackground> */}
    </View>
  );
};

Card.propTypes = {};

export default Card;
