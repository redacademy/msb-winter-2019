import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Contact = props => {
  return (
    <View style={styles.container}>
      <Text>This is Contact.</Text>
    </View>
  );
};

Contact.propTypes = {};

export default Contact;
