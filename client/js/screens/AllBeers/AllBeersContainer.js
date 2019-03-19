import React, { Component } from 'react';
import { Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import AllBeers from './AllBeers';
import Loader from '../../components/AuthLoading';

class AllBeersContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query
        query={gql`
          query allBeers($id: ID) {
            allBeers(filter: { id: $id }) {
              id
              title
              subtitle
              description
              style
              ibu
              abv
              releaseDate
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>{`Error! ${error.message}`}</Text>;
          console.log('ERROR:', error);

          return <AllBeers data={data} />;
        }}
      </Query>
    );
  }
}

export default AllBeersContainer;
