import { createStackNavigator, createAppContainer } from 'react-navigation';
import BottomNavigationLayout from './BottomNavigationLayout';
import BeerModal from '../screens/Beer';
import EventsModal from '../screens/Events';
import Home from '../screens/Home';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: BottomNavigationLayout,
      Beer: BeerModal,
      Events: EventsModal
    },
    {
      //   headerMode: 'none',
      mode: 'modal'
    }
  )
);
