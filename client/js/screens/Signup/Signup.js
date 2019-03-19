import React, { Fragment } from 'react';
import { View, Button, TextInput, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CustomText from '../../components/CustomText';
import { setUserToken } from '../../config/models';
import { Form, Field } from 'react-final-form';

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

class Signup extends React.Component {
  static navigationOptions = {
    title: 'Please sign up'
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomText>This is Signup.</CustomText>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <Fragment>
              <Text>Name</Text>
              <Field name="name">
                {({ input, meta }) => (
                  <TextInput
                    editable={true}
                    autoCapitalize="none"
                    {...input}
                    style={styles.textInput}
                    autoFocus={true}
                  />
                )}
              </Field>
              <Text>Email</Text>
              <Field name="email">
                {({ input, meta }) => (
                  <TextInput
                    editable={true}
                    autoCapitalize="none"
                    {...input}
                    style={styles.textInput}
                  />
                )}
              </Field>
              <Text>Password</Text>
              <Field name="password">
                {({ input, meta }) => (
                  <TextInput
                    editable={true}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    {...input}
                    style={styles.textInput}
                  />
                )}
              </Field>
              <Text>Confirm Password</Text>
              <Field name="confirm-password">
                {({ input, meta }) => (
                  <TextInput
                    editable={true}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    {...input}
                    style={styles.textInput}
                  />
                )}
              </Field>
              <Text>Date of Birth (YYYY / MM / DD)</Text>
              <Field name="dateOfBirth">
                {({ input, meta }) => (
                  <TextInput
                    editable={true}
                    autoCapitalize="none"
                    {...input}
                    style={styles.textInput}
                  />
                )}
              </Field>
              <Button title="Sign up!" onPress={handleSubmit} />
              <TouchableOpacity
                style={{
                  backgroundColor: 'black',
                  color: 'yellow',
                  height: 50,
                  width: 50
                }}
                title="back to login"
                onPress={() => {
                  this.props.navigation.navigate('Login');
                }}
              />
            </Fragment>
          )}
        />
      </View>
    );
  }

  onSubmit = async values => {
    try {
      const { email, password } = values;
      const result = await this.props.signupMutation({
        variables: { email, password, dateOfBirth, name }
      });
      const userInfo = result.data.authenticateUser;
      await setUserToken(userInfo.id, userInfo.token);
      this.props.navigation.navigate('App');
    } catch (e) {
      console.log(e);
    }
  };
}

Signup.propTypes = {};

export default compose(
  graphql(signupMutation, { name: 'signupMutation' }),
  withNavigation
)(Signup);
