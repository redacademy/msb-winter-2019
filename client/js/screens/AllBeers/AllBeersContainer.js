import React, { Component } from "react";
import { Query } from "react-apollo";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";

import { ALL_BEERS_QUERY } from "../../apollo/queries";
import AllBeers from "./AllBeers";

class AllBeersContainer extends Component {
  static navigationOptions = {
    title: "AllBeers"
  };

  render() {
    return (
      <Query query={ALL_BEERS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
          return <AllBeers beers={data.allBeers} />;
        }}
      </Query>
    );
  }
}

export default AllBeersContainer;
