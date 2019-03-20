import { StyleSheet } from 'react-native';
import {
  container,
  colors,
  center,
  pv0,
  padding,
  dimensions,
  margin,
  subtitle2,
  iteCenterRow,
  h4,
  h1
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
    backgroundColor: colors.black
  },
  imgBgWrapper: { position: 'absolute' },
  imgBg: { ...center },
  signupWrapper: {
    ...container,
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    marginVertical: margin.xl * 2
  },
  title: { ...h1, color: colors.white },
  // signupForm: { justifyContent: 'flex-start' },
  field: { alignItems: 'flex-start' },
  label: { ...h4, color: colors.white, alignItems: 'flex-start' },
  textInputWrapper: { ...iteCenterRow },
  textInput: {
    width: dimensions.fullWidth * 0.75,
    // marginVertical: margin.sm,
    paddingVertical: padding.xs,
    paddingHorizontal: padding.sm,
    borderColor: colors.white,
    borderWidth: 1,
    color: colors.neutralDark
  },
  datePicker: { borderWidth: 0, paddingHorizontal: 0, ...pv0 },
  signupBtnWrapper: { ...center },
  // signupBtn: { color: colors.black, width: dimensions.fullWidth * 0.35 },
  signup: {
    ...subtitle2,
    color: colors.brand,
    ...pv0
  },
  signupLink: {
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    marginTop: margin.xs
  }
});

export default styles;
