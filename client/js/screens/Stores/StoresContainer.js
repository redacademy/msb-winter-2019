import React, { Component } from "react";
import { View, Text } from "react-native";
import { Query } from "react-apollo";

import Stores from "./Stores";
import { ALL_STORES_QUERY } from "../../Queries/queries";
import Loader from "../../components/Loader";
import styles from "./styles";

class StoresContainer extends Component {
  render() {
    return (
      <Query query={ALL_STORES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error</Text>;
          return <Stores stores={data.allStores} />;
        }}
      </Query>
    );
  }
}

export default StoresContainer;
