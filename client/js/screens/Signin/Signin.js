import React, { Fragment } from 'react';
import { View, Button, TextInput, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import CustomText from '../../components/CustomText';
import { setUserToken } from '../../config/models';
import { Form, Field } from 'react-final-form';
import Loader from '../../components/Loader';
import styles from './styles';
import { SIGNIN_MUTATION } from '../../apollo/queries';

class Signin extends React.Component {
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
    if (this.state.loading) {
      return <Loader />;
    }
    if (this.state.error) {
      return <Text>Error</Text>;
    }
    return (
      <View style={styles.container}>
        <CustomText>This is Signin.</CustomText>
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
                style={styles.authButton}
                onPress={() => {
                  this.props.navigation.navigate('Signup');
                }}
              >
                <Text>sign up</Text>
              </TouchableOpacity>
            </Fragment>
          )}
        />
      </View>
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

Signin.propTypes = {};

export default compose(
  graphql(SIGNIN_MUTATION, { name: 'signinMutation' }),
  withNavigation
)(Signin);
