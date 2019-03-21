import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import DrawerNavigationLayout from './DrawerNavigationLayout';
import BeerModal from '../screens/Beer';
import EventsModal from '../screens/Events';
import StampsReceivedModal from '../components/StampsReceivedModal';
import RedeemInfoModal from '../components/RedeemInfoModal';
import RedeemBarcode from '../components/RedeemBarcode';
import RedeemSuccess from '../components/RedeemSuccess';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import AuthLoading from '../components/AuthLoading';

const AppStack = createStackNavigator(
  {
    DrawerNavigationLayout,
    Beer: BeerModal,
    Events: EventsModal,
    StampsReceived: StampsReceivedModal,
    RedeemInfo: RedeemInfoModal,
    RedeemBarcode: RedeemBarcode,
    RedeemSuccess: RedeemSuccess
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
