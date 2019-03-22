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
  w100
} from '../../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  hr: { ...hr, ...mv0 },
  flex: { flex: 1 },
  center: { ...center },
  rewardsWrapper: {
    justifyContent: 'space-around',
    maxHeight: 275,
    ...w100,
    ...shadow2,
    paddingTop: padding.xl,
    paddingBottom: padding.md
  },
  pointsWrapper: { ...row, ...center },
  currentProgress: {
    ...center,
    position: 'absolute',
    zIndex: 888,
    paddingBottom: padding.sm
  },
  progressPt: {
    height: 13,
    width: 4,
    backgroundColor: colors.black,
    marginVertical: margin.xxs
  },
  endPts: { height: 20, width: 6, backgroundColor: colors.neutralLight },
  progressBar: {
    transform: [{ scaleX: 1.0 }, { scaleY: 3 }],
    width: dimensions.fullWidth * 0.7
  },
  endPtsWrapper: {
    ...jusBetweenRow,
    width: dimensions.fullWidth * 0.77,
    paddingLeft: padding.xxs
  },
  endPtsText: { ...body1, ...pv0 },
  rewards: { ...row },
  rewardsTitle: { ...h4 },
  stamps: { ...subtitle3 },
  img: { height: 50, ...contain },
  reward: {
    ...subtitle2,
    paddingHorizontal: padding.xl,
    ...center
  },
  prevReward: { justifyContent: 'flex-start' },
  nextReward: { ...vl, marginHorizontal: 0, justifyContent: 'flex-start' },
  // historyWrapper: {}
  pointsHistory: {
    height: 83
  },
  beerInfoWrapper: { width: '66%' },
  beerInfo: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: margin.md
  },
  beerText: { ...subtitle2, textTransform: 'capitalize', ...pv0 },
  beerStamps: { ...subtitle3 },
  beerType: { ...body1, textTransform: 'capitalize', ...pv0 },
  row: { ...row }
});

export default styles;
