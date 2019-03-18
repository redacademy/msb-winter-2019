import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  createBottomTabNavigator
} from 'react-navigation';
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

import ProfileScreen from '../screens/Profile';
import FavBeersScreen from '../screens/FavBeers';
import FavEventsScreen from '../screens/FavEvents';
import ContactScreen from '../screens/Contact';
import {
  colors,
  fonts,
  h3,
  row,
  center,
  subtitle1,
  shadow1
} from '../config/styles';
import { sharedNavigationOptions } from './config';
import BottomTabNav from './BottomNavigationLayout';
import DrawerScreen from './DrawerScreen';

import AllBeersScreen from '../screens/AllBeers';
import BeerScreen from '../screens/Beer';
import CardScreen from '../screens/Card';
import AllEventsScreen from '../screens/AllEvents';
import EventsScreen from '../screens/Events';
import HomeScreen from '../screens/Home';
import StoresScreen from '../screens/Stores';

/**
 * Tab Navigator
 **/

const Tabs = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Card: CardScreen,
    Beers: AllBeersScreen,
    Events: AllEventsScreen,
    Stores: StoresScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
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
        return (
          <Image
            source={icon}
            style={{ maxWidth: 32, resizeMode: 'contain' }}
          />
        );
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
        backgroundColor: '#fff',
        height: 60,
        paddingTop: 5
      }
    }
  }
);

/**
 * Drawer Navigator
 **/

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
    FavBeers: FavBeersScreen,
    Beer: BeerScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const FavEventsStack = createStackNavigator(
  {
    FavEvents: FavEventsScreen,
    Events: EventsScreen
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

// const DrawerNavigator = createDrawerNavigator(
//   {
//     Drawer: { screen: Tabs },
//     'About You': ProfileStack,
//     'Your Favourites': FavBeersStack,
//     'Your Events': FavEventsStack,
//     'Contact Us': ContactStack
//   },
//   {
//     initialRouteName: 'Drawer',
//     contentComponent: DrawerScreen,
//     drawerWidth: Dimensions.get('window').width
//   }
// );

/** Functions */
_signOutAsync = async () => {
  await AsyncStorage.clear();
  this.props.navigation.navigate('Auth');
};

/**
 * Export Navigator
 **/
export default createDrawerNavigator(
  {
    Tabs,
    'About You': ProfileStack,
    'Your Favourites': FavBeersStack,
    'Your Events': FavEventsStack,
    'Contact Us': ContactStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ focused, horizontal, tintColor }) => {
        return (
          <Ionicons
            name={Platform.select({
              ios: 'ios-arrow-forward',
              android: 'md-arrow-forward'
            })}
            size={25}
            color={tintColor}
            navigation={navigation}
          />
        );
      }
    }),
    contentComponent: props => (
      <View style={{ flex: 1 }}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <DrawerItems {...props} />
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => {
              _signOutAsync();
            }}
          >
            <View
              style={{
                ...row,
                ...center,
                justifyContent: 'space-between',
                padding: 20,
                borderTopWidth: StyleSheet.hairlineWidth,
                borderTopColor: colors.neutralDark
              }}
            >
              <Text style={{ ...h3 }}>Sign Out</Text>
              <Ionicons
                name={Platform.select({
                  ios: 'ios-arrow-forward',
                  android: 'md-arrow-forward'
                })}
                size={25}
              />
            </View>
          </TouchableHighlight>
        </SafeAreaView>

        <Image
          source={require('../assets/images/Events/ig_image_1.png')}
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
              source={require('../assets/images/Icons/socialmedia_ig_icon.png')}
              style={{ width: 30, resizeMode: 'contain', marginRight: 5 }}
            />
            <Text style={{ ...subtitle1 }}>#themainbeer</Text>
          </View>
        </TouchableHighlight>
      </View>
    ),
    drawerType: 'front',
    drawerWidth: Dimensions.get('window').width,

    contentOptions: {
      activeTintColor: colors.brand,
      inactiveTintColor: colors.black,
      itemStyle: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
      },
      iconContainerStyle: {},
      labelStyle: {
        ...h3
      },
      style: {
        backgroundColor: '#fff',
        height: 55,
        paddingTop: 8,
        borderBottomColor: colors.neutralDark,
        borderBottomWidth: StyleSheet.hairlineWidth
      }
    }
  }
);
