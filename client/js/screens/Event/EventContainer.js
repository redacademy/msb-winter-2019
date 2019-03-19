import React, { Component } from 'react';
import { View } from 'react-native';

import Event from './Event';

class EventContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Event'
  };

  render() {
    return (
      <Query query={ALL_EVENTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>{error.message}</Text>;
          return <Event event={data.allEvents} />;
        }}
      </Query>
    );
  }
}

export default EventContainer;
