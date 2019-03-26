import React, { Component, Fragment } from 'react';
import {
  View,
  TouchableOpacity,
  Platform,
  FlatList,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import Subheader from '../../components/Subheader';
import CustomText from '../../components/CustomText';
import { renderSeparator } from '../../lib/helpers/separator';
import { colors } from '../../config/styles';
import styles from './styles';

class Stores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {}
    };
  }

  componentDidMount() {
    this.findCoordinates();
  }

  findCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const location = {
            ...position.coords,
            latitudeDelta: 0.003,
            longitudeDelta:
              (Dimensions.get('window').width /
                Dimensions.get('window').height) *
              0.003
          };

          this.setState({ focusedLocation: location });
        },
        error => console.log(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }
  };

  zoomOut = () => {
    this.region = {
      latitude: this.state.focusedLocation.latitude,
      longitude: this.state.focusedLocation.longitude,
      latitudeDelta: this.state.focusedLocation.latitudeDelta * 10,
      longitudeDelta: this.state.focusedLocation.longitudeDelta * 10
    };
    this.setState({
      focusedLocation: {
        latitudeDelta: this.region.latitudeDelta,
        longitudeDelta: this.region.longitudeDelta,
        latitude: this.region.latitude,
        longitude: this.region.longitude
      }
    });
    this.map.animateToRegion(this.region, 100);
  };

  zoomIn = () => {
    this.region = {
      latitude: this.state.focusedLocation.latitude,
      longitude: this.state.focusedLocation.longitude,
      latitudeDelta: this.state.focusedLocation.latitudeDelta / 10,
      longitudeDelta: this.state.focusedLocation.longitudeDelta / 10
    };
    this.setState({
      focusedLocation: {
        latitudeDelta: this.region.latitudeDelta,
        longitudeDelta: this.region.longitudeDelta,
        latitude: this.region.latitude,
        longitude: this.region.longitude
      }
    });
    this.map.animateToRegion(this.region, 100);
  };

  getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km

    return d;
  };

  deg2rad = deg => {
    return deg * (Math.PI / 180);
  };

  render() {
    const { stores } = this.props;
    const storesWithDistances =
      this.state.focusedLocation &&
      stores.map(store => {
        const lat1 = this.state.focusedLocation.latitude;
        const lon1 = this.state.focusedLocation.longitude;
        const lat2 = store.lat;
        const lon2 = store.long;

        const distance = Math.round(
          this.getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2)
        );
        return { ...store, distance };
      });

    return (
      <View style={styles.container}>
        <Subheader>Stores</Subheader>
        <View style={styles.mapWrapper}>
          <MapView
            style={styles.map}
            followsUserLocation={true}
            showsUserLocation={true}
            showsMyLocationButton={true}
            loadingEnabled={true}
            zoomEnabled={true}
            zoomControlEnabled={true}
            loadingIndicatorColor="#fea405"
            loadingBackgroundColor="#ffffff"
            region={this.state.focusedLocation}
            onPress={this.pickLocationHandler}
            ref={ref => (this.map = ref)}
          >
            <View style={styles.mapIconWrapper}>
              <TouchableOpacity
                style={styles.mapIcon}
                onPress={() => {
                  this.findCoordinates();
                }}
              >
                <Ionicons
                  name={Platform.select({
                    android: 'md-navigate',
                    ios: 'ios-navigate'
                  })}
                  size={35}
                  color={colors.black}
                />
              </TouchableOpacity>
            </View>

            {stores.map(store => {
              return (
                <Marker
                  key={store.id}
                  coordinate={{
                    latitude: parseFloat(store.lat),
                    longitude: parseFloat(store.long)
                  }}
                  title={store.name}
                  image={require('../../assets/images/Icons/point_location.png')}
                  onPress={e => console.log(e.nativeEvent)}
                >
                  <View style={styles.markerLabel}>
                    <CustomText style={styles.markerTitle}>
                      {store.name}
                    </CustomText>
                  </View>
                </Marker>
              );
            })}
          </MapView>
        </View>
        {this.state.focusedLocation && (
          <FlatList
            data={storesWithDistances.sort(
              (store1, store2) => store1.distance - store2.distance
            )}
            renderItem={({ item }) => {
              return (
                <View style={styles.storeItem}>
                  <TouchableHighlight
                    underlayColor={colors.neutralLight}
                    onPress={() => {
                      const newRegion = {
                        longitude: parseFloat(item.long),
                        latitude: parseFloat(item.lat),
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.004
                      };
                      this.setState({ focusedLocation: newRegion });
                    }}
                  >
                    <Fragment>
                      <CustomText style={styles.bold}>{item.name}</CustomText>
                      <CustomText style={styles.body}>
                        {item.address}
                      </CustomText>
                      <CustomText style={styles.body}>{`${item.city}, ${
                        item.province
                      }`}</CustomText>
                      <CustomText style={styles.bold}>{item.hours}</CustomText>
                    </Fragment>
                  </TouchableHighlight>
                  <View style={styles.distanceWrapper}>
                    <CustomText style={styles.distance}>
                      {item.distance}
                    </CustomText>
                    <CustomText style={styles.body}> kms</CustomText>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item, index) => item + index}
            ItemSeparatorComponent={renderSeparator}
            style={styles.storesWrapper}
          />
        )}
      </View>
    );
  }
}

Stores.propTypes = {};

export default Stores;
