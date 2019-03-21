import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import DrawerNavigationLayout from './DrawerNavigationLayout';
import BeerModal from '../screens/Beer';
import EventsModal from '../screens/Events';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import Onboard from '../screens/Onboard';
import AuthLoading from '../components/AuthLoading';

const AppStack = createStackNavigator(
  {
    DrawerNavigationLayout,
    Beer: BeerModal,
    Events: EventsModal
  },
  {
    headerMode: 'none',
    mode: 'modal'
  }
);

const AuthStack = createSwitchNavigator({ Signin, Signup, Onboard });

const RootStackNavigator = createAppContainer(
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

export default RootStackNavigator;
