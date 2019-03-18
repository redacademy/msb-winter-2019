import { StyleSheet } from 'react-native';
import { button, colors } from '../../config/styles';

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: colors.white,
    borderRadius: 5
  },
  button: {
    ...button,
    color: colors.black
  }
});

export default styles;
