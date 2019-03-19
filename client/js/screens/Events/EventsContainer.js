import React, { Component } from 'react';
import { View } from 'react-native';

import Events from './Events';
import styles from './styles';

class EventsContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Events'
  };

  render() {
    return (
      <Query query={ALL_EVENTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>{error.message}</Text>;
          return <Events event={data.allEvents} />;
        }}
      </Query>
    );
  }
}

export default EventsContainer;
