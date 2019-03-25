import { StyleSheet } from 'react-native';
import {
  container,
  h4,
  vl,
  contain,
  subtitle3,
  subtitle2,
  padding,
  center,
  row,
  dimensions,
  margin,
  pb0
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
