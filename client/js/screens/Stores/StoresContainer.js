import React, { Component } from 'react';
import { Image, Platform, TouchableOpacity, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Stores from './Stores';
import styles from './styles';
import { center, row, colors } from '../../config/styles';
import DrawerScreen from '../../navigation/DrawerNavigationLayout';

class StoresContainer extends Component {
  navOptions;

  static navigationOptions = ({ navigation }) => {
    navOptions = navigation;

    const { params = {} } = navigation.state;

    return {
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            params._onHeaderEventControl();
            console.log('open!');
          }}
        >
          <Icon
            name={Platform.select({
              ios: 'ios-menu',
              android: 'md-menu'
            })}
            size={35}
            color={'green'}
          />
        </TouchableOpacity>
      ),
      headerTintColor: colors.brand
      // headerTitleStyle: { ...row, ...center }
    };
  };

  onHeaderEventControl() {
    const { params = {} } = navOptions.state;
    params._openNav();
  }

  componentDidMount() {
    this.props.navigation.setParams({
      _onHeaderEventControl: this.onHeaderEventControl,
      _openNav: () => this.openDrawer()
    });
  }

  openDrawer() {
    this.props.navigation.navigate('DrawerScreen');
  }

  render() {
    return <Stores />;
  }
}

export default StoresContainer;
