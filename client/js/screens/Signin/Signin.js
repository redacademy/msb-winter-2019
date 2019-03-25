import React, { Fragment, Component } from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableHighlight,
  KeyboardAvoidingView
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Form, Field } from 'react-final-form';
import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';

import { SIGNIN_MUTATION } from '../../apollo/queries';
import Loader from '../../components/Loader';
import CustomText from '../../components/CustomText';
import WhiteButton from '../../components/Buttons/WhiteButton';
import { setUserToken } from '../../config/models';
import { colors } from '../../config/styles';
import validate from '../../lib/helpers/validateSignIn';
import styles from './styles';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false
    };
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    if (this.state.error) {
      return <CustomText>Error</CustomText>;
    }

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.imgBgWrapper}>
          <Image
            source={require('../../assets/images/Logos/msb_logo.png')}
            style={styles.imgBg}
          />
        </View>
        <View style={styles.loginWrapper}>
          <Image
            source={require('../../assets/images/Logos/msb_logo_full.png')}
          />
          <View>
            <Form
              onSubmit={this.onSubmit}
              validate={validate}
              style={styles.loginForm}
              render={({ handleSubmit, hasSubmitErrors, submitError }) => (
                <Fragment>
                  <Field name="email">
                    {({ input, meta }) => (
                      <View>
                        <TextInput
                          editable={true}
                          autoCapitalize="none"
                          autoCorrect={false}
                          {...input}
                          style={styles.textInput}
                          placeholder="Email"
                          placeholderTextColor={colors.neutralDark}
                          returnKeyType="next"
                          onSubmitEditing={() => this.passwordInput.focus()}
                          keyboardType="email-address"
                        />
                        {meta.error && meta.touched && (
                          <CustomText style={styles.errorMessage}>
                            {meta.error}
                          </CustomText>
                        )}
                      </View>
                    )}
                  </Field>

                  <Field name="password">
                    {({ input, meta }) => (
                      <View>
                        <TextInput
                          editable={true}
                          autoCapitalize="none"
                          secureTextEntry={true}
                          {...input}
                          style={styles.textInput}
                          placeholder="Password"
                          placeholderTextColor={colors.neutralDark}
                          returnKeyType="go"
                          ref={input => (this.passwordInput = input)}
                        />
                        {meta.error && meta.touched && (
                          <CustomText style={styles.errorMessage}>
                            {meta.error}
                          </CustomText>
                        )}
                      </View>
                    )}
                  </Field>

                  <View style={styles.signinWrapper}>
                    <WhiteButton
                      onPress={handleSubmit}
                      style={styles.signinBtn}
                    >
                      Sign In
                    </WhiteButton>
                  </View>

                  {hasSubmitErrors && (
                    <CustomText style={styles.errorMessage}>
                      {submitError}
                    </CustomText>
                  )}
                </Fragment>
              )}
            />
          </View>
          <View style={styles.signupWrapper}>
            <CustomText style={styles.signup}>
              New to Main Street Brewing?
            </CustomText>
            <View style={styles.signupLinkWrapper}>
              <CustomText style={styles.signup}>Click here to</CustomText>
              <TouchableHighlight
                underlayColor={colors.neutralLight}
                onPress={() => {
                  this.props.navigation.navigate('Signup');
                }}
              >
                <CustomText style={[styles.signup, styles.signupLink]}>
                  {' '}
                  sign up{' '}
                </CustomText>
              </TouchableHighlight>
              <CustomText style={styles.signup}>now!</CustomText>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

  onSubmit = async values => {
    try {
      const { email, password } = values;
      this.setState({ loading: true, error: false });
      const result = await this.props.signinMutation({
        variables: { email, password }
      });
      const userInfo = result.data.authenticateUser;
      await setUserToken(userInfo.id, userInfo.token);
      this.setState({ loading: false, error: false });
      this.props.navigation.navigate('App');
    } catch (e) {
      this.setState({ error: true, loading: false });
    }
  };
}

Signin.propTypes = {
  signinMutation: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

export default compose(
  graphql(SIGNIN_MUTATION, { name: 'signinMutation' }),
  withNavigation
)(Signin);
