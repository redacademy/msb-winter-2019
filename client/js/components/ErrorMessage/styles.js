import { StyleSheet } from 'react-native';
import { container, h2, padding } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
    paddingVertical: padding.xl,
    paddingHorizontal: padding.xl
  },
  text: {
    ...h2,
    color: 'red'
  }
});

export default styles;
