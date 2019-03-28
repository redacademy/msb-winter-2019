import React, { Component } from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Barcode from 'react-native-barcode-builder';
import { graphql, compose, Query } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  SET_USER_POINTS,
  ADD_TO_USER_POINT_HISTORY,
  ALL_BEERS_QUERY,
  USER_QUERY,
  HISTORY_QUERY
} from '../../../apollo/queries';
import { getLoggedInUser } from '../../../config/models';
import Loader from '../../Loader';
import ErrorMessage from '../../ErrorMessage';
import styles from './styles';

class CardTab extends Component {
  constructor(props) {
    super(props);
    this.state = { viewerId: null };
  }
  static navigationOptions = {
    title: 'Card'
  };

  componentDidMount = async () => {
    const viewerId = await getLoggedInUser();
    this.setState({ viewerId });
  };

  getRandomBeer = async () => {
    const { allBeers } = await this.props.allBeersQuery;
    return allBeers[Math.floor(Math.random() * allBeers.length)];
  };

  addPoints = async user => {
    const {
      navigation,
      setUserPoints,
      addToUserPointHistory,
      userQuery
    } = this.props;
    if (!user) return;
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
    navigation.navigate('StampsReceived', { stamps: pointsToAdd });
  };

  render() {
    return (
      <Query
        query={USER_QUERY}
        variables={{ id: this.state.viewerId }}
        fetchPolicy="network-only"
      >
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorMessage>Error</ErrorMessage>;
          const user = data.allUsers && data.allUsers[0];
          if (!user) return <Loader />;
          return (
            <ImageBackground
              source={require('../../../assets/images/Card/logo_bg.png')}
              style={styles.imgBg}
            >
              <View style={styles.container}>
                <TouchableOpacity
                  elevation={3}
                  style={styles.cardWrapper}
                  onPress={() => this.addPoints(user)}
                >
                  <Image
                    source={require('../../../assets/images/Card/your_card.png')}
                    style={styles.card}
                  />
                  <Barcode value="Test Card" format="CODE128" height={40} />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          );
        }}
      </Query>
    );
  }
}

CardTab.propTypes = {
  navigation: PropTypes.object.isRequired,
  setUserPoints: PropTypes.func.isRequired,
  addToUserPointHistory: PropTypes.func.isRequired
};

export default compose(
  graphql(SET_USER_POINTS, {
    name: 'setUserPoints',
    options: () => ({
      refetchQueries: [
        {
          query: USER_QUERY
        },
        {
          query: HISTORY_QUERY
        }
      ]
    })
  }),
  graphql(ADD_TO_USER_POINT_HISTORY, {
    name: 'addToUserPointHistory',
    options: () => ({
      refetchQueries: [
        {
          query: USER_QUERY
        },
        {
          query: HISTORY_QUERY
        }
      ]
    })
  }),
  graphql(ALL_BEERS_QUERY, { name: 'allBeersQuery' }),
  withNavigation
)(CardTab);
