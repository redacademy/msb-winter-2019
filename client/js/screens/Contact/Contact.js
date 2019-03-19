import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../components/CustomText';
import CustomIcon from '../../components/CustomIcon';
import Subheader from '../../components/Subheader';
import { subtitle2 } from '../../config/styles';
import styles from './styles';

const Contact = props => {
  return (
    <View style={styles.container}>
      <Subheader styles={styles.subheader}>Contact Us</Subheader>
      <Image
        source={require('../../assets/images/Contact/msb_banner_image.png')}
        style={styles.img}
      />
      <View>
        <View>
          <CustomText style={{ ...subtitle2 }}>This is Contact.</CustomText>
        </View>
        <View>
          <CustomIcon
            source={require('../../assets/images/Icons/phone_button.png')}
            style={styles.img}
          />
          <Image
            source={require('../../assets/images/Contact/msb_banner_image.png')}
            style={styles.img}
          />
        </View>
      </View>
    </View>
  );
};

Contact.propTypes = {};

export default Contact;
