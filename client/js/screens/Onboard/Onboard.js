import React, { Fragment, Component } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import Loader from '../../components/Loader';
import CustomText from '../../components/CustomText';
import Swiper from '../../components/Swiper';
import styles from './styles';

class Onboard extends Component {
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
      <Fragment>
        {/* <Swiper> */}
        {/* First Screen */}
        {/*   <View style={styles.container}>
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
              <CustomText style={styles.welcome}>
                an official member!
              </CustomText>
            </View>
          </View>
        </View> */}
        {/* Second Screen */}
        {/* <View style={styles.container}>
          <View style={styles.imgBgWrapper}>
            <Image
              source={require('../../assets/images/Logos/msb_logo.png')}
              style={styles.imgBg}
            />
          </View>
          <View style={[styles.onboardWrapper, styles.walkthru]}>
            <Image
              source={require('../../assets/images/Logos/growler_logo.png')}
              style={styles.imgLogo}
            />
            <View style={styles.welcomeWrapper}>
              <CustomText style={styles.welcome}>
                Collect stamps with Growlers and
              </CustomText>
              <CustomText style={styles.welcome}>
                redeem them for awesome rewards.
              </CustomText>
            </View>
          </View>
        </View> */}
        {/* Third Screen */}
        {/* <View style={styles.container}>
          <View style={styles.imgBgWrapper}>
            <Image
              source={require('../../assets/images/Logos/msb_logo.png')}
              style={styles.imgBg}
            />
          </View>
          <View style={[styles.onboardWrapper, styles.walkthru]}>
            <Image
              source={require('../../assets/images/Icons/cheers_icon_white.png')}
              style={styles.imgLogo}
            />
            <View style={styles.welcomeWrapper}>
              <CustomText style={styles.welcome}>
                Look out for our brewtiful events to
              </CustomText>
              <CustomText style={styles.welcome}>
                hang out with your new friends!
              </CustomText>
            </View>
          </View>
        </View> */}
        {/* Fourth Screen */}
        <View style={styles.container}>
          <View style={styles.imgBgWrapper}>
            <Image
              source={require('../../assets/images/Logos/msb_logo.png')}
              style={styles.imgBg}
            />
          </View>
          <View style={[styles.onboardWrapper, styles.walkthru]}>
            <Image
              source={require('../../assets/images/Icons/where_to_buy_icon.png')}
              style={styles.imgLogo}
            />
            <View style={styles.welcomeWrapper}>
              <CustomText style={styles.welcome}>
                Locate where to buy our
              </CustomText>
              <CustomText style={styles.welcome}>amazing beer.</CustomText>
            </View>
          </View>
        </View>
        {/* </Swiper> */}
      </Fragment>
    );
  }
}

Onboard.propTypes = {};

export default withNavigation(Onboard);
