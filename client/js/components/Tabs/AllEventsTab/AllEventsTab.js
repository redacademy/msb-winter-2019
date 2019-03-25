import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Query } from 'react-apollo';
import { getLoggedInUser } from '../../../config/models';
import { ALL_EVENTS_QUERY, USER_QUERY } from '../../../apollo/queries';
import Loader from '../../Loader';
import CustomText from '../../CustomText/';
import CarouselEvents from '../../CarouselEvents';

class AllEventsTab extends Component {
  static navigationOptions = { title: 'All Events' };

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

    return (
      <Query query={ALL_EVENTS_QUERY} fetchPolicy="network-only">
        {({ loading, error, data }) => {
          if (loading || !this.state.viewerId) return <Loader />;
          if (error) return <CustomText>Error</CustomText>;
          const events = data.allEvents;
          return (
            <Query
              query={USER_QUERY}
              variables={{ id: this.state.viewerId }}
              fetchPolicy="network-only"
            >
              {({ loading, error, data }) => {
                if (loading) return <Loader />;
                if (error) return <Text>Error</Text>;
                const user = data.allUsers && data.allUsers[0];
                if (!user) return <Loader />;
                return (
                  <CarouselEvents
                    events={events}
                    user={user}
                    navigation={navigation}
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

export default withNavigation(AllEventsTab);
