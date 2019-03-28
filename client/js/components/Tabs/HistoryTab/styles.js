import { StyleSheet } from 'react-native';
import {
  container,
  shadow2,
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
  jusBtwnRow,
  pv0,
  margin,
  w100,
  capitalize,
  jusBtwn
} from '../../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  flex: { flex: 1 },
  center: { ...center },
  rewardsWrapper: {
    ...container,
    justifyContent: 'space-around',
    ...w100,
    ...shadow2,
    paddingVertical: padding.sm
  },
  pointsWrapper: { ...row, ...center },
  currentProgress: {
    ...center,
    position: 'absolute',
    zIndex: 888,
    paddingBottom: padding.sm
  },
  progressIcon: { height: 30, ...contain },
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
    ...jusBtwnRow,
    width: dimensions.fullWidth * 0.77,
    paddingLeft: padding.xxs
  },
  endPtsText: { ...body1, ...pv0 },
  pointsHistory: {
    height: 75,
    ...jusBtwn
  },
  beerInfoWrapper: { width: '60%' },
  beerInfo: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: padding.md
  },
  beerText: { ...subtitle2, ...capitalize, ...pv0 },
  beerRewardsWrapper: { width: '30%', ...jusBtwn },
  beerImg: {
    ...contain,
    height: 50,
    width: 50
  },
  stampsImg: { ...contain, height: 30 },
  beerStamps: { ...subtitle3 },
  beerType: { ...body1, ...capitalize, ...pv0 },
  row: { ...row }
});

export default styles;
