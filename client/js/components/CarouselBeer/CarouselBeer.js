import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';
import moment from 'moment';

import styles from './styles';
import { hr, center, Subtitle2 } from '../../config/styles';
import Availability from '../Availability';

// class CarouselBeer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { item: null };
//   }
//   render() {

// const { beers } = this.props;
// const { navigate } = this.props.navigation;

const CarouselBeer = props => {
  // console.log('$$$$$', this.state);
  return (
    <View>
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={props.beers.allBeers}
        loop={true}
        loopClonesPerSide={2}
        renderItem={({ item }) => {
          // this.setState({ item });
          return (
            <View style={styles.slide}>
              <TouchableHighlight
                underlayColor={'transparent'}
                onPress={() => {
                  navigate('Beer', { item });
                }}
              >
                <View style={{ ...center }}>
                  <View style={styles.beerImg}>
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
                    {item.title === 'AUSTRALIAN' ? (
                      <Image
                        source={require('../../assets/images/Beers/squre_australian_saison.png')}
                      />
                    ) : null}
                    {item.title === 'SLAUGHTERHOUSE' ? (
                      <Image
                        source={require('../../assets/images/Beers/squre_slaughterhouse.png')}
                      />
                    ) : null}
                    {item.title === 'BARKING MAD' ? (
                      <Image
                        source={require('../../assets/images/Beers/squre_barking_mad.png')}
                      />
                    ) : null}
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

      <View style={{ ...hr }} />

      {/* <View style={styles.beerContainer}>
          <View style={styles.infoSpacing}>
            <Text style={styles.beerData}>
              <Text style={styles.boldData}>Style: </Text>
              {this.state.item.style}
            </Text>
            <Text style={styles.beerData}>
              <Text style={styles.boldData}>Released: </Text>
              {moment(this.state.item.releaseDate).format('MMM YY')}
            </Text>
          </View>

          <View style={styles.infoSpacing}>
            <Text style={styles.beerData}>
              <Text style={styles.boldData}>ABV: </Text>
              {this.state.item.abv}%
            </Text>
            <Text style={styles.beerData}>
              <Text style={styles.boldData}>IBU: </Text>
              {this.state.item.ibu}
            </Text>
          </View> */}
      {/* </View> */}

      <View style={{ ...hr }} />

      <Availability />
    </View>
  );
};

CarouselBeer.propTypes = {
  beers: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default withNavigation(CarouselBeer);
