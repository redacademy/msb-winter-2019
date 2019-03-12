// bottom navigation
import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import BeersScreen from '../screens/Beer';
import CardScreen from '../screens/Card';
import EventsScreen from '../screens/Events';
import HomeScreen from '../screens/Home';
import StoresScreen from '../screens/Stores';
// import { colors } from '../config/styles';

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

        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-calendar`;
        } else if (routeName === 'Card') {
          iconName = `ios-map`;
        } else if (routeName === 'Beers') {
          iconName = `ios-heart`;
        } else if (routeName === 'Events') {
          iconName = `ios-information-circle`;
        } else if (routeName === 'Stores') {
          iconName = `ios-information-circle`;
        }
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }),

    tabBarOptions: {
      activeTintColor: 'gold',
      inactiveTintColor: '#000',
      labelStyle: {
        fontSize: 11,
        fontFamily: 'Montserrat',
        lineHeight: 0
      },
      style: {
        backgroundColor: 'transparent',
        height: 55,
        paddingTop: 8
      }
    }
  }
);
