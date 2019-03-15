import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { DrawerItems } from 'react-navigation';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Image,
  Linking,
  Text,
  TouchableHighlight,
  View,
  SafeAreaView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { colors, h3, row, center, subtitle1 } from '../config/styles';

const Drawer = props => {
  return (
    <View style={{ flex: 1, width: 300 }}>
      <Image
        source={require('../../assets/images/Events/ig_image_1.png')}
        style={{ width: Dimensions.get('window').width }}
      />
      <TouchableHighlight
        underlayColor={'transparent'}
        onPress={() => {
          Linking.openURL('https://www.instagram.com/mainstreetbeer/'); //@TODO link to instagram app instead of site
        }}
      >
        <View style={{ ...row, ...center }}>
          <Image
            source={require('../../assets/images/Icons/socialmedia_twitter_icon.png')}
            style={{ width: 30, resizeMode: 'contain', marginRight: 5 }}
          />
          <Text style={{ ...subtitle1 }}>#themainbeer</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

Drawer.propTypes = {};

export default Drawer;
