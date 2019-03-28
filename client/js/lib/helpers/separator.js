import React from 'react';
import { View, StyleSheet } from 'react-native';
import { hr, mv0, colors } from '../../config/styles';

export const Separator = () => {
  return <View style={styles.separator} />;
};

export const GreySeparator = () => {
  return <View style={styles.separatorGrey} />;
};

export const WhiteSeparator = () => {
  return <View style={styles.separatorWhite} />;
};

const styles = StyleSheet.create({
  separator: {
    ...hr
  },
  separatorGrey: {
    ...hr,
    ...mv0
  },
  separatorWhite: {
    ...hr,
    ...mv0,
    backgroundColor: colors.white
  }
});
