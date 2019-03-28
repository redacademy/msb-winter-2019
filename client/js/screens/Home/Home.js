import React from 'react';
import { FlatList, Image, View, Text, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import Subheader from '../../components/Subheader';
import HomePoints from '../../components/HomePoints';
import styles from './styles';

const Home = props => {
  const { rewards, user, navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.greet}>hi {user.name ? user.name : 'friend'}!</Text>

      <View style={styles.rewardsGrid}>
        <View style={styles.singleGrid}>
          <HomePoints rewards={rewards} user={user} />
        </View>

        <View style={styles.vl} />

        <TouchableHighlight
          underlayColor='transparent'
          style={styles.singleGrid}
          onPress={() => {
            navigation.navigate('Card');
          }}
        >
          <Image
            source={require('../../assets/images/Card/home_your_card.png')}
            style={styles.cardImg}
          />
        </TouchableHighlight>
      </View>

      <Subheader>Growler</Subheader>

      <FlatList
        data={props.beers}
        renderItem={({ item }) => {
          let beerType;
          if (item.title === 'FRUIT BOMB') {
            beerType = require('../../assets/images/Home/Beers/band3_fruit_bomb.png');
          } else if (item.title === 'NAKED FOX') {
            beerType = require('../../assets/images/Home/Beers/band6_naked_fox.png');
          } else if (item.title === 'GIMME SOME MO’') {
            beerType = require('../../assets/images/Home/Beers/band1_gimme_some_mo.png');
          } else if (item.title === 'MAIN STREET') {
            beerType = require('../../assets/images/Home/Beers/band7_main_street.png');
          } else if (item.title === 'WESTMINSTER') {
            beerType = require('../../assets/images/Home/Beers/band5_westminster.png');
          } else if (item.title === 'AUSTRALIAN') {
            beerType = require('../../assets/images/Home/Beers/band8_australian.png');
          } else if (item.title === 'SLAUGHTERHOUSE') {
            beerType = require('../../assets/images/Home/Beers/band4_slaughterhouse.png');
          } else if (item.title === 'BARKING MAD') {
            beerType = require('../../assets/images/Home/Beers/band2_barking_mad.png');
          }

          return (
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => {
                navigation.navigate('Beer', { beerId: item.id });
              }}
            >
              <Image source={beerType} style={styles.beerType} />
            </TouchableHighlight>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

Home.propTypes = {
  user: PropTypes.object.isRequired,
  beers: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default withNavigation(Home);
