import React, { Component } from "react";
import { View, Text } from "react-native";
import SwitchToggle from "react-native-switch-toggle";

import BlackButton from "../Buttons/BlackButton";
import OrangeButton from "../Buttons/OrangeButton";
import { colors } from "../../config/styles";
import styles from "./styles";

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValueFav: false,
      switchValueBeer: false,
      switchValueEvent: false
    };
  }

  toggleFav = () => {
    this.setState({ switchValueFav: !this.state.switchValueFav });
  };

  toggleBeer = () => {
    this.setState({ switchValueBeer: !this.state.switchValueBeer });
  };

  toggleEvent = () => {
    this.setState({ switchValueEvent: !this.state.switchValueEvent });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toggleContainer}>
          <Text>Your Favourites</Text>
          <SwitchToggle
            containerStyle={styles.toggle}
            circleStyle={styles.toggleCircles}
            switchOn={this.state.switchValueFav}
            onPress={() => this.toggleFav()}
            circleColorOff={colors.neutralDark}
            circleColorOn={colors.brand}
          />
        </View>
        <View style={styles.toggleContainer}>
          <Text>Beers</Text>
          <SwitchToggle
            containerStyle={styles.toggle}
            circleStyle={styles.toggleCircles}
            onPress={() => this.toggleBeer()}
            switchOn={this.state.switchValueBeer}
            circleColorOff={colors.neutralDark}
            circleColorOn={colors.brand}
          />
        </View>
        <View style={styles.toggleContainer}>
          <Text>Events</Text>
          <SwitchToggle
            containerStyle={styles.toggle}
            circleStyle={styles.toggleCircles}
            onPress={() => this.toggleEvent()}
            switchOn={this.state.switchValueEvent}
            circleColorOff={colors.neutralDark}
            circleColorOn={colors.brand}
          />
        </View>
        <View style={styles.buttonEditContainer} />
        <View style={styles.buttonSaveContainer}>
          <BlackButton style={styles.button}>Edit</BlackButton>
          <BlackButton style={styles.buttonSave}>Save Changes</BlackButton>
        </View>
      </View>
    );
  }
}

export default ToggleSwitch;
