import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

const UnderAgeModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View />
        <Text style={styles.title}>SORRY!</Text>
        <TouchableOpacity>
          <Image source={require("../../assets/images/Icons/exit_icon.png")} />
        </TouchableOpacity>
      </View>

      <Image
        style={styles.beer}
        source={require("../../assets/images/Icons/lock_growler_icon.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Please come again when you are of legal age to drink!
        </Text>
      </View>
    </View>
  );
};

export default UnderAgeModal;
