import { StyleSheet } from 'react-native';
import {
  colors,
  body2,
  container,
  center,
  bg0,
  h1,
  margin,
  padding,
  row,
  h100
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
    backgroundColor: colors.black,
    ...h100
  },
  imgBgWrapper: { position: 'absolute' },
  imgBg: { ...center },
  close: {
    flex: 1,
    marginTop: margin.xl,
    ...row,
    paddingHorizontal: padding.sm
  },
  flex: { flex: 1 },
  content: {
    ...bg0,
    ...center,
    width: '75%',
    height: '90%',
    paddingBottom: padding.xl * 2.5
  },
  flex: { flex: 1 },
  title: {
    ...h1,
    color: colors.white
  },
  img: { marginVertical: margin.xl * 1.5 },
  textContainer: {
    ...center
  },
  text: {
    ...body2,
    color: colors.white,
    textAlign: 'center'
  }
});

export default styles;
