import { StyleSheet } from 'react-native';
import {
  container,
  center,
  margin,
  colors,
  contain,
  body2,
  padding,
  jusBtwn,
  bg0,
  button
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
    backgroundColor: colors.black
  },
  imgBgWrapper: { position: 'absolute' },
  imgBg: { ...center },
  onboardWrapper: {
    ...center,
    ...bg0,
    ...jusBtwn
  },
  logoWrapper: { ...center },
  imgLogo: { ...contain },
  welcomeWrapper: { ...center, marginTop: margin.md },
  welcome: { ...body2, color: colors.white },
  slide: { ...container },
  dot: { backgroundColor: colors.white },
  activeDot: { backgroundColor: colors.brand },
  btn: {
    backgroundColor: colors.brand,
    borderRadius: 5,
    marginHorizontal: margin.xl
  },
  btnText: {
    ...button
  },
  button: {
    paddingVertical: padding.xs * 1.25,
    paddingHorizontal: padding.lg
  }
});

export default styles;
