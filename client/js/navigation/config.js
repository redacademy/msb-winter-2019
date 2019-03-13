import React from 'react';
import { Header } from 'react-navigation';
import { View } from 'react-native';

const MainHeader = props => (
  <View style={{ overflow: 'hidden', background: '#000', color: '#fff' }}>
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <MainHeader {...props} />,
  // headerLeft: () => (
  //   <Ionicons
  //     name={'md-menu'}
  //     size={30}
  //     color={'white'}
  //     style={{ marginLeft: 20, marginTop: 10, marginBottom: 6 }}
  //     onPress={() => {
  //       navigation.toggleDrawer();
  //     }}
  //   />
  // ),
  headerStyle: { backgroundColor: 'transparent' }
});
