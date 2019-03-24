import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { withNavigation } from 'react-navigation';
import { graphql, compose } from 'react-apollo';
import { USER_QUERY, REMOVE_FROM_USER_BEERS } from '../../apollo/queries';
import PropTypes from 'prop-types';

import styles from './styles';

const FavBeers = ({ beers, user, navigation, removeBeerFromFavourites }) => {
  const getSwipeButton = beer => {
    return [
      {
        text: 'Delete',
        backgroundColor: 'red',
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
      beerType = require('../../assets/images/Home/Beers/band3_fruit_bomb.png');
    } else if (beer.title === 'NAKED FOX') {
      beerType = require('../../assets/images/Home/Beers/band6_naked_fox.png');
    } else if (beer.title === 'GIMME SOME MO’') {
      beerType = require('../../assets/images/Home/Beers/band1_gimme_some_mo.png');
    } else if (beer.title === 'MAIN STREET') {
      beerType = require('../../assets/images/Home/Beers/band7_main_street.png');
    } else if (beer.title === 'WESTMINSTER') {
      beerType = require('../../assets/images/Home/Beers/band5_westminster.png');
    } else if (beer.title === 'AUSTRALIAN') {
      beerType = require('../../assets/images/Home/Beers/band8_australian.png');
    } else if (beer.title === 'SLAUGHTERHOUSE') {
      beerType = require('../../assets/images/Home/Beers/band4_slaughterhouse.png');
    } else if (beer.title === 'BARKING MAD') {
      beerType = require('../../assets/images/Home/Beers/band2_barking_mad.png');
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
