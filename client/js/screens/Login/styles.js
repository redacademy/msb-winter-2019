import { StyleSheet } from 'react-native';
import { container, colors } from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  button: { width: 125, backgroundColor: colors.white, color: colors.black }
});

export default styles;
