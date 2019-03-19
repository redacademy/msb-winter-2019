import React from 'react';
import { View, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../components/CustomText';
import CustomIcon from '../../components/CustomIcon';
import Subheader from '../../components/Subheader';
import styles from './styles';

const Contact = props => {
  return (
    <View style={styles.container}>
      <Subheader styles={styles.subheader}>Contact Us</Subheader>
      <Image
        source={require('../../assets/images/Contact/msb_banner_image.png')}
        style={styles.img}
      />
      <View style={styles.contactWrapper}>
        <View style={styles.msbInfo}>
          <View>
            <CustomText style={styles.msbTitle}>Main Street Brewing</CustomText>
            <CustomText style={styles.msbAddress}>
              261 East 7th Avenue
            </CustomText>
            <CustomText style={styles.msbAddress}>Vancouver, BC</CustomText>
            <CustomText style={styles.msbHours}>2:00 pm - 10:00 pm</CustomText>
          </View>
          <View style={styles.msbContact}>
            <CustomIcon
              onPress={() => Linking.openURL(`tel:6043367711`)}
              source={require('../../assets/images/Icons/phone_button.png')}
            />
            <CustomIcon
              onPress={() => Linking.openURL(`mailto:info@mainstreetbeer.ca`)}
              source={require('../../assets/images/Icons/email_button.png')}
            />
          </View>
        </View>
        <View style={styles.socialWrapper}>
          <CustomText style={styles.socialTitle}>Follow Us On</CustomText>
          <View style={styles.socialIconsWrapper}>
            <CustomIcon
              onPress={() =>
                Linking.openURL(`https://www.facebook.com/MainStreetBeer/`)
              }
              title='Main St. Brewing Facebook'
              accessibilityLabel='Main St. Brewing Facebook'
              source={require('../../assets/images/Icons/socialmedia_fb_icon.png')}
              style={[styles.ml0, styles.socialIcon]}
            />
            <CustomIcon
              onPress={() =>
                Linking.openURL(`https://www.instagram.com/mainstreetbeer/`)
              }
              title='Main St. Brewing Instagram'
              accessibilityLabel='Main St. Brewing Instagram'
              source={require('../../assets/images/Icons/socialmedia_ig_icon.png')}
              style={styles.socialIcon}
            />
            <CustomIcon
              onPress={() =>
                Linking.openURL(`https://twitter.com/mainstreetbeer`)
              }
              title='Main St. Brewing Twitter'
              accessibilityLabel='Main St. Brewing Twitter'
              source={require('../../assets/images/Icons/socialmedia_twitter_icon.png')}
              style={styles.socialIcon}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

Contact.propTypes = {};

export default Contact;
