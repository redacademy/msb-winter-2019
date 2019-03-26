import React, { Component } from "react";
import { Query } from "react-apollo";
import {
  USER_QUERY,
  ALL_BEERS_QUERY,
  ALL_REWARDS_QUERY
} from "../../apollo/queries";
import { getLoggedInUser } from "../../config/models";
import Home from "./Home";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";

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
    title: "Home"
  };

  render() {
    return (
      <Query query={USER_QUERY} variables={{ id: this.state.viewerId }}>
        {({ loading, error, data }) => (
          <Query query={ALL_REWARDS_QUERY}>
            {rewardsQuery => {
              const rewardsLoading = rewardsQuery.loading;
              const rewardsError = rewardsQuery.error;
              const rewardsData = rewardsQuery.data;

              return (
                <Query query={ALL_BEERS_QUERY}>
                  {beersQuery => {
                    const beersLoading = beersQuery.loading;
                    const beersError = beersQuery.error;
                    const beersData = beersQuery.data;

                    if (loading || beersLoading || rewardsLoading)
                      return <Loader />;
                    if (error || beersError || rewardsError)
                      return <ErrorMessage>Error</ErrorMessage>;
                    if (
                      !data.allUsers ||
                      !data.allUsers[0] ||
                      !beersData.allBeers ||
                      !rewardsData.allRewards
                    )
                      return <Loader />;
                    return (
                      <Home
                        user={data.allUsers[0]}
                        beers={beersData.allBeers}
                        rewards={rewardsData.allRewards}
                      />
                    );
                  }}
                </Query>
              );
            }}
          </Query>
        )}
      </Query>
    );
  }
}

export default HomeContainer;
