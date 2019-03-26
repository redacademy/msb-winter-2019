import React, { Component, Fragment } from "react";
import { TouchableHighlight, Image, View } from "react-native";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";

import CustomText from "../CustomText";
import OrangeButton from "../Buttons/OrangeButton";
import { colors } from "../../config/styles";
import styles from "./styles";

class RedeemRewardButton extends Component {
  render() {
    const { reward, user, navigation } = this.props;

    let rewardImg;

    if (reward.points === 20) {
      rewardImg = require("../../assets/images/Card/20_stamps_icon.png");
    } else if (reward.points === 40) {
      rewardImg = require("../../assets/images/Card/40_stamps_icon.png");
    } else if (reward.points === 60) {
      rewardImg = require("../../assets/images/Card/60_stamps_icon.png");
    } else if (reward.points === 80) {
      rewardImg = require("../../assets/images/Card/80_stamps_icon.png");
    } else if (reward.points === 140) {
      rewardImg = require("../../assets/images/Card/140_stamps_icon.png");
    } else if (reward.points === 200) {
      rewardImg = require("../../assets/images/Card/200_stamps_icon.png");
    } else if (reward.points === 240) {
      rewardImg = require("../../assets/images/Card/240_stamps_icon.png");
    }

    return (
      <TouchableHighlight
        underlayColor={colors.neutralLight}
        style={styles.redeemButton}
        onPress={() => {
          if (user.points < reward.points) return;
          navigation.navigate("RedeemInfo", { user, reward });
        }}
      >
        <Fragment>
          <CustomText
            style={
              user.points < reward.points
                ? [styles.unavailable, styles.stamps]
                : [styles.available, styles.stamps]
            }
          >
            {reward.points} Stamps
          </CustomText>
          <Image
            source={rewardImg}
            style={
              user.points < reward.points
                ? [styles.unavailableImg, styles.img]
                : [styles.availableImg, styles.img]
            }
          />
          <CustomText
            style={
              user.points < reward.points
                ? [styles.unavailable, styles.rewardTitle]
                : [styles.available, styles.rewardTitle]
            }
          >
            {reward.title}
          </CustomText>
        </Fragment>
      </TouchableHighlight>
    );
  }
}

RedeemRewardButton.propTypes = {
  navigation: PropTypes.object.isRequired,
  reward: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withNavigation(RedeemRewardButton);
