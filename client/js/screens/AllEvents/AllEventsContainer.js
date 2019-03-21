import React, { Component } from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import { ALL_EVENTS_QUERY } from '../../apollo/queries';
import Loader from '../../components/Loader';
import CustomText from '../../components/CustomText';
import AllEvents from './AllEvents';

class AllEventsContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'AllEvents'
  };

  render() {
    return (
      <Query query={ALL_EVENTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <CustomText>{error.message}</CustomText>;
          return (
            <AllEvents
              events={data.allEvents}
              navigation={this.props.navigation}
            />
          );
        }}
      </Query>
    );
  }
}

AllEventsContainer.propTypes = { navigation: PropTypes.object.isRequired };

export default AllEventsContainer;
