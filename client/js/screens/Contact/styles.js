import { StyleSheet } from 'react-native';
import { container, dimensions } from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container, justifyContent: 'flex-start' },
  img: { width: dimensions.fullWidth }
});

export default styles;
