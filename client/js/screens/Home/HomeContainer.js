import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { USER_QUERY, ALL_BEERS_QUERY } from '../../apollo/queries';
import { getLoggedInUser } from '../../config/models';
import Home from './Home';
import Loader from '../../components/Loader';
import CustomText from '../../components/CustomText';

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
    title: 'Home'
  };

  render() {
    return (
      <Query query={USER_QUERY} variables={{ id: this.state.viewerId }}>
        {({ loading, error, data }) => (
          <Query query={ALL_BEERS_QUERY}>
            {beersQuery => {
              const beersLoading = beersQuery.loading;
              const beersError = beersQuery.error;
              const beersData = beersQuery.data;
              if (loading || beersLoading) return <Loader />;
              if (error || beersError) return <CustomText>Error</CustomText>;
              if (!data.allUsers || !data.allUsers[0] || !beersData.allBeers)
                return <Loader />;
              return (
                <Home user={data.allUsers[0]} beers={beersData.allBeers} />
              );
            }}
          </Query>
        )}
      </Query>
    );
  }
}

export default HomeContainer;
