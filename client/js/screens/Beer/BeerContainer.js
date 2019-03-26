import React, { Component } from "react";
import { View } from "react-native";
import { BEER_QUERY, USER_QUERY } from "../../apollo/queries";
import { Query } from "react-apollo";
import Beer from "./Beer";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { getLoggedInUser } from "../../config/models";
import PropTypes from "prop-types";

class BeerContainer extends Component {
  static navigationOptions = {
    title: "Beer",
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
      ? navigation.getParam("beerId")
      : "cjt7gjosi031i01936wp2rwvm";

    return (
      <Query
        query={USER_QUERY}
        variables={{ id: this.state.viewerId }}
        fetchPolicy="network-only"
      >
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
          const user = data.allUsers && data.allUsers[0];
          if (!user) return <Loader />;
          return (
            <Query query={BEER_QUERY} variables={{ id }}>
              {({ loading, error, data }) => {
                if (loading) return <Loader />;
                if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
                return (
                  <View style={{ height: "100%" }}>
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

BeerContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default BeerContainer;
