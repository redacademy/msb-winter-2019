import React from 'react';
import { View, StyleSheet } from 'react-native';
import { hr } from '../../config/styles';

export const renderSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    ...hr
  }
});
