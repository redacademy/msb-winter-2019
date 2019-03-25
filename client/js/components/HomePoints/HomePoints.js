import React, { Component } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class HomePoints extends Component {
  render() {
    const { rewards, user, navigation } = this.props;

    let rewardsArr = [];
    for (let i = 0; i < rewards.length; i++) {
      rewardsArr.push(
        rewards.find(reward => {
          return reward.points >= user.points;
        })
      );
    }
    console.log(rewardsArr);

    return (
      <View style={styles.singleGrid}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => {
            navigation.navigate('Rewards');
          }}
        >
          <Image
            source={require('../../assets/images/Home/loader_no_numbers.png')}
            style={styles.growlerImg}
          />
        </TouchableHighlight>

        <Text style={styles.points}>
          {user.points <= 240
            ? `${user.points}/${rewardsArr[0].points}`
            : `${user.points}/240`}
        </Text>

        <Text style={styles.toNextReward}>
          {user.points <= 240 ? (
            rewardsArr[0].points - user.points
          ) : (
            <Text style={styles.toNextRewardPoints}>0</Text>
          )}{' '}
          to Next Reward
        </Text>
      </View>
    );
  }
}

HomePoints.propTypes = {
  user: PropTypes.object.isRequired,
  rewards: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default withNavigation(HomePoints);
