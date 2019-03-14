import { StyleSheet } from 'react-native';

import {
  container,
  center,
  shadow1,
  contain,
  padding,
  h3,
  colors
} from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container, backgroundColor: 'transparent' },
  imgBg: {
    width: '100%',
    height: '100%'
  },
  scene: {
    flex: 1
  },
  labelStyle: { ...h3, color: colors.neutralLight },
  labelSelectedStyle: { ...h3, color: colors.black },
  cardWrapper: { ...center, ...shadow1, width: '85%', height: '50%' },
  card: { ...contain, height: '50%' }
});

export default styles;
