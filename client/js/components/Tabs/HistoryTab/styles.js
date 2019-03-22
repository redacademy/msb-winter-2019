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
  subtitle1,
  mv0
} from '../../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  hr: { ...hr, ...mv0 },
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
  nextReward: { ...vl },
  // historyWrapper: {}
  pointsHistory: {
    height: 83
  },
  beerInfoWrapper: { width: '66%' },
  beerInfo: { alignItems: 'center' },
  beerText: { ...subtitle1, textTransform: 'capitalize' },
  beerStamps: { ...subtitle3 },
  grey: { color: colors.neutralDark },
  row: { ...row }
});

export default styles;
