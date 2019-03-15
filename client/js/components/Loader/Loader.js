import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

class Loader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/loading_growler_v4.1.gif")}
          style={styles.imgBg}
        />

        <Text style={styles.loadingText}>Pouring...</Text>
      </View>
    );
  }
}

export default Loader;
