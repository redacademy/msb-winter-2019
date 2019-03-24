import { StyleSheet } from 'react-native';
import {
  container,
  shadow2,
  h4,
  vl,
  contain,
  subtitle3,
  subtitle2,
  padding,
  center,
  row,
  hr,
  colors,
  mv0,
  dimensions,
  body1,
  jusBetweenRow,
  pv0,
  margin,
  w100,
  pb0,
  capitalize
} from '../../config/styles';

const styles = StyleSheet.create({
  rewards: { ...row },
  reward: { ...container, justifyContent: 'flex-start' },
  header: { ...h4 },
  stamps: { ...subtitle3 },
  rewardImg: { marginTop: margin.sm, height: 50, ...contain },
  rewardTitle: {
    ...subtitle2,
    paddingHorizontal: padding.xl,
    ...center,
    ...pb0,
    textAlign: 'center'
  },
  vl: {
    ...vl,
    marginHorizontal: 0,
    position: 'absolute',
    left: dimensions.fullWidth * 0.5,
    borderLeftWidth: 4
  }
});

export default styles;
