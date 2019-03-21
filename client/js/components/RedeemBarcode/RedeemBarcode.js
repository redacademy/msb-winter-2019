import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import CustomIcon from '../CustomIcon';
import Barcode from 'react-native-barcode-builder';
import { compose, graphql } from 'react-apollo';
import {
  USER_QUERY,
  ADD_TO_USER_REDEEMS,
  SET_USER_POINTS
} from '../../apollo/queries';

class RedeemBarcode extends Component {
  render() {
    const { navigation, setUserPoints, addToUserRedeems } = this.props;
    const user = navigation.getParam('user');
    const reward = navigation.getParam('reward');
    return (
      <View style={styles.container}>
        <CustomIcon
          source={require('../../assets/images/Icons/exit.png')}
          onPress={() => {
            navigation.navigate('Rewards');
          }}
        />
        <TouchableOpacity
          elevation={3}
          onPress={async () => {
            if (user.points < reward.points) return;
            await addToUserRedeems({
              variables: {
                date: new Date(),
                rewardId: reward.id,
                userId: user.id
              }
            });
            await setUserPoints({
              variables: { id: user.id, points: user.points - reward.points }
            });
            navigation.navigate('RedeemSuccess', { user, reward });
          }}
        >
          <Barcode value="Test Redeem" format="CODE128" height={40} />
        </TouchableOpacity>
      </View>
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
)(RedeemBarcode);
