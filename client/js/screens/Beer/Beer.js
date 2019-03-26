import React, { Component, Fragment } from 'react';
import { Image, View, ScrollView, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { graphql, compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomIcon from '../../components/CustomIcon';
import BlackButton from '../../components/Buttons/BlackButton';
import SocialIconsPopout from '../../components/SocialIconsPopout';
import AvailabilityBtn from '../../components/AvailabilityBtn';
import { center, colors, vl } from '../../config/styles';
import {
  ADD_TO_USER_BEERS,
  USER_QUERY,
  REMOVE_FROM_USER_BEERS
} from '../../apollo/queries';
import styles from './styles';

class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideAvail: true,
      hideIcons: true
    };
    this.buttonTimeouts = [];
  }

  componentWillUnmount() {
    this.clearButtonTimeouts();
  }

  isFavourited = (user, beer) => {
    return user.favouriteBeers.some(userBeer => userBeer.id === beer.id);
  };

  toggleFavourite = async (user, beer) => {
    const { addBeerToFavourites, removeBeerFromFavourites } = this.props;
    if (this.isFavourited(user, beer)) {
      await removeBeerFromFavourites({
        variables: { usersUserId: user.id, favouriteBeersBeerId: beer.id }
      });
    } else {
      await addBeerToFavourites({
        variables: { usersUserId: user.id, favouriteBeersBeerId: beer.id }
      });
    }
    this.setState({ hideIcons: true, hideAvail: true });
  };

  clearButtonTimeouts = () => {
    this.buttonTimeouts.forEach(timeout => clearTimeout(timeout));
    this.buttonTimeouts = [];
  };

  toggleAvail = () => {
    this.clearButtonTimeouts();
    this.setState(
      {
        hideAvail: !this.state.hideAvail,
        hideIcons: true
      },
      () => {
        console.log('toggling availability', this.state.hideAvail);
        if (!this.state.hideAvail) {
          const timeout = setTimeout(() => {
            this.toggleAvail();
          }, 2000);
          this.buttonTimeouts.push(timeout);
        }
      }
    );
  };

  toggleIcons = () => {
    this.clearButtonTimeouts();
    this.setState(
      {
        hideIcons: !this.state.hideIcons,
        hideAvail: true
      },
      () => {
        if (!this.state.hideIcons) {
          const timeout = setTimeout(() => {
            this.toggleIcons();
          }, 2000);
          this.buttonTimeouts.push(timeout);
        }
      }
    );
  };

  render() {
    const { beer, user, navigation } = this.props;
    let beerBanner;
    if (beer.title === 'FRUIT BOMB') {
      beerBanner = require('../../assets/images/Beers/SpecificBeer/fruit_bomb.png');
    } else if (beer.title === 'NAKED FOX') {
      beerBanner = require('../../assets/images/Beers/SpecificBeer/naked_fox.png');
    } else if (beer.title === 'GIMME SOME MO’') {
      beerBanner = require('../../assets/images/Beers/SpecificBeer/gimme_some_mo.png');
    } else if (beer.title === 'MAIN STREET') {
      beerBanner = require('../../assets/images/Beers/SpecificBeer/main_street_pilsner.png');
    } else if (beer.title === 'WESTMINSTER') {
      beerBanner = require('../../assets/images/Beers/SpecificBeer/westminster.png');
    } else if (beer.title === 'AUSTRALIAN') {
      beerBanner = require('../../assets/images/Beers/SpecificBeer/australian_saison.png');
    } else if (beer.title === 'SLAUGHTERHOUSE') {
      beerBanner = require('../../assets/images/Beers/SpecificBeer/slaughterhouse.png');
    } else if (beer.title === 'BARKING MAD') {
      beerBanner = require('../../assets/images/Beers/SpecificBeer/barking_mad.png');
    }

    return (
      <View style={styles.container}>
        <View style={styles.bannerWrapper}>
          <Image source={beerBanner} />
        </View>
        <CustomIcon
          onPress={() => navigation.goBack()}
          source={require('../../assets/images/Icons/BackButton-Circle.png')}
          style={styles.backIcon}
        />

        <View style={styles.beerContainer}>
          <View style={styles.beerWrapper}>
            <View style={styles.beerGrid}>
              <View style={styles.beerType}>
                <Text style={styles.title}>{beer.title}</Text>
                <Text style={styles.subtitle}>{beer.subtitle}</Text>
                <Image
                  style={styles.rating}
                  source={require('../../assets/images/Beers/stars_rating.png')}
                />
              </View>

              <View style={{ ...vl }}>
                <View style={styles.beerDataContainer}>
                  <Text style={styles.beerData}>
                    <Text style={styles.infoBold}>Style: </Text> {beer.style}
                  </Text>
                  <Text style={styles.beerData}>
                    <Text style={styles.infoBold}>ABV: </Text> {beer.abv}%
                  </Text>
                  <Text style={styles.beerData}>
                    <Text style={styles.infoBold}>IBU: </Text> {beer.ibu}
                  </Text>

                  <Text style={styles.released}>
                    <Text style={styles.infoBold}>Released: </Text>
                    {moment(beer.releaseDate).format('MMM YY')}
                  </Text>
                </View>
              </View>
            </View>

            <ScrollView style={{ maxHeight: 190 }}>
              <Text style={styles.description}>{beer.description}</Text>
            </ScrollView>
          </View>

          <View style={styles.btnContainer}>
            <View>
              {!this.state.hideAvail && <AvailabilityBtn />}
              <BlackButton
                style={{ width: 100 }}
                onPress={() => {
                  this.toggleAvail();
                }}
              >
                Availability
              </BlackButton>
            </View>

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

            <BlackButton
              style={{
                backgroundColor: this.isFavourited(user, beer)
                  ? colors.brand
                  : colors.black,
                width: 100
              }}
              onPress={() => {
                this.toggleFavourite(user, beer);
              }}
            >
              <Fragment>
                <Icon
                  name={Platform.select({
                    ios: 'ios-heart',
                    android: 'md-heart'
                  })}
                  size={15}
                  color={'white'}
                  style={{ marginRight: 15, ...center }}
                />{' '}
                Favourite
              </Fragment>
            </BlackButton>
          </View>
        </View>
      </View>
    );
  }
}

Beer.propTypes = {
  beer: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  addBeerToFavourites: PropTypes.func.isRequired,
  removeBeerFromFavourites: PropTypes.func.isRequired
};

export default compose(
  graphql(ADD_TO_USER_BEERS, {
    name: 'addBeerToFavourites',
    options: () => ({
      refetchQueries: [
        {
          query: USER_QUERY
        }
      ]
    })
  }),
  graphql(REMOVE_FROM_USER_BEERS, {
    name: 'removeBeerFromFavourites',
    options: () => ({
      refetchQueries: [
        {
          query: USER_QUERY
        }
      ]
    })
  }),
  withNavigation
)(Beer);
