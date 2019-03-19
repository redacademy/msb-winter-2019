import React from 'react';
import {
  Dimensions,
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import { hr, center, row, h2, Subtitle2 } from '../../config/styles';

beerImage = () => {
  let squerBeer;
};

const AllBeers = props => {
  return (
    <View style={styles.container}>
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={props.data.allBeers}
        loop={true}
        loopClonesPerSide={2}
        renderItem={({ item }) => {
          return (
            <View style={styles.slide}>
              <TouchableHighlight
                underlayColor={'transparent'}
                onPress={() => {
                  // @TODO navigate to Beer screen
                }}
              >
                <View style={{ ...center }}>
                  {item.title === 'FRUIT BOMB' ? (
                    <Image
                      source={require('../../assets/images/Beers/squre_fruit_bomb.png')}
                    />
                  ) : null}
                  {item.title === 'NAKED FOX' ? (
                    <Image
                      source={require('../../assets/images/Beers/squre_naked_fox.png')}
                    />
                  ) : null}
                  {item.title === 'GIMME SOME MO’' ? (
                    <Image
                      source={require('../../assets/images/Beers/squre_gimme_some_mo.png')}
                    />
                  ) : null}
                  {item.title === 'MAIN STREET' ? (
                    <Image
                      source={require('../../assets/images/Beers/squre_main_street.png')}
                    />
                  ) : null}
                  {item.title === 'WESTMINSTER' ? (
                    <Image
                      source={require('../../assets/images/Beers/squre_westminster.png')}
                    />
                  ) : null}
                  {item.title === 'AUSTRALIAN SAISON' ? (
                    <Image
                      source={require('../../assets/images/Beers/squre_australian_saison.png')}
                    />
                  ) : null}
                  {item.title === 'SLAUGHTERHOUSE' ? (
                    <Image
                      source={require('../../assets/images/Beers/squre_slaughterhouse.png')}
                    />
                  ) : null}

                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
              </TouchableHighlight>

              <View style={{ ...hr }} />

              <View style={styles.beerContainer}>
                <View>
                  <Text style={{ ...Subtitle2, textTransform: 'capitalize' }}>
                    Style: {item.style}
                  </Text>
                  <Text style={{ ...Subtitle2 }}>
                    Released: {moment(item.releaseDate).format('MMM YY')}
                  </Text>
                </View>

                <View>
                  <Text style={{ ...Subtitle2 }}>ABV: {item.abv}%</Text>
                  <Text style={{ ...Subtitle2 }}>IBU: {item.ibu}</Text>
                </View>
              </View>

              <View style={{ ...hr }} />
            </View>
          );
        }}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={250}
      />
    </View>
  );
};

AllBeers.propTypes = {
  data: PropTypes.object.isRequired
};

export default AllBeers;
