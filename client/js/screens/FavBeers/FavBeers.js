import React from 'react';
import { FlatList, Image, View } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';

import { USER_QUERY, REMOVE_FROM_USER_BEERS } from '../../apollo/queries';
import { WhiteSeparator } from '../../lib/helpers/separator';
import Subheader from '../../components/Subheader';
import { colors } from '../../config/styles';
import styles from './styles';

const FavBeers = ({ beers, user, removeBeerFromFavourites }) => {
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
    <View style={styles.container}>
      <Subheader>Your Favourites</Subheader>
      <View style={styles.list}>
        <FlatList
          data={beers}
          renderItem={({ item }) => (
            <Swipeout right={getSwipeButton(item)} autoClose={true}>
              <Image source={getBeerType(item)} style={styles.beer} />
            </Swipeout>
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={WhiteSeparator}
        />
      </View>
    </View>
  );
};

FavBeers.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.object.isRequired,
  removeBeerFromFavourites: PropTypes.func.isRequired
};

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
  })
)(FavBeers);
