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
  mv0,
  dimensions,
  margin
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
  pointsWrapper: { ...row, ...center },
  endPts: { height: 23, width: 6.5, backgroundColor: colors.neutralLight },
  progressBar: {
    transform: [{ scaleX: 1.0 }, { scaleY: 3 }],
    width: dimensions.fullWidth * 0.8
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
