import React, { Component } from "react";
import { View, Text } from "react-native";
import { Query } from "react-apollo";
import PropTypes from "prop-types";

import Stores from "./Stores";
import { ALL_STORES_QUERY } from "../../apollo/queries";
import Loader from "../../components/Loader";
import styles from "./styles";

class StoresContainer extends Component {
  render() {
    return (
      <Query query={ALL_STORES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error</Text>;
          return (
            <Stores
              stores={data.allStores}
              navigation={this.props.navigation}
            />
          );
        }}
      </Query>
    );
  }
}

StoresContainer.propTypes = {
  navigation: PropTypes.object
};

export default StoresContainer;
