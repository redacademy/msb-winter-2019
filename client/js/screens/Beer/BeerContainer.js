import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { BEER_QUERY, USER_QUERY } from '../../apollo/queries';
import { Query } from 'react-apollo';
import Beer from './Beer';
import Loader from '../../components/Loader';
import { getLoggedInUser } from '../../config/models';

class BeerContainer extends Component {
  static navigationOptions = {
    title: 'Beer',
    header: null
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
    const id = navigation
      ? navigation.getParam('beerId')
      : 'cjt7gjosi031i01936wp2rwvm';

    return (
      <Query
        query={USER_QUERY}
        variables={{ id: this.state.viewerId }}
        fetchPolicy="network-only"
      >
        {({ loading, error, data }) => {
          console.log('BeerContainer USER_QUERY');
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          const user = data.allUsers && data.allUsers[0];
          if (!user) return <ActivityIndicator />;
          return (
            <Query query={BEER_QUERY} variables={{ id }}>
              {({ loading, error, data }) => {
                console.log('BeerContainer BEER_QUERY');
                if (loading) return <Loader />;
                if (error) return <Text>{error.message}</Text>;
                console.log('Loaded beers...');
                return (
                  <View style={{ height: '100%' }}>
                    <Beer
                      beer={data.allBeers[0]}
                      user={user}
                      navigation={navigation}
                    />
                  </View>
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

BeerContainer.propTypes = {};

export default BeerContainer;
