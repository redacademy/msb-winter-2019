import React, { Component } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

class Loader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/beerPouring.gif")}
          style={styles.imgBg}
        />
        {/* <View style={styles.textContainer}> */}
        <Text style={styles.loadingText}>Pouring...</Text>
        {/* </View>x */}
      </View>
    );
  }
}

Loader.propTypes = {
  styles: PropTypes.object.isRequired
};

export default Loader;
