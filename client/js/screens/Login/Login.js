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
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading && <Text>Loading</Text>}
        {this.state.error && <Text>Error</Text>}
        <CustomText>This is Login.</CustomText>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <Fragment>
              <Text>Email</Text>
              <Field name="email">
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
              <Button title="Sign in!" onPress={handleSubmit} />
              <TouchableOpacity
                style={{
                  backgroundColor: 'black',
                  color: 'yellow',
                  height: 50,
                  width: 50
                }}
                title="sign up"
                onPress={() => {
                  this.props.navigation.navigate('Signup');
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
      this.setState({ loading: true });
      const result = await this.props.loginMutation({
        variables: { email, password }
      });
      this.setState({ loading: false });
      const userInfo = result.data.authenticateUser;
      await setUserToken(userInfo.id, userInfo.token);
      this.props.navigation.navigate('App');
    } catch (e) {
      console.log(e);
      this.setState({ error: true, loading: false });
    }
  };
}

Login.propTypes = {};

export default compose(
  graphql(loginMutation, { name: 'loginMutation' }),
  withNavigation
)(Login);
