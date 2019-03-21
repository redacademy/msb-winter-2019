import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import DrawerNavigationLayout from './DrawerNavigationLayout';
import BeerModal from '../screens/Beer';
import EventModal from '../screens/Event';
import StampsReceivedModal from '../components/StampsReceivedModal';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import AuthLoading from '../components/AuthLoading';

const AppStack = createStackNavigator(
  {
    DrawerNavigationLayout,
    Beer: BeerModal,
    Event: EventModal,
    StampsReceived: StampsReceivedModal
  },
  {
    headerMode: 'none',
    mode: 'modal'
  }
);

const AuthStack = createSwitchNavigator({ Signin, Signup });

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
