import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './styles';
import CustomIcon from '../../components/CustomIcon';
import SaveEventButton from '../../components/Buttons/SaveEventButton';
import SocialIconsPopout from '../../components/SocialIconsPopout';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideIcons: true
    };
  }

  toggleIcons = () => {
    this.setState({
      hideIcons: !this.state.hideIcons
    });
  };

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

          <View style={styles.socialIconsWrapper}>
            {!this.state.hideIcons && <SocialIconsPopout />}
            <CustomIcon
              onPress={() => {
                this.toggleIcons();
              }}
              source={require('../../assets/images/Icons/social_media_button.png')}
              style={styles.socialbtn}
            />
          </View>

          {/* <CustomIcon
            style={styles.outerBtnContainer}
            onPress={() => {}}
            source={require('../../assets/images/Buttons/save_button_inactive.png')}
          /> */}
          <SaveEventButton user={user} event={event} />
        </View>
      </View>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Event;
