import React, { Component } from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { getLoggedInUser } from '../../config/models';
import { EVENT_QUERY, USER_QUERY } from '../../apollo/queries';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import Event from './Event';

class EventContainer extends Component {
  static navigationOptions = {
    title: 'Event',
    headerRight: null,
    headerStyle: {
      backgroundColor: '#000',
      height: 75
    }
  };

  constructor(props) {
    super(props);
    this.state = { viewerId: null };
  }

  componentDidMount = async () => {
    const viewerId = await getLoggedInUser();
    this.setState({ viewerId });
  };

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('eventId');

    return (
      <Query query={EVENT_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
          const event = data.allEvents && data.allEvents[0];
          if (!event) return <Loader />;
          return (
            <Query
              query={USER_QUERY}
              variables={{ id: this.state.viewerId }}
              fetchPolicy="network-only"
            >
              {({ loading, error, data }) => {
                if (loading) return <Loader />;
                if (error) return <ErrorMessage>Error</ErrorMessage>;
                const user = data.allUsers && data.allUsers[0];
                if (!user) return <Loader />;
                return (
                  <Event
                    event={event}
                    navigation={{ navigation }}
                    user={user}
                  />
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

EventContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default EventContainer;
