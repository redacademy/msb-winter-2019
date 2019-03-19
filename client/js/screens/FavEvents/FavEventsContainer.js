import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { USER_QUERY } from '../../apollo/queries';
import { Query } from 'react-apollo';
import { getLoggedInUser } from '../../config/models';
import FavEvents from './FavEvents';
import styles from './styles';

class FavEventsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { viewerId: null };
  }

  componentDidMount = async () => {
    const viewerId = await getLoggedInUser();
    this.setState({ viewerId });
  };

  static navigationOptions = {
    title: 'FavEvents'
  };

  render() {
    return (
      <Query query={USER_QUERY} variables={{ id: this.state.viewerId }}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>{error.message}</Text>;
          console.log('FAV EVENTS', data.allUsers[0].favouriteEvents);
          return <FavEvents user={data.allUsers[0].favouriteEvents} />;
        }}
      </Query>
    );
  }
}

export default FavEventsContainer;
