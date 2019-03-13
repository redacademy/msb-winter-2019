import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Home = props => {
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{ color: 'gold' }}>This is Home.</Text>
    </View>
  );
};

Home.propTypes = {};

export default Home;
