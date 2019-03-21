import React from 'react';
import { FlatList, Image, View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import { center, h2, h3, row, vl } from '../../config/styles';
import Subheader from '../../components/Subheader';
// import { TouchableHighlight } from 'react-native-gesture-handler';

const Home = props => {
  console.log(props);

  return (
    <View style={styles.container}>
      <Text style={styles.greet}>hi {props.user.name}!</Text>

      <View style={{ ...row, maxHeight: 200 }}>
        <View style={{ ...center }}>
          <Image
            source={require('../../assets/images/Logos/growler_logo.png')}
            style={{ resizeMode: 'contain' }}
          />
        </View>
        <View style={{ ...vl }} />
        <View style={{ ...center }}>
          <Image
            source={require('../../assets/images/Card/your_card.png')}
            style={{ resizeMode: 'contain' }}
          />
          <Text style={{ ...h3, ...center }}>Your Card</Text>
        </View>
      </View>

      <Subheader style={{ ...h2, paddingTop: 3, paddingBottom: 0 }}>
        Growler
      </Subheader>
      <FlatList
        data={props.beers}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableHighlight
                underlayColor={'transparent'}
                onPress={() => {
                  props.navigation.navigate('Beer', { beerId: item.id });
                }}
              >
                <Image
                  source={require('../../assets/images/Home/Beers/band1_gimme_some_mo.png')}
                />
              </TouchableHighlight>
              <Image
                source={require('../../assets/images/Home/Beers/band2_barking_mad.png')}
              />
              <Image
                source={require('../../assets/images/Home/Beers/band3_fruit_bomb.png')}
              />
              <Image
                source={require('../../assets/images/Home/Beers/band4_slaughterhouse.png')}
              />
              <Image
                source={require('../../assets/images/Home/Beers/band6_naked_fox.png')}
              />
              <Image
                source={require('../../assets/images/Home/Beers/band7_main_street.png')}
              />
              <Image
                source={require('../../assets/images/Home/Beers/band5_westminster.png')}
              />
              <Image
                source={require('../../assets/images/Home/Beers/band8_australian.png')}
              />
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
