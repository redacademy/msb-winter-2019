import React from 'react';
import { Header } from 'react-navigation';
import {
  Image,
  TouchableOpacity,
  View,
  Platform,
  StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerNavigationLayout from './JYDrawerNavigationLayout';
import {
  colors,
  container,
  row,
  iteCenterRow,
  jusBetweenRow,
  h2,
  jusCenterRow,
  padding
} from '../config/styles';

const MainHeader = props => (
  // <View
  //   style={{
  //     backgroundColor: 'transparent',
  //     overflow: 'hidden'
  //   }}
  // >
  <View>
    <Header {...props} />
  </View>
  // </View>
);

export const sharedNavigationOptions = navigation => ({
  headerTitle: (
    <Image
      source={require('../assets/images/Logos/msb_logo_white.png')}
      style={{ resizeMode: 'contain' }}
    />
  ),
  headerBackTitle: null,
  header: props => <MainHeader {...props} />,
  headerRight: (
    <Image
      source={require('../assets/images/Icons/notifications_icon_inactive.png')}
      style={{ resizeMode: 'contain', marginRight: 10 }}
    />
  ),
  headerLeft: () => (
    <Ionicons
      onPress={() => {
        navigation.navigate('DrawerScreen');
        navigation.toggleDrawer();
      }}
      name={Platform.select({ android: 'md-menu', ios: 'ios-menu' })}
      size={35}
      color={'white'}
      style={{ marginLeft: 20 }}
    />
  ),
  headerStyle: {
    backgroundColor: colors.black,
    paddingBottom: padding.sm
  }
});
