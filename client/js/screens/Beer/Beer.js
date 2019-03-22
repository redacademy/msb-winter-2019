import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { graphql, compose, Query } from 'react-apollo';
import styles from './styles';
import CustomIcon from '../../components/CustomIcon';
import { ADD_TO_USER_BEERS, USER_QUERY } from '../../apollo/queries';

class Beer extends Component {
  isFavourited = (user, beer) => {
    return user.favouriteBeers.some(userBeer => userBeer.id === beer.id);
  };

  toggleFavourite = (user, beer) => {
    const { addBeerToFavourites } = this.props;
    console.log('toggle');
  };

  render() {
    console.log('Hi beer');
    const { beer, user, navigation } = this.props;
    console.log('got props');
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
          <View>
            <View style={styles.beerInfoContainer}>
              <View style={styles.beerType}>
                <Text style={styles.title}>{beer.title}</Text>
                <Text style={styles.subtitle}>{beer.subtitle}</Text>
              </View>

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
                <Text style={styles.beerData}>
                  <Text style={styles.infoBold}>Released: </Text>
                  {moment(beer.releaseDate).format('MMM YY')}
                </Text>
              </View>
            </View>

            <Text style={styles.description}>{beer.description}</Text>
          </View>
          <View>
            <CustomIcon
              onPress={() => {}}
              source={require('../../assets/images/Icons/social_media_button.png')}
              style={styles.socialbtn}
            />
            <CustomIcon
              onPress={() => {
                this.toggleFavourite(user, beer);
              }}
              source={
                this.isFavourited(user, beer)
                  ? require('../../assets/images/Buttons/favourite_button_active.png')
                  : require('../../assets/images/Buttons/favourite_button.png')
              }
            />
          </View>
        </View>
      </View>
    );
  }
}

Beer.propTypes = {
  beer: PropTypes.object.isRequired
};

export default Beer;

// export default compose(
//   graphql(ADD_TO_USER_BEERS, {
//     name: 'addBeerToFavourites',
//     options: () => ({
//       refetchQueries: [
//         {
//           query: USER_QUERY
//         }
//       ]
//     })
//   })
// )(Beer);
