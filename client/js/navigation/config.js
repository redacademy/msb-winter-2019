import React from 'react';
import { Header } from 'react-navigation';
import { View } from 'react-native';

const MainHeader = props => (
  <View style={{ overflow: 'hidden', backgroundColor: 'gold', color: 'red' }}>
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <MainHeader {...props} />,

  headerStyle: { backgroundColor: 'transparent' }
});
