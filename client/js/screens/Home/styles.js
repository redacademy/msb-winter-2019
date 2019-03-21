import { StyleSheet } from 'react-native';
import { container, h1 } from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  greet: {
    ...h1
  }
});

export default styles;
