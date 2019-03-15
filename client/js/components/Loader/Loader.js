import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";

import styles from "./styles";

class Loader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/beerPouring.gif")}
          style={styles.imgBg}
        >
          <View style={styles.textContainer}>
            <Text style={styles.loadingText}>Pouring...</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Loader;
