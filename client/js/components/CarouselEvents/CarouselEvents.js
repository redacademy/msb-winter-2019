import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';
import moment from 'moment';

import styles from './styles';
import { hr, center } from '../../config/styles';

class CarouselEvents extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { events, navigation } = this.props;

    return (
      <View style={styles.carouselContainer}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={events}
          loop={true}
          loopClonesPerSide={2}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <View style={styles.slide}>
                <TouchableHighlight
                  underlayColor={'transparent'}
                  onPress={() => {
                    navigation.navigate('Event', { item });
                  }}
                >
                  <View style={{ ...center }}>
                    <View style={styles.eventImg}>
                      <Image
                        source={require('../../assets/images/Events/turnstile_middle.png')}
                      />
                    </View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                  </View>
                </TouchableHighlight>
              </View>
            );
          }}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={250}
        />

        <View style={{ ...hr, maxWidth: 270 }} />
        <View style={styles.dataWrapper}>
          <Text style={styles.eventData}>
            <Text style={styles.boldData}>Date: </Text>
            {moment(events[0].date).format('MMM Do YYYY')}
          </Text>
          <Text style={styles.eventData}>
            <Text style={styles.boldData}>Time: </Text>
            {events[0].time}
          </Text>
          <Text style={styles.eventData}>
            <Text style={styles.boldData}>Location: </Text>
            {events[0].location}
          </Text>
        </View>
        <View style={{ ...hr, maxWidth: 270 }} />
      </View>
    );
  }
}

CarouselEvents.propTypes = {
  events: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default withNavigation(CarouselEvents);
