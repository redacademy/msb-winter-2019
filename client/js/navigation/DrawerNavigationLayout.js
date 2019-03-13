import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Image } from 'react-native';

import ProfileScreen from '../screens/Profile';
import FavBeersScreen from '../screens/FavBeers';
import FavEventsScreen from '../screens/FavEvents';
import ContactScreen from '../screens/Contact';
import { colors } from '../config/styles';
import { sharedNavigationOptions } from './config';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const FavBeersStack = createStackNavigator(
  {
    FavBeers: FavBeersScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const FavEventsStack = createStackNavigator(
  {
    FavEvents: FavEventsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ContactStack = createStackNavigator(
  {
    Contact: ContactScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createDrawerNavigator(
  {
    Profile: ProfileStack,
    FavBeers: FavBeersStack,
    FavEvents: FavEventsStack,
    Contact: ContactStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
      }
    }),
    drawerBackgroundColor: '#fff',
    contentOptions: {
      activeTintColor: colors.brand,
      inactiveTintColor: colors.black,
      labelStyle: {
        fontSize: 12,
        fontFamily: 'Verdana',
        lineHeight: 0
      },
      style: {
        backgroundColor: '#fff',
        height: 55,
        paddingTop: 8
      }
    }
  }
);
