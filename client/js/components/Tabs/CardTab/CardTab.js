import React, { Component } from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Barcode from 'react-native-barcode-builder';
import { graphql, compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import {
  SET_USER_POINTS,
  ADD_TO_USER_POINT_HISTORY,
  ALL_BEERS_QUERY,
  USER_QUERY
} from '../../../apollo/queries';
import styles from './styles';

class CardTab extends Component {
  getRandomBeer = async () => {
    const { allBeers } = await this.props.allBeersQuery;
    return allBeers[Math.floor(Math.random() * allBeers.length)];
  };

  addPoints = async () => {
    console.log('add points');
    const {
      navigation,
      setUserPoints,
      addToUserPointHistory,
      userQuery
    } = this.props;
    let user = navigation.getParam('user');
    console.log('here', user);
    if (!user) return;
    // user = await userQuery({
    //   variables: { id: user.id }
    // });
    // console.log('user', user, userQuery);
    const pointsToAdd = 2;
    const beer = await this.getRandomBeer();
    await addToUserPointHistory({
      variables: {
        userId: user.id,
        date: new Date(),
        stamps: pointsToAdd,
        beerId: beer.id
      }
    });
    await setUserPoints({
      variables: { id: user.id, points: user.points + pointsToAdd }
    });
    console.log('complete');
  };

  render() {
    console.log('just rendered cardtab');
    return (
      <ImageBackground
        source={require('../../../assets/images/Card/logo_bg.png')}
        style={styles.imgBg}
      >
        <View style={styles.container}>
          <View elevation={3} style={styles.cardWrapper}>
            <Image
              source={require('../../../assets/images/Card/your_card.png')}
              style={styles.card}
            />
            <TouchableOpacity onPress={() => this.addPoints()}>
              <Barcode value="Test Card" format="CODE128" height={40} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default compose(
  graphql(SET_USER_POINTS, {
    name: 'setUserPoints',
    options: () => ({
      refetchQueries: [
        {
          query: USER_QUERY
        }
      ]
    })
  }),
  graphql(ADD_TO_USER_POINT_HISTORY, { name: 'addToUserPointHistory' }),
  // graphql(USER_QUERY, { name: 'userQuery' }),
  graphql(ALL_BEERS_QUERY, { name: 'allBeersQuery' }),
  withNavigation
)(CardTab);
