import { createStackNavigator, createAppContainer } from 'react-navigation';
import NavigationLayout from './BottomNavigationLayout';
import DrawerNavigationLayout from './DrawerNavigationLayout';
import BeerModal from '../screens/Beer';
import EventsModal from '../screens/Events';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout,
      Layout: DrawerNavigationLayout,
      Beer: BeerModal,
      Events: EventsModal
    },
    {
      headerMode: 'none',
      mode: 'modal'
    }
  )
);
