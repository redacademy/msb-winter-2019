import { StyleSheet } from 'react-native';
import { button, colors, fonts, padding } from '../../../config/styles';

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: colors.black,
    borderRadius: 3
  },
  button: {
    ...button,
    fontSize: fonts.xs,
    fontFamily: fonts.primarySemi,
    paddingHorizontal: padding.xs,
    paddingVertical: padding.xxs
  }
});

export default styles;
