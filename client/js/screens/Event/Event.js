import React from 'react';
import { Image, Platform, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import CustomIcon from '../../components/CustomIcon';
import { center, row } from '../../config/styles';

const Event = props => {
  console.log('EVENT MODAL', props);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Events/turnstile_middle.png')}
      />
      <Ionicons
        onPress={() => props.navigation.navigation.goBack()}
        name={Platform.select({
          android: 'md-arrow-back',
          ios: 'ios-arrow-back'
        })}
        size={35}
        color={'#fff'}
      />
      {/* <CustomIcon
        onPress={() => props.navigation.navigation.goBack()}
        source={require('../../assets/images/Icons/BackButton-Circle.png')}
        style={styles.backIcon}
      /> */}
      <View style={{ ...center }}>
        <View style={styles.border} />

        <View style={styles.dataWrapper}>
          <Text style={styles.eventData}>
            <Text style={styles.boldData}>Date: </Text>
            {moment(props.event.date).format('MMM Do YYYY')}
          </Text>
          <Text style={styles.eventData}>
            <Text style={styles.boldData}>Time: </Text>
            {props.event.time}
          </Text>
          <Text style={styles.eventData}>
            <Text style={styles.boldData}>Location: </Text>
            {props.event.location}
          </Text>
        </View>

        <View style={styles.border} />

        <Text>{props.event.description}</Text>
      </View>

      {/* <View style={{ ...row, ...center }}>
        <View /> */}
      <CustomIcon
        style={{ ...center }}
        source={require('../../assets/images/Icons/social_media_button.png')}
        onPress={() => {}}
      />
      <CustomIcon
        style={{ ...center }}
        source={require('../../assets/images/Buttons/save_button_inactive.png')}
        onPress={() => {}}
      />
      {/* </View> */}
    </View>
  );
};

Event.propTypes = {
  event: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Event;
