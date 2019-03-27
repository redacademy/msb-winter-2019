import { Dimensions, StyleSheet } from 'react-native';
import { center, container, h1, row, vl } from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container, marginTop: 10 },
  greet: {
    ...h1,
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

  vl: { ...vl, height: 157, borderLeftWidth: 4 },
  cardImg: { resizeMode: 'contain', width: 140 },

  /**
   * Beer Flatlist
   **/

  beerList: {
    marginBottom: 5,
    marginTop: 5,
    height: '50%'
  },
  flatlistContainer: {
    ...center,
    width: Dimensions.get('window').width
  },
  beerType: {
    maxWidth: 350,
    resizeMode: 'contain'
  }
});

export default styles;
