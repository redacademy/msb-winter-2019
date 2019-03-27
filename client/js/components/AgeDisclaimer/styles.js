import { StyleSheet } from 'react-native';
import {
  container,
  colors,
  body2,
  center,
  jusBtwn,
  bg0
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
    backgroundColor: colors.black
  },
  imgBgWrapper: { position: 'absolute' },
  imgBg: { ...center },
  content: { ...bg0, ...center, ...jusBtwn, width: '80%', height: '40%' },
  text: {
    ...body2,
    color: colors.white,
    textAlign: 'center'
  }
});

export default styles;
