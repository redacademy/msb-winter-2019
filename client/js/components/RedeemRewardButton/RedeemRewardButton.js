import React, { Component, Fragment } from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

import CustomText from '../CustomText';
import { colors } from '../../config/styles';
import styles from './styles';

class RedeemRewardButton extends Component {
  render() {
    const { reward, user, navigation } = this.props;

    const setImg = reward => {
      if (reward.points === 20) {
        reward.img = require('../../assets/images/Card/20_stamps_icon.png');
        // console.log(reward.img);
      } else if (reward.points === 40) {
        reward.img = require('../../assets/images/Card/40_stamps_icon.png');
      } else if (reward.points === 60) {
        reward.img = require('../../assets/images/Card/60_stamps_icon.png');
      } else if (reward.points === 80) {
        reward.img = require('../../assets/images/Card/80_stamps_icon.png');
      } else if (reward.points === 140) {
        reward.img = require('../../assets/images/Card/140_stamps_icon.png');
      } else if (reward.points === 200) {
        reward.img = require('../../assets/images/Card/200_stamps_icon.png');
      } else if (reward.points === 240) {
        reward.img = require('../../assets/images/Card/240_stamps_icon.png');
      }
    };

    let rewardInfo = { title: null, img: null, points: null };
    // console.log(rewardInfo);

    setImg(rewardInfo);

    user.points = 100;

    return (
      <TouchableHighlight
        underlayColor={colors.neutralLight}
        style={styles.redeemButton}
        // style={
        //   user.points < reward.points ? styles.unavailable : styles.available
        // }
        onPress={() => {
          if (user.points < reward.points) return;
          navigation.navigate('RedeemInfo', { user, reward });
        }}
      >
        <Fragment>
          <CustomText
            style={
              user.points < reward.points
                ? styles.unavailableReward
                : styles.availableReward
            }
          >
            {reward.points} Stamps
          </CustomText>
          <Image
            source={require('../../assets/images/Card/240_stamps_icon.png')}
            style={
              user.points < reward.points
                ? styles.unavailableImg
                : styles.availableImg
            }
          />
          <CustomText
            style={
              user.points < reward.points
                ? [styles.unavailableReward, styles.rewardTitle]
                : [styles.availableReward, styles.rewardTitle]
            }
          >
            {reward.title}
          </CustomText>
        </Fragment>
      </TouchableHighlight>
    );
  }
}

export default withNavigation(RedeemRewardButton);
