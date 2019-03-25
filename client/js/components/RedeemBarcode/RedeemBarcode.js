import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { withNavigation } from "react-navigation";
import styles from "./styles";
import CustomIcon from "../CustomIcon";
import Barcode from "react-native-barcode-builder";
import { compose, graphql } from "react-apollo";
import {
  USER_QUERY,
  ADD_TO_USER_REDEEMS,
  SET_USER_POINTS
} from "../../apollo/queries";

class RedeemBarcode extends Component {
  render() {
    const { navigation, setUserPoints, addToUserRedeems } = this.props;
    const user = navigation.getParam("user");
    const reward = navigation.getParam("reward");
    return (
      <View style={styles.container}>
        <View style={styles.closeContainer}>
          <CustomIcon
            style={styles.close}
            source={require("../../assets/images/Icons/exit.png")}
            onPress={() => {
              navigation.navigate("Rewards");
            }}
          />
        </View>
        <View>
          <Text style={styles.text}>
            Please visit Main Street Brewery to have one of our staff members
            scan the barcode
          </Text>
          <View>
            <TouchableOpacity
              elevation={3}
              onPress={async () => {
                if (user.points < reward.points) return;
                await addToUserRedeems({
                  variables: {
                    date: new Date(),
                    rewardId: reward.id,
                    userId: user.id
                  }
                });
                await setUserPoints({
                  variables: {
                    id: user.id,
                    points: user.points - reward.points
                  }
                });
                navigation.navigate("RedeemSuccess", { user, reward });
              }}
            >
              <Barcode value="Test Redeem" format="CODE128" height={100} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default compose(
  graphql(SET_USER_POINTS, {
    name: "setUserPoints",
    options: () => ({
      refetchQueries: [
        {
          query: USER_QUERY
        }
      ]
    })
  }),
  graphql(ADD_TO_USER_REDEEMS, { name: "addToUserRedeems" }),
  withNavigation
)(RedeemBarcode);
