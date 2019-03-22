import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import { USER_QUERY } from '../../../apollo/queries';
import { Query } from 'react-apollo';
import { getLoggedInUser } from '../../../config/models';
import CarouselEvents from '../../CarouselEvents';
import CustomText from '../../CustomText';
import styles from './styles';

class FavEventsTab extends Component {
  static navigationOptions = {
    title: 'Your Events'
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
    return (
      <Query
        query={USER_QUERY}
        variables={{ id: this.state.viewerId }}
        fetchPolicy="network-only"
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error</Text>;
          const user = data.allUsers && data.allUsers[0];
          if (!user) return <ActivityIndicator />;
          return user.favouriteEvents && user.favouriteEvents.length > 0 ? (
            <CarouselEvents
              events={user.favouriteEvents}
              user={user}
              navigation={this.props.navigation}
            />
          ) : (
            <CustomText>No events</CustomText>
          );
        }}
      </Query>
    );
  }
}

export default withNavigation(FavEventsTab);
