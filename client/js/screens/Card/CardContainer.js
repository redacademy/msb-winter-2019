import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { USER_QUERY, ALL_REWARDS_QUERY } from '../../apollo/queries';
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
    return (
      <Query query={USER_QUERY} variables={{ id: this.state.viewerId }}>
        {({ loading, error, data }) => (
          <Query
            query={ALL_REWARDS_QUERY}
            variables={{ id: this.state.viewerId }}
          >
            {rewardsQuery => {
              const rewardsLoading = rewardsQuery.loading;
              const rewardsError = rewardsQuery.error;
              const rewardsData = rewardsQuery.data;
              if (loading || rewardsLoading) return <Text>Loading</Text>;
              if (error || rewardsError) return <Text>Error</Text>;
              return (
                <Card
                  navigation={this.props.navigation}
                  user={data.allUsers[0]}
                  rewards={rewardsData.allRewards}
                />
              );
            }}
          </Query>
        )}
      </Query>
    );
  }
}

CardContainer.propTypes = { navigation: PropTypes.object.isRequired };

export default CardContainer;
