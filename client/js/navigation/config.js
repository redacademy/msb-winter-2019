import React from 'react';
import { Header } from 'react-navigation';
import { Image, View, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainHeader = props => (
  <View
    style={{
      overflow: 'hidden',
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20
    }}
  >
    <Header {...props} />
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 8,
        width: '100%'
      }}
    >
      <Ionicons
        name={Platform.select({ android: 'md-menu', ios: 'ios-menu' })}
        size={35}
        color={'white'}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
      <Image
        source={require('../assets/images/Logos/msb_logo_white.png')}
        style={{ height: 40, width: 130 }}
      />
      <Image
        source={require('../assets/images/Icons/notifications_icon_inactive.png')}
        style={{ height: 50, width: 50 }}
      />
    </View>
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <MainHeader {...props} />,

  headerStyle: { backgroundColor: 'transparent' }
});
