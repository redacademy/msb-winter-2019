import React, { Component } from 'react';
import { Platform, TouchableOpacity, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { USER_QUERY, ALL_BEERS_QUERY } from '../../apollo/queries';
import { Query } from 'react-apollo';
import { getLoggedInUser } from '../../config/models';
import Home from './Home';
import styles from './styles';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { viewerId: null };
  }

  componentDidMount = async () => {
    const viewerId = await getLoggedInUser();
    this.setState({ viewerId });
  };

  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <Query query={USER_QUERY} variables={{ id: this.state.viewerId }}>
        {({ loading, error, data }) => (
          <Query
            query={ALL_BEERS_QUERY}
            variables={{ id: this.state.viewerId }}
          >
            {beersQuery => {
              const beersLoading = beersQuery.loading;
              const beersError = beersQuery.error;
              const beersData = beersQuery.data;
              if (loading || beersLoading) return <Text>Loading</Text>;
              if (error || beersError) return <Text>Error</Text>;
              console.log('HOME', data.allUsers[0], beersData.allBeers);
              return (
                <Home user={data.allUsers[0]} beers={beersData.allBeers} />
              );
            }}
          </Query>
        )}
      </Query>
    );
  }
}

export default HomeContainer;
