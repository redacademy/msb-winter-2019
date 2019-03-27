import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import styles from './styles';

const AgeDisclaimer = ({ navigation }) => {
  return (
    <View style={styles.constainer}>
      <Image
        style={styles.image}
        source={require('../../assets/images/Icons/star_bottle.png')}
      />
      <Text style={styles.text}>
        Hang on my friend, you must be over 19 years old to use this app under
        the legal drinking age in BC province
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signin')}
      >
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};

AgeDisclaimer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default withNavigation(AgeDisclaimer);
