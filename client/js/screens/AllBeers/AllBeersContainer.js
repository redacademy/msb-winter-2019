import React, { Component } from 'react';
import { Text } from 'react-native';
import { Query } from 'react-apollo';

import { ALL_BEERS_QUERY } from '../../apollo/queries';
import AllBeers from './AllBeers';

class AllBeersContainer extends Component {
  static navigationOptions = {
    title: 'AllBeers'
  };

  render() {
    return (
      <Query query={ALL_BEERS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>{error.message}</Text>;
          return <AllBeers beers={data.allBeers} />;
        }}
      </Query>
    );
  }
}

export default AllBeersContainer;
