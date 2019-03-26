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
  h1,
  h100
} from '../../config/styles';

const styles = StyleSheet.create({
  scrollView: {
    ...h100,
    backgroundColor: colors.black
  },
  container: {
    ...container,
    backgroundColor: colors.black
  },
  imgBgWrapper: { position: 'absolute' },
  imgBg: { ...center },
  signupView: {
    height: dimensions.fullHeight
  },
  signupWrapper: {
    ...container,
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    marginVertical: margin.xl * 2
  },
  title: { ...h1, color: colors.white },
  field: { alignItems: 'flex-start' },
  label: { ...h4, color: colors.white, alignItems: 'flex-start' },
  textInputWrapper: { ...iteCenterRow },
  textInput: {
    width: dimensions.fullWidth * 0.75,
    paddingVertical: padding.xs,
    paddingHorizontal: padding.sm,
    borderColor: colors.white,
    borderWidth: 1,
    color: colors.neutralDark
  },
  datePicker: {
    width: dimensions.fullWidth * 0.75,
    borderColor: colors.white,
    borderWidth: 0.5,
    paddingHorizontal: 0
  },
  signupBtnWrapper: { ...center },
  signup: {
    ...subtitle2,
    color: colors.brand,
    ...pv0
  },
  signupLink: {
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    marginTop: margin.xs
  },
  errorMessage: {
    ...subtitle2,
    color: colors.brand
  }
});

export default styles;
