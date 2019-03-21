import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { subtitle1 } from '../../config/styles';
import styles from './styles';
import CustomIcon from '../CustomIcon';

class RedeemSuccess extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <CustomIcon
          source={require('../../assets/images/Icons/exit.png')}
          onPress={() => {
            navigation.navigate('Rewards');
          }}
        />
        <Text>Success!</Text>
      </View>
    );
  }
}

export default withNavigation(RedeemSuccess);
