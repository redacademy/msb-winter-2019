import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import CustomText from '../CustomText';
import styles from './styles';

const HomePoints = ({ rewards, user, navigation }) => {
  let rewardsArr = [];
  for (let i = 0; i < rewards.length; i++) {
    rewardsArr.push(
      rewards.find(reward => {
        return reward.points >= user.points;
      })
    );
  }

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

      <CustomText style={styles.points}>
        {user.points <= 240
          ? `${user.points} / ${rewardsArr[0].points}`
          : `${user.points} / 240`}
      </CustomText>

      <CustomText style={styles.toNextReward}>
        {user.points <= 240 ? (
          rewardsArr[0].points - user.points
        ) : (
          <CustomText style={styles.toNextRewardPoints}>0</CustomText>
        )}{' '}
        to Next Reward
      </CustomText>
    </View>
  );
};

HomePoints.propTypes = {
  user: PropTypes.object.isRequired,
  rewards: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default withNavigation(HomePoints);
