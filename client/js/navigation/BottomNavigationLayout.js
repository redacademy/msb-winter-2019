// bottom navigation
import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import BeerScreen from '../screens/Beer';
import CardScreen from '../screens/Card';
import EventsScreen from '../screens/Events';
import HomeScreen from '../screens/Home';
import StoresScreen from '../screens/Stores';

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

const BeerStack = createStackNavigator(
  {
    Beer: BeerScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
