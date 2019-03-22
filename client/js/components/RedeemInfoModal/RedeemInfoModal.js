import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { withNavigation } from "react-navigation";
import styles from "./styles";

class RedeemInfoModal extends Component {
  render() {
    const { navigation } = this.props;
    const user = navigation.getParam("user");
    const reward = navigation.getParam("reward");

    let redeemImg;
    if (reward.title === "Monthy Draw") {
      redeemImg = require();
    } else if (reward.title === "16 oz Beer In Tasting Room") {
      redeemImg = require();
    } else if (reward.title === "Growler Fill") {
      redeemImg = require();
    } else if (reward.title === "T-Shirt") {
      redeemImg = require();
    } else if (reward.title === "Nachos and Two Flight In Tasting Room") {
      redeemImg = require();
    } else if (reward.title === "Tour and Beer for Two") {
      redeemImg = require();
    } else if (reward.title === "Ultimate Brew Day") {
      redeemImg = require();
    }

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>You are now redeeming</Text>
        <Text style={styles.redeem}>{`${reward.points} stamps`}</Text>
        <Text style={styles.rewardTitle}>{reward.title}</Text>
        <Image source={redeemImg} />
        <TouchableOpacity
          style={styles.redeemButton}
          onPress={() => {
            navigation.navigate("RedeemBarcode", { user, reward });
          }}
        >
          <Text style={styles.redeemText}>Got it! Redeem</Text>
        </TouchableOpacity>
        <View style={styles.cancelContainer}>
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

export default withNavigation(RedeemInfoModal);
