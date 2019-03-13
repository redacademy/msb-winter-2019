import { createStackNavigator, createAppContainer } from 'react-navigation';
import NavigationLayout from './BottomNavigationLayout';
import BeerModal from '../screens/Beer';
import EventsModal from '../screens/Events';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout,
      Beer: BeerModal,
      Events: EventsModal
    },
    {
      headerMode: 'none',
      mode: 'modal'
    }
  )
);
