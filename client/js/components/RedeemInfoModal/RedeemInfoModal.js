import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import OrangeButton from '../Buttons/OrangeButton';
import styles from './styles';

class RedeemInfoModal extends Component {
  render() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    const reward = navigation.getParam('reward');

    let redeemImg;
    if (reward.title === 'Monthy Draw') {
      redeemImg = require('../../assets/images/Redeem/20_stamp_reward_icon.png');
    } else if (reward.title === '16 oz Beer In Tasting Room') {
      redeemImg = require('../../assets/images/Redeem/40_stamp_reward_icon.png');
    } else if (reward.title === 'Growler Fill') {
      redeemImg = require('../../assets/images/Redeem/60_stamp_reward_icon.png');
    } else if (reward.title === 'T-Shirt') {
      redeemImg = require('../../assets/images/Redeem/80_stamp_reward_icon.png');
    } else if (reward.title === 'Nachos and Two Flight In Tasting Room') {
      redeemImg = require('../../assets/images/Redeem/140_stamps_icon_2x.png');
    } else if (reward.title === 'Tour and Beer for Two') {
      redeemImg = require('../../assets/images/Redeem/200_Stamps_icon2x.png');
    } else if (reward.title === 'Ultimate Brew Day') {
      redeemImg = require('../../assets/images/Redeem/240_stamp_reward_icon.png');
    }

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>You are now redeeming</Text>
          <Text style={styles.redeem}>{`${reward.points} stamps`}</Text>
          <Image source={redeemImg} style={styles.rewardImg} />
          <Text style={styles.rewardTitle}>{reward.title}</Text>
          <OrangeButton
            onPress={() => {
              navigation.navigate('RedeemBarcode', { user, reward });
            }}
          >
            Got it! Redeem
          </OrangeButton>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.cancel}>Not right now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

RedeemInfoModal.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default withNavigation(RedeemInfoModal);
