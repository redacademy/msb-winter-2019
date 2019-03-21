import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import { Query } from 'react-apollo';
import { EVENT_QUERY } from '../../apollo/queries';
import Event from './Event';
import Loader from '../../components/Loader';

class EventContainer extends Component {
  static navigationOptions = {
    title: 'Event',
    headerRight: null,
    headerStyle: {
      backgroundColor: '#000',
      height: 75
    }
  };

  render() {
    const { navigation } = this.props;
    const id = navigation
      ? navigation.getParam('eventId')
      : 'cjti75gpr06j20182zuu2k0xg';

    return (
      <Query query={EVENT_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;

          return (
            <Event event={data.allEvents[0]} navigation={{ navigation }} />
          );
        }}
      </Query>
    );
  }
}

export default EventContainer;
