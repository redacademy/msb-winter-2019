import React from 'react';
import { View, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import CloseModalButton from '../Buttons/CloseModalButton';
import styles from './styles';

const StampsReceivedModal = ({ navigation }) => {
  const stamps = navigation.getParam('stamps');

  return (
    <View style={styles.container}>
      <CloseModalButton
        onPress={() => {
          navigation.navigate('History');
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Cheers!</Text>
        <Image source={require('../../assets/images/Redeem/2_stars.png')} />
        <Text style={styles.text}>{`You received ${stamps} stamps!`}</Text>
      </View>
    </View>
  );
};

StampsReceivedModal.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default withNavigation(StampsReceivedModal);
