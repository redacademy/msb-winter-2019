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
import { hr, center } from '../../config/styles';

class CarouselBeer extends Component {
  constructor(props) {
    super(props);
    this.updateIndex = this.updateIndex.bind(this);
    this.state = {
      currentIndex: 0
    };
  }

  changeIndex = currentIndex => {
    this.setState({ currentIndex });
    console.log(currentIndex);
  };

  updateIndex = () => {
    if (this._carousel) {
      Store.updateIndex(this._carousel.currentIndex);
    }
  };

  render() {
    const { beers, navigation } = this.props;

    return (
      <View style={styles.carouselContainer}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={beers}
          loop={true}
          loopClonesPerSide={2}
          // enableSnap={true}
          firstItem={0}
          onSnapToItem={index => this.setState({ currentIndex: index })}
          renderItem={({ item, index }) => {
            let beerLogo;
            if (item.title === 'FRUIT BOMB') {
              beerLogo = require('../../assets/images/Beers/squre_fruit_bomb.png');
            } else if (item.title === 'NAKED FOX') {
              beerLogo = require('../../assets/images/Beers/squre_naked_fox.png');
            } else if (item.title === 'GIMME SOME MO’') {
              beerLogo = require('../../assets/images/Beers/squre_gimme_some_mo.png');
            } else if (item.title === 'MAIN STREET') {
              beerLogo = require('../../assets/images/Beers/squre_main_street.png');
            } else if (item.title === 'WESTMINSTER') {
              beerLogo = require('../../assets/images/Beers/squre_westminster.png');
            } else if (item.title === 'AUSTRALIAN') {
              beerLogo = require('../../assets/images/Beers/squre_australian_saison.png');
            } else if (item.title === 'SLAUGHTERHOUSE') {
              beerLogo = require('../../assets/images/Beers/squre_slaughterhouse.png');
            } else if (item.title === 'BARKING MAD') {
              beerLogo = require('../../assets/images/Beers/squre_barking_mad.png');
            }

            return (
              <View style={styles.slide}>
                <TouchableHighlight
                  underlayColor={'transparent'}
                  onPress={() => {
                    navigation.navigate('Beer', { item });
                  }}
                >
                  <View style={{ ...center }}>
                    <View style={styles.imgWrapper}>
                      <Image source={beerLogo} style={styles.img} />
                    </View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                  </View>
                </TouchableHighlight>
                {this._carousel.currentIndex === index ? (
                  <>
                    <View style={{ ...hr, maxWidth: 250 }} />

                    <View style={styles.dataWrapper}>
                      <View style={styles.infoSpacing}>
                        <Text style={styles.beerData}>
                          <Text style={styles.boldData}>Style: </Text>
                          {item.style}
                        </Text>
                        <Text style={styles.beerData}>
                          <Text style={styles.boldData}>Released: </Text>
                          {moment(item.releaseDate).format('MMM YY')}
                        </Text>
                      </View>

                      <View style={styles.infoSpacing}>
                        <Text style={styles.beerData}>
                          <Text style={styles.boldData}>ABV: </Text>
                          {item.abv}%
                        </Text>
                        <Text style={styles.beerData}>
                          <Text style={styles.boldData}>IBU: </Text>
                          {item.ibu}
                        </Text>
                      </View>
                    </View>

                    <View style={{ ...hr, maxWidth: 250 }} />
                  </>
                ) : null}
              </View>
            );
          }}
          sliderHeight={Dimensions.get('window').height}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={250}
        />
      </View>
    );
  }
}

CarouselBeer.propTypes = {
  beers: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default withNavigation(CarouselBeer);
