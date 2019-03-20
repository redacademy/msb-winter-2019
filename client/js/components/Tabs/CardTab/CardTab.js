import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from 'react-native';
import Barcode from 'react-native-barcode-builder';
import { graphql, compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import {
  SET_USER_POINTS,
  ADD_TO_USER_POINT_HISTORY,
  ALL_BEERS_QUERY,
  USER_QUERY
} from '../../../apollo/queries';
import { Query } from 'react-apollo';
import { getLoggedInUser } from '../../../config/models';
import styles from './styles';

class CardTab extends Component {
  constructor(props) {
    super(props);
    this.state = { viewerId: null };
  }

  componentDidMount = async () => {
    const viewerId = await getLoggedInUser();
    this.setState({ viewerId });
  };

  getRandomBeer = async () => {
    const { allBeers } = await this.props.allBeersQuery;
    return allBeers[Math.floor(Math.random() * allBeers.length)];
  };

  addPoints = async user => {
    console.log('add points');
    const {
      navigation,
      setUserPoints,
      addToUserPointHistory,
      userQuery
    } = this.props;
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
    navigation.navigate('StampsReceived');
  };

  render() {
    console.log('just rendered cardtab');
    return (
      <Query
        query={USER_QUERY}
        variables={{ id: this.state.viewerId }}
        fetchPolicy="network-only"
      >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>Error</Text>;

          return data.allUsers[0] ? (
            <ImageBackground
              source={require('../../../assets/images/Card/logo_bg.png')}
              style={styles.imgBg}
            >
              <View style={styles.container}>
                <TouchableOpacity
                  elevation={3}
                  style={styles.cardWrapper}
                  onPress={() => this.addPoints(data.allUsers[0])}
                >
                  <Image
                    source={require('../../../assets/images/Card/your_card.png')}
                    style={styles.card}
                  />
                  <Barcode value="Test Card" format="CODE128" height={40} />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          ) : (
            <Text>Loading</Text>
          );
        }}
      </Query>
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
