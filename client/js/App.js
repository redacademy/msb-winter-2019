import React, { Component } from "react";
import { StatusBar } from "react-native";
import RootStackNavigator from "./navigation/RootStackNavigator";

import styles from "./screens/Home/styles";

export default class App extends Component {
  render() {
    StatusBar.setBarStyle("light-content", true);

    return <RootStackNavigator />;
  }
}
