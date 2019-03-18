import React, { Component } from 'react';
import {
  NavigationActions,
  createStackNavigator,
  DrawerItems,
  DrawerActions
} from 'react-navigation';
import PropTypes from 'prop-types';
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  Platform,
  StyleSheet,
  Image,
  Linking,
  TouchableHighlight,
  SafeAreaView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/Profile';
import FavBeersScreen from '../screens/FavBeers';
import FavEventsScreen from '../screens/FavEvents';
import ContactScreen from '../screens/Contact';
import BeerScreen from '../screens/Beer';
import EventsScreen from '../screens/Events';
import {
  center,
  row,
  colors,
  h3,
  subtitle1,
  hr,
  dimensions,
  jusBetweenRow
} from '../config/styles';
import styles from './styles';

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

/** Functions */

class DrawerScreen extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={this.navigateToScreen('Profile')}
          >
            <View
              style={{
                ...jusBetweenRow,
                paddingVertical: 20,
                paddingHorizontal: 40
              }}
            >
              <Text style={{ ...h3 }}>About You</Text>
              <Ionicons
                name={Platform.select({
                  ios: 'ios-arrow-forward',
                  android: 'md-arrow-forward'
                })}
                size={25}
              />
            </View>
          </TouchableHighlight>
          <View
            style={{
              ...hr,
              marginVertical: 0,
              marginLeft: 20,
              maxWidth: dimensions.fullWidth - 40
            }}
          />
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={this.navigateToScreen('FavBeers')}
          >
            <View
              style={{
                ...jusBetweenRow,
                paddingVertical: 20,
                paddingHorizontal: 40
              }}
            >
              <Text style={{ ...h3 }}>Your Favourites</Text>
              <Ionicons
                name={Platform.select({
                  ios: 'ios-arrow-forward',
                  android: 'md-arrow-forward'
                })}
                size={25}
              />
            </View>
          </TouchableHighlight>
          <View
            style={{
              ...hr,
              marginVertical: 0,
              marginLeft: 20,
              maxWidth: dimensions.fullWidth - 40
            }}
          />
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={this.navigateToScreen('FavEvents')}
          >
            <View
              style={{
                ...jusBetweenRow,
                paddingVertical: 20,
                paddingHorizontal: 40
              }}
            >
              <Text style={{ ...h3 }}>Your Events</Text>
              <Ionicons
                name={Platform.select({
                  ios: 'ios-arrow-forward',
                  android: 'md-arrow-forward'
                })}
                size={25}
              />
            </View>
          </TouchableHighlight>
          <View
            style={{
              ...hr,
              marginVertical: 0,
              marginLeft: 20,
              maxWidth: dimensions.fullWidth - 40
            }}
          />
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={this.navigateToScreen('Contact')}
          >
            <View
              style={{
                ...jusBetweenRow,
                paddingVertical: 20,
                paddingHorizontal: 40
              }}
            >
              <Text style={{ ...h3 }}>Contact Us</Text>
              <Ionicons
                name={Platform.select({
                  ios: 'ios-arrow-forward',
                  android: 'md-arrow-forward'
                })}
                size={25}
              />
            </View>
          </TouchableHighlight>
          <View
            style={{
              ...hr,
              marginVertical: 0,
              marginLeft: 20,
              maxWidth: dimensions.fullWidth - 40
            }}
          />
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => {
              this.signOutAsync();
            }}
          >
            <View
              style={{
                ...jusBetweenRow,
                paddingVertical: 20,
                paddingHorizontal: 40
              }}
            >
              <Text style={{ ...h3 }}>Sign Out</Text>
              {/* <Ionicons
                name={Platform.select({
                  ios: 'ios-arrow-forward',
                  android: 'md-arrow-forward'
                })}
                size={25}
              /> */}
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
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;
