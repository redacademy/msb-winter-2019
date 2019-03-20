import React, { Fragment } from 'react';
import {
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Platform
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Form, Field } from 'react-final-form';
import DatePicker from 'react-native-datepicker';
import { graphql, compose } from 'react-apollo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SIGNUP_MUTATION } from '../../apollo/queries';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader';
import CustomText from '../../components/CustomText';
import WhiteButton from '../../components/Buttons/WhiteButton';
import { setUserToken } from '../../config/models';
import { colors, padding } from '../../config/styles';
import styles from './styles';

class Signup extends React.Component {
  static navigationOptions = {
    title: 'Signup'
  };

  constructor(props) {
    super(props);
    this.state = {
      date: '',
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
      <View style={styles.container}>
        <View style={styles.imgBgWrapper}>
          <Image
            source={require('../../assets/images/Logos/msb_logo.png')}
            style={styles.imgBg}
          />
        </View>
        <View style={styles.signupWrapper}>
          <CustomText style={styles.title}>Sign Up</CustomText>
          <Form
            onSubmit={this.onSubmit}
            render={({ handleSubmit }) => (
              <Fragment>
                <View style={styles.field}>
                  <CustomText style={styles.label}>Name</CustomText>
                  <Field name='name'>
                    {({ input, meta }) => (
                      <View style={styles.textInputWrapper}>
                        <TextInput
                          editable={true}
                          autoCapitalize='none'
                          autoCorrect={false}
                          {...input}
                          style={styles.textInput}
                          autoFocus={true}
                          returnKeyType='next'
                          onSubmitEditing={() => this.emailInput.focus()}
                        />
                        <Ionicons
                          name={Platform.select({
                            android: 'md-checkmark-circle-outline',
                            ios: 'ios-checkmark-circle-outline'
                          })}
                          size={35}
                          color={'white'}
                          style={{ marginLeft: 20 }}
                        />
                      </View>
                    )}
                  </Field>
                </View>
                <View style={styles.field}>
                  <CustomText style={styles.label}>Email</CustomText>
                  <Field name='email'>
                    {({ input, meta }) => (
                      <View style={styles.textInputWrapper}>
                        <TextInput
                          editable={true}
                          autoCapitalize='none'
                          autoCorrect={false}
                          {...input}
                          style={styles.textInput}
                          returnKeyType='next'
                          keyboardType='email-address'
                          ref={input => (this.emailInput = input)}
                          onSubmitEditing={() => this.passwordInput.focus()}
                        />
                        <Ionicons
                          name={Platform.select({
                            android: 'md-checkmark-circle-outline',
                            ios: 'ios-checkmark-circle-outline'
                          })}
                          size={35}
                          color={'white'}
                          style={{ marginLeft: 20 }}
                        />
                      </View>
                    )}
                  </Field>
                </View>
                <View style={styles.field}>
                  <CustomText style={styles.label}>Password</CustomText>
                  <Field name='password'>
                    {({ input, meta }) => (
                      <View style={styles.textInputWrapper}>
                        <TextInput
                          editable={true}
                          autoCapitalize='none'
                          autoCorrect={false}
                          secureTextEntry={true}
                          {...input}
                          style={styles.textInput}
                          returnKeyType='next'
                          ref={input => (this.passwordInput = input)}
                          onSubmitEditing={() =>
                            this.confirmPasswordInput.focus()
                          }
                        />
                        <Ionicons
                          name={Platform.select({
                            android: 'md-checkmark-circle-outline',
                            ios: 'ios-checkmark-circle-outline'
                          })}
                          size={35}
                          color={'white'}
                          style={{ marginLeft: 20 }}
                        />
                      </View>
                    )}
                  </Field>
                </View>
                <View style={styles.field}>
                  <CustomText style={styles.label}>Confirm Password</CustomText>
                  <Field name='confirm-password'>
                    {({ input, meta }) => (
                      <View style={styles.textInputWrapper}>
                        <TextInput
                          editable={true}
                          autoCapitalize='none'
                          autoCorrect={false}
                          secureTextEntry={true}
                          {...input}
                          style={styles.textInput}
                          returnKeyType='next'
                          ref={input => (this.confirmPasswordInput = input)}
                          onSubmitEditing={() => this.datePicker.onPressDate()}
                        />
                        <Ionicons
                          name={Platform.select({
                            android: 'md-checkmark-circle-outline',
                            ios: 'ios-checkmark-circle-outline'
                          })}
                          size={35}
                          color={'white'}
                          style={{ marginLeft: 20 }}
                        />
                      </View>
                    )}
                  </Field>
                </View>
                <View style={styles.field}>
                  <CustomText style={styles.label}>
                    Date of Birth (YYYY / MM / DD)
                  </CustomText>
                  <Field name='dateOfBirth'>
                    {({ input, meta }) => (
                      <Fragment>
                        <View style={styles.textInputWrapper}>
                          <DatePicker
                            {...input}
                            style={styles.datePicker}
                            customStyles={{
                              dateInput: {
                                alignItems: 'flex-start',
                                paddingLeft: padding.sm
                              },
                              dateText: {
                                color: colors.neutralDark
                              }
                            }}
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
                            returnKeyType='go'
                            ref={picker => {
                              this.datePicker = picker;
                            }}
                          />
                          <Ionicons
                            name={Platform.select({
                              android: 'md-checkmark-circle-outline',
                              ios: 'ios-checkmark-circle-outline'
                            })}
                            size={35}
                            color={'white'}
                            style={{ marginLeft: 20 }}
                          />
                        </View>
                        <CustomText style={styles.signup}>
                          * You must be 19 or older to use this app.
                        </CustomText>
                      </Fragment>
                    )}
                  </Field>
                </View>

                <View style={styles.signupBtnWrapper}>
                  <WhiteButton onPress={() => handleSubmit()}>
                    Sign Up
                  </WhiteButton>
                  <TouchableHighlight
                    underlayColor={colors.neutralLight}
                    onPress={() => {
                      this.props.navigation.navigate('Signin');
                    }}
                  >
                    <CustomText style={[styles.signup, styles.signupLink]}>
                      {' '}
                      Back to Login{' '}
                    </CustomText>
                  </TouchableHighlight>
                </View>
              </Fragment>
            )}
          />
        </View>
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
      this.setState({ error: true, loading: false });
    }
  };
}

Signup.propTypes = {};

export default compose(
  graphql(SIGNUP_MUTATION, { name: 'signupMutation' }),
  withNavigation
)(Signup);
