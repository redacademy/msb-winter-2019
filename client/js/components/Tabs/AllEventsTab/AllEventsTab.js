import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Query } from 'react-apollo';

import { ALL_EVENTS_QUERY } from '../../../apollo/queries';
import Loader from '../../Loader';
import CustomText from '../../CustomText/';
import CarouselEvents from '../../CarouselEvents';

class AllEventsTab extends Component {
  static navigationOptions = { title: 'All Events' };

  render() {
    const { navigation } = this.props;

    return (
      <Query query={ALL_EVENTS_QUERY} fetchPolicy='network-only'>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <CustomText>Error</CustomText>;

          return (
            <CarouselEvents events={data.allEvents} navigation={navigation} />
          );
        }}
      </Query>
    );
  }
}

export default withNavigation(AllEventsTab);
