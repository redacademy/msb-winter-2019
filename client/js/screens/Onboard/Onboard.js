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
          <View style={styles.logoWrapper}>
            <Image
              source={require('../../assets/images/Logos/growler_logo.png')}
              style={styles.imgLogo}
            />
            <Image
              source={require('../../assets/images/Logos/msb_logo_white.png')}
              style={styles.imgLogo}
            />
          </View>
          <View style={styles.welcomeWrapper}>
            <CustomText style={styles.welcome}>
              Welcome to the Growler
            </CustomText>
            <CustomText style={styles.welcome}>
              Rewards Program, you are now
            </CustomText>
            <CustomText style={styles.welcome}>an official member!</CustomText>
          </View>
        </View>
      </View>
    );
  }
}

Onboard.propTypes = {};

export default withNavigation(Onboard);
