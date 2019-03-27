import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './styles';
import SaveEventButton from '../../components/Buttons/SaveEventButton';
import ShareButton from '../../components/Buttons/ShareButton';

class Event extends Component {
  render() {
    const { event, user } = this.props;

    let eventImg;
    if (event.title === 'Live Music & Beers') {
      eventImg = require('../../assets/images/Events/livemusic.jpg');
    } else if (event.title === 'Brewery Tour') {
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
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.subtitle}>{event.subtitle}</Text>
          </View>
          <View style={styles.dataWrapper}>
            <View style={styles.border} />

            <View style={styles.eventDetails}>
              <Text style={styles.eventData}>
                <Text style={styles.boldData}>Date: </Text>
                {moment(event.date).format('MMM Do YYYY')}
              </Text>
              <Text style={styles.eventData}>
                <Text style={styles.boldData}>Time: </Text>
                {event.time}
              </Text>
              <Text style={styles.eventData}>
                <Text style={styles.boldData}>Location: </Text>
                {event.location}
              </Text>
            </View>

            <View style={styles.border} />

            <Text style={styles.description}>{event.description}</Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.outerBtnContainer} />
          <ShareButton />
          <SaveEventButton user={user} event={event} />
        </View>
      </View>
    );
  }
}

Event.propTypes = {
  user: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Event;
