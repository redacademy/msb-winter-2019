import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ALL_BEERS_QUERY } from '../../apollo/queries';
import { Query } from 'react-apollo';
import AllBeers from './AllBeers';
import styles from './styles';

class AllBeersContainer extends Component {
  constructor(props) {
    super(props);
  }

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
