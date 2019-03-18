import { createStackNavigator, createAppContainer } from 'react-navigation';

import DrawerNavigationLayout from './DrawerNavigationLayout';
import BeerModal from '../screens/Beer';
import EventsModal from '../screens/Events';

const AppStack = createStackNavigator(
  {
    //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.

    DrawerNavigationLayout: {
      screen: DrawerNavigationLayout
    },
    Beer: BeerModal,
    Events: EventsModal
  },
  {
    // navigationOptions: ({ navigation }) => ({
    //   // headerLeft: (
    //   //   <TouchableOpacity
    //   //     onPress={() => {
    //   //       navigation.dispatch(DrawerActions.toggleDrawer());
    //   //     }}
    //   //   >
    //   //     <MenuImage style='styles.bar' navigation={navigation} />
    //   //   </TouchableOpacity>
    //   // ),
    //   headerStyle: {
    //     backgroundColor: 'red'
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold'
    //   }
    // })
    headerMode: 'none',
    mode: 'modal'
  }
);

// export default MixedNavigators;

// const AppStack = createStackNavigator(
//   {
//     Layout: NavigationLayout,
//     Beer: BeerModal,
//     Events: EventsModal
//   },
//   {
//     headerMode: 'none',
//     mode: 'modal'
//   }
// );

const AuthStack = createStackNavigator({ Login: Login });

const MixedNavigators = createAppContainer(
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

export default MixedNavigators;
