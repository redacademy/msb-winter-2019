import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import BottomNavigationLayout from './BottomNavigationLayout';
import { sharedNavigationOptions } from './config';
import DrawerScreen from './DrawerScreen';
import BeerScreen from '../screens/Beer';
import EventsScreen from '../screens/Events';
import ProfileScreen from '../screens/Profile';
import FavBeersScreen from '../screens/FavBeers';
import FavEventsScreen from '../screens/FavEvents';
import ContactScreen from '../screens/Contact';
import { dimensions } from '../config/styles';

// const ProfileStack = createStackNavigator(
//   {
//     Profile: ProfileScreen
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       ...sharedNavigationOptions(navigation)
//     })
//   }
// );

// const FavBeersStack = createStackNavigator(
//   {
//     FavBeers: FavBeersScreen,
//     Beer: BeerScreen
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       ...sharedNavigationOptions(navigation)
//     })
//   }
// );

// const FavEventsStack = createStackNavigator(
//   {
//     FavEvents: FavEventsScreen,
//     Events: EventsScreen
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       ...sharedNavigationOptions(navigation)
//     })
//   }
// );

// const ContactStack = createStackNavigator(
//   {
//     Contact: ContactScreen
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       ...sharedNavigationOptions(navigation)
//     })
//   }
// );

const DrawerNavigationLayout = createDrawerNavigator(
  {
    Home: {
      screen: BottomNavigationLayout
    }
    // Profile: {
    //   screen: ProfileStack
    // },
    // FavBeers: FavBeersStack,
    // FavEvents: FavEventsStack,
    // Contact: ContactStack
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: dimensions.fullWidth
  }
);

export default DrawerNavigationLayout;
