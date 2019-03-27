import { StyleSheet } from 'react-native';
import {
  h1,
  colors,
  container,
  button,
  center,
  h100
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
    ...h100,
    backgroundColor: colors.brand
  },
  content: { ...center, height: '90%' },
  title: {
    ...h1,
    color: colors.white
  },
  text: { ...button, color: colors.black }
});

export default styles;
