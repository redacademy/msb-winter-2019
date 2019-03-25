import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { USER_QUERY } from '../../apollo/queries';
import { Query } from 'react-apollo';
import { getLoggedInUser } from '../../config/models';
import Loader from '../../components/Loader';
import Profile from './Profile';
import styles from './styles';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { viewerId: null };
  }

  componentDidMount = async () => {
    const viewerId = await getLoggedInUser();
    this.setState({ viewerId });
  };

  static navigationOptions = {
    title: 'Profile'
  };

  render() {
    return (
      <Query query={USER_QUERY} variables={{ id: this.state.viewerId }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          if (!data.allUsers || !data.allUsers[0]) return <Loader />;
          return (
            <Profile
              user={data.allUsers[0]}
              navigation={this.props.navigation}
            />
          );
        }}
      </Query>
    );
  }
}

export default ProfileContainer;
