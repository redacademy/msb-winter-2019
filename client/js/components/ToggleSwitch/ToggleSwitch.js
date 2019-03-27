import React, { Component } from 'react';
import { View } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';

import CustomText from '../CustomText';
import { colors } from '../../config/styles';
import styles from './styles';

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
        <View style={styles.toggleWrapper}>
          <CustomText style={styles.text}>Your Favourites</CustomText>
          <SwitchToggle
            containerStyle={styles.toggle}
            circleStyle={styles.toggleCircle}
            switchOn={this.state.switchValueFav}
            onPress={() => this.toggleFav()}
            circleColorOff={colors.neutralDark}
            circleColorOn={colors.brand}
          />
        </View>
        <View style={styles.toggleWrapper}>
          <CustomText style={styles.text}>Beers</CustomText>
          <SwitchToggle
            containerStyle={styles.toggle}
            circleStyle={styles.toggleCircle}
            onPress={() => this.toggleBeer()}
            switchOn={this.state.switchValueBeer}
            circleColorOff={colors.neutralDark}
            circleColorOn={colors.brand}
          />
        </View>
        <View style={styles.toggleWrapper}>
          <CustomText style={styles.text}>Events</CustomText>
          <SwitchToggle
            containerStyle={styles.toggle}
            circleStyle={styles.toggleCircle}
            onPress={() => this.toggleEvent()}
            switchOn={this.state.switchValueEvent}
            circleColorOff={colors.neutralDark}
            circleColorOn={colors.brand}
          />
        </View>
      </View>
    );
  }
}

export default ToggleSwitch;
