import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Profile = props => {
  return (
    <View style={styles.container}>
      <Text>This is Profile.</Text>
    </View>
  );
};

Profile.propTypes = {};

export default Profile;
