import React, { Component } from 'react';
import { View, Image } from 'react-native';

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
        <CustomText style={styles.text}>Pouring ...</CustomText>
      </View>
    );
  }
}

export default Loader;
