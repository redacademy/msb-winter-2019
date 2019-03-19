import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import styles from "./styles";

const Stores = ({ stores }) => {
  console.log(stores);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            longitude: -123.099305,
            latitude: 49.26473,
            latitudeDelta: 0.004,
            longitudeDelta: 0.004
          }}
          onRegionChange={}
        >
        {stores.map((store) =>(
          <Marker 
          coordinate={}
          />
        ))}
        </MapView>
      </View>
      <View style={styles.listContainer}>
        <Text>This is Stores.</Text>
      </View>
    </View>
  );
};

Stores.propTypes = {};

export default Stores;
