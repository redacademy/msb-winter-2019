import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Image, View } from 'react-native';
import BeersScreen from '../screens/AllBeers';
import CardScreen from '../screens/Card';
import EventsScreen from '../screens/AllEvents';
import HomeScreen from '../screens/Home';
import StoresScreen from '../screens/Stores';
import { colors, fonts } from '../config/styles';
import { sharedNavigationOptions } from './config';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Card: CardScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const BeersStack = createStackNavigator(
  {
    Beers: BeersScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const EventsStack = createStackNavigator(
  {
    Events: EventsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const StoresStack = createStackNavigator(
  {
    Stores: StoresScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const CardStack = createStackNavigator(
  {
    Card: CardScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Card: CardStack,
    Beers: BeersStack,
    Events: EventsStack,
    Stores: StoresStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        console.log('>>>>>>>>>', navigation);

        let icon;
        if (routeName === 'Home') {
          icon = focused
            ? require('../assets/images/Navigation/home_icon_active.png')
            : require('../assets/images/Navigation/home_icon_inactive.png');
        } else if (routeName === 'Card') {
          icon = focused
            ? require('../assets/images/Navigation/card_icon_active.png')
            : require('../assets/images/Navigation/card_icon_inactive.png');
        }
        if (routeName === 'Beers') {
          icon = focused
            ? require('../assets/images/Navigation/beers_icon_active.png')
            : require('../assets/images/Navigation/beer_icon_inactive.png');
        } else if (routeName === 'Events') {
          icon = focused
            ? require('../assets/images/Navigation/events_icon_active.png')
            : require('../assets/images/Navigation/event_icon_inactive.png');
        } else if (routeName === 'Stores') {
          icon = focused
            ? require('../assets/images/Navigation/stores_icon_active.png')
            : require('../assets/images/Navigation/stores_icon_inactive.png');
        }
        return <Image source={icon} style={{ height: 30, width: 30 }} />;
      }
    }),

    tabBarOptions: {
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
