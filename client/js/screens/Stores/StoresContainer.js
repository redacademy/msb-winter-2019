import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Platform, TouchableOpacity, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Stores from './Stores';
import styles from './styles';
import { center, row, colors } from '../../config/styles';
import DrawerScreen from '../../navigation/DrawerScreen';

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
            size={50}
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
    console.log(this.props);
    return <Stores />;
  }
}

StoresContainer.propTypes = {
  navigation: PropTypes.object
};

export default StoresContainer;
