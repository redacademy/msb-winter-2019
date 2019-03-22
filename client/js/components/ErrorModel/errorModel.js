import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

const ErrorModel = () => {
  return (
    <View style={styles.constainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>SORRY!</Text>
        <Image
          style={styles.exitButton}
          source={require("../../assets/images/Icons/exit_icon.png")}
        />
      </View>
      <Image source={require("../../assets/images/Icons/spill_icon.png")} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>But don't cry over spilled beer.</Text>
        <Text style={styles.text}>Try Again!</Text>
      </View>
    </View>
  );
};

export default ErrorModel;
