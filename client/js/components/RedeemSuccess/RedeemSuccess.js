import React from 'react';
import { View, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import CloseModalButton from '../Buttons/CloseModalButton';
import styles from './styles';

const RedeemSuccess = ({ navigation }) => {
  const user = navigation.getParam('user');
  const reward = navigation.getParam('reward');

  let rewardIcon;
  if (reward.title === 'Monthy Draw') {
    rewardIcon = require('../../assets/images/Redeem/20_stamp_reward_icon.png');
  } else if (reward.title === '16 oz Beer In Tasting Room') {
    rewardIcon = require('../../assets/images/Redeem/40_stamp_reward_icon.png');
  } else if (reward.title === 'Growler Fill') {
    rewardIcon = require('../../assets/images/Redeem/60_stamp_reward_icon.png');
  } else if (reward.title === 'T-Shirt') {
    rewardIcon = require('../../assets/images/Redeem/80_stamp_reward_icon.png');
  } else if (reward.title === 'Nachos and Two Flight In Tasting Room') {
    rewardIcon = require('../../assets/images/Redeem/140_stamps_icon_2x.png');
  } else if (reward.title === 'Tour and Beer for Two') {
    rewardIcon = require('../../assets/images/Redeem/200_Stamps_icon2x.png');
  } else if (reward.title === 'Ultimate Brew Day') {
    rewardIcon = require('../../assets/images/Redeem/240_stamp_reward_icon.png');
  }

  return (
    <View style={styles.container}>
      <CloseModalButton
        onPress={() => {
          navigation.navigate('Rewards');
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Redeem Successful!</Text>
        <Image style={styles.image} source={rewardIcon} />
        <Text style={styles.description}>{`You have ${user.points -
          reward.points} stamps left!`}</Text>
      </View>
    </View>
  );
};

RedeemSuccess.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default withNavigation(RedeemSuccess);
