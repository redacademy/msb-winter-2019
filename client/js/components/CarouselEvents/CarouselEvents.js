import React, { Component } from 'react';
import {
  Dimensions,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  ADD_TO_USER_EVENTS,
  REMOVE_FROM_USER_EVENTS,
  USER_QUERY
} from '../../apollo/queries';
import { graphql, compose } from 'react-apollo';
import styles from './styles';
import { center } from '../../config/styles';

class CarouselEvents extends Component {
  constructor(props) {
    super(props);
    this.updateIndex = this.updateIndex.bind(this);
    this.state = {
      currentIndex: 0
    };
  }

  getCurrentEvent = () => {
    const { events } = this.props;
    return events[this.state.currentIndex] || events[events.length - 1];
  };

  componentDidUpdate = prevProps => {
    const { events } = this.props;
    if (this.state.currentIndex >= events.length) {
      this.setState({ currentIndex: events.length - 1 });
    }
  };

  isEventFavourited = () => {
    const { user } = this.props;
    const event = this.getCurrentEvent();
    return user.favouriteEvents.some(favEvent => favEvent.id === event.id);
  };

  toggleFavouriteEvent = async () => {
    const {
      events,
      user,
      addToFavouriteEvents,
      removeFromFavouriteEvents
    } = this.props;
    const event = this.getCurrentEvent();
    if (this.isEventFavourited()) {
      await removeFromFavouriteEvents({
        variables: { usersUserId: user.id, favouriteEventsEventId: event.id }
      });
    } else {
      await addToFavouriteEvents({
        variables: { usersUserId: user.id, favouriteEventsEventId: event.id }
      });
    }
  };

  updateIndex = () => {
    if (this._carousel) {
      Store.updateIndex(this._carousel.currentIndex);
    }
  };

  render() {
    const { events, navigation } = this.props;
    const currentEvent = this.getCurrentEvent();

    console.log('****', this.props);
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
                          : require('../../assets/images/Events/craft-beer-background-5.jpg')
                      }
                    />
                  </View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
              </TouchableHighlight>
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
              {currentEvent.time}
            </Text>
            <Text style={styles.eventData}>
              <Text style={styles.boldData}>Location: </Text>
              {currentEvent.location}
            </Text>
          </View>

          <View style={styles.border} />
        </View>

        <View style={styles.btnContainer}>
          <View />
          <TouchableOpacity style={styles.socialBtnWrapper} onPress={() => {}}>
            <Image
              source={require('../../assets/images/Icons/social_media_button.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.toggleFavouriteEvent();
            }}
          >
            <Image
              style={styles.saveBtn}
              source={
                this.isEventFavourited()
                  ? require('../../assets/images/Buttons/save_button_active.png')
                  : require('../../assets/images/Buttons/save_button_inactive.png')
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

CarouselEvents.propTypes = {
  events: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default compose(
  graphql(ADD_TO_USER_EVENTS, {
    name: 'addToFavouriteEvents',
    options: () => ({
      refetchQueries: [
        {
          query: USER_QUERY
        }
      ]
    })
  }),
  graphql(REMOVE_FROM_USER_EVENTS, {
    name: 'removeFromFavouriteEvents',
    options: () => ({
      refetchQueries: [
        {
          query: USER_QUERY
        }
      ]
    })
  }),
  withNavigation
)(CarouselEvents);
