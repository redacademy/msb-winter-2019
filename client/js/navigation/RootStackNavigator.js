import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import NavigationLayout from './BottomNavigationLayout';
import DrawerNavigationLayout from './DrawerNavigationLayout';
import BeerModal from '../screens/Beer';
import EventModal from '../screens/Event';
import Login from '../screens/Login';
import AuthLoading from '../components/AuthLoading';

const AppStack = createStackNavigator(
  {
    Layout: NavigationLayout,
    Beer: BeerModal,
    Event: EventModal
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
