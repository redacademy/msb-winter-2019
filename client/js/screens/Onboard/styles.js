import { StyleSheet } from 'react-native';
import {
  container,
  center,
  margin,
  colors,
  contain
} from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container, backgroundColor: colors.black },
  imgBgWrapper: { position: 'absolute' },
  imgBg: { ...center },
  onboardWrapper: {
    ...container,
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    marginVertical: margin.xl * 2
  },
  imgLogo: { ...contain }
});

export default styles;
