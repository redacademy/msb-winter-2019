import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import NavigationLayout from './BottomNavigationLayout';
import DrawerNavigationLayout from './JYDrawerNavigationLayout';
import BeerModal from '../screens/Beer';
import EventsModal from '../screens/Events';
import Login from '../screens/Login';
import AuthLoading from '../components/AuthLoading';

const AppStack = createStackNavigator(
  {
    Layout: NavigationLayout,
    Beer: BeerModal,
    Events: EventsModal
  },
  {
    headerMode: 'none',
    mode: 'modal'
  }
);

const AuthStack = createStackNavigator({ Login: Login });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
