import { StyleSheet } from 'react-native';
import { container, subtitle2, h100, center } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
    ...h100
  },
  content: { ...center, height: '90%', width: '70%' },
  text: {
    ...subtitle2,
    textAlign: 'center'
  }
});

export default styles;
