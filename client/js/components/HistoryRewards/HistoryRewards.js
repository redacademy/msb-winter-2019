import React, { Fragment } from "react";
import { View, Image, TouchableHighlight } from "react-native";
import { withNavigation } from "react-navigation";

import CustomText from "../CustomText";
import { colors } from "../../config/styles";
import styles from "./styles";

const HistoryRewards = ({ allRewards, points, navigation }) => {
  const setImg = reward => {
    if (reward.points === null) {
      reward.img = require("../../assets/images/Card/star_1_stamp.png");
    } else if (reward.points === 20) {
      reward.img = require("../../assets/images/Card/20_stamps_icon.png");
    } else if (reward.points === 40) {
      reward.img = require("../../assets/images/Card/40_stamps_icon.png");
    } else if (reward.points === 60) {
      reward.img = require("../../assets/images/Card/60_stamps_icon.png");
    } else if (reward.points === 80) {
      reward.img = require("../../assets/images/Card/80_stamps_icon.png");
    } else if (reward.points === 140) {
      reward.img = require("../../assets/images/Card/140_stamps_icon.png");
    } else if (reward.points === 200) {
      reward.img = require("../../assets/images/Card/200_stamps_icon.png");
    } else if (reward.points === 240) {
      reward.img = require("../../assets/images/Card/240_stamps_icon.png");
    }
  };

  let previousReward = { title: null, img: null, points: null };
  let nextReward = { title: null, img: null, points: null };

  allRewards.sort((reward1, reward2) => reward1.points - reward2.points);

  let nextRewardIndex;
  for (let i = 0; i < allRewards.length; i++) {
    const currentReward = allRewards[i];
    if (currentReward.points >= points) {
      nextRewardIndex = i;
      break;
    }
  }

  if (nextRewardIndex !== undefined) {
    nextReward.title = allRewards[nextRewardIndex].title;
    nextReward.points = allRewards[nextRewardIndex].points;
    if (nextRewardIndex > 0) {
      previousReward.title = allRewards[nextRewardIndex - 1].title;
      previousReward.points = allRewards[nextRewardIndex - 1].points;
    }
  } else {
    const lastReward = allRewards[allRewards.length - 1];
    previousReward.title = lastReward.title;
    previousReward.points = lastReward.points;
  }
  setImg(previousReward);
  setImg(nextReward);

  const rewardsArray = [previousReward, nextReward];

  return (
    <View style={styles.rewards}>
      {rewardsArray.map((reward, index) => {
        return (
          <TouchableHighlight
            underlayColor={colors.neutralLight}
            onPress={() => {
              navigation.navigate("Rewards");
            }}
            style={styles.reward}
            key={reward.title}
          >
            <Fragment>
              <CustomText style={styles.header}>
                {index === 0 ? "Previous Reward" : "Next Reward"}
              </CustomText>
              <CustomText style={styles.stamps}>
                {reward.points === null
                  ? "Keep collecting!"
                  : `${reward.points} Stamps`}
              </CustomText>
              <Image source={reward.img} style={styles.rewardImg} />
              <CustomText style={styles.rewardTitle}>{reward.title}</CustomText>
            </Fragment>
          </TouchableHighlight>
        );
      })}
      <View style={styles.vl} />
    </View>
  );
};

export default withNavigation(HistoryRewards);
