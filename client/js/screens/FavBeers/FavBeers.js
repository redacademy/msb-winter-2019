import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { withNavigation } from 'react-navigation';
import { graphql, compose } from 'react-apollo';
import { USER_QUERY, REMOVE_FROM_USER_BEERS } from '../../apollo/queries';
import { colors, subtitle1, fonts } from '../../config/styles';
import PropTypes from 'prop-types';

import styles from './styles';

const FavBeers = ({ beers, user, navigation, removeBeerFromFavourites }) => {
  const getSwipeButton = beer => {
    return [
      {
        text: 'Clear',
        backgroundColor: colors.brand,
        color: colors.white,
        type: 'Delete',
        onPress: async () => {
          await removeBeerFromFavourites({
            variables: { usersUserId: user.id, favouriteBeersBeerId: beer.id }
          });
        }
      }
    ];
  };

  const getBeerType = beer => {
    let beerType;
    if (beer.title === 'FRUIT BOMB') {
      beerType = require('../../assets/images/Beers/band3_fruit_bomb_no_details.png');
    } else if (beer.title === 'NAKED FOX') {
      beerType = require('../../assets/images/Beers/band6_naked_fox_no_details.png');
    } else if (beer.title === 'GIMME SOME MO’') {
      beerType = require('../../assets/images/Beers/band1_gimme_some_mo_no_details.png');
    } else if (beer.title === 'MAIN STREET') {
      beerType = require('../../assets/images/Beers/band7_main_street_no_details.png');
    } else if (beer.title === 'WESTMINSTER') {
      beerType = require('../../assets/images/Beers/band5_westminster_no_details.png');
    } else if (beer.title === 'AUSTRALIAN') {
      beerType = require('../../assets/images/Beers/band8_australian_no_details.png');
    } else if (beer.title === 'SLAUGHTERHOUSE') {
      beerType = require('../../assets/images/Beers/band4_slaughterhouse_no_details.png');
    } else if (beer.title === 'BARKING MAD') {
      beerType = require('../../assets/images/Beers/band2_barking_mad_no_details.png');
    }
    return beerType;
  };

  return (
    <View>
      {beers.map(beer => (
        <Swipeout key={beer.id} right={getSwipeButton(beer)} autoClose={true}>
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => {
              navigation.navigate('Beer', { beerId: beer.id });
            }}
          >
            <Image source={getBeerType(beer)} style={styles.beerType} />
          </TouchableHighlight>
        </Swipeout>
      ))}
    </View>
  );
};

FavBeers.propTypes = {};

export default compose(
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
)(FavBeers);
