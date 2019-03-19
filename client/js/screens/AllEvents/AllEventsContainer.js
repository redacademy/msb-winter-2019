import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ALL_EVENTS_QUERY } from '../../apollo/queries';
import { Query } from 'react-apollo';
import AllEvents from './AllEvents';
import styles from './styles';

class AllEventsContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'AllEvents'
  };

  render() {
    return (
      <Query query={ALL_EVENTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>{error.message}</Text>;
          console.log('EVENTS', data.allEvents);
          return <AllEvents events={data.allEvents} />;
        }}
      </Query>
    );
  }
}

export default AllEventsContainer;
