import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import Barcode from 'react-native-barcode-builder';

import CustomText from '../CustomText';
import styles from './styles';

const CardTab = () => (
  <ImageBackground
    source={require('../../assets/images/Card/logo_bg.png')}
    style={styles.imgBg}
  >
    <View style={styles.container}>
      <View elevation={3} style={styles.cardWrapper}>
        <Image
          source={require('../../assets/images/Card/your_card.png')}
          style={styles.card}
        />
        <Barcode value='Test Card' format='CODE128' height={40} />
        <CustomText>This is Card.</CustomText>
      </View>
    </View>
  </ImageBackground>
);

export default CardTab;
