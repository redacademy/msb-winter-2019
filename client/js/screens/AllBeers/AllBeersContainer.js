import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import AllBeers from './AllBeers';
import Loader from '../../components/Loader';

class AllBeersContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'AllBeers'
  };

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    return (
      <Query
        variables={{ id: id }}
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

          return (
            <AllBeers
              data={data}
              navigation={navigation}
              item={navigation.getParam('item')}
            />
          );
        }}
      </Query>
    );
  }
}

AllBeersContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default AllBeersContainer;
