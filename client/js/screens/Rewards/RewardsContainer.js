import React, { Component } from "react";
import { View, Text } from "react-native";
import gql from "graphql-tags";
import { Query } from "React-apollo";

import Rewards from "./Rewards";

export default class RewardsContainer extends Component {
  render() {
    return (
      <View>
        <Rewards />
      </View>
    );
  }
}
