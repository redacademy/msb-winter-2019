import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { sharedNavigationOptions } from './config';
import BottomNavigationLayout, { HomeStack } from './BottomNavigationLayout';
import DrawerScreen from './DrawerScreen';
import ProfileScreen from '../screens/Profile';
import FavBeersScreen from '../screens/FavBeers/';
import FavEventsTab from '../components/Tabs/FavEventsTab';
import ContactScreen from '../screens/Contact';
import { dimensions } from '../config/styles';

const DrawerNavigationLayout = createDrawerNavigator(
  {
    Home: {
      screen: BottomNavigationLayout
    }
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: dimensions.fullWidth
  }
);

export default DrawerNavigationLayout;
