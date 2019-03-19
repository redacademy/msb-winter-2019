import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STORE_QUERY } from '../../apollo/queries';
import { Query } from 'react-apollo';
import Contact from './Contact';
import styles from './styles';

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
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>{error.message}</Text>;
          return <Contact store={data.allStores[0]} />;
        }}
      </Query>
    );
  }
}

export default ContactContainer;
