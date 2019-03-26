import React, { Component } from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import { ALL_STORES_QUERY } from '../../apollo/queries';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import Stores from './Stores';

class StoresContainer extends Component {
  static navigationOptions = {
    title: 'Stores'
  };

  render() {
    return (
      <Query query={ALL_STORES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorMessage>{error.message}</ErrorMessage>;

          return <Stores stores={data.allStores} />;
        }}
      </Query>
    );
  }
}

StoresContainer.propTypes = {};

export default StoresContainer;
