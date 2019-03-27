import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import CustomText from '../CustomText/';
import styles from './styles';

class Loader extends Component {
  render() {
    return (
      <View style={styles.loader}>
        <Image
          source={require('../../assets/images/loading_growler_v4.1.gif')}
          style={styles.gif}
        />
        <CustomText style={styles.text}>
          Pouring <Text style={styles.dot}>...</Text>
        </CustomText>
      </View>
    );
  }
}

export default Loader;
