import { Dimensions, StyleSheet } from 'react-native';
import { button, center, colors, fonts, padding } from '../../config/styles';

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
  },
  blah: {
    ...center,
    margin: 'auto',
    width: Dimensions.get('window').width * 0.7
  }
});

export default styles;
