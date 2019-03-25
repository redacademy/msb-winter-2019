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
import {
  colors,
  center,
  row,
  margin,
  jusBetweenRow,
  padding,
  subtitle2
} from '../../config/styles';
import styles from './styles';

class Stores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        longitude: -123.099305,
        latitude: 49.26473,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004
      }

      // focusedLocation: {
      //   latitude: 49.26473,
      //   longitude: -123.099305,
      //   latitudeDelta: 0.003,
      //   longitudeDelta:
      //     (Dimensions.get('window').width / Dimensions.get('window').height) *
      //     0.003
      // }
    };
  }

  componentDidMount() {
    this.setState({
      // region: {
      //   longitude: -123.099305,
      //   latitude: 49.26473,
      //   latitudeDelta: 0.004,
      //   longitudeDelta: 0.004
      // },
      focusedLocation: {
        latitude: 49.26473,
        longitude: -123.099305,
        // latitudeDelta: 0.00522,
        latitudeDelta: 0.003,
        longitudeDelta:
          (Dimensions.get('window').width / Dimensions.get('window').height) *
          0.003
        // 0.00522
      }
    });
  }

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

  render() {
    const { stores } = this.props;
    console.log(stores);

    return (
      <View style={styles.container}>
        <Subheader>Stores</Subheader>
        <View style={styles.mapWrapper}>
          {this.state.region.longitude && (
            <MapView
              style={styles.map}
              // initialRegion={this.state.region}
              // region={this.state.region}
              followsUserLocation={true}
              showsUserLocation={true}
              showsMyLocationButton={true}
              loadingEnabled={true}
              zoomEnabled={true}
              zoomControlEnabled={true}
              loadingIndicatorColor='#fea405'
              loadingBackgroundColor='#ffffff'
              //
              region={this.state.focusedLocation}
              onPress={this.pickLocationHandler}
              // customMapStyle={mapStyle}
              ref={ref => (this.map = ref)}
            >
              <View
                style={[
                  styles.zoom,
                  {
                    ...row,
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    paddingVertical: padding.xxxs,
                    paddingHorizontal: padding.xxxs
                  }
                ]}
              >
                <TouchableOpacity
                  style={[
                    styles.zoomin,
                    {
                      width: 37,
                      ...center
                    }
                  ]}
                  onPress={() => {
                    this.zoomIn();
                  }}
                >
                  <Ionicons
                    name={Platform.select({
                      android: 'md-add-circle',
                      ios: 'ios-add-circle'
                    })}
                    size={35}
                    color={colors.brand}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.zoomout,
                    {
                      width: 37,
                      ...center
                    }
                  ]}
                  onPress={() => {
                    this.zoomOut();
                  }}
                >
                  <Ionicons
                    name={Platform.select({
                      android: 'md-remove-circle',
                      ios: 'ios-remove-circle'
                    })}
                    size={35}
                    color={colors.brand}
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
                    <View
                      style={{
                        height: 30,
                        top: -5,
                        left: 26,
                        zIndex: 2,
                        position: 'absolute'
                      }}
                    >
                      <CustomText style={styles.markerTitle}>
                        {store.name}
                      </CustomText>
                    </View>
                  </Marker>
                );
              })}
            </MapView>
          )}
        </View>

        <FlatList
          data={stores}
          renderItem={({ item }) => (
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
                  <CustomText style={styles.body}>{item.address}</CustomText>
                  <CustomText style={styles.bold}>{item.hours}</CustomText>
                </Fragment>
              </TouchableHighlight>
            </View>
          )}
          keyExtractor={(item, index) => item + index}
          ItemSeparatorComponent={renderSeparator}
          style={styles.storesWrapper}
        />
      </View>
    );
  }
}

Stores.propTypes = {};

export default Stores;
