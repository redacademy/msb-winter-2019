import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  createMaterialBottomTabNavigator
} from 'react-navigation';
import NavigationLayout from './BottomNavigationLayout';
import DrawerNavigationLayout from './JYDrawerNavigationLayout';
import BeerModal from '../screens/Beer';
import EventsModal from '../screens/Events';

export default createAppContainer(
  createStackNavigator(
    {
      DrawerNavigator: {
        screen: DrawerNavigationLayout
      },

      Layout: NavigationLayout,
      // Layout: DrawerNavigationLayout,
      Beer: BeerModal,
      Events: EventsModal
    },
    {
      // headerMode: 'none',
      mode: 'modal'
    }
  )
);
