import React from 'react';
import { Image, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './styles';
import CustomIcon from '../../components/CustomIcon';
import { center } from '../../config/styles';

const Event = props => {
  let eventImg;
  if (props.event.title === 'Live Music & Beers') {
    eventImg = require('../../assets/images/Events/livemusic.jpg');
  } else if (props.event.title === 'Brewery Tour') {
    eventImg = require('../../assets/images/Events/Oskar_Blues_Festival_1200.jpg');
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.headerImg}
        source={
          eventImg
            ? eventImg
            : require('../../assets/images/Events/craft-beer-background-5.jpg')
        }
      />

      <View style={styles.infoWrapper}>
        <View>
          <Text style={styles.title}>{props.event.title}</Text>
          <Text style={styles.subtitle}>{props.event.subtitle}</Text>
        </View>
        <View style={styles.dataWrapper}>
          <View style={styles.border} />

          <View style={styles.eventDetails}>
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
      </View>

      <CustomIcon
        style={{ ...center }}
        source={require('../../assets/images/Icons/social_media_button.png')}
        onPress={() => {}}
      />
    </View>
  );
};

Event.propTypes = {
  event: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Event;
