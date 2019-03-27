import { StyleSheet } from 'react-native';
import { container, subtitle2 } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container
  },
  content: { ...container, height: '50%' },
  text: {
    ...subtitle2
    // textAlign: 'center'
  }
});

export default styles;
