import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

const UpdateProfileModel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeContainer}>
        <TouchableOpacity>
          <Image
            style={styles.close}
            source={require("../../assets/images/Icons/exit_button.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}> UPDATED! </Text>
        <Image source={require("../../assets/images/Icons/nachos_icon.png")} />
        <Text style={styles.text}>Your profile has been updated</Text>
      </View>
      <View />
    </View>
  );
};

export default UpdateProfileModel;
