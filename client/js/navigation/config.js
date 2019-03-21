import React from 'react';
import { Image, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from '../config/styles';

export const sharedNavigationOptions = navigation => ({
  headerTitle: (
    <Image
      source={require('../assets/images/Logos/msb_logo_white.png')}
      style={{ resizeMode: 'contain' }}
    />
  ),
  headerBackTitle: null,
  headerRight: (
    <Image
      source={require('../assets/images/Icons/notifications_icon_inactive.png')}
      style={{ resizeMode: 'contain', marginRight: 10 }}
    />
  ),
  headerLeft: () => (
    <Ionicons
      name={
        navigation.state.routeName === 'Event'
          ? Platform.select({
              ios: 'ios-arrow-dropleft-circle',
              android: 'md-arrow-dropleft-circle'
            })
          : Platform.select({
              ios: 'ios-menu',
              android: 'md-menu'
            })
      }
      onPress={() => {
        navigation.state.routeName === 'Event'
          ? navigation.goBack()
          : navigation.toggleDrawer();
      }}
      size={40}
      color={'white'}
      style={{ marginLeft: 20 }}
    />
  ),
  headerStyle: {
    backgroundColor: colors.black,
    height: 75
  }
});
