import React, { Component } from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import CustomIcon from '../CustomIcon';
import Barcode from 'react-native-barcode-builder';
import { Query, compose, graphql } from 'react-apollo';
import {
  ALL_REWARDS_QUERY,
  USER_QUERY,
  ADD_TO_USER_REDEEMS,
  SET_USER_POINTS
} from '../../apollo/queries';

class RedeemBarcode extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <CustomIcon
          source={require('../../assets/images/Icons/exit.png')}
          onPress={() => {
            navigation.navigate('History');
          }}
        />
        <TouchableOpacity elevation={3} onPress={() => {}}>
          <Barcode value="Test Card" format="CODE128" height={40} />
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
