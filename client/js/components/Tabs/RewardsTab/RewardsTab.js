import React from 'react';
import { View, Text } from 'react-native';
import { ALL_REWARDS_QUERY } from '../../../apollo/queries';
import { Query } from 'react-apollo';
import CustomText from '../../CustomText';
import styles from './styles';

const RewardsTab = () => (
  <Query query={ALL_REWARDS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading</Text>;
      if (error) return <Text>Error</Text>;
      const allRewards = data.allRewards;
      return (
        <View style={styles.container}>
          <CustomText>This is Rewards.</CustomText>
        </View>
      );
    }}
  </Query>
);

export default RewardsTab;
