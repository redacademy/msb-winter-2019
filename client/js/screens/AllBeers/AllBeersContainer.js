import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Query } from 'react-apollo';

import { ALL_BEERS_QUERY } from '../../apollo/queries';
import AllBeers from './AllBeers';

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
{
  /* <AllBeers data={data} navigation={navigation} item={navigation.getParam('item')}
/> */
}
AllBeersContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default AllBeersContainer;
