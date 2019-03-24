import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { USER_QUERY } from '../../apollo/queries';
import { Query } from 'react-apollo';
import { getLoggedInUser } from '../../config/models';
import FavBeers from './FavBeers';
import styles from './styles';
import Loader from '../../components/Loader';

class FavBeersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { viewerId: null };
  }

  componentDidMount = async () => {
    const viewerId = await getLoggedInUser();
    this.setState({ viewerId });
  };

  static navigationOptions = {
    title: 'FavBeers'
  };

  render() {
    return this.state.viewerId ? (
      <Query query={USER_QUERY} variables={{ id: this.state.viewerId }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error</Text>;
          if (
            !data.allUsers ||
            !data.allUsers[0] ||
            !data.allUsers[0].favouriteBeers
          )
            return <Loader />;
          return (
            <FavBeers
              beers={data.allUsers[0].favouriteBeers}
              user={data.allUsers[0]}
            />
          );
        }}
      </Query>
    ) : (
      <Loader />
    );
  }
}

export default FavBeersContainer;
