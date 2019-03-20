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
  jusBetween
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
    backgroundColor: colors.black
  },
  imgBgWrapper: { position: 'absolute' },
  imgBg: { ...center },
  loginWrapper: {
    ...container,
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    marginVertical: margin.xl * 2
  },
  loginForm: {
    ...pv0
  },
  field: { color: colors.white },
  textInput: {
    width: dimensions.fullWidth * 0.75,
    marginVertical: margin.sm,
    paddingVertical: padding.sm,
    paddingHorizontal: padding.sm,
    borderColor: colors.white,
    borderWidth: 1,
    color: colors.neutralDark
  },
  signinWrapper: {
    ...center,
    marginTop: margin.sm
  },
  signinBtn: {
    color: colors.black,
    width: dimensions.fullWidth * 0.35
  },
  signupWrapper: { ...center },
  signup: { ...subtitle2, color: colors.brand, ...pv0 },
  signupLinkWrapper: { ...iteCenterRow },
  signupLink: {
    fontStyle: 'italic',
    textDecorationLine: 'underline'
  }
});

export default styles;
