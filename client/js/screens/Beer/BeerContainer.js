import React, { Component } from 'react';
import { View } from 'react-native';
import { BEER_QUERY } from '../../apollo/queries';
import { Query } from 'react-apollo';
import Beer from './Beer';
import styles from './styles';

class BeerContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Beer'
  };

  render() {
    const { navigation } = this.props;
    const id = navigation
      ? navigation.getParam('beerid')
      : 'cjt7gjosi031i01936wp2rwvm';
    return (
      <Query query={BEER_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>{error.message}</Text>;
          console.log('BEER', data.allBeers[0]);
          return <Beer beers={data.allBeers[0]} />;
        }}
      </Query>
    );
  }
}

export default BeerContainer;
