import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Query } from "react-apollo";

import { ALL_REWARDS_QUERY, USER_QUERY } from "../../../apollo/queries";
import { getLoggedInUser } from "../../../config/models";
import RedeemRewardButton from "../../RedeemRewardButton";
import Loader from "../../Loader";
import ErrorMessage from "../../ErrorMessage";
import styles from "./styles";

class RewardsTab extends Component {
  constructor(props) {
    super(props);
    this.state = { viewerId: null };
  }

  static Navigation = { title: "Rewards" };

  componentDidMount = async () => {
    const viewerId = await getLoggedInUser();
    this.setState({ viewerId });
  };

  render() {
    return (
      <Query query={ALL_REWARDS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorMessage>Error</ErrorMessage>;
          const allRewards = data.allRewards;

          return (
            <Query
              query={USER_QUERY}
              variables={{ id: this.state.viewerId }}
              fetchPolicy="network-only"
            >
              {({ loading, error, data }) => {
                if (loading) return <Loader />;
                if (error) return <ErrorMessage>Error</ErrorMessage>;
                const user = data.allUsers && data.allUsers[0];
                if (!user) return <Loader />;

                return (
                  <ScrollView contentContainerStyle={styles.rewards}>
                    {allRewards.map(reward => {
                      return (
                        <RedeemRewardButton
                          key={reward.id}
                          reward={reward}
                          user={user}
                        />
                      );
                    })}
                    <View style={styles.vl} />
                  </ScrollView>
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

export default RewardsTab;
