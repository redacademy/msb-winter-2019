import React from "react";
import { getLoggedInUser } from "../../config/models";
import Loader from "../../components/Loader";

class AuthLoading extends React.Component {
  componentDidMount = async () => {
    const userId = await getLoggedInUser();
    this.props.navigation.navigate(userId ? "App" : "Auth");
  };

  render() {
    return <Loader />;
  }
}

export default AuthLoading;
