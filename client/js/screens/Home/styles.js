import { StyleSheet } from 'react-native';
import {
  center,
  container,
  h2,
  row,
  vl,
  dimensions,
  contain,
  jusArnd,
  margin,
  pb0
} from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container, marginTop: margin.sm },
  greet: {
    ...h2,
    ...pb0
  },

  /**
   * Growler-Card Grid
   **/
  rewardsGrid: {
    ...row,
    ...center,
    ...jusArnd,
    width: dimensions.fullWidth * 0.97,
    height: 190
  },
  singleGrid: {
    ...center,
    width: dimensions.fullWidth * 0.5
  },

  vl: { ...vl, height: 157, borderLeftWidth: 4 },
  cardImg: { ...contain, width: 140 },

  /**
   * Beer Flatlist
   **/

  beerList: {
    height: '50%',
    ...center
  },

  beerType: {
    width: dimensions.fullWidth * 0.9,
    height: 78,
    ...contain
  }
});

export default styles;
