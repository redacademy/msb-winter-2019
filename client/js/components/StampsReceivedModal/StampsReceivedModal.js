import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

class StampsReceivedModal extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate('History');
          }}
        >
          <Icon name="ios-close" size={50} />
        </TouchableHighlight>
        <Text>Stamps received yay</Text>
      </View>
    );
  }
}

export default withNavigation(StampsReceivedModal);
