import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import CustomIcon from '../../components/CustomIcon';

const Event = props => {
  console.log(props);
  return (
    <View>
      <CustomIcon
        onPress={() => props.navigation.goBack()}
        source={require('../../assets/images/Icons/BackButton-Circle.png')}
        style={styles.backIcon}
      />
    </View>
  );
};

Event.propTypes = { event: PropTypes.array.isRequired };

export default Event;
