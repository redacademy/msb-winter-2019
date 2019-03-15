import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Home = props => {
  return (
    <View style={styles.container}>
      <Text>This is Home.</Text>
    </View>
  );
};

Home.propTypes = {};

export default Home;
