import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import CustomIcon from '../CustomIcon';

class RedeemSuccess extends Component {
  render() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    const reward = navigation.getParam('reward');
    return (
      <View style={styles.container}>
        <CustomIcon
          source={require('../../assets/images/Icons/exit.png')}
          onPress={() => {
            navigation.navigate('Rewards');
          }}
        />
        <Text>Redeem Successful!</Text>
        <Text>{`You have ${user.points - reward.points} stamps left`}</Text>
      </View>
    );
  }
}

export default withNavigation(RedeemSuccess);
