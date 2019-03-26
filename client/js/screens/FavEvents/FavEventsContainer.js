import React, { Component } from "react";
import { View, Text } from "react-native";
import { USER_QUERY } from "../../apollo/queries";
import { Query } from "react-apollo";
import { getLoggedInUser } from "../../config/models";
import FavEvents from "./FavEvents";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";

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
    title: "FavEvents"
  };

  render() {
    return this.state.viewerId ? (
      <Query query={USER_QUERY} variables={{ id: this.state.viewerId }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
          return <FavEvents user={data.allUsers[0].favouriteEvents} />;
        }}
      </Query>
    ) : (
      <Loader />
    );
  }
}

export default FavEventsContainer;
