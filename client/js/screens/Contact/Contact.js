import React from 'react';
import { View, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../components/CustomText';
import CustomIcon from '../../components/CustomIcon';
import Subheader from '../../components/Subheader';
import {
  subtitle2,
  button,
  body1,
  colors,
  row,
  padding,
  h4,
  hr,
  margin
} from '../../config/styles';
import styles from './styles';

const Contact = props => {
  return (
    <View style={styles.container}>
      <Subheader styles={styles.subheader}>Contact Us</Subheader>
      <Image
        source={require('../../assets/images/Contact/msb_banner_image.png')}
        style={styles.img}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          padding: padding.md
        }}
      >
        <View style={{ ...row, alignItems: 'space-between' }}>
          <View>
            <CustomText
              style={{
                ...button,
                color: colors.black,
                paddingVertical: 0,
                paddingHorizontal: 0
              }}
            >
              Main Street Brewing
            </CustomText>
            <CustomText style={{ ...body1, paddingVertical: 0 }}>
              261 East 7th Avenue
            </CustomText>
            <CustomText style={{ ...body1, paddingVertical: 0 }}>
              Vancouver, BC
            </CustomText>
            <CustomText style={{ ...subtitle2, paddingVertical: 0 }}>
              2:00 pm - 10:00 pm
            </CustomText>
          </View>
          <View style={{ ...row, paddingLeft: padding.md }}>
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
        <View style={{ height: '40%' }}>
          <CustomText
            style={{
              ...h4
            }}
          >
            Follow Us On
          </CustomText>
          <View
            style={{
              ...row,
              ...hr,
              width: '50%',
              marginVertical: margin.sm
            }}
          >
            <CustomIcon
              onPress={() =>
                Linking.openURL(`https://www.facebook.com/MainStreetBeer/`)
              }
              title='Main St. Brewing Facebook'
              accessibilityLabel='Main St. Brewing Facebook'
              source={require('../../assets/images/Icons/socialmedia_fb_icon.png')}
              style={{ marginLeft: 0, marginVertical: margin.xs }}
            />
            <CustomIcon
              onPress={() =>
                Linking.openURL(`https://www.instagram.com/mainstreetbeer/`)
              }
              title='Main St. Brewing Instagram'
              accessibilityLabel='Main St. Brewing Instagram'
              source={require('../../assets/images/Icons/socialmedia_ig_icon.png')}
              style={{ marginVertical: margin.xs }}
            />
            <CustomIcon
              onPress={() =>
                Linking.openURL(`https://twitter.com/mainstreetbeer`)
              }
              title='Main St. Brewing Twitter'
              accessibilityLabel='Main St. Brewing Twitter'
              source={require('../../assets/images/Icons/socialmedia_twitter_icon.png')}
              style={{ marginVertical: margin.xs }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

Contact.propTypes = {};

export default Contact;
