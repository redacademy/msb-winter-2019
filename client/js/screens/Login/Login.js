import React from 'react';
import { View, Button, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CustomText from '../../components/CustomText';
import {
  getLoggedInUser,
  clearUserToken,
  setUserToken
} from '../../config/models';
import styles from './styles';

const signupMutation = gql`
  mutation(
    $email: String!
    $password: String!
    $dateOfBirth: DateTime!
    $name: String!
  ) {
    signupUser(
      email: $email
      password: $password
      dateOfBirth: $dateOfBirth
      name: $name
    ) {
      id
      token
    }
  }
`;

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

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
    try {
      const result = await this.props.loginMutation({
        variables: { email: 'alex@alex.alex', password: 'alex' }
      });
      const userInfo = result.data.authenticateUser;
      await setUserToken(userInfo.id, userInfo.token);
      this.props.navigation.navigate('App');
    } catch (e) {
      console.log(e);
    }
  };
}

Login.propTypes = {};

export default compose(
  graphql(signupMutation, { name: 'signupMutation' }),
  graphql(loginMutation, { name: 'loginMutation' }),
  withNavigation
)(Login);
