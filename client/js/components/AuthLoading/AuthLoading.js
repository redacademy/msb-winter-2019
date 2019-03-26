import React from "react";
import { getLoggedInUser } from "../../config/models";
import { ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

class AuthLoading extends React.Component {
  componentDidMount = async () => {
    const userId = await getLoggedInUser();
    this.props.navigation.navigate(userId ? "App" : "Auth");
  };

  render() {
    return <ActivityIndicator />;
  }
}

AuthLoading.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default AuthLoading;
