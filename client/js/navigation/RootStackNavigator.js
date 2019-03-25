import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import DrawerNavigationLayout from './DrawerNavigationLayout';
import BeerModal from '../screens/Beer';
import EventModal from '../screens/Event';
import StampsReceivedModal from '../components/StampsReceivedModal';
import RedeemInfoModal from '../components/RedeemInfoModal';
import UpdateProfileModal from '../components/UpdateProfileModal';
import RedeemBarcode from '../components/RedeemBarcode';
import RedeemSuccess from '../components/RedeemSuccess';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import Onboard from '../screens/Onboard';
import AuthLoading from '../components/AuthLoading';

const AppStack = createStackNavigator(
  {
    DrawerNavigationLayout,
    Beer: BeerModal,
    Event: EventModal,
    StampsReceived: StampsReceivedModal,
    RedeemInfo: RedeemInfoModal,
    RedeemBarcode: RedeemBarcode,
    RedeemSuccess: RedeemSuccess,
    UpdateProfile: UpdateProfileModal
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
