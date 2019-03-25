import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { STORE_QUERY } from '../../apollo/queries';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import Contact from './Contact';

class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.storeId = 'cjtajvzap02nq01056qpmr5kb';
  }

  static navigationOptions = {
    title: 'Contact'
  };

  render() {
    return (
      <Query query={STORE_QUERY} variables={{ id: this.storeId }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorMessage>{error.message}</ErrorMessage>;

          return <Contact store={data.allStores[0]} />;
        }}
      </Query>
    );
  }
}

export default ContactContainer;
