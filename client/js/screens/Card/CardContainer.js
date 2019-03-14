import React, { Component } from "react";
import { View } from "react-native";

import Card from "./Card";
import styles from "./styles";

class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Card />;
  }
}

export default CardContainer;
