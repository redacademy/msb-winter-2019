import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import styles from "./styles";

const Stores = ({ stores }) => {
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
        />
      </View>

      <View style={styles.listContainer}>
        {stores.map(store => {
          return (
            <View key={store.id}>
              <Text>{store.name}</Text>
              <Text>{store.address}</Text>
              <Text>{store.hours}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

Stores.propTypes = {};

export default Stores;
