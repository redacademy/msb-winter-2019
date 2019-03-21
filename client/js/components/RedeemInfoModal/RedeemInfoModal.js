import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class RedeemInfoModal extends Component {
  render() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    const reward = navigation.getParam('reward');
    return (
      <View style={styles.container}>
        <Text>You are now redeeming</Text>
        <Text>{`${reward.points} stamps`}</Text>
        <Text>{reward.title}</Text>
        <Button
          onPress={() => {
            navigation.navigate('RedeemBarcode', { user, reward });
          }}
          title="Got it! Redeem"
        />
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          title="Not right now"
        />
      </View>
    );
  }
}

export default withNavigation(RedeemInfoModal);
