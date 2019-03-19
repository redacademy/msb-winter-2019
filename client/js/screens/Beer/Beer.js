import React from 'react';
import { Image, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './styles';

const Beer = props => {
  const { beer } = props;
  console.log(beer);

  return (
    <View style={styles.container}>
      <View style={styles.bannerWrapper}>
        {beer.title === 'FRUIT BOMB' ? (
          <Image
            source={require('../../assets/images/Beers/SpecificBeer/fruit_bomb.png')}
          />
        ) : null}
        {beer.title === 'NAKED FOX' ? (
          <Image
            source={require('../../assets/images/Beers/SpecificBeer/naked_fox.png')}
          />
        ) : null}
        {beer.title === 'GIMME SOME MO’' ? (
          <Image
            source={require('../../assets/images/Beers/SpecificBeer/gimme_some_mo.png')}
          />
        ) : null}
        {beer.title === 'MAIN STREET' ? (
          <Image
            source={require('../../assets/images/Beers/SpecificBeer/main_street_pilsner.png')}
          />
        ) : null}
        {beer.title === 'WESTMINSTER' ? (
          <Image
            source={require('../../assets/images/Beers/SpecificBeer/westminster.png')}
          />
        ) : null}
        {beer.title === 'AUSTRALIAN' ? (
          <Image
            source={require('../../assets/images/Beers/SpecificBeer/australian_saison.png')}
          />
        ) : null}
        {beer.title === 'SLAUGHTERHOUSE' ? (
          <Image
            source={require('../../assets/images/Beers/SpecificBeer/slaughterhouse.png')}
          />
        ) : null}
        {beer.title === 'BARKING MAD' ? (
          <Image
            source={require('../../assets/images/Beers/SpecificBeer/barking_mad.png')}
          />
        ) : null}
      </View>

      <View style={styles.beerContainer}>
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
    </View>
  );
};

Beer.propTypes = {
  beer: PropTypes.object.isRequired
};

export default Beer;
