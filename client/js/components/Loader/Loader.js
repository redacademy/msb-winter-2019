import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

class Loader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <ImageBackground
            source={require("../../assets/images/beerPouring.gif")}
            // style={styles.imgBg}
            style={styles.imgBg}
          >
            <View style={styles.textContainer}>
              <Text style={styles.loadingText}>Pouring...</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

Loader.propTypes = {
  styles: PropTypes.object.isRequired
};

export default Loader;
