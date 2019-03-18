import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';

import BottomNavigationLayout from './BottomNavigationLayout';
import DrawerNavigationLayout from './DrawerNavigationLayout';
// import { sharedNavigationOptions } from './config';
// import DrawerScreen from './DrawerScreen';
// import BeerScreen from '../screens/Beer';
// import EventsScreen from '../screens/Events';
// import ProfileScreen from '../screens/Profile';
// import FavBeersScreen from '../screens/FavBeers';
// import FavEventsScreen from '../screens/FavEvents';
// import ContactScreen from '../screens/Contact';
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

// const DrawerNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: BottomNavigationLayout
//     },
//     Profile: ProfileStack,
//     FavBeers: FavBeersStack,
//     FavEvents: FavEventsStack,
//     Contact: ContactStack
//   },
//   {
//     initialRouteName: 'Home',
//     contentComponent: DrawerScreen,
//     drawerWidth: dimensions.fullWidth
//   }
// );

const MixedNavigators = createAppContainer(
  createStackNavigator(
    {
      //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.

      DrawerNavigationLayout: {
        screen: DrawerNavigationLayout
      }
    },
    {
      navigationOptions: ({ navigation }) => ({
        // headerLeft: (
        //   <TouchableOpacity
        //     onPress={() => {
        //       navigation.dispatch(DrawerActions.toggleDrawer());
        //     }}
        //   >
        //     <MenuImage style='styles.bar' navigation={navigation} />
        //   </TouchableOpacity>
        // ),
        headerStyle: {
          backgroundColor: 'red'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      })
    }
  )
);

export default MixedNavigators;
