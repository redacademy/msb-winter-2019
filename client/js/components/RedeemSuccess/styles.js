import { StyleSheet } from 'react-native';
import {
  container,
  colors,
  h1,
  h100,
  center,
  button,
  dimensions,
  contain
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
    backgroundColor: colors.brand,
    ...h100
  },
  content: {
    ...center,
    height: '90%'
  },
  title: {
    ...h1,
    color: colors.white
  },
  image: {
    height: dimensions.fullHeight * 0.13,
    ...contain
  },
  description: {
    ...button,
    color: colors.black
  }
});

export default styles;
