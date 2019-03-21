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
  row
} from '../../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  rewardsWrapper: {
    justifyContent: 'space-around',
    maxHeight: 275,
    width: '100%',
    ...shadow2
  },
  rewards: { ...row },
  rewardsTitle: { ...h4 },
  stamps: { ...subtitle3 },
  img: { height: 50, ...contain },
  reward: {
    ...subtitle2,
    paddingHorizontal: padding.lg,
    ...center
  },
  nextReward: { ...vl }
  // historyWrapper: {}
});

export default styles;
