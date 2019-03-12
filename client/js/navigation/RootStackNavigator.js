import { createStackNavigator, createAppContainer } from 'react-navigation';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout
    },
    {
      headerMode: 'none',
      mode: 'modal'
    }
  )
);
