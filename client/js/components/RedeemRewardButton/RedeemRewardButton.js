import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class RedeemRewardButton extends Component {
  render() {
    const { reward, user, navigation } = this.props;
    return (
      <TouchableHighlight
        style={styles.redeemButton}
        onPress={() => {
          if (user.points < reward.points) return;
          navigation.navigate('RedeemInfo', { user, reward });
        }}
      >
        <View>
          <Text
            style={
              user.points < reward.points
                ? styles.unavailableReward
                : styles.availableReward
            }
          >
            {reward.points}
          </Text>
          <Text
            style={
              user.points < reward.points
                ? styles.unavailableReward
                : styles.availableReward
            }
          >
            {reward.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default withNavigation(RedeemRewardButton);
