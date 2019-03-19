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
import { createMaterialTopTabNavigator } from 'react-navigation';

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
  signup: { ...body1, color: colors.brand, ...pv0 },
  signupLink: {
    ...body1,
    color: colors.brand,
    fontStyle: 'italic',
    textDecorationLine: 'underline'
  }
});

export default styles;
