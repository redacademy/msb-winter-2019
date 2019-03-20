import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import ChangeRegion from "../../components/ChangeRegion";
import styles from "./styles";

const Stores = ({ stores }) => {
  const initialRegion = {
    longitude: -123.099305,
    latitude: 49.26473,
    latitudeDelta: 0.0004,
    longitudeDelta: 0.0004
  };

  return <ChangeRegion styles={styles} stores={stores} />;
};

Stores.propTypes = {};

export default Stores;
