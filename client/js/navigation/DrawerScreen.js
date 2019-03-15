import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { DrawerActions } from 'react-navigation';
import styles from './styles';

import Profile from '../screens/Profile';
import FavBeers from '../screens/FavBeers';
import FavEvents from '../screens/FavEvents';
import Contact from '../screens/Contact';

class DrawerScreen extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Profile')}>Your Info</Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('FavBeers')}>
                Your Beers
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Contact')}>Contact</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;
