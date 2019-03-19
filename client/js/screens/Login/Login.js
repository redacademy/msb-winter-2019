import React, { Fragment, Component } from 'react';
import {
  View,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Form, Field } from 'react-final-form';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import CustomText from '../../components/CustomText';
import WhiteButton from '../../components/Buttons/WhiteButton';
import { setUserToken } from '../../config/models';
import { colors } from '../../config/styles';
import styles from './styles';

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/Logos/msb_logo.png')}
          style={styles.imgBg}
        >
          <View style={styles.loginWrapper}>
            <Image
              source={require('../../assets/images/Logos/msb_logo_full.png')}
              style={styles.imgLogo}
            />

            <View style={styles.loginFormWrapper}>
              <Form
                onSubmit={this.onSubmit}
                style={styles.loginForm}
                render={({ handleSubmit }) => (
                  <Fragment>
                    <Field name='email'>
                      {({ input, meta }) => (
                        <TextInput
                          editable={true}
                          autoCapitalize='none'
                          {...input}
                          style={styles.textInput}
                          placeholder='Email'
                          placeholderTextColor={colors.neutralDark}
                        />
                      )}
                    </Field>
                    <Field name='password'>
                      {({ input, meta }) => (
                        <TextInput
                          editable={true}
                          autoCapitalize='none'
                          secureTextEntry={true}
                          {...input}
                          style={styles.textInput}
                          placeholder='Password'
                          placeholderTextColor={colors.neutralDark}
                        />
                      )}
                    </Field>
                    <WhiteButton
                      title='Sign in'
                      onPress={handleSubmit}
                      style={styles.signinBtn}
                    />
                  </Fragment>
                )}
              />
            </View>
            <View style={styles.signupWrapper}>
              <CustomText style={styles.signup}>
                New to Main Street Brewing?
              </CustomText>
              <CustomText style={styles.signup}>
                Click here to{' '}
                <CustomText style={styles.signupLink}>sign up</CustomText> now!
              </CustomText>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

  onSubmit = async values => {
    try {
      const { email, password } = values;
      const result = await this.props.loginMutation({
        variables: { email, password }
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
  graphql(loginMutation, { name: 'loginMutation' }),
  withNavigation
)(Login);
