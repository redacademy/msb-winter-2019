import { StyleSheet } from 'react-native';
import { container, colors, center, h1, button } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container
  },
  content: {
    ...center,
    height: '50%'
  },
  title: {
    ...h1
  },
  text: {
    ...button,
    color: colors.black
  }
});

export default styles;
