import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { BEER_QUERY } from '../../apollo/queries';
import { Query } from 'react-apollo';
import Beer from './Beer';

class BeerContainer extends Component {
  static navigationOptions = {
    title: 'Beer',
    header: null
  };

  render() {
    const { navigation } = this.props;
    const id = navigation
      ? navigation.getParam('beerId')
      : 'cjt7gjosi031i01936wp2rwvm';

    return (
      <Query query={BEER_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>{error.message}</Text>;

          return (
            <View style={{ height: '100%' }}>
              <Beer beer={data.allBeers[0]} navigation={navigation} />
            </View>
          );
        }}
      </Query>
    );
  }
}

BeerContainer.propTypes = {};

export default BeerContainer;
