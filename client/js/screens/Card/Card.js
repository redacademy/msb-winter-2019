import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import Barcode from 'react-native-barcode-builder';

import CustomText from '../../components/CustomText';
import styles from './styles';

const Card = props => {
  return (
    <View style={styles.container}>
      <View elevation={3} style={styles.cardWrapper}>
        <Image
          source={require('../../assets/images/Card/card.png')}
          style={styles.card}
        />
        <Barcode value='Test Card' format='CODE128' height={40} />
        <CustomText>This is Card.</CustomText>
      </View>
    </View>
  );
};

Card.propTypes = {};

export default Card;
