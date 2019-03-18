import { StyleSheet } from 'react-native';
import { button, colors } from '../../../config/styles';

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: colors.brand,
    borderRadius: 5
  },
  button: {
    ...button
  }
});

export default styles;
