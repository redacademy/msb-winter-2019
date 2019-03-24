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
  rewardsTitle: { ...h4 },
  stamps: { ...subtitle3 },
  rewardsImg: { marginTop: margin.sm, height: 50, ...contain },
  reward: {
    ...subtitle2,
    paddingHorizontal: padding.xl,
    ...center,
    ...pb0
  },
  prevReward: { ...container, justifyContent: 'flex-start' },
  nextReward: {
    ...container,
    ...vl,
    marginHorizontal: 0,
    justifyContent: 'flex-start'
  },
  vl: { ...vl, marginHorizontal: 0, position: 'absolute' }
});

export default styles;
