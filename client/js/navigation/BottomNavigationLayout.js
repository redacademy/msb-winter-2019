import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import { Image } from 'react-native';

import { sharedNavigationOptions } from './config';
import BeersScreen from '../screens/AllBeers';
import CardScreen from '../screens/Card';
import EventsScreen from '../screens/AllEvents';
import HomeScreen from '../screens/Home';
import StoresScreen from '../screens/Stores';
import BeerScreen from '../screens/Beer';
import EventScreen from '../screens/Events';
import ProfileScreen from '../screens/Profile';
import FavBeersScreen from '../screens/FavBeers';
import FavEventsScreen from '../screens/FavEvents';
import ContactScreen from '../screens/Contact';
import CardTab from '../components/Tabs/CardTab';
import HistoryTab from '../components/Tabs/HistoryTab';
import RewardsTab from '../components/Tabs/RewardsTab';
import {
  colors,
  dimensions,
  h3,
  underline,
  shadow2,
  shadow3,
  fonts,
  padding,
  contain,
  margin
} from '../config/styles';

const CardTabScreens = createMaterialTopTabNavigator(
  {
    Card: CardTab,
    History: HistoryTab,
    Rewards: RewardsTab
  },
  {
    tabBarOptions: {
      activeTintColor: colors.black,
      inactiveTintColor: colors.neutralLight,
      indicatorStyle: {
        ...underline,
        borderBottomWidth: 3,
        backgroundColor: colors.brand,
        marginBottom: margin.sm,
        marginLeft: margin.sm * 1.5,
        maxWidth: dimensions.fullWidth / 3 - 30,
        width: '100%'
      },
      labelStyle: {
        ...h3,
        marginTop: 0
      },
      style: {
        backgroundColor: colors.white,
        ...shadow2,
        height: 50
      }
    }
  }
);

const HomeStack = createStackNavigator(
  {
    HomeScreen,
    Profile: ProfileScreen,
    FavBeers: FavBeersScreen,
    Beer: BeerScreen,
    Contact: ContactScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const BeersStack = createStackNavigator(
  {
    BeersScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const EventsStack = createStackNavigator(
  {
    EventsScreen,
    FavEvents: FavEventsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const StoresStack = createStackNavigator(
  {
    StoresScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const CardStack = createStackNavigator(
  {
    CardScreen,
    CardTabScreens
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
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;

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
        return <Image source={icon} style={{ maxWidth: 32, ...contain }} />;
      }
    }),

    tabBarOptions: {
      activeTintColor: colors.brand,
      inactiveTintColor: colors.black,
      labelStyle: {
        fontSize: fonts.xxxs,
        fontFamily: fonts.primarySemi,
        lineHeight: 0
      },
      style: {
        backgroundColor: colors.white,
        height: 60,
        paddingTop: padding.xxs,
        ...shadow3
      }
    }
  }
);
