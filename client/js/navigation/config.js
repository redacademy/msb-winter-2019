import React from 'react';
import { Header } from 'react-navigation';
import { Image, TouchableOpacity, View, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerNavigationLayout from './DrawerNavigationLayout';

const MainHeader = (props, { navigation }) => (
  <View
    style={{
      overflow: 'hidden',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#000',
      flexDirection: 'row',
      paddingLeft: 20,
      paddingTop: 20
    }}
  >
    <Header {...props} />
    <Image
      source={require('../assets/images/Logos/msb_logo_white.png')}
      style={{ height: 40, width: 140, marginLeft: 30 }}
    />
    <Image
      source={require('../assets/images/Icons/notifications_icon_inactive.png')}
      style={{ resizeMode: 'contain' }}
    />

    {/* <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 8,
        width: '100%'
      }}
    >
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons
          name={Platform.select({ android: 'md-menu', ios: 'ios-menu' })}
          size={35}
          color={'white'}
          style={{ marginLeft: 20, marginTop: 10, marginBottom: 6 }}
        />
      </TouchableOpacity> */}

    {/* <Image
        source={require('../assets/images/Icons/notifications_icon_inactive.png')}
        style={{ height: 50, width: 50, marginRight: 5 }}
      />
    </View> */}
  </View>
);

export const sharedNavigationOptions = navigation => ({
  // headerBackTitle: null,
  header: props => <MainHeader {...props} />,
  headerLeft: () => (
    <Ionicons
      onPress={() => navigation.toggleDrawer()}
      name={Platform.select({ android: 'md-menu', ios: 'ios-menu' })}
      size={35}
      color={'white'}
      style={{ marginBottom: 6 }}
    />
  ),
  // headerRight: () => (
  //   <Image
  //     source={require('../assets/images/Icons/notifications_icon_inactive.png')}
  //     style={{ height: 50, width: 50 }}
  //   />
  // ),

  headerStyle: {
    backgroundColor: '#000',
    backgroundImage: '../assets/images/Logos/msb_logo_white.png'
  }
});
