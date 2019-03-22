import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
import styles from './styles';

class CarouselEvents extends Component {
  constructor(props) {
    super(props);
    this.updateIndex = this.updateIndex.bind(this);
    this.state = {
      currentIndex: 0
    };
  }

  updateIndex = () => {
    if (this._carousel) {
      Store.updateIndex(this._carousel.currentIndex);
    }
  };
  render() {
    const { events, navigation } = this.props;

    return (
      <View style={styles.container}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={events}
          loop={true}
          loopClonesPerSide={2}
          firstItem={0}
          onSnapToItem={index => {
            this.setState({ currentIndex: index });
          }}
          renderItem={({ item }) => {
            let eventImg;
            if (item.title === 'Live Music & Beers') {
              eventImg = require('../../assets/images/Events/livemusic.jpg');
            } else if (item.title === 'Brewery Tour') {
              eventImg = require('../../assets/images/Events/Oskar_Blues_Festival_1200.jpg');
            }
            return (
              <View style={styles.carouselContainer}>
                <TouchableHighlight
                  underlayColor={'transparent'}
                  onPress={() => {
                    navigation.navigate('Event', { eventId: item.id });
                  }}
                >
                  <View style={{ alignItems: 'center' }}>
                    <View style={styles.imgWrapper}>
                      <Image
                        style={styles.img}
                        source={
                          eventImg
                            ? eventImg
                            : require('../../assets/images/Events/turnstile_middle.png')
                        }
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

        <View style={styles.infoWrapper}>
          <View style={styles.border} />

          <View style={styles.dataWrapper}>
            <Text style={styles.eventData}>
              <Text style={styles.boldData}>Date: </Text>
              {moment(events[this.state.currentIndex].date).format(
                'dddd, MMMM D, YYYY'
              )}
            </Text>
            <Text style={styles.eventData}>
              <Text style={styles.boldData}>Time: </Text>
              {events[this.state.currentIndex].time}
            </Text>
            <Text style={styles.eventData}>
              <Text style={styles.boldData}>Location: </Text>
              {events[this.state.currentIndex].location}
            </Text>
          </View>

          <View style={styles.border} />
        </View>

        <TouchableOpacity>
          <Image
            style={{ alignSelf: 'flex-end' }}
            source={require('../../assets/images/Icons/social_media_button.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

CarouselEvents.propTypes = {
  events: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default withNavigation(CarouselEvents);
