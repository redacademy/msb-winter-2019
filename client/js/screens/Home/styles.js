import { Dimensions, StyleSheet } from 'react-native';
import {
  center,
  colors,
  container,
  fonts,
  h1,
  h2,
  row,
  vl
} from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  greet: {
    ...h1
  },

  /**
   * Growler-Card Grid
   **/
  rewardsGrid: {
    ...row,
    ...center,
    justifyContent: 'space-around',
    width: Dimensions.get('window').width,
    height: 190
  },
  singleGrid: {
    ...center,
    // height: 170,
    width: Dimensions.get('window').width * 0.5
  },
  growlerImg: {
    resizeMode: 'contain',
    height: 100
  },
  toNextReward: {
    color: colors.neutralDark,
    fontSize: fonts.xs,
    fontFamily: fonts.primary
  },
  vl: { ...vl, height: 150, borderLeftWidth: 4 },
  cardImg: { resizeMode: 'contain', height: 85 },

  /**
   * Beer Flatlist
   **/
  subheader: { ...h2, paddingTop: 3, paddingBottom: 2 },
  flatlistContainer: {
    width: Dimensions.get('window').width * 0.9
  },
  beerBanner: {
    // maxWidth: Dimensions.get('window').width *
    resizeMode: 'contain'
  }
});

export default styles;
