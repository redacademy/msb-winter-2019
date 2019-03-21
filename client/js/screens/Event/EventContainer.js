import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { ALL_EVENTS_QUERY } from '../../apollo/queries';
import Event from './Event';
import CustomIcon from '../../components/CustomIcon';
import styles from './styles';
import Loader from '../../components/Loader';

class EventContainer extends Component {
  static navigationOptions = {
    title: 'Event',
    headerLeft: () => null,
    headerRight: () => null,
    headerStyle: {
      backgroundColor: '#000'
    }
  };

  render() {
    const { navigation } = this.props;
    const id = navigation
      ? navigation.getParam('eventId')
      : 'cjthea9960s3v0107srua01f9';

    return (
      <Query query={ALL_EVENTS_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          console.log(navigation);
          return (
            <Event event={data.allEvents[0]} navigation={{ navigation }} />
          );
        }}
      </Query>
    );
  }
}

export default EventContainer;
