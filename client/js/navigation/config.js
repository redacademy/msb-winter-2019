import React from 'react';
import { Header } from 'react-navigation';
import { Image, TouchableOpacity, View, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerNavigationLayout from './JYDrawerNavigationLayout';
import {
  colors,
  container,
  row,
  iteCenterRow,
  jusBetweenRow
} from '../config/styles';

const MainHeader = props => (
  <View
    style={{
      // ...container,
      // justifyContent: 'space-between',
      // ...iteCenterRow,
      ...jusBetweenRow,
      alignItems: 'center',
      backgroundColor: colors.black,
      overflow: 'hidden'
    }}
  >
    <Header {...props} />

    {/* <Ionicons
        name={Platform.select({ android: 'md-menu', ios: 'ios-menu' })}
        size={35}
        color={'white'}
        style={{ marginLeft: 20, marginTop: 10, marginBottom: 6 }}
        onPress={({ navigation }) => navigation.toggleDrawer()}
      /> */}

    <Image
      source={require('../assets/images/Logos/msb_logo_white.png')}
      style={{ height: 40, width: 140, marginLeft: 30 }}
    />

    <Image
      source={require('../assets/images/Icons/notifications_icon_inactive.png')}
      style={{ resizeMode: 'contain' }}
    />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <MainHeader {...props} />,
  headerLeft: () => (
    <Ionicons
      onPress={() => {
        navigation.navigate('DrawerScreen');
        navigation.toggleDrawer();
      }}
      name={Platform.select({ android: 'md-menu', ios: 'ios-menu' })}
      size={35}
      color={'white'}
      style={{
        marginBottom: 10
      }}
    />
  ),
  headerStyle: {
    backgroundColor: 'transparent'
  }
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'bold'
  // }
});
