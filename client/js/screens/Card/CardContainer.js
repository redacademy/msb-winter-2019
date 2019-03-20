import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { USER_QUERY } from '../../apollo/queries';
import { Query } from 'react-apollo';
import { getLoggedInUser } from '../../config/models';
import Card from './Card';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { viewerId: null };
  }

  componentDidMount = async () => {
    const viewerId = await getLoggedInUser();
    this.setState({ viewerId });
  };

  static navigationOptions = {
    title: 'Card'
  };

  render() {
    console.log('card container');
    return (
      <Card navigation={this.props.navigation} />
      // <Query
      //   query={USER_QUERY}
      //   variables={{ id: this.state.viewerId }}
      //   fetchPolicy="network-only"
      // >
      //   {({ loading, error, data }) => {
      //     if (loading) return <Text>Loading</Text>;
      //     if (error) return <Text>Error</Text>;
      //     console.log('USER', data.allUsers[0]);

      //     return data.allUsers[0] ? (
      //       <Card navigation={this.props.navigation} user={data.allUsers[0]} />
      //     ) : (
      //       <Text>Loading</Text>
      //     );
      //   }}
      // </Query>
    );
  }
}

CardContainer.propTypes = { navigation: PropTypes.object.isRequired };

export default CardContainer;
