import React from 'react';
import { Dimensions, Image, Text, View, TouchableOpacity } from 'react-native';

import CustomText from '../CustomText';
import { hr, center, h2, h3, Subtitle1 } from '../../config/styles';
import styles from './styles';

const Carousel = props => {
  return (
    <TouchableOpacity {...props}>
      <View style={{ ...center, width: '100%' }}>
        <Image
          source={require('../../assets/images/Beers/squre_fruit_bomb.png')}
        />
        <View
          {...props}
          style={{
            ...center,
            margin: 'auto',
            width: Dimensions.get('window').width * 0.7
          }}
        >
          <Text style={{ ...h2 }}>Fruit Bomb</Text>
          <Text style={{ ...Subtitle1 }}>Kettle Sour</Text>
          <View style={{ ...hr }} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Carousel;
