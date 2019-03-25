import React, { Component, Fragment } from 'react';
import { View, TouchableOpacity, Platform, FlatList } from 'react-native';
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
      region: {},
      myLocation: null
    };
  }

  componentDidMount() {
    this.setState({
      region: {
        longitude: -123.099305,
        latitude: 49.26473,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004
      }
    });
  }

  changeLocation = () => {
    return {
      longitude: this.longitude,
      latitude: this.latitude
    };
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
              // region={{
              //   latitude: 49.26473,
              //   longitude: -123.099305,
              //   latitudeDelta: 0.015,
              //   longitudeDelta: 0.0121
              // }}
              initialRegion={this.state.region}
              followsUserLocation={true}
              showsUserLocation={true}
              loadingIndicatorColor='#fea405'
              loadingBackgroundColor='#ffffff'
            >
              <View
                style={[
                  styles.zoom,
                  {
                    ...row,
                    width: '20%',
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
                    this.zoomin();
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
                    this.zoomin();
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
                  >
                    <View
                      style={{
                        // backgroundColor: 'white',
                        // width: 100,
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
        {/* <ScrollView style={styles.storesWrapper}>
          {stores.map(store => {
            return (
              <View key={store.id} style={styles.storeItem}>
                <TouchableOpacity
                  onPress={() => {
                    const newRegion = {
                      longitude: parseFloat(store.long),
                      latitude: parseFloat(store.lat),
                      latitudeDelta: 0.004,
                      longitudeDelta: 0.004
                    };
                    this.setState({ region: newRegion });
                  }}
                >
                  <View>
                    <CustomText style={styles.bold}>{store.name}</CustomText>
                    <CustomText style={styles.body}>{store.address}</CustomText>
                    <CustomText style={styles.bold}>{store.hours}</CustomText>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView> */}
        <FlatList
          data={stores}
          renderItem={({ item }) => (
            <Fragment>
              <CustomText style={styles.bold}>{item.name}</CustomText>
              <CustomText style={styles.body}>{item.address}</CustomText>
              <CustomText style={styles.bold}>{item.hours}</CustomText>
            </Fragment>
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
