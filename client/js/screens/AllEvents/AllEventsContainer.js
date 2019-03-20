import React, { Component } from 'react';
import { Text } from 'react-native';
import { ALL_EVENTS_QUERY } from '../../apollo/queries';
import { Query } from 'react-apollo';
import AllEvents from './AllEvents';

class AllEventsContainer extends Component {
  static navigationOptions = {
    title: 'AllEvents'
  };

  render() {
    return (
      <Query query={ALL_EVENTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>{error.message}</Text>;

          return <AllEvents events={data.allEvents} />;
        }}
      </Query>
    );
  }
}

export default AllEventsContainer;
