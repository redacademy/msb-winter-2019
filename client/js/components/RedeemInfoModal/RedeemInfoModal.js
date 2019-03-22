import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { withNavigation } from "react-navigation";
import styles from "./styles";

class RedeemInfoModal extends Component {
  render() {
    const { navigation } = this.props;
    const user = navigation.getParam("user");
    const reward = navigation.getParam("reward");
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>You are now redeeming</Text>
        <Text style={styles.redeem}>{`${reward.points} stamps`}</Text>
        <Text style={styles.rewardTitle}>{reward.title}</Text>

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
