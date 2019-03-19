import { StyleSheet } from 'react-native';
import {
  container,
  colors,
  body1,
  contain,
  center,
  pv0,
  padding,
  dimensions,
  button,
  margin
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
  loginFormWrapper: {
    // justifyContent: 'space-around',
    // marginVertical: margin.sm
  },
  loginForm: {
    ...pv0
  },
  field: { color: colors.white },
  textInput: {
    width: dimensions.fullWidth * 0.8,
    marginVertical: margin.sm,
    paddingVertical: padding.sm,
    paddingHorizontal: padding.sm,
    borderColor: colors.white,
    borderWidth: 1,
    color: colors.neutralDark
  },
  signinBtn: { ...button },
  signupWrapper: { ...center },
  signup: { ...body1, color: colors.brand, ...pv0 },
  signupLink: {
    ...body1,
    color: colors.brand,
    fontStyle: 'italic',
    textDecorationLine: 'underline'
  }
});

export default styles;
