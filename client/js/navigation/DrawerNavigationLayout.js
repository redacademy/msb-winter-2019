import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems
} from 'react-navigation';
import {
  Platform,
  Dimensions,
  Button,
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
import { colors, h3, h2, hr, row, center, subtitle1 } from '../config/styles';
import { sharedNavigationOptions } from './config';

/**
 * Stacks
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

/** Functions */
_signOutAsync = async () => {
  await AsyncStorage.clear();
  this.props.navigation.navigate('Auth');
};

/**
 * DrawerNavigator
 **/
export default createDrawerNavigator(
  {
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
            size={30}
            color={tintColor}
          />
        );
      }
    }),
    contentComponent: props => (
      <View style={{ flex: 1 }}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <DrawerItems {...props} />
          <Button
            style={{ ...h3 }}
            title="Sign Out"
            onPress={() => {
              _signOutAsync();
            }}
          />
        </SafeAreaView>

        <Image
          source={require('../assets/images/Events/ig_image_1.png')}
          style={{ width: Dimensions.get('window').width }}
        />
        <TouchableHighlight
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
      itemsContainerStyle: {
        // borderBottomColor: colors.neutralDark,
        // borderBottomWidth: 300
      },
      labelStyle: {
        ...h3
      },
      style: {
        backgroundColor: '#fff',
        height: 55,
        paddingTop: 8
      }
    }
  }
);
