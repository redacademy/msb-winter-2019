import { Dimensions, StyleSheet } from 'react-native';
import {
  center,
  colors,
  container,
  fonts,
  h1,
  h4,
  row,
  vl
} from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  greet: {
    ...h1,
    marginTop: 10,
    paddingBottom: 0
  },

  /**
   * Growler-Card Grid
   **/
  rewardsGrid: {
    ...row,
    ...center,
    justifyContent: 'space-around',
    width: Dimensions.get('window').width * 0.97,
    height: 190
  },
  singleGrid: {
    ...center,
    width: Dimensions.get('window').width * 0.5
  },
  growlerImg: {
    resizeMode: 'contain',
    width: 140
  },
  points: { ...h4, fontSize: 21, marginTop: -5 },
  toNextReward: {
    color: colors.neutralDark,
    fontSize: fonts.xs,
    fontFamily: fonts.primary
  },

  vl: { ...vl, height: 157, borderLeftWidth: 4 },
  cardImg: { resizeMode: 'contain', width: 140 },

  /**
   * Beer Flatlist
   **/

  beerList: {
    paddingBottom: 10,
    marginTop: 5,
    height: '50%'
  },
  flatlistContainer: {
    ...center,
    width: Dimensions.get('window').width,
    maxWidth: 350,
    maxHeight: 80
  },
  beerType: {
    height: 75
  }
});

export default styles;
