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
} from '../../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  hr: { ...hr, ...mv0 },
  flex: { flex: 1 },
  center: { ...center },
  rewardsWrapper: {
    justifyContent: 'space-around',
    maxHeight: 255,
    ...w100,
    ...shadow2,
    paddingTop: padding.lg,
    paddingBottom: padding.sm
    // paddingVertical: padding.md
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
    marginTop: margin.xs,
    marginBottom: margin.xxs
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
  rewardsImg: { marginTop: margin.sm, height: 50, ...contain },
  img: { height: 50, ...contain },
  reward: {
    ...subtitle2,
    paddingHorizontal: padding.xl,
    ...center,
    ...pb0
  },
  prevReward: { justifyContent: 'flex-start' },
  nextReward: { ...vl, marginHorizontal: 0, justifyContent: 'flex-start' },
  // historyWrapper: {}
  pointsHistory: {
    height: 75,
    justifyContent: 'space-between'
  },
  beerInfoWrapper: { width: '60%' },
  beerInfo: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: padding.md
  },
  beerText: { ...subtitle2, ...capitalize, ...pv0 },
  beerRewardsWrapper: { width: '30%', justifyContent: 'space-between' },
  beerImg: {
    ...contain,
    height: 50,
    width: 50
  },
  beerStamps: { ...subtitle3 },
  beerType: { ...body1, ...capitalize, ...pv0 },
  row: { ...row }
});

export default styles;
