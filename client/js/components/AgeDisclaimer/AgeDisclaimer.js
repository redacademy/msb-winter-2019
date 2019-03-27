import React from 'react';
import { View, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import WhiteButton from '../Buttons/WhiteButton';
import styles from './styles';

const AgeDisclaimer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgBgWrapper}>
        <Image
          source={require('../../assets/images/Logos/msb_logo.png')}
          style={styles.imgBg}
        />
      </View>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require('../../assets/images/Icons/star_bottle.png')}
        />
        <View>
          <Text style={styles.text}>
            Hang on my friend, you must be over 19 years old to use this app
            under the legal drinking age in BC province.
          </Text>
        </View>
        <WhiteButton onPress={() => navigation.navigate('Signin')}>
          Enter
        </WhiteButton>
      </View>
    </View>
  );
};

AgeDisclaimer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default withNavigation(AgeDisclaimer);
