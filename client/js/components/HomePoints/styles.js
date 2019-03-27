import { StyleSheet } from 'react-native';
import {
  center,
  h4,
  dimensions,
  contain,
  body1,
  pv0
} from '../../config/styles';

const styles = StyleSheet.create({
  singleGrid: {
    ...center,
    width: dimensions.fullWidth * 0.5
  },
  growlerImg: {
    ...contain,
    width: 140
  },
  points: {
    ...h4,
    marginTop: -5
  },
  toNextReward: {
    ...body1,
    ...pv0
  },
  toNextRewardPoints: {
    ...body1,
    ...pv0
  }
});

export default styles;
