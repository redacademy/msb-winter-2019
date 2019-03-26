import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { withNavigation } from "react-navigation";
import { subtitle1 } from "../../config/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import CustomIcon from "../CustomIcon";

class StampsReceivedModal extends Component {
  render() {
    const { navigation } = this.props;
    const stamps = navigation.getParam("stamps");
    return (
      <View style={styles.container}>
        <CustomIcon
          style={styles.icon}
          source={require("../../assets/images/Icons/exit.png")}
          onPress={() => {
            navigation.navigate("History");
          }}
        />
        <Text style={styles.cheersMessage}>Cheers!</Text>
        <Image source={require("../../assets/images/Redeem/2_stars.png")} />
        <Text style={{ ...subtitle1 }}>{`You received ${stamps} stamps!`}</Text>
      </View>
    );
  }
}

StampsReceivedModal.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default withNavigation(StampsReceivedModal);
