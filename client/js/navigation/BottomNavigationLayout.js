import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Image } from 'react-native';

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
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let iconImg;
        if (routeName === 'Home') {
          iconImg = focused
            ? '../assets/images/Navigation/home_icon_active.png'
            : '../assets/images/Navigation/home_icon_inactive.png';
        } else if (routeName === 'Card') {
          iconImg = `ios-map`;
        } else if (routeName === 'Beers') {
          iconImg = `ios-heart`;
        } else if (routeName === 'Events') {
          iconImg = `ios-information-circle`;
        } else if (routeName === 'Stores') {
          iconImg = `ios-information-circle`;
        }
        return (
          <Image
            style={{ width: 30, height: 'auto' }}
            source={require({ iconImg })}
            color={tintColor}
          />
        );
        // return <Icon name={iconName} size={30} color={tintColor} />;
      }
    }),

    tabBarOptions: {
      activeTintColor: colors.brand,
      inactiveTintColor: '#000',
      labelStyle: {
        fontSize: fonts.xxxs,
        fontFamily: 'Montserrat',
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
