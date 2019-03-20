import React, { Fragment } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import Loader from '../../components/Loader';
import CustomText from '../../components/CustomText';
import styles from './styles';

class Onboard extends React.Component {
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
      <View style={styles.container}>
        <View style={styles.imgBgWrapper}>
          <Image
            source={require('../../assets/images/Logos/msb_logo.png')}
            style={styles.imgBg}
          />
        </View>
        <View style={styles.onboardWrapper}>
          <Image
            source={require('../../assets/images/Logos/growler_logo.png')}
            style={styles.imgLogo}
          />
          <View style={styles.welcomeWrapper}>
            <CustomText style={styles.welcome}>
              New to Main Street Brewing?
            </CustomText>
          </View>
        </View>

        {/* <CustomText>This is Onboard.</CustomText>

        <Button title='Sign up!' onPress={() => handleSubmit()} />
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => {
            this.props.navigation.navigate('Signin');
          }}
        >
          <Text>back to login</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

Onboard.propTypes = {};

export default withNavigation(Onboard);
