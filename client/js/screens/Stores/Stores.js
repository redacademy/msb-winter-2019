import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import styles from "./styles";

const Stores = ({ stores }) => {
  console.log(stores);

  return (
    <View>
      <MapView provider={PROVIDER_GOOGLE} style={styles.mapContainer} />
      <Text>This is Stores.</Text>
    </View>
  );
};

Stores.propTypes = {};

export default Stores;
