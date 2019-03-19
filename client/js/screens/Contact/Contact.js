import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../components/CustomText';
import Subheader from '../../components/Subheader';
import { subtitle2 } from '../../config/styles';
import styles from './styles';

const Contact = props => {
  return (
    <View style={styles.container}>
      <Subheader styles={styles.subheader}>Contact Us</Subheader>
      <CustomText style={{ ...subtitle2 }}>This is Contact.</CustomText>
    </View>
  );
};

Contact.propTypes = {};

export default Contact;
