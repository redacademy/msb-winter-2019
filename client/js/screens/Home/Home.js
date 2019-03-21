import React from 'react';
import { FlatList, Image, View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import { Body1, center, h2, h3, h4, row, vl } from '../../config/styles';
import Subheader from '../../components/Subheader';

const Home = props => {
  console.log(props);

  return (
    <View style={styles.container}>
      <Text style={styles.greet}>
        hi {props.user.name ? props.user.name : friend}!
      </Text>

      <View style={styles.rewardsGrid}>
        <View style={styles.singleGrid}>
          <Image
            source={require('../../assets/images/Logos/growler_logo.png')}
            style={styles.growlerImg}
          />
          <Text style={{ ...h4 }}>{props.user.points}/20</Text>
          <Text style={styles.toNextReward}>
            {20 - props.user.points} to Next Reward
          </Text>
        </View>

        <View style={styles.vl} />

        <View style={styles.singleGrid}>
          <Image
            source={require('../../assets/images/Card/your_card.png')}
            style={styles.cardImg}
          />
          <Text style={{ ...h3, ...center }}>Your Card</Text>
        </View>
      </View>

      <Subheader style={styles.subheader}>Growler</Subheader>
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
            <View style={styles.flatlistContainer}>
              <TouchableHighlight
                underlayColor={'transparent'}
                onPress={() => {
                  props.navigation.navigate('Beer', { beerId: item.id });
                }}
              >
                <Image source={beerType} style={styles.beerBanner} />
              </TouchableHighlight>
            </View>
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
