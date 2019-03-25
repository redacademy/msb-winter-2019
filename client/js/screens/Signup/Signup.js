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
import PropTypes from 'prop-types';

import { SIGNUP_MUTATION } from '../../apollo/queries';
import Loader from '../../components/Loader';
import CustomText from '../../components/CustomText/CustomText';
import WhiteButton from '../../components/Buttons/WhiteButton';
import { setUserToken } from '../../config/models';
import validate, { isLegalAge } from '../../lib/helpers/validateSignUp';
import { colors, padding } from '../../config/styles';
import styles from './styles';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      loading: false
    };
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
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
            validate={validate}
            render={({ handleSubmit }) => (
              <Fragment>
                <View style={styles.field}>
                  <CustomText style={styles.label}>Name</CustomText>
                  <Field name="name">
                    {({ input, meta }) => (
                      <View style={styles.textInputWrapper}>
                        <View>
                          <TextInput
                            editable={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            {...input}
                            style={styles.textInput}
                            autoFocus={true}
                            returnKeyType="next"
                            onSubmitEditing={() => this.emailInput.focus()}
                          />
                          {meta.error && meta.touched && (
                            <CustomText style={styles.errorMessage}>
                              {meta.error}
                            </CustomText>
                          )}
                        </View>
                        {!input.value ? (
                          <Ionicons
                            name={Platform.select({
                              android: 'md-checkmark-circle-outline',
                              ios: 'ios-checkmark-circle-outline'
                            })}
                            size={35}
                            color={'#fff'}
                            style={{ marginLeft: 20 }}
                          />
                        ) : (
                          <Ionicons
                            name={Platform.select({
                              android: 'md-checkmark-circle',
                              ios: 'ios-checkmark-circle'
                            })}
                            size={35}
                            color={colors.brand}
                            style={{ marginLeft: 20 }}
                          />
                        )}
                      </View>
                    )}
                  </Field>
                </View>
                <View style={styles.field}>
                  <CustomText style={styles.label}>Email</CustomText>
                  <Field name="email">
                    {({ input, meta }) => (
                      <View style={styles.textInputWrapper}>
                        <View>
                          <TextInput
                            editable={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            {...input}
                            style={styles.textInput}
                            returnKeyType="next"
                            keyboardType="email-address"
                            ref={input => (this.emailInput = input)}
                            onSubmitEditing={() => this.passwordInput.focus()}
                          />
                          {meta.error && meta.touched && (
                            <CustomText style={styles.errorMessage}>
                              {meta.error}
                            </CustomText>
                          )}
                        </View>
                        {meta.touched && meta.valid ? (
                          <Ionicons
                            name={Platform.select({
                              android: 'md-checkmark-circle',
                              ios: 'ios-checkmark-circle'
                            })}
                            size={35}
                            color={colors.brand}
                            style={{ marginLeft: 20 }}
                          />
                        ) : (
                          <Ionicons
                            name={Platform.select({
                              android: 'md-checkmark-circle-outline',
                              ios: 'ios-checkmark-circle-outline'
                            })}
                            size={35}
                            color={'white'}
                            style={{ marginLeft: 20 }}
                          />
                        )}
                      </View>
                    )}
                  </Field>
                </View>
                <View style={styles.field}>
                  <CustomText style={styles.label}>Password</CustomText>
                  <Field name="password">
                    {({ input, meta }) => (
                      <View style={styles.textInputWrapper}>
                        <View>
                          <TextInput
                            editable={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            {...input}
                            style={styles.textInput}
                            returnKeyType="next"
                            ref={input => (this.passwordInput = input)}
                            onSubmitEditing={() => {
                              this.confirmPasswordInput.focus();
                            }}
                          />
                          {meta.error && meta.touched && (
                            <CustomText style={styles.errorMessage}>
                              {meta.error}
                            </CustomText>
                          )}
                        </View>
                        {!input.value ? (
                          <Ionicons
                            name={Platform.select({
                              android: 'md-checkmark-circle-outline',
                              ios: 'ios-checkmark-circle-outline'
                            })}
                            size={35}
                            color={'#fff'}
                            style={{ marginLeft: 20 }}
                          />
                        ) : (
                          <Ionicons
                            name={Platform.select({
                              android: 'md-checkmark-circle',
                              ios: 'ios-checkmark-circle'
                            })}
                            size={35}
                            color={colors.brand}
                            style={{ marginLeft: 20 }}
                          />
                        )}
                      </View>
                    )}
                  </Field>
                </View>

                <View style={styles.field}>
                  <CustomText style={styles.label}>Confirm Password</CustomText>
                  <Field name="confirmpassword">
                    {({ input, meta }) => (
                      <View style={styles.textInputWrapper}>
                        <View>
                          <TextInput
                            editable={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            {...input}
                            style={styles.textInput}
                            returnKeyType="next"
                            ref={input => (this.confirmPasswordInput = input)}
                            onSubmitEditing={() =>
                              this.datePicker.onPressDate()
                            }
                          />
                          {meta.error && meta.touched && (
                            <CustomText style={styles.errorMessage}>
                              {meta.error}
                            </CustomText>
                          )}
                        </View>
                        {meta.error ? (
                          <Ionicons
                            name={Platform.select({
                              android: 'md-checkmark-circle-outline',
                              ios: 'ios-checkmark-circle-outline'
                            })}
                            size={35}
                            color={'#fff'}
                            style={{ marginLeft: 20 }}
                          />
                        ) : (
                          <Ionicons
                            name={Platform.select({
                              android: 'md-checkmark-circle',
                              ios: 'ios-checkmark-circle'
                            })}
                            size={35}
                            color={colors.brand}
                            style={{ marginLeft: 20 }}
                          />
                        )}
                      </View>
                    )}
                  </Field>
                </View>
                <View style={styles.field}>
                  <CustomText style={styles.label}>
                    Date of Birth ( YYYY / MM / DD )
                  </CustomText>
                  <View style={styles.textInputWrapper}>
                    <DatePicker
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
                      mode="date"
                      showIcon={false}
                      placeholder="Select Date"
                      format="YYYY-MM-DD"
                      minDate="1920-01-01"
                      maxDate="2019-12-31"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      onDateChange={date => {
                        this.setState({ date: date });
                      }}
                      returnKeyType="go"
                      ref={picker => {
                        this.datePicker = picker;
                      }}
                    />
                    {this.state.date ? (
                      <Ionicons
                        name={Platform.select({
                          android: 'md-checkmark-circle',
                          ios: 'ios-checkmark-circle'
                        })}
                        size={35}
                        color={colors.brand}
                        style={{ marginLeft: 20 }}
                      />
                    ) : (
                      <Ionicons
                        name={Platform.select({
                          android: 'md-checkmark-circle-outline',
                          ios: 'ios-checkmark-circle-outline'
                        })}
                        size={35}
                        color={'#fff'}
                        style={{ marginLeft: 20 }}
                      />
                    )}
                  </View>
                  <CustomText style={styles.signup}>
                    * You must be 19 or older to use this app.
                  </CustomText>
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
                      Back to Login
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
      if (this.state.date === '' || !isLegalAge(this.state.date)) {
        throw 'Not of legal age';
      }
      const { email, password, name } = values;
      const dateOfBirth = this.state.date;
      this.setState({ loading: true });
      const result = await this.props.signupMutation({
        variables: { email, password, dateOfBirth, name }
      });
      const userInfo = result.data.signupUser;
      await setUserToken(userInfo.id, userInfo.token);
      this.setState({ loading: false });
      this.props.navigation.navigate('Onboard');
    } catch (e) {
      this.setState({ loading: false });
      if (e === 'Not of legal age') {
        this.props.navigation.navigate('Error'); // @TODO replace with legal age specific error
      } else {
        this.props.navigation.navigate('Error');
      }
    }
  };
}

Signup.propTypes = {
  signupMutation: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

export default compose(
  graphql(SIGNUP_MUTATION, { name: 'signupMutation' }),
  withNavigation
)(Signup);
