import React, { Component } from 'react';
import { Text } from 'react-native';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import { ALL_STORES_QUERY } from '../../apollo/queries';
import Stores from './Stores';

class StoresContainer extends Component {
  static navigationOptions = {
    title: 'Stores'
  };

  render() {
    return (
      <Query query={ALL_STORES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>{error.message}</Text>;
          return <Stores stores={data.allStores} />;
        }}
      </Query>
    );
  }
}

StoresContainer.propTypes = {};

export default StoresContainer;
