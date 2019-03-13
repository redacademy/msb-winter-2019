import React from 'react';
import { View, Button, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import CustomText from '../../components/CustomText';
import styles from './styles';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Please sign in'
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomText>This is Login.</CustomText>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

Login.propTypes = {};

export default withNavigation(Login);
