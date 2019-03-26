import React from "react";
import { getLoggedInUser } from "../../config/models";
import Loader from "../../components/Loader";

import PropTypes from "prop-types";

class AuthLoading extends React.Component {
  componentDidMount = async () => {
    const userId = await getLoggedInUser();
    this.props.navigation.navigate(userId ? "App" : "Auth");
  };

  render() {
    return <Loader />;
  }
}

AuthLoading.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default AuthLoading;
