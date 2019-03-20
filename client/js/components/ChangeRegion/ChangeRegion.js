import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import styles from './styles';

class ChangeRegion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {},
    };
  }

  componentDidMount() {
    this.setState({
      region: {
        longitude: -123.099305,
        latitude: 49.26473,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004,
      },
    });
  }

  changeLocation = () => {
    return {
      longitude: this.longitude,
      latitude: this.latitude,
    };
  };

  render() {
    const { stores } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          {this.state.region.longitude && (
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={this.state.region}
            >
              {stores.map(store => {
                return (
                  <Marker
                    key={store.id}
                    coordinate={{
                      latitude: parseFloat(store.lat),
                      longitude: parseFloat(store.long),
                    }}
                    title={store.name}
                  />
                );
              })}
            </MapView>
          )}
        </View>

        <ScrollView style={styles.listContainer}>
          {stores.map(store => {
            return (
              <View key={store.id} style={styles.storeItem}>
                <TouchableOpacity
                  onPress={() => {
                    const newRegion = {
                      longitude: parseFloat(store.long),
                      latitude: parseFloat(store.lat),
                      latitudeDelta: 0.004,
                      longitudeDelta: 0.004,
                    };
                    this.setState({ region: newRegion });
                  }}
                >
                  <View>
                    <Text>{store.name}</Text>
                    <Text>{store.address}</Text>
                    <Text>{store.hours}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default ChangeRegion;
