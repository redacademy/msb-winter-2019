import React from 'react';
import { Image, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './styles';

const Beer = props => {
  console.log('+++++', props);
  let beerBanner;
  if (props.beer.title === 'FRUIT BOMB') {
    beerBanner = require('../../assets/images/Beers/SpecificBeer/fruit_bomb.png');
  } else if (props.beer.title === 'NAKED FOX') {
    beerBanner = require('../../assets/images/Beers/SpecificBeer/naked_fox.png');
  } else if (props.beer.title === 'GIMME SOME MO’') {
    beerBanner = require('../../assets/images/Beers/SpecificBeer/gimme_some_mo.png');
  } else if (props.beer.title === 'MAIN STREET') {
    beerBanner = require('../../assets/images/Beers/SpecificBeer/main_street_pilsner.png');
  } else if (props.beer.title === 'WESTMINSTER') {
    beerBanner = require('../../assets/images/Beers/SpecificBeer/westminster.png');
  } else if (props.beer.title === 'AUSTRALIAN') {
    beerBanner = require('../../assets/images/Beers/SpecificBeer/australian_saison.png');
  } else if (props.beer.title === 'SLAUGHTERHOUSE') {
    beerBanner = require('../../assets/images/Beers/SpecificBeer/slaughterhouse.png');
  } else if (props.beer.title === 'BARKING MAD') {
    beerBanner = require('../../assets/images/Beers/SpecificBeer/barking_mad.png');
  }

  return (
    <View style={styles.container}>
      <View style={styles.bannerWrapper}>
        <Image source={beerBanner} />
      </View>

      <View style={styles.beerContainer}>
        <View style={styles.beerInfoContainer}>
          <View style={styles.beerType}>
            <Text style={styles.title}>{props.beer.title}</Text>
            <Text style={styles.subtitle}>{props.beer.subtitle}</Text>
          </View>

          <View style={styles.beerDataContainer}>
            <Text style={styles.beerData}>
              <Text style={styles.infoBold}>Style: </Text> {props.beer.style}
            </Text>
            <Text style={styles.beerData}>
              <Text style={styles.infoBold}>ABV: </Text> {props.beer.abv}%
            </Text>
            <Text style={styles.beerData}>
              <Text style={styles.infoBold}>IBU: </Text> {props.beer.ibu}
            </Text>
            <Text style={styles.beerData}>
              <Text style={styles.infoBold}>Released: </Text>
              {moment(props.beer.releaseDate).format('MMM YY')}
            </Text>
          </View>
        </View>
        <Text style={styles.description}>{props.beer.description}</Text>
      </View>
    </View>
  );
};

Beer.propTypes = {
  beer: PropTypes.object.isRequired
};

export default Beer;
