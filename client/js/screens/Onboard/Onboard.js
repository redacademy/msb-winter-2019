import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader';
import CustomText from '../../components/CustomText';
import styles from './styles';

const slides = [
  {
    key: '0',
    image: require('../../assets/images/Logos/growler_logo_brand.png'),
    text1: 'Welcome to the Growler',
    text2: 'Rewards Program, you are now',
    text3: 'an official member!'
  },
  {
    key: '1',
    image: require('../../assets/images/Logos/growler_logo.png'),
    text1: 'Collect stamps with Growlers and',
    text2: 'redeem them for awesome rewards.'
  },
  {
    key: '2',
    image: require('../../assets/images/Icons/cheers_icon_white.png'),
    text1: 'Look out for our brewtiful events to',
    text2: 'hang out with your new friends!'
  },
  {
    key: '3',
    image: require('../../assets/images/Icons/where_to_buy_icon.png'),
    text1: 'Locate where to buy our',
    text2: 'amazing beer.'
  }
];

class Onboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false
    };
  }

  renderItem = props => {
    return (
      <View
        style={[
          styles.container,
          {
            paddingTop: props.topSpacer,
            paddingBottom: props.bottomSpacer,
            width: props.width,
            height: props.height
          }
        ]}
      >
        <View style={styles.imgBgWrapper}>
          <Image
            source={require('../../assets/images/Logos/msb_logo.png')}
            style={styles.imgBg}
          />
        </View>
        <View style={styles.onboardWrapper}>
          <Image source={props.image} style={styles.imgLogo} />
          <View style={styles.welcomeWrapper}>
            <CustomText style={styles.welcome}>{props.text1}</CustomText>
            <CustomText style={styles.welcome}>{props.text2}</CustomText>
            <CustomText style={styles.welcome}>{props.text3}</CustomText>
          </View>
        </View>
      </View>
    );
  };

  renderDoneButton = () => {
    return (
      <View style={styles.btn}>
        <Text
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
          style={[styles.btnText, styles.button]}
        >
          Done
        </Text>
      </View>
    );
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    if (this.state.error) {
      return <CustomText>Error</CustomText>;
    }

    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this.renderItem}
        bottomButton={true}
        buttonStyle={styles.btn}
        buttonTextStyle={styles.btnText}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        renderDoneButton={this.renderDoneButton}
      />
    );
  }
}

Onboard.proptypes = {};

export default withNavigation(Onboard);
