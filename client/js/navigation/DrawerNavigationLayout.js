import { createDrawerNavigator } from 'react-navigation';
import BottomNavigationLayout from './BottomNavigationLayout';
import DrawerScreen from './DrawerScreen';
import { dimensions } from '../config/styles';

const DrawerNavigationLayout = createDrawerNavigator(
  {
    Home: {
      screen: BottomNavigationLayout
    }
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: dimensions.fullWidth
  }
);

export default DrawerNavigationLayout;
