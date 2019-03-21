import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';
import {
  ALL_REWARDS_QUERY,
  USER_QUERY,
  ADD_TO_USER_REDEEMS,
  SET_USER_POINTS
} from '../../apollo/queries';
import { withNavigation } from 'react-navigation';
import { Query, compose, graphql } from 'react-apollo';
import styles from './styles';

class RedeemRewardButton extends Component {
  render() {
    const { reward, user, navigation } = this.props;
    return (
      <TouchableHighlight
        style={{ width: '50%' }}
        onPress={() => {
          if (user.points < reward.points) return;
          navigation.navigate('RedeemInfo');
          // if there's enough user.points
          //     subtract the number of points from the user
          //     call ADD_TO_USER_REDEEMS
        }}
      >
        <View>
          <Text>{reward.points}</Text>
          <Text>{reward.title}</Text>
        </View>
      </TouchableHighlight>
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
  graphql(ADD_TO_USER_REDEEMS, { name: 'addToUserRedeems' }),
  withNavigation
)(RedeemRewardButton);
