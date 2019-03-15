import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { NavigationActions } from 'react-navigation';

import Drawer from './Drawer';
import styles from './styles';

class DrawerContainer extends Component {
  constructor(props) {
    super(props);
  }

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  render() {
    return <Drawer />;
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.object
};

export default DrawerContainer;
