import React, { Component } from 'react';
import { View } from 'react-native';

import CustomText from '../../CustomText';
import styles from './styles';

class FavEventsTab extends Component {
  static navigationOptions = {
    title: 'Your Events'
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomText>This is FavEvents.</CustomText>
      </View>
    );
  }
}

export default FavEventsTab;
