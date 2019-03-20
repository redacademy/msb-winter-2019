import React, { Fragment } from 'react';
import { View, Button, TextInput, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import CustomText from '../../components/CustomText';
import { setUserToken } from '../../config/models';
import { Form, Field } from 'react-final-form';
import DatePicker from 'react-native-datepicker';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import { SIGNUP_MUTATION } from '../../apollo/queries';
import Loader from '../../components/Loader';

class Signup extends React.Component {
  static navigationOptions = {
    title: 'Please sign up'
  };

  constructor(props) {
    super(props);
    this.state = {
      date: '1990-01-01',
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
        <CustomText>This is Signup.</CustomText>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <Fragment>
              <Text>Name</Text>
              <Field name='name'>
                {({ input, meta }) => (
                  <TextInput
                    editable={true}
                    autoCapitalize='none'
                    {...input}
                    style={styles.textInput}
                    autoFocus={true}
                  />
                )}
              </Field>
              <Text>Email</Text>
              <Field name='email'>
                {({ input, meta }) => (
                  <TextInput
                    editable={true}
                    autoCapitalize='none'
                    {...input}
                    style={styles.textInput}
                  />
                )}
              </Field>
              <Text>Password</Text>
              <Field name='password'>
                {({ input, meta }) => (
                  <TextInput
                    editable={true}
                    autoCapitalize='none'
                    secureTextEntry={true}
                    {...input}
                    style={styles.textInput}
                  />
                )}
              </Field>
              <Text>Confirm Password</Text>
              <Field name='confirm-password'>
                {({ input, meta }) => (
                  <TextInput
                    editable={true}
                    autoCapitalize='none'
                    secureTextEntry={true}
                    {...input}
                    style={styles.textInput}
                  />
                )}
              </Field>
              <Text>Date of Birth (YYYY / MM / DD)</Text>
              <Field name='dateOfBirth'>
                {({ input, meta }) => (
                  <DatePicker
                    {...input}
                    style={styles.datePicker}
                    date={this.state.date}
                    mode='date'
                    showIcon={false}
                    placeholder='select date'
                    format='YYYY-MM-DD'
                    minDate='1920-01-01'
                    maxDate='2040-01-01'
                    confirmBtnText='Confirm'
                    cancelBtnText='Cancel'
                    onDateChange={date => {
                      this.setState({ date: date });
                    }}
                  />
                )}
              </Field>
              <Button title='Sign up!' onPress={() => handleSubmit()} />
              <TouchableOpacity
                style={styles.authButton}
                onPress={() => {
                  this.props.navigation.navigate('Signin');
                }}
              >
                <Text>back to login</Text>
              </TouchableOpacity>
            </Fragment>
          )}
        />
      </View>
    );
  }

  onSubmit = async values => {
    try {
      const { email, password, name } = values;
      const dateOfBirth = this.state.date;
      this.setState({ loading: true, error: false });
      const result = await this.props.signupMutation({
        variables: { email, password, dateOfBirth, name }
      });
      const userInfo = result.data.signupUser;
      await setUserToken(userInfo.id, userInfo.token);
      this.setState({ loading: false, error: false });
      this.props.navigation.navigate('App');
    } catch (e) {
      cthis.setState({ error: true, loading: false });
    }
  };
}

Signup.propTypes = {};

export default compose(
  graphql(SIGNUP_MUTATION, { name: 'signupMutation' }),
  withNavigation
)(Signup);
