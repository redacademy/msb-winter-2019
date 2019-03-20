import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { ALL_EVENTS_QUERY } from '../../apollo/queries';
import Event from './Event';

class EventContainer extends Component {
  static navigationOptions = {
    title: 'Event',
    header: null
  };

  render() {
    const { navigation } = this.props;

    return (
      <Query query={ALL_EVENTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>{error.message}</Text>;

          return <Event event={data.allEvents} navigation={navigation} />;
        }}
      </Query>
    );
  }
}

export default EventContainer;
